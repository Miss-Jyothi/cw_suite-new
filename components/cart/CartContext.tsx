'use client';
import { createContext, useContext, useState } from 'react';

const cartContext = createContext<any>(undefined);
const qtyState = createContext<any>(undefined);

export function CartContextComponent({ children }: { children: React.ReactNode }) {
  const [isOpening, setIsOpening] = useState(false);
  return (
    <cartContext.Provider value={{ isOpening, setIsOpening }}>{children}</cartContext.Provider>
  );
}
export function createdCart() {
  return useContext(cartContext);
}
export function CartQuantityComponent({ children }: { children: React.ReactNode }) {
  const [qty, setQty] = useState(false);
  return <qtyState.Provider value={{ qty, setQty }}>{children}</qtyState.Provider>;
}
export function createdQtyState() {
  return useContext(qtyState);
}
