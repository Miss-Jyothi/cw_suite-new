'use client';
import { Dialog, Transition } from '@headlessui/react';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import Price from 'components/price';
import { DEFAULT_OPTION } from 'lib/constants';
import { createUrl } from 'lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { Fragment, useEffect, useRef, useState } from 'react';
import { createdCart, createdQtyState } from './CartContext';
import CloseCart from './close-cart';
import { DeleteItemButton } from './delete-item-button';
import { EditItemQuantityButton } from './edit-item-quantity-button';
import OpenCart from './open-cart';
type MerchandiseSearchParams = {
  [key: string]: string;
};
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

export default function CartModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [count, setCount] = useState(0);
  const [cartStorage, setCartStorage] = useState<any>({
    id: '',
    checkoutUrl: '',
    cost: {
      subtotalAmount: { amount: '0.0', currencyCode: 'INR' },
      totalAmount: { amount: '0.0', currencyCode: 'INR' },
      totalTaxAmount: { amount: '0.0', currencyCode: 'INR' }
    },
    lines: [],
    totalQuantity: 0
  });

  const { isOpening, setIsOpening } = createdCart();
  const { qty, setQty } = createdQtyState();
  const [preTotal, setPreTotal] = useState(0);
  const quantityRef = useRef(cartStorage?.lines.length);
  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);

  try {
    if (!localStorage.getItem('finalCart')) {
      localStorage.setItem('finalCart', JSON.stringify(cartStorage));
      console.log('Local storage created successfully!');
    }
  } catch {}
  useEffect(() => {
    console.log('useEffect one');

    // Open cart modal when quantity changes.
    if (cartStorage?.totalQuantity !== quantityRef.current) {
      // But only if it's not already open (quantity also changes when editing items in cart).
      if (!isOpen) {
        setIsOpen(true);
      }
      // Always update the quantity reference
      quantityRef.current = cartStorage?.totalQuantity;
    }
  }, [isOpen, cartStorage?.totalQuantity, quantityRef]);

  useEffect(() => {
    console.log('useEffect two');

    if (isOpening === true) {
      //   const storedQuantity = localStorage.getItem('qty') as any;
      //   if(storedQuantity){
      //     setCartStorage((prevState: any) => ({
      //       ...prevState,
      //       totalQuantity: parseInt(storedQuantity)
      //     }));
      //  }
      //  console.log(storedQuantity)
      const storedJSON = localStorage.getItem('finalCart');

      if (storedJSON) {
        const storage = JSON.parse(storedJSON);
        console.log(storage, 'from modal');
        const arrayTotal = [] as any;

        storage.lines.map((selectedProduct: CartState) => {
          console.log(selectedProduct, 'available products ');
          arrayTotal.push(selectedProduct.cost.totalAmount.amount);
          console.log(arrayTotal);
        });
        let sumOfArray = arrayTotal.reduce((acc: number, curr: number) => acc + curr, 0);
        const newTotalAmount = sumOfArray;
        setPreTotal(newTotalAmount);
        setCartStorage((prevState: any) => {
          const updatedcart = {
            ...prevState,
            lines: storage.lines,
            cost: {
              ...prevState.cost,
              totalAmount: {
                ...prevState.cost.totalAmount,
                amount: newTotalAmount.toString()
              }
            },
            totalQuantity: storage.totalQuantity
          };
          console.log(updatedcart);
          return updatedcart;
        });
      }
    } else {
      console.log('on page load');
      const data = JSON.parse(localStorage.getItem('finalCart')!);
      setCartStorage(data); // on refresh page
    }
  }, [isOpening]);

  useEffect(() => {
    console.log('useEffect three');
    if (qty === true) {
      const storedData = localStorage.getItem('finalCart');
      if (storedData) {
        const storedCartData = JSON.parse(storedData);
        console.log(storedCartData, 'data in finalCart');
        setCartStorage(storedCartData);
      }
      setQty(false);
    }
  }, [qty]);
  useEffect(() => {
    console.log('useEffect four');
    if (isOpening === true) {
      localStorage.setItem('finalCart', JSON.stringify(cartStorage));
      setIsOpening(false);
    }
  }, [cartStorage]);
  console.log(cartStorage, 'final cart data');

  return (
    <>
      <button aria-label="Open cart" onClick={openCart}>
        <OpenCart quantity={cartStorage?.totalQuantity} />
      </button>
      <Transition show={isOpen}>
        <Dialog onClose={closeCart} className="relative z-50">
          <Transition.Child
            as={Fragment}
            enter="transition-all ease-in-out duration-300"
            enterFrom="opacity-0 backdrop-blur-none"
            enterTo="opacity-100 backdrop-blur-[.5px]"
            leave="transition-all ease-in-out duration-200"
            leaveFrom="opacity-100 backdrop-blur-[.5px]"
            leaveTo="opacity-0 backdrop-blur-none"
          >
            <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="transition-all ease-in-out duration-300"
            enterFrom="translate-x-full"
            enterTo="translate-x-0"
            leave="transition-all ease-in-out duration-200"
            leaveFrom="translate-x-0"
            leaveTo="translate-x-full"
          >
            <Dialog.Panel className="fixed bottom-0 right-0 top-0 flex h-full w-full flex-col border-l border-neutral-200 bg-white/80 p-6 text-black backdrop-blur-xl dark:border-neutral-700 dark:bg-black/80 dark:text-white md:w-[390px]">
              <div className="flex items-center justify-between">
                <p className="text-lg font-semibold">My Cart</p>

                <button aria-label="Close cart" onClick={closeCart}>
                  <CloseCart />
                </button>
              </div>

              {!cartStorage || cartStorage.lines.length === 0 ? (
                <div className="mt-20 flex w-full flex-col items-center justify-center overflow-hidden">
                  <ShoppingCartIcon className="h-16" />
                  <p className="mt-6 text-center text-2xl font-bold">Your cart is empty.</p>
                </div>
              ) : (
                <div className="flex h-full flex-col justify-between overflow-hidden p-1">
                  <ul className="flex-grow overflow-auto py-4">
                    {cartStorage.lines.map((item: any, i: any) => {
                      const merchandiseSearchParams = {} as MerchandiseSearchParams;

                      item.merchandise.selectedOptions.forEach(
                        ({ name, value }: { name: string; value: any }) => {
                          if (value !== DEFAULT_OPTION) {
                            merchandiseSearchParams[name.toLowerCase()] = value;
                          }
                        }
                      );

                      const merchandiseUrl = createUrl(
                        `/product/${item.merchandise.product.handle}`,
                        new URLSearchParams(merchandiseSearchParams)
                      );

                      return (
                        <li
                          key={i}
                          className="flex w-full flex-col border-b border-neutral-300 dark:border-neutral-700"
                        >
                          <div className="relative flex w-full flex-row justify-between px-1 py-4">
                            <div className="absolute z-40 -mt-2 ml-[55px]">
                              <DeleteItemButton item={item} />
                            </div>
                            <Link
                              href={merchandiseUrl}
                              onClick={closeCart}
                              className="z-30 flex flex-row space-x-4"
                            >
                              <div className="relative h-16 w-16 cursor-pointer overflow-hidden rounded-md border border-neutral-300 bg-neutral-300 dark:border-neutral-700 dark:bg-neutral-900 dark:hover:bg-neutral-800">
                                <Image
                                  className="h-full w-full object-cover"
                                  width={64}
                                  height={64}
                                  alt={
                                    item.merchandise.product.featuredImage.altText ||
                                    item.merchandise.product.title
                                  }
                                  src={item.merchandise.product.featuredImage.url}
                                />
                              </div>

                              <div className="flex flex-1 flex-col text-base">
                                <span className="leading-tight">
                                  {item.merchandise.product.title}
                                </span>
                                {item.merchandise.title !== DEFAULT_OPTION ? (
                                  <p className="text-sm text-neutral-500 dark:text-neutral-400">
                                    {item.merchandise.title}
                                  </p>
                                ) : null}
                              </div>
                            </Link>
                            <div className="flex h-16 flex-col justify-between">
                              <Price
                                className="flex justify-end space-y-2 text-right text-sm"
                                amount={item.cost.totalAmount.amount}
                                currencyCode={item.cost.totalAmount.currencyCode}
                              />
                              <div className="ml-auto flex h-9 flex-row items-center rounded-full border border-neutral-200 dark:border-neutral-700">
                                <EditItemQuantityButton item={item} type="minus" />
                                <p className="w-6 text-center">
                                  <span className="w-full text-sm">{item.quantity}</span>
                                </p>
                                <EditItemQuantityButton item={item} type="plus" />
                              </div>
                            </div>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                  <div className="py-4 text-sm text-neutral-500 dark:text-neutral-400">
                    <div className="mb-3 flex items-center justify-between border-b border-neutral-200 pb-1 dark:border-neutral-700">
                      <p>Taxes</p>
                      <Price
                        className="text-right text-base text-black dark:text-white"
                        amount={cartStorage.cost.totalTaxAmount.amount}
                        currencyCode={cartStorage.cost.totalTaxAmount.currencyCode}
                      />
                    </div>
                    <div className="mb-3 flex items-center justify-between border-b border-neutral-200 pb-1 pt-1 dark:border-neutral-700">
                      <p>Shipping</p>
                      <p className="text-right">Calculated at checkout</p>
                    </div>
                    <div className="mb-3 flex items-center justify-between border-b border-neutral-200 pb-1 pt-1 dark:border-neutral-700">
                      <p>Total</p>
                      <Price
                        className="text-right text-base text-black dark:text-white"
                        amount={cartStorage.cost.totalAmount.amount}
                        currencyCode={cartStorage.cost.totalAmount.currencyCode}
                      />
                    </div>
                  </div>
                  {/* <a
                    href={cartStorage.checkoutUrl}
                    className="block w-full rounded-full bg-blue-600 p-3 text-center text-sm font-medium text-white opacity-90 hover:opacity-100"
                  >
                    Proceed to Checkout
                  </a> */}
                  <button className="block w-full rounded-full bg-blue-600 p-3 text-center text-sm font-medium text-white opacity-90 hover:opacity-100">
                    <Link href={`/checkout`}>Proceed to Checkout</Link>
                  </button>
                </div>
              )}
            </Dialog.Panel>
          </Transition.Child>
        </Dialog>
      </Transition>
    </>
  );
}
