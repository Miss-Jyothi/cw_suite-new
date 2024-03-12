import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';

import { GridTileImage } from 'components/grid/tile';
import Footer from 'components/layout/footer';
import { Gallery } from 'components/product/gallery';
import { ProductDescription } from 'components/product/product-description';
import { HIDDEN_PRODUCT_TAG } from 'lib/constants';
// import { getProduct, getProductRecommendations } from 'lib/shopify';
import { getProduct } from 'lib/cwcommerce';
import { Image } from 'lib/shopify/types';
import Link from 'next/link';
let domain = process.env.BACKEND_LIBRARY;
// export const runtime = 'edge';
export const runtime = 'nodejs';

export async function generateMetadata({
  params
}: {
  params: { handle: string };
}): Promise<Metadata> {
  const product = await getProduct(params.handle);

  if (!product) return notFound();

  const { url, width, height, altText: alt } = product.featuredImage || {};
  const indexable = !product.tags.includes(HIDDEN_PRODUCT_TAG);

  return {
    title: product.seo.title || product.title,
    description: product.seo.description || product.description,
    robots: {
      index: indexable,
      follow: indexable,
      googleBot: {
        index: indexable,
        follow: indexable
      }
    },
    openGraph: url
      ? {
          images: [
            {
              url,
              width,
              height,
              alt
            }
          ]
        }
      : null
  };
}

// export default async function ProductPage({ params }: { params: { handle: string } }) {
//   const product = await getProduct(params.handle);

//   if (!product) return notFound();

//   const productJsonLd = {
//     '@context': 'https://schema.org',
//     '@type': 'Product',
//     name: product.title,
//     description: product.description,
//     image: product.featuredImage.url,
//     offers: {
//       '@type': 'AggregateOffer',
//       availability: product.availableForSale
//         ? 'https://schema.org/InStock'
//         : 'https://schema.org/OutOfStock',
//       priceCurrency: product.priceRange.minVariantPrice.currencyCode,
//       highPrice: product.priceRange.maxVariantPrice.amount,
//       lowPrice: product.priceRange.minVariantPrice.amount
//     }
//   };

