'use client';

import { PlusIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import LoadingDots from 'components/loading-dots';
import { Product } from 'lib/shopify/types';
import { useState } from 'react';
import { createdCart, createdQtyState } from './CartContext';

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

function SubmitButton({ product }: { product: Product }) {
  const { isOpening, setIsOpening } = createdCart();
  const { qty, setQty } = createdQtyState();
  const [quantity, setQuantity] = useState<number>(0);
  const [documentState, setDocumentState] = useState([
    { document: {}, highlight: {}, highlights: [] }
  ]);
  //const { pending } = useFormStatus();
  const buttonClasses =
    'relative flex w-40 items-center justify-center rounded-full bg-blue-600 p-4 tracking-wide text-white';
  const disabledClasses = 'cursor-not-allowed opacity-60 hover:opacity-60';

  // if (!availableForSale) {
  //   console.log(availableForSale)
  //   return (
  //     <button aria-disabled className={clsx(buttonClasses, disabledClasses)}>
  //       Out Of Stock
  //     </button>
  //   );
  // }

  // if (!selectedVariantId) {
  //   console.log(selectedVariantId)
  // return (
  //   <button
  //     aria-label="Please select an option"
  //     aria-disabled
  //     className={clsx(buttonClasses)}
  //   >
  //     <div className="absolute left-0 ml-4">
  //       <PlusIcon className="h-5" />
  //     </div>
  //     Add To Cart
  //   </button>
  // );
  const pending = false;
  function addfunction() {
    console.log('user clicked');
    const storage = JSON.parse(localStorage.getItem('finalCart')!);
    const lineToUpdate = storage.lines.find((line: LineItem) => line.id === product.id);
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
      const preTotalQty = storage.totalQuantity;
      storage.totalQuantity = preTotalQty + 1;
      localStorage.setItem('finalCart', JSON.stringify(storage));
      setQty(true);
    } else {
      const newProduct: any = {
        id: product.id,
        quantity: 1,
        cost: {
          totalAmount: {
            amount: product.priceRange.maxVariantPrice.amount,
            currencyCode: product.priceRange.maxVariantPrice.currencyCode
          }
        },
        merchandise: {
          id: product.id,
          title: '',
          selectedOptions: [
            {
              name: '',
              value: ''
            }
          ],
          product: {
            id: product.id,
            handle: product.id,
            availableForSale: true,
            title: product.description,
            description: product.description,
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
                amount: product.priceRange.maxVariantPrice.amount,
                currencyCode: product.priceRange.maxVariantPrice.currencyCode
              },
              minVariantPrice: {
                amount: product.priceRange.minVariantPrice.amount,
                currencyCode: product.priceRange.minVariantPrice.currencyCode
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
              url: product.featuredImage.url,
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
    <button
      // onClick={(e: React.FormEvent<HTMLButtonElement>) => {
      //   if (pending) e.preventDefault();
      // }}
      onClick={addfunction}
      aria-label="Add to cart"
      aria-disabled={pending}
      className={clsx(buttonClasses, {
        'hover:opacity-90': true,
        disabledClasses: pending
      })}
    >
      <div className="absolute left-0 ml-4">
        {pending ? <LoadingDots className="mb-3 bg-white" /> : <PlusIcon className="h-5" />}
      </div>
      Add To Cart
    </button>
  );
}

export function AddToCart({ product }: { product: Product }) {
  // const [message, formAction] = useFormState(addItem, null);
  // const searchParams = useSearchParams();
  // const defaultVariantId = variants.length === 1 ? variants[0]?.id : undefined;
  // const variant = variants.find((variant: ProductVariant) =>
  //   variant.selectedOptions.every(
  //     (option) => option.value === searchParams.get(option.name.toLowerCase())
  //   )
  // );
  //   const selectedVariantId = variant?.id || defaultVariantId;
  //   const actionWithVariant = formAction.bind(null, selectedVariantId);
  // console.log(message)
  return (
    <>
      {/*<form action={actionWithVariant}>
      <SubmitButton availableForSale={availableForSale} selectedVariantId={selectedVariantId} />
      <p aria-live="polite" className="sr-only" role="status">
        {message}
      </p>

  </form>*/}
      <SubmitButton product={product}></SubmitButton>
    </>
  );
}
