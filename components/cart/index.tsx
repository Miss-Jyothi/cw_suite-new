import { getCart } from 'lib/shopify';
import { cookies } from 'next/headers';

export default async function Cart() {
  console.log('i am Cart component');
  const cartId = cookies().get('cartId')?.value;
  let cart;
  console.log(cartId);
  if (cartId) {
    cart = await getCart(cartId);
  }
  console.log(cart);
  //return <CartModal cart={cart} />;
  // return (
  //   <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", boxSizing: 'inherit' }}>
  //     <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", boxSizing: 'inherit', width: "100%" }}>
  //       <div style={{ display: "flex", alignItems: "center", backgroundColor: "#fff", height: "40px", width: "40px", borderRadius: "50%", padding: "10px", cursor: "pointer" }}>
  //         {/* Your cart icon */}
  //         {/* Replace this with your actual cart icon */}
  //         <CartModal cart={cart} />
  //       </div>
  //       {/* Label for the cart */}
  //       <p style={{ fontSize: "12px", color: "#fff", margin: "0px", boxSizing: 'inherit', cursor: "pointer" }}>cart</p>
  //     </div>
  //   </div>
  // );
}
