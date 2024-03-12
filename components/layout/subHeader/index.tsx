'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import Typesense from 'typesense';

const SubHeader: React.FC = () => {
  const [showCategories, setShowCategories] = useState<boolean>(false);
  const [categories, setCategories] = useState<string[]>([]);

  const client = new Typesense.Client({
    nodes: [
      {
        host: 'typesense.exceloid.in',
        port: 8108,
        protocol: 'https'
      }
    ],
    apiKey: 'exceloid-test'
  });

  const toggleCategories = () => {
    setShowCategories(!showCategories);
  };

  //   useEffect(() => {
  //     // Fetch categories from the Typesense API
  //     async function fetchCategories() {
  //       try {
  //         const factes:any = await client.collections('Products').documents().search({
  //           q: '*',
  //           query_by: 'title',
  //           filter_by:"category",
  //           facet_by: "category",
  //           max_facet_values: 10
  //         });
  //         if (facets && facets.category) {
  //           setCategories(facets.category);
  //         }
  //       } catch (error) {
  //         console.error('Error fetching categories:', error);
  //       }
  //     }

  //     fetchCategories();
  //   }, [client]);
  const color = process.env.NEXT_PUBLIC_PRIMARY_COLOR;

  return (
    <nav
      className="flex flex-wrap items-center justify-between border-b-4 bg-white p-6"
      style={{ borderBottomColor: color }}
    >
      <div className="flex w-full items-center justify-start lg:w-auto">
        <div className="dropdown relative inline-block">
          <div onClick={toggleCategories} className="flex cursor-pointer items-center">
            <span
              className="px-4 py-2 font-semibold text-black"
              style={{ fontSize: '25px', fontFamily: 'Arial', color: color }}
            >
              ALL CATEGORIES
            </span>
            <svg
              className="h-5 w-5 text-black"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              style={{ marginLeft: '-15px' }}
            >
              <path
                fillRule="evenodd"
                d="M10 12a1 1 0 01-.707-.293l-4-4a1 1 0 111.414-1.414L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-.707.293z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          {showCategories && (
            <ul className="dropdown-content absolute pt-1 text-gray-700">
              <li className="whitespace-no-wrap block rounded-t bg-gray-200 px-4 py-2 hover:bg-gray-400">
                Fashion and Apparel Retail
              </li>
              <li className="whitespace-no-wrap block rounded-t bg-gray-200 px-4 py-2 hover:bg-gray-400">
                Jewellery Retail
              </li>
            </ul>
          )}
        </div>

        {/* Additional links */}
        <Link href="#">
          <span
            className={`hidden rounded-md px-3 py-2 text-sm font-medium text-black hover:bg-blue-700 hover:text-white lg:inline-block`}
          >
            Recipes
          </span>
        </Link>
        <Link href="#">
          <span className="hidden rounded-md px-3 py-2 text-sm font-medium text-black hover:bg-blue-700 hover:text-white lg:inline-block">
            Stores Locator
          </span>
        </Link>
        <Link href="#">
          <span className="hidden rounded-md px-3 py-2 text-sm font-medium text-black hover:bg-blue-700 hover:text-white lg:inline-block">
            OFC Partners
          </span>
        </Link>
      </div>
    </nav>
  );
};

export default SubHeader;
