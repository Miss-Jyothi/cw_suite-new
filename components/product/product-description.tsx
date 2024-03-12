import { AddToCart } from 'components/cart/add-to-cart';
import Price from 'components/price';
import { Product } from 'lib/shopify/types';
import { VariantSelector } from './variant-selector';

export function ProductDescription({ product }: { product: Product }) {
  return (
    <>
      <div className="font mb-6 flex flex-col border-b pb-6 dark:border-neutral-700">
        <h1 className="font mb-2 text-5xl font-medium">{product.title}</h1>
        <div className="mr-auto w-auto rounded-full bg-blue-600 p-2 text-sm text-white">
          <Price
            amount={product.priceRange.maxVariantPrice.amount}
            currencyCode={product.priceRange.maxVariantPrice.currencyCode}
          />
        </div>
      </div>
      <VariantSelector options={product.options} variants={product.variants} />

      <div
        className="font"
        style={{
          padding: '20px',
          backgroundColor: '#fff',
          border: '1px solid #e8e8e8',
          borderRadius: '10px',
          boxSizing: 'inherit',
          display: 'block',
          marginBottom: '10px'
        }}
      >
        <div style={{ boxSizing: 'inherit', display: 'block' }}>
          <div className="font" style={{ boxSizing: 'inherit', display: 'block' }}>
            <p
              style={{
                marginTop: '15px',
                margin: '0',
                fontSize: '14px',
                boxSizing: 'inherit',
                display: 'block',
                marginBlockStart: '0.8em',
                marginBlockEnd: '1em',
                marginInlineStart: '0px',
                marginInlineEnd: '0px'
              }}
            >
              AED 6.40/unit
            </p>
            <p
              style={{
                marginTop: '15px',
                margin: '0',
                fontSize: '14px',
                boxSizing: 'inherit',
                display: 'block',
                marginBlockStart: '1em',
                marginBlockEnd: '1em',
                marginInlineStart: '0px',
                marginInlineEnd: '0px'
              }}
            >
              50g per pack
            </p>
            <p
              style={{
                marginTop: '15px',
                margin: '0',
                fontSize: '14px',
                boxSizing: 'inherit',
                display: 'block',
                marginBlockStart: '1em',
                marginBlockEnd: '1em',
                marginInlineStart: '0px',
                marginInlineEnd: '0px'
              }}
            >
              Origin:BELGIUM
            </p>
          </div>
        </div>
      </div>

      {/* {product.description ? (
        <Prose
          className="mb-6 text-sm leading-tight dark:text-white/[60%]"
          html={product.description}
        />
      ) : null} */}

      <AddToCart product={product} />
    </>
  );
}
