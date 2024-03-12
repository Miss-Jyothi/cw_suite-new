'use client';

import { MinusIcon, PlusIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import LoadingDots from 'components/loading-dots';
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
type Product = {
  document: {
    id: string;
    handle: string;
    title: string;
    featuredImage: {
      url: string;
    };
  };
};
function SubmitButton({ item, type }: { item: LineItem; type: 'plus' | 'minus' }) {
  const pending = false;
  const { isOpening, setIsOpening } = createdCart();
  const { qty, setQty } = createdQtyState();
  function editFunction() {
    const storage = localStorage.getItem('finalCart');
    if (storage) {
      const data = JSON.parse(storage);
      const DATA = { ...data };
      console.log(DATA);
      const lineToUpdate = DATA.lines.find((line: LineItem) => line.id === item.id);
      if (type === 'plus') {
        if (lineToUpdate) {
          const preQty = lineToUpdate.quantity;
          lineToUpdate.quantity = preQty + 1;
          console.log(lineToUpdate.quantity);
          //
          const previousItemsTotal = DATA.cost.totalAmount.amount;
          console.log(previousItemsTotal, 'previousItemsTotal');
          const productPrice = lineToUpdate.merchandise.product.priceRange.minVariantPrice.amount;
          // total to display on item line
          lineToUpdate.cost.totalAmount.amount =
            productPrice + lineToUpdate.cost.totalAmount.amount;

          console.log(item.merchandise.product.priceRange.minVariantPrice.amount, 'newprice');
          // total amount for items based on qty
          const final = parseFloat(productPrice) + parseFloat(previousItemsTotal);
          DATA.cost.totalAmount.amount = final;
          const prevTotalQty = DATA.totalQuantity;
          DATA.totalQuantity = prevTotalQty + 1;
          localStorage.setItem('finalCart', JSON.stringify(DATA));
          setQty(true);
        }
      } else {
        if (lineToUpdate) {
          const preQty = lineToUpdate.quantity;
          if (preQty > 1) {
            lineToUpdate.quantity = preQty - 1;
            console.log(lineToUpdate.quantity);

            const previousItemsTotal = DATA.cost.totalAmount.amount;
            console.log(previousItemsTotal, 'previousItemsTotal');
            const productPrice = lineToUpdate.merchandise.product.priceRange.minVariantPrice.amount;

            lineToUpdate.cost.totalAmount.amount =
              lineToUpdate.cost.totalAmount.amount - productPrice;

            console.log(productPrice, 'newprice');
            const final = parseFloat(previousItemsTotal) - parseFloat(productPrice);
            DATA.cost.totalAmount.amount = final;
            const prevTotalQty = DATA.totalQuantity;
            DATA.totalQuantity = prevTotalQty - 1;
            localStorage.setItem('finalCart', JSON.stringify(DATA));
            setQty(true);
          } else {
            const data = JSON.parse(localStorage.getItem('finalCart')!);
            console.log(data);
            const line = data.lines.find((line: LineItem) => line.id === item.id);
            const prevItemqty = line.quantity;
            const prevTotalQty = data.totalQuantity;
            data.totalQuantity = prevTotalQty - prevItemqty;
            const filteredData = data.lines.filter((pro: LineItem) => pro.id !== item.id);
            console.log('filtered data', filteredData);
            data.lines = filteredData;
            localStorage.setItem('finalCart', JSON.stringify(data));
            console.log('deleted');
            setIsOpening(true);
          }
        }
      }

      console.log('quantity updated');
    }
  }

  return (
    <button
      type="submit"
      onClick={editFunction}
      // onClick={(e: React.FormEvent<HTMLButtonElement>) => {
      //   if (pending) e.preventDefault();
      // }}
      aria-label={type === 'plus' ? 'Increase item quantity' : 'Reduce item quantity'}
      aria-disabled={pending}
      className={clsx(
        'ease flex h-full min-w-[36px] max-w-[36px] flex-none items-center justify-center rounded-full px-2 transition-all duration-200 hover:border-neutral-800 hover:opacity-80',
        {
          'cursor-not-allowed': pending,
          'ml-auto': type === 'minus'
        }
      )}
    >
      {pending ? (
        <LoadingDots className="bg-black dark:bg-white" />
      ) : type === 'plus' ? (
        <PlusIcon className="h-4 w-4 dark:text-neutral-500" />
      ) : (
        <MinusIcon className="h-4 w-4 dark:text-neutral-500" />
      )}
    </button>
  );
}

export function EditItemQuantityButton({ item, type }: { item: LineItem; type: 'plus' | 'minus' }) {
  //const [message, formAction] = useFormState(updateItemQuantity, null);
  // const payload = {
  //   lineId: item.id,
  //   variantId: item.merchandise.id,
  //   quantity: type === 'plus' ? item.quantity + 1 : item.quantity - 1
  // };
  //const actionWithVariant = formAction.bind(null, payload);
  console.log('from edit component');
  console.log(item.id, item.quantity, '====>');
  return (
    <>
      {/*<form action={actionWithVariant}>
      <SubmitButton type={type} />
      <p aria-live="polite" className="sr-only" role="status">
        {message}
    </p>
    </form>*/}
      <SubmitButton item={item} type={type} />
    </>
  );
}
