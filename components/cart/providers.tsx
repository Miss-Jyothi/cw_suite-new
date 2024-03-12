'use client';

import { CartContextComponent, CartQuantityComponent } from './CartContext';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <CartContextComponent>
        <CartQuantityComponent>{children}</CartQuantityComponent>
      </CartContextComponent>
    </>
  );
}
