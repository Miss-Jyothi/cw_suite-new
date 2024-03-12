import React from 'react';
const color = process.env.NEXT_PUBLIC_PRIMARY_COLOR;

const Premier: React.FC = () => {
  return (
    <div style={{ maxWidth: '85%', margin: '0 auto', padding: '20px', borderRadius: '10px' }}>
      <div style={{ boxSizing: 'inherit' }}>
        <div
          style={{
            display: 'grid',
            borderRadius: '10px',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '20px 0',
            backgroundColor: '#fff',
            padding: '25px',
            boxSizing: 'inherit'
          }}
        >
          <div style={{ boxSizing: 'inherit' }}>
            <h1
              style={{
                fontFamily: 'sans-serif',
                margin: '0',
                color: color,
                fontSize: '25px',
                boxSizing: 'inherit',
                marginBlockStart: '0.67em',
                marginBlockEnd: '0.67em',
                marginInlineStart: '0px',
                marginInlineEnd: '0px',
                fontWeight: 'bold'
              }}
            >
              The UAE'S PREMIER ORGANIC FOODS STORE
            </h1>
            <p
              style={{
                marginTop: '10px',
                color: '#757575',
                margin: '0',
                fontSize: '14px',
                boxSizing: 'inherit',
                marginBlockStart: '1em',
                marginBlockEnd: '1em',
                marginInlineStart: '0px',
                marginInlineEnd: '0px'
              }}
            >
              When you buy organic foods online at Organic Foods and Café, you’re purchasing organic
              and biodynamic produce that’s handpicked and sourced from local farms around the
              world. We’re dedicated to providing you with healthy products grown by farmers who
              believe what we do: to live a natural, organic lifestyle and improve your quality of
              life.
            </p>
            <p
              style={{
                marginTop: '10px',
                color: '#757575',
                margin: '0',
                fontSize: '14px',
                boxSizing: 'inherit',
                marginBlockStart: '1em',
                marginBlockEnd: '1em',
                marginInlineStart: '0px',
                marginInlineEnd: '0px'
              }}
            >
              Our curated range of organic and healthy products includes an array of fruits and
              vegetables, meat and fish, baked goods, baby food, and natural supplements - all grown
              and made without the use of harmful pesticides or artificial additives. Every bite you
              take supports not only your own well-being but also sustainable farming practices that
              cherish the environment. With our user-friendly website, swift delivery, and
              unwavering commitment to quality, we are your one-stop destination for embracing a
              healthier lifestyle while contributing to a greener planet. Taste the difference today
              and savor the flavors of authenticity with every bite.
            </p>
            <p
              style={{
                marginTop: '10px',
                color: '#757575',
                margin: '0',
                fontSize: '14px',
                boxSizing: 'inherit',
                marginBlockStart: '1em',
                marginBlockEnd: '1em',
                marginInlineStart: '0px',
                marginInlineEnd: '0px'
              }}
            >
              In addition to our nutritious organic foods, we also offer non-organic foods that are
              gluten-free, non-GMO, vegetarian, vegan, dairy-free, and sugar-free. These products
              are made with well-being at the forefront, ensuring your specific dietary needs are
              met.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Premier;
