// import { Carousell } from 'components/carousel';
import AboutProductsCard from 'components/aboutProducts';
import AboutUsCard from 'components/aboutUs';
import Carousell from 'components/carousel';
import Wrapper from 'components/consumerRights';
import { ThreeItemGrid } from 'components/grid/three-items';
import LatestRecipes from 'components/latestRecipes';
import Footer from 'components/layout/footer';
import Offers from 'components/offers';
import Premier from 'components/premier';
import ShopByCategory from 'components/shopByCategory';

import { Suspense } from 'react';

export const runtime = 'edge';

export const metadata = {
  description: 'High-performance ecommerce store built with Next.js, Vercel, and Shopify.',
  openGraph: {
    type: 'website'
  }
};

export default async function HomePage() {
  return (
    <>
      <Carousell />
      <AboutUsCard />
      <AboutProductsCard />
      <ShopByCategory />
      <ThreeItemGrid />
      <Offers />
      <LatestRecipes />
      <Wrapper />
      <Premier />
      <Suspense>
        <Suspense>
          <Footer />
        </Suspense>
      </Suspense>
    </>
  );
}