//   return (
//     <>
//       <script
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{
//           __html: JSON.stringify(productJsonLd)
//         }}
//       />
//       <div className="mx-auto max-w-screen-2xl px-4">
//         <div className="flex flex-col rounded-lg border border-neutral-200 bg-white p-8 dark:border-neutral-800 dark:bg-black md:p-12 lg:flex-row lg:gap-8">
//           <div className="h-full w-full basis-full lg:basis-4/6">
//             <Gallery
//               images={product.images.map((image: Image) => ({
//                 src: image.url,
//                 altText: image.altText
//               }))}
//             />
//           </div>

//           <div className="basis-full lg:basis-2/6">
//             <ProductDescription product={product} />
//           </div>
//         </div>
//         <Suspense>
//           <RelatedProducts id={product.id} />
//         </Suspense>
//       </div>
//       <Suspense>
//         <Footer />
//       </Suspense>
//     </>
//   );
// }
export default async function ProductPage({ params }: { params: { handle: string } }) {
  const product = await getProduct(params.handle);
  // console.log("product id for showing data===========>",params.handle)
  // console.log("product------------->",product)
  if (!product) return notFound();

  let proddetails: any;
  if (domain === 'Shopify') {
    proddetails = {
      priceCurrency: product.priceRange.minVariantPrice.currencyCode,
      highPrice: product.priceRange.maxVariantPrice.amount,
      lowPrice: product.priceRange.minVariantPrice.amount
    };
  } else {
    proddetails = {
      priceCurrency: product.priceRange.maxVariantPrice.currencyCode,
      highPrice: product.priceRange.maxVariantPrice.amount
    };
  }
  const productJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.title,
    description: product.description,
    image: product.featuredImage.url,
    offers: {
      '@type': 'AggregateOffer',
      availability: product.availableForSale
        ? 'https://schema.org/InStock'
        : 'https://schema.org/OutOfStock',
      proddetails
    }
  };

  // return (
  //   <>
  //     <script
  //       type="application/ld+json"
  //       dangerouslySetInnerHTML={{
  //         __html: JSON.stringify(productJsonLd)
  //       }}
  //     />
  //     <div className="bg-light min-h-screen">
  //       <article className="bg-light rounded-lg">
  //         <div className="border-border-200 flex flex-col border-b border-opacity-70 md:flex-row">
  //           <div className="p-6 pt-10 md:w-1/2 lg:p-14 xl:p-16">
  //             <div className="mb-8 flex items-center justify-between lg:mb-10">
  //               {/* {backBtn && <BackButton />}
  //           {discount && ( */}
  //               <div className="text-light rounded-full bg-yellow-500 px-3 text-xs font-semibold leading-6 ltr:ml-auto rtl:mr-auto">
  //                 13%
  //               </div>
  //               {/* )} */}
  //             </div>

  //             <div className="product-gallery h-full">
  //               <Gallery
  //                 images={product.images.map((image: Image) => ({
  //                   src: image.url,
  //                   altText: image.altText
  //                 }))}
  //               />
  //               {/* <ThumbsCarousel
  //             gallery={previewImages}
  //             video={video}
  //             hideThumbs={
  //               previewImages.length && video?.length
  //                 ? false
  //                 : previewImages.length <= 1
  //             }
  //           /> */}
  //             </div>
  //           </div>
  //           <div className="flex flex-col items-start p-5 pt-10 md:w-1/2 lg:p-14 xl:p-16">
  //             <ProductDescription product={product} />
  //           </div>
  //         </div>
  //       </article>
  //     </div>
  //     {/* <div className="mx-auto max-w-screen-2xl px-4">
  //       <div className="flex flex-col rounded-lg border border-neutral-200 bg-white p-8 dark:border-neutral-800 dark:bg-black md:p-12 lg:flex-row">
  //         <div className="h-full w-full basis-full lg:basis-4/6">
  //           <Gallery
  //             images={product.images.map((image: Image) => ({
  //               src: image.url,
  //               altText: image.altText
  //             }))}
  //           />
  //         </div>

  //         <div className="basis-full lg:basis-2/6">
  //           <ProductDescription product={product} />
  //         </div>
  //       </div>
  //       <Suspense>
  //         <RelatedProducts id={product.id} />
  //       </Suspense>
  //     </div> */}
  //     <Suspense>
  //       <Footer />
  //     </Suspense>
  //   </>
  // );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productJsonLd)
        }}
      />
      <div
        className="font"
        style={{
          position: 'relative',
          flex: '1 1 0%',
          alignSelf: 'stretch',
          boxSizing: 'inherit',
          display: 'block'
        }}
      >
        <div style={{ backgroundColor: '#f2f2f2', margin: '25px 0' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr',
              gap: '15px',
              maxWidth: '80%',
              margin: '0 auto',
              boxSizing: 'inherit'
            }}
          >
            <div
              className="font"
              style={{
                display: 'grid',
                gap: '10px',
                gridTemplateColumns: 'repeat(1, 1fr)',
                boxSizing: 'inherit'
              }}
            >
              <div className="grid-container" style={{ marginTop: '15px' }}>
                <div
                  style={{
                    height: '100%',
                    backgroundColor: '#fff',
                    border: '1px solid #e8e8e8',
                    borderRadius: '10px',
                    boxSizing: 'inherit',
                    display: 'block'
                  }}
                >
                  <div
                    style={{
                      height: '100%',
                      cursor: 'grab',
                      marginLeft: 'auto',
                      marginRight: 'auto',
                      position: 'relative',
                      overflow: 'hidden',
                      listStyle: 'none',
                      padding: '0',
                      zIndex: '1',
                      boxSizing: 'inherit',
                      direction: 'ltr',
                      unicodeBidi: 'isolate',
                      display: 'block'
                    }}
                  >
                    <div
                      style={{
                        height: '448px',
                        transform: 'translate3d(0px, 0px, 0px)',
                        alignItems: 'flex-start',
                        transitionProperty: 'transform, height',
                        position: 'relative',
                        width: '100%',
                        display: 'flex',
                        boxSizing: 'content-box'
                      }}
                    >
                      <div
                        style={{
                          borderRadius: '10px',
                          height: '100%',
                          maxWidth: '100%',
                          width: '597px'
                        }}
                      >
                        <Gallery
                          images={product.images.map((image: Image) => ({
                            src: image.url,
                            altText: image.altText
                          }))}
                        />
                        <div
                          style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            height: '100%',
                            boxSizing: 'inherit'
                          }}
                        >
                          <div
                            style={{
                              display: 'flex',
                              flexDirection: 'column',
                              margin: '10px',
                              boxSizing: 'inherit'
                            }}
                          >
                            <div
                              style={{
                                cursor: 'pointer',
                                position: 'relative',
                                marginBottom: '7px',
                                width: '40px',
                                height: '40px',
                                boxSizing: 'inherit',
                                display: 'block'
                              }}
                            >
                              <img
                                src="https://organicfoodsandcafe.com/_nuxt/img/newProduct.ee42881.svg"
                                alt="newProductImage"
                                style={{
                                  height: '40px',
                                  width: '40px',
                                  boxSizing: 'inherit',
                                  overflowClipMargin: 'content-box',
                                  overflow: 'clip'
                                }}
                              />
                            </div>
                          </div>

                          <div
                            style={{
                              display: 'flex',
                              flexDirection: 'column',
                              justifyContent: 'space-between',
                              margin: '10px',
                              gap: '7px',
                              boxSizing: 'inherit'
                            }}
                          >
                            <div
                              style={{
                                cursor: 'pointer',
                                zIndex: '99998',
                                boxSizing: 'inherit',
                                display: 'block'
                              }}
                            >
                              <img
                                src="https://organicfoodsandcafe.com/_nuxt/img/newProduct.ee42881.svg"
                                alt="newProductImage1"
                                style={{
                                  height: '40px',
                                  width: '40px',
                                  boxSizing: 'inherit',
                                  overflowClipMargin: 'content-box',
                                  overflow: 'clip'
                                }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="font"
                  style={{
                    padding: '20px 25px',
                    minHeight: '450px',
                    display: 'flex',
                    flexDirection: 'column',
                    height: 'fit-content',
                    backgroundColor: '#fff',
                    border: '1px solid #e8e8e8',
                    borderRadius: '10px',
                    boxSizing: 'inherit'
                  }}
                >
                  <ProductDescription product={product} />
                </div>
              </div>

              <div
                className="font"
                style={{
                  padding: '20px',
                  backgroundColor: '#fff',
                  border: '1px solid #e8e8e8',
                  borderRadius: '10px',
                  boxSizing: 'inherit',
                  display: 'block',
                  marginBottom: '10px'
                }}
              >
                <div style={{ boxSizing: 'inherit', display: 'block' }}>
                  <div style={{ boxSizing: 'inherit', display: 'block' }}>
                    <ul
                      style={{
                        margin: '0',
                        display: 'grid',
                        gridTemplateColumns: 'repeat(3,max-content)',
                        gap: '50px',
                        listStyle: 'none',
                        padding: '0',
                        whiteSpace: 'nowrap',
                        borderBottom: '2px solid #29a637',
                        boxSizing: 'inherit',
                        marginBlockStart: '1em',
                        marginBlockEnd: '1em',
                        marginInlineStart: '0px',
                        marginInlineEnd: '0px',
                        paddingInlineStart: '40px'
                      }}
                    >
                      <li
                        style={{
                          paddingBottom: '5px',
                          fontSize: '14px',
                          boxSizing: 'inherit',
                          display: 'list-item',
                          textAlign: 'match-parent'
                        }}
                      >
                        <a href="#">Description</a>
                      </li>
                    </ul>
                  </div>
                  <div className="font" style={{ boxSizing: 'inherit', display: 'block' }}>
                    <p
                      style={{
                        marginTop: '15px',
                        margin: '0',
                        fontSize: '14px',
                        boxSizing: 'inherit',
                        display: 'block',
                        marginBlockStart: '1em',
                        marginBlockEnd: '1em',
                        marginInlineStart: '0px',
                        marginInlineEnd: '0px'
                      }}
                    >
                      {product.description} known for their innovative designs and advanced bristle
                      technology, provide effective oral care, promoting cleaner teeth and healthier
                      gums. Trusted by millions, Colgate remains a leading choice for a brighter,
                      confident smile.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Suspense>
        <Footer />
      </Suspense>
    </>
  );
}

async function RelatedProducts({ id }: { id: string }) {
  // const relatedProducts = await getProductRecommendations(id);
  const relatedProducts: any[] = [];
  if (!relatedProducts.length) return null;

  return (
    <div className="py-8">
      <h2 className="mb-4 text-2xl font-bold">Related Products</h2>
      <ul className="flex w-full gap-4 overflow-x-auto pt-1">
        {relatedProducts.map((product) => (
          <li
            key={product.handle}
            className="aspect-square w-full flex-none min-[475px]:w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5"
          >
            <Link className="relative h-full w-full" href={`/product/${product.handle}`}>
              <GridTileImage
                alt={product.title}
                label={{
                  title: product.title,
                  amount: product.priceRange.maxVariantPrice.amount,
                  currencyCode: product.priceRange.maxVariantPrice.currencyCode
                }}
                src={product.featuredImage?.url}
                fill
                sizes="(min-width: 1024px) 20vw, (min-width: 768px) 25vw, (min-width: 640px) 33vw, (min-width: 475px) 50vw, 100vw"
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
