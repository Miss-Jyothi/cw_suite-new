import CartModal from 'components/cart/modal';
import OpenCart from 'components/cart/open-cart';
import Country from 'components/country';
import Language from 'components/language';
import User from 'components/login';
import { getMenu } from 'lib/shopify';
import Image from 'next/image';
import Link from 'next/link';
import { Suspense } from 'react';
import Logo from '../../icons/cwsuite-logo.webp';
import MobileMenu from './mobile-menu';
import Search from './search';
const { SITE_NAME } = process.env;

const color = process.env.NEXT_PUBLIC_PRIMARY_COLOR;

export default async function Navbar() {
  console.log('from navbar component');
  const menu = await getMenu('next-js-frontend-header-menu');

  return (
    <nav
      className={`relative flex items-center justify-between p-4 lg:px-6 `}
      style={{ background: color }}
    >
      <div className="block flex-none md:hidden">
        <MobileMenu menu={menu} />
      </div>
      <div className="flex w-full items-center">
        <div className="flex w-full md:w-1/3">
          <Link
            href="/"
            aria-label="Go back home"
            className="mr-2 flex w-full items-center justify-center md:w-auto lg:mr-6"
          >
            {/* <LogoSquare /> */}
            {/* <div className="ml-2 flex-none text-sm font-medium uppercase md:hidden lg:block">
              {SITE_NAME}
            </div> */}
            <div className="ml-2 flex-none text-sm font-medium uppercase md:hidden lg:block">
              <Image src={Logo} alt="logo" priority={true} />
            </div>
          </Link>
          {/* {menu.length ? (
            <ul className="hidden gap-6 text-sm md:flex md:items-center">
              {menu.map((item: Menu) => (
                <li key={item.title}>
                  <Link
                    href={item.path}
                    className="text-neutral-500 underline-offset-4 hover:text-black hover:underline dark:text-neutral-400 dark:hover:text-neutral-300"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          ) : null} */}
        </div>
        <div className="hidden justify-center md:flex md:w-1/3">
          <Search />
        </div>
        <div className="flex justify-end md:w-1/3">
          <div className="hidden md:flex">
            <Country />
            <Language />
            <User />
          </div>
          {/*<Suspense fallback={<OpenCart />}>
            <Cart />
        </Suspense>*/}
          <Suspense fallback={<OpenCart />}>
            <CartModal />
          </Suspense>
        </div>
      </div>
    </nav>
  );
}
