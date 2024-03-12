// import { GridTileImage } from 'components/grid/tile';
// import { getCollectionProducts } from 'lib/shopify';
// import type { Product } from 'lib/shopify/types';
// import Link from 'next/link';

// function ThreeItemGridItem({
//   item,
//   size,
//   priority
// }: {
//   item: Product;
//   size: 'full' | 'half';
//   priority?: boolean;
// }) {
//   return (
//     <div
//       className={size === 'full' ? 'md:col-span-4 md:row-span-2' : 'md:col-span-2 md:row-span-1'}
//     >
//       <Link className="relative block aspect-square h-full w-full" href={`/product/${item.handle}`}>
//         <GridTileImage
//           src={item.featuredImage.url}
//           fill
//           sizes={
//             size === 'full' ? '(min-width: 768px) 66vw, 100vw' : '(min-width: 768px) 33vw, 100vw'
//           }
//           priority={priority}
//           alt={item.title}
//           label={{
//             position: size === 'full' ? 'center' : 'bottom',
//             title: item.title as string,
//             amount: item.priceRange.maxVariantPrice.amount,
//             currencyCode: item.priceRange.maxVariantPrice.currencyCode
//           }}
//         />
//       </Link>
//     </div>
//   );
// }

// export async function ThreeItemGrid() {
//   // Collections that start with `hidden-*` are hidden from the search page.
//   const homepageItems = await getCollectionProducts({
//     collection: 'hidden-homepage-featured-items'
//   });

//   if (!homepageItems[0] || !homepageItems[1] || !homepageItems[2]) return null;

//   const [firstProduct, secondProduct, thirdProduct] = homepageItems;

//   return (
//     <section className="mx-auto grid max-w-screen-2xl gap-4 px-4 pb-4 md:grid-cols-6 md:grid-rows-2">
//       <ThreeItemGridItem size="full" item={firstProduct} priority={true} />
//       <ThreeItemGridItem size="half" item={secondProduct} priority={true} />
//       <ThreeItemGridItem size="half" item={thirdProduct} />
//     </section>
//   );
// }

