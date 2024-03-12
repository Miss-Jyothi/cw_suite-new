// import { getCollectionProducts } from 'lib/shopify';
// import Link from 'next/link';
// import { GridTileImage } from './grid/tile';

// export async function Carousel() {
//   // Collections that start with `hidden-*` are hidden from the search page.
//   const products = await getCollectionProducts({ collection: 'hidden-homepage-carousel' });

//   if (!products?.length) return null;

//   // Purposefully duplicating products to make the carousel loop and not run out of products on wide screens.
//   const carouselProducts = [...products, ...products, ...products];

//   return (
//     <div className=" w-full overflow-x-auto pb-6 pt-1">
//       <ul className="flex animate-carousel gap-4">
//         {carouselProducts.map((product, i) => (
//           <li
//             key={`${product.handle}${i}`}
//             className="relative aspect-square h-[30vh] max-h-[275px] w-2/3 max-w-[475px] flex-none md:w-1/3"
//           >
//             <Link href={`/product/${product.handle}`} className="relative h-full w-full">
//               <GridTileImage
//                 alt={product.title}
//                 label={{
//                   title: product.title,
//                   amount: product.priceRange.maxVariantPrice.amount,
//                   currencyCode: product.priceRange.maxVariantPrice.currencyCode
//                 }}
//                 src={product.featuredImage?.url}
//                 fill
//                 sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
//               />
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

import { Carousel } from 'antd';
import Image from 'next/image';
import React from 'react';
import Banner1 from '../components/carouselImages/banner1.jpg';
import Banner2 from '../components/carouselImages/banner2.jpg';
import Banner3 from '../components/carouselImages/banner3.jpg';

const contentStyle: React.CSSProperties = {
  height: '30%',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  paddingTop: '5%',
  paddingLeft: '5%',
  paddingRight: '5%',
  marginBottom: '10px',
  width: '93%',
  margin: '0 auto'
};

const Carousell: React.FC = () => (
  <Carousel autoplay>
    <div style={{ maxWidth: '80%' }}>
      <Image src={Banner1} style={contentStyle} alt="banner-1" />
    </div>
    <div style={{ maxWidth: '80%' }}>
      <Image src={Banner2} style={contentStyle} alt="banner-2" />
    </div>
    <div style={{ maxWidth: '80%' }}>
      <Image src={Banner3} style={contentStyle} alt="banner-3" />
    </div>
  </Carousel>
);

export default Carousell;
