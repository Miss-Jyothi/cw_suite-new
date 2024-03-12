'use client';

import { XMarkIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import LoadingDots from 'components/loading-dots';
import { createdCart } from './CartContext';
type CartState = {
  id: string;
  checkoutUrl: string;
  cost: {
    subtotalAmount: { amount: string; currencyCode: string };
    totalAmount: { amount: string; currencyCode: string };
    totalTaxAmount: { amount: string; currencyCode: string };
  };
  lines: LineItem[];
  totalQuantity: number;
};
interface Line {
  id: string;
}
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

function SubmitButton({ item }: { item: LineItem }) {
  const { isOpening, setIsOpening } = createdCart();
  const pending = false;
  function deleteItem() {
    const ID: string = item.id;
    console.log(ID);
    const data = JSON.parse(localStorage.getItem('finalCart')!);
    console.log(data);
    const line = data.lines.find((line: LineItem) => line.id === ID);
    const prevItemqty = line.quantity;
    const prevTotalQty = data.totalQuantity;
    data.totalQuantity = prevTotalQty - prevItemqty;

    const filteredData = data.lines.filter((pro: LineItem) => pro.id !== ID);
    console.log('filtered data', filteredData);
    data.lines = filteredData;
    localStorage.setItem('finalCart', JSON.stringify(data));
    console.log('deleted');
    setIsOpening(true);
  }

  return (
    <button
      type="submit"
      //onClick={(e: React.FormEvent<HTMLButtonElement>) => {
      //  if (pending) e.preventDefault();
      //}}
      onClick={deleteItem}
      aria-label="Remove cart item"
      aria-disabled={pending}
      className={clsx(
        'ease flex h-[17px] w-[17px] items-center justify-center rounded-full bg-neutral-500 transition-all duration-200',
        {
          'cursor-not-allowed px-0': pending
        }
      )}
    >
      {pending ? (
        <LoadingDots className="bg-white" />
      ) : (
        <XMarkIcon className="hover:text-accent-3 mx-[1px] h-4 w-4 text-white dark:text-black" />
      )}
    </button>
  );
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
export function DeleteItemButton({ item }: { item: LineItem }) {
  //const [message, formAction] = useFormState(removeItem, null);
  //const actionWithVariant = formAction.bind(null, itemId);
  console.log('i am from deleteitem');
  const itemId = item.id;
  return (
    <>
      {/*<form action={actionWithVariant}>
      <SubmitButton />
      <p aria-live="polite" className="sr-only" role="status">
        {message}
      </p>
  </form>*/}

      <SubmitButton item={item} />
    </>
  );
}