'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Typesense from 'typesense';
import { createdCart, createdQtyState } from '../cart/CartContext';
import FavImg from '../offers/fav image.png';
import NewSymbol from '../offers/newProduct image.png';
interface Product {
  document: {
    id: string;
    handle: string;
    title: string;
    description: string;
    featuredImage: {
      url: string;
    };
    priceRange: {
      maxVariantPrice: { amount: number; currencyCode: string };
      minVariantPrice: { amount: number; currencyCode: string };
    };
  };
}
type LineItem = {
  id: string;
  quantity: number;
  cost: {
    totalAmount: { amount: string; currencyCode: string };
  };
  merchandise: {
    id: string;
    title: string;
    selectedOptions: { name: string; value: string }[];
    product: {
      id: string;
      handle: string;
      availableForSale: boolean;
      title: string;
      description: string;
      descriptionHtml: string;
      options: { id: string; name: string; values: string[] }[];
      priceRange: {
        maxVariantPrice: { amount: string; currencyCode: string };
        minVariantPrice: { amount: string; currencyCode: string };
      };
      variants: {
        edges: {
          node: {
            id: string;
            title: string;
            availableForSale: boolean;
            selectedOptions: { name: string; value: string }[];
            price: { amount: string; currencyCode: string };
          };
        }[];
      };
      featuredImage: { url: string; altText: string; width: number; height: number };
      images: {
        edges: { node: { url: string; altText: string; width: number; height: number } }[];
      };
      seo: { title: string; description: string };
      tags: string[];
      updatedAt: string;
    };
  };
};
export const ThreeItemGrid: React.FC = () => {
  const [quantity, setQuantity] = useState<number>(0);
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const perPage = 5;

  const host: any = process.env.NEXT_PUBLIC_TYPESENSE_HOST;
  const port: any = process.env.NEXT_PUBLIC_TYPESENSE_PORT;
  const protocol: any = process.env.NEXT_PUBLIC_TYPESENSE_PROTOCOL;
  const apiKey: any = process.env.NEXT_PUBLIC_TYPESENSE_API_KEY;

  const { isOpening, setIsOpening } = createdCart();
  const { qty, setQty } = createdQtyState();
  useEffect(() => {
    const client = new Typesense.Client({
      nodes: [
        {
          host: host,
          port: port,
          protocol: protocol
        }
      ],
      apiKey: apiKey
    });

    async function fetchProducts() {
      try {
        const response: any = await client.collections('Products').documents().search({
          q: '*',
          per_page: perPage,
          page: currentPage,
          preset: 'query'
        });
        console.log('response=========================', response);
        setProducts((prevProducts) => [...prevProducts, ...response.hits]);
      } catch (error: any) {
        setError(error.message || 'Error fetching products');
      }
    }

    fetchProducts();
  }, [currentPage]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  function onclick(product: Product) {
    console.log('user clicked');
    const storage = JSON.parse(localStorage.getItem('finalCart')!);
    const lineToUpdate = storage.lines.find((line: LineItem) => line.id === product.document.id);
    if (lineToUpdate!) {
      const preQty = lineToUpdate.quantity;
      lineToUpdate.quantity = preQty + 1;
      console.log(lineToUpdate.quantity);
      //
      const previousItemsTotal = storage.cost.totalAmount.amount;
      console.log(previousItemsTotal, 'previousItemsTotal');
      const productPrice = lineToUpdate.merchandise.product.priceRange.minVariantPrice.amount;
      // total to display on item line
      lineToUpdate.cost.totalAmount.amount = productPrice + lineToUpdate.cost.totalAmount.amount;
      // total amount for items based on qty
      const final = parseFloat(productPrice) + parseFloat(previousItemsTotal);
      storage.cost.totalAmount.amount = final;
      const previousQty = storage.totalQuantity;
      storage.totalQuantity = previousQty + 1;
      localStorage.setItem('finalCart', JSON.stringify(storage));
      setQty(true);
    } else {
      const newProduct: any = {
        id: product.document.id,
        quantity: 1,
        cost: {
          totalAmount: {
            amount: product.document.priceRange.maxVariantPrice.amount,
            currencyCode: product.document.priceRange.maxVariantPrice.currencyCode
          }
        },
        merchandise: {
          id: product.document.id,
          title: '',
          selectedOptions: [
            {
              name: '',
              value: ''
            }
          ],
          product: {
            id: product.document.id,
            handle: product.document.id,
            availableForSale: true,
            title: product.document.description,
            description: product.document.description,
            descriptionHtml: '',
            options: [
              {
                id: '',
                name: '',
                values: ['']
              }
            ],
            priceRange: {
              maxVariantPrice: {
                amount: product.document.priceRange.maxVariantPrice.amount,
                currencyCode: product.document.priceRange.maxVariantPrice.currencyCode
              },
              minVariantPrice: {
                amount: product.document.priceRange.minVariantPrice.amount,
                currencyCode: product.document.priceRange.minVariantPrice.currencyCode
              }
            },
            variants: {
              edges: [
                {
                  node: {
                    id: '',
                    title: '',
                    availableForSale: true,
                    selectedOptions: [
                      {
                        name: '',
                        value: ''
                      }
                    ],
                    price: { amount: '0.0', currencyCode: 'USD' }
                  }
                }
              ]
            },
            featuredImage: {
              url: product.document.featuredImage.url,
              altText: '',
              width: 10,
              height: 10
            },
            images: {
              edges: [
                {
                  node: {
                    url: '',
                    altText: '',
                    width: 10,
                    height: 10
                  }
                }
              ]
            },
            seo: {
              title: '',
              description: ''
            },
            tags: ['', ''],
            updatedAt: ''
          }
        }
      };
      storage.lines.push(newProduct);
      const preTotalQty = storage.totalQuantity;
      storage.totalQuantity = preTotalQty + 1;
      // setQuantity(prev => {
      //   const updatedQuantity = prev + 1;
      //   console.log('count ', updatedQuantity);
      //   localStorage.setItem('qty', updatedQuantity.toString());
      //   return updatedQuantity;
      // });
      console.log(storage);
      localStorage.setItem('finalCart', JSON.stringify(storage));
      //localStorage.setItem('qty',quantity.toString())
      setIsOpening(true);
    }
  }

  return (
    <div
      style={{
        maxWidth: '85%',
        margin: '0 auto',
        padding: '20px',
        borderRadius: '10px',
        marginTop: '1%',
        marginBottom: '1%'
      }}
    >
      <div style={{ color: '#29a637', boxSizing: 'inherit', fontFamily: 'Arial' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '2fr 1fr',
            alignItems: 'center',
            boxSizing: 'inherit'
          }}
        >
          <h2
            style={{
              fontFamily: 'Arial',
              fontSize: '25px',
              margin: '25px, 0',
              boxSizing: 'inherit',
              marginBlockStart: '0em',
              marginBlockEnd: '0.83em',
              marginInlineStart: '0px',
              marginInlineEnd: '0px',
              fontWeight: 'bold'
            }}
          >
            RECOMMENDED PRODUCTS
          </h2>
          <div style={{ display: 'flex', justifyContent: 'flex-end', boxSizing: 'inherit' }}>
            <Link
              href="#"
              style={{
                backgroundColor: '#29a637',
                color: '#fff',
                cursor: 'pointer',
                padding: '12px 20px',
                fontFamily: 'Arial',
                borderRadius: '25px',
                border: 'none',
                fontSize: '12px',
                textDecoration: 'none',
                boxSizing: 'inherit'
              }}
            >
              {' '}
              View all
            </Link>
          </div>
        </div>
        <div style={{ boxSizing: 'inherit' }}>
          <div
            style={{
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              display: 'grid',
              gridGap: '15px',
              boxSizing: 'inherit'
            }}
          >
            {products.map((product, id) => (
              <div
                key={id}
                style={{
                  display: 'flex',
                  height: '100%',
                  flexDirection: 'column',
                  backgroundColor: '#fff',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  textAlign: 'center',
                  padding: '15px 5px',
                  border: '1px solid #e8e8e8',
                  borderRadius: '10px',
                  boxSizing: 'inherit'
                }}
              >
                <Link
                  href={`/product/${product.document.handle}`}
                  style={{
                    width: '100%',
                    textDecoration: 'none',
                    fontSize: '14px',
                    boxSizing: 'inherit',
                    textAlign: 'center',
                    fontFamily: 'Arial'
                  }}
                >
                  <div style={{ width: '100%', color: '#757575', cursor: 'pointer' }}>
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        position: 'relative',
                        height: '0px',
                        bottom: '10px',
                        boxSizing: 'inherit'
                      }}
                    >
                      <div style={{ boxSizing: 'inherit' }}>
                        <div style={{ boxSizing: 'inherit' }}>
                          <Image
                            src={NewSymbol}
                            alt="NewSymbolImage"
                            style={{
                              width: '40px',
                              boxSizing: 'inherit',
                              overflowClipMargin: 'content-box',
                              overflow: 'clip'
                            }}
                          />
                        </div>
                      </div>
                      <div style={{ boxSizing: 'inherit' }}>
                        <Image
                          src={FavImg}
                          alt="FavImg"
                          style={{
                            width: '37px',
                            boxSizing: 'inherit',
                            overflowClipMargin: 'content-box',
                            overflow: 'clip'
                          }}
                        />
                      </div>
                    </div>
                    <div
                      style={{
                        height: '40%',
                        width: '200px',
                        margin: '0 auto',
                        boxSizing: 'inherit',
                        textAlign: 'center'
                      }}
                    >
                      <img
                        src={product.document.featuredImage.url}
                        alt={product.document.title}
                        style={{
                          height: '200px',
                          width: '200px',
                          boxSizing: 'inherit',
                          objectFit: 'cover',
                          color: '-webkit-link',
                          cursor: 'pointer'
                        }}
                      />
                    </div>
                    <div
                      style={{
                        width: '80%',
                        margin: '10px auto',
                        justifyContent: 'center',
                        boxSizing: 'inherit'
                      }}
                    >
                      <div
                        style={{
                          display: '-webkit-box',
                          WebkitBoxOrient: 'vertical',
                          WebkitLineClamp: '2',
                          overflow: 'hidden',
                          boxSizing: 'inherit'
                        }}
                      >
                        <h3
                          style={{
                            color: '#000',
                            fontSize: '14px',
                            fontFamily: 'Arial',
                            margin: '0',
                            boxSizing: 'inherit',
                            marginBlockStart: '0.5em',
                            marginBlockEnd: '0em',
                            marginInlineStart: '0px',
                            marginInlineEnd: '0px',
                            fontWeight: 'bold'
                          }}
                        >
                          {product.document.title}
                        </h3>
                      </div>
                      <div style={{ boxSizing: 'inherit' }}>
                        <p
                          style={{
                            fontSize: '12px',
                            margin: '0px',
                            boxSizing: 'inherit',
                            marginBlockStart: '0.5em',
                            marginBlockEnd: '0.5em',
                            marginInlineStart: '0px',
                            marginInlineEnd: '0px'
                          }}
                        >
                          <span
                            style={{
                              fontSize: '12px',
                              fontFamily: 'Arial',
                              boxSizing: 'inherit',
                              display: 'block'
                            }}
                          >
                            AED 6.40/unit
                          </span>
                        </p>
                      </div>
                      <p
                        style={{
                          fontSize: '12px',
                          margin: '0px',
                          boxSizing: 'inherit',
                          marginBlockStart: '0.5em',
                          marginBlockEnd: '0.5em',
                          marginInlineStart: '0px',
                          marginInlineEnd: '0px'
                        }}
                      >
                        50g per pack
                      </p>
                      <p
                        style={{
                          fontSize: '12px',
                          margin: '0px',
                          boxSizing: 'inherit',
                          marginBlockStart: '0.5em',
                          marginBlockEnd: '0.5em',
                          marginInlineStart: '0px',
                          marginInlineEnd: '0px'
                        }}
                      >
                        Origin:
                        <span
                          style={{ fontSize: '12px', fontFamily: 'Arial', boxSizing: 'inherit' }}
                        >
                          BELGIUM
                        </span>
                      </p>
                    </div>
                  </div>
                </Link>
                <div style={{ boxSizing: 'inherit' }}>
                  <div style={{ boxSizing: 'inherit' }}>
                    <div style={{ boxSizing: 'inherit' }}>
                      <button
                        onClick={() => onclick(product)}
                        style={{
                          width: '150px',
                          height: '30px',
                          cursor: 'pointer',
                          padding: '12px 20px',
                          backgroundColor: '#29a637',
                          fontFamily: 'Arial',
                          color: '#fff',
                          borderRadius: '25px',
                          border: 'none',
                          fontSize: '12px',
                          boxSizing: 'inherit',
                          appearance: 'auto',
                          textRendering: 'auto',
                          letterSpacing: 'normal',
                          wordSpacing: 'normal',
                          lineHeight: 'normal',
                          textTransform: 'none',
                          textIndent: '0px',
                          textShadow: 'none',
                          display: 'inline-block',
                          textAlign: 'center',
                          margin: '0em',
                          paddingBlock: '1px',
                          paddingInline: '6px'
                        }}
                      >
                        <label
                          style={{
                            fontSize: '12px',
                            pointerEvents: 'none',
                            boxSizing: 'inherit',
                            cursor: 'default'
                          }}
                        >
                          Add to cart
                        </label>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// 'use client'
// import Link from 'next/link';
// import React, { useEffect, useState } from 'react';
// import Typesense from 'typesense';

// interface Product {
//   document: {
//     handle: string;
//     title: string;
//     featuredImage: {
//       url: string;
//     };
//   };
// }

// export const ThreeItemGrid: React.FC = () => {
//   const [products, setProducts] = useState<Product[]>([]);
//   const [error, setError] = useState<string | null>(null);
//   const [currentPage, setCurrentPage] = useState<number>(1);
//   const perPage = 100;

//   useEffect(() => {
//     const client = new Typesense.Client({
//       nodes: [
//         {
//           host: 'typesense.exceloid.in',
//           port: 8108,
//           protocol: 'https'
//         }
//       ],
//       apiKey: 'exceloid-test'
//     });

//     async function fetchProducts() {
//       try {
//         const response :any = await client.collections('Products').documents().search({
//           q: '*',
//           per_page: perPage,
//           page: currentPage,
//           preset :'query'
//         });
//         setProducts((prevProducts) => [...prevProducts, ...response.hits]);
//       } catch (error : any) {
//         setError(error.message || 'Error fetching products');
//       }
//     }

//     fetchProducts();
//   }, [currentPage]);

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   return (
//     <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop:"2%" }}>
//       <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', paddingLeft: '8%' }}>
//         {products.map((product, id) => (
//           <Link
//             href={`/product/${product.document.handle}`}
//             key={id}
//             style={{
//               border: '1px solid #ccc',
//               padding: '10px',
//               borderRadius: '5px',
//               width: '300px',
//               boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)'
//             }}
//           >
//             <img
//               src={product.document.featuredImage.url}
//               alt={product.document.title}
//               style={{
//                 width: '100%',
//                 maxHeight: '300px',
//                 objectFit: 'contain',
//                 marginBottom: '10px',
//                 borderRadius: '5px',
//                 height: '80%'
//               }}
//             />
//             <h3 style={{ margin: '0' }}>{product.document.title}</h3>
//           </Link>
//         ))}
//       </div>
//       <button onClick={() => setCurrentPage((prevPage) => prevPage + 1)}>Load More</button>
//     </div>
//   );
// };
