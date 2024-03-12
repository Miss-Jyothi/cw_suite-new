import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import LatestRecipeImage from './Recipes.jpg';

interface ObjItem {
  id: number;
  image: any;
  title: string;
}

const arrObj: ObjItem[] = [
  { id: 1, image: LatestRecipeImage, title: 'DJAJ MAHSHI' },
  { id: 2, image: LatestRecipeImage, title: 'VEGETABLE SAMOSA' },
  { id: 3, image: LatestRecipeImage, title: 'CHICKEN SAMOSA' },
  { id: 4, image: LatestRecipeImage, title: 'CHICKEN TIKKA' }
];

const LatestRecipes: React.FC = () => {
  return (
    <div
      style={{
        maxWidth: '85%',
        margin: '0 auto',
        padding: '20px',
        borderRadius: '10px',
        marginTop: '1%',
        marginBottom: '1%'
      }}
    >
      <div style={{ color: '#29a637', boxSizing: 'inherit', fontFamily: 'Arial' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '2fr 1fr',
            alignItems: 'center',
            boxSizing: 'inherit'
          }}
        >
          <h2
            style={{
              fontSize: '25px',
              margin: '25px 0',
              boxSizing: 'inherit',
              marginBlockStart: '0.83em',
              marginBlockEnd: '0.83em',
              marginInlineStart: '0px',
              marginInlineEnd: '0px',
              fontWeight: 'bold'
            }}
          >
            LATEST RECIPES
          </h2>
          <div style={{ display: 'flex', justifyContent: 'flex-end', boxSizing: 'inherit' }}>
            <Link
              href="#"
              style={{
                backgroundColor: '#29a637',
                color: '#fff',
                cursor: 'pointer',
                padding: '12px 20px',
                fontFamily: 'Poppins SemiBold, sans-serif',
                borderRadius: '25px',
                border: 'none',
                fontSize: '12px',
                textDecoration: 'none',
                boxSizing: 'inherit'
              }}
            >
              {' '}
              View all
            </Link>
          </div>
        </div>
        <div style={{ boxSizing: 'inherit' }}>
          <div
            style={{
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              display: 'grid',
              gridGap: '15px',
              boxSizing: 'inherit'
            }}
          >
            {arrObj.map((item) => (
              <Link
                key={item.id}
                href="#"
                style={{
                  backgroundColor: '#fff',
                  border: '1px solid #e8e8e8',
                  borderRadius: '10px',
                  textDecoration: 'none',
                  fontSize: '14px',
                  boxSizing: 'inherit',
                  color: '-webkit-link',
                  cursor: 'pointer'
                }}
              >
                <div style={{ boxSizing: 'inherit' }}>
                  <div style={{ boxSizing: 'inherit' }}>
                    <div
                      style={{
                        width: '100%',
                        height: '200px',
                        borderRadius: '10px 10px 0 0',
                        boxSizing: 'inherit'
                      }}
                    >
                      <Image
                        src={item.image}
                        alt={`${item.title}-Image`}
                        style={{
                          width: '100%',
                          height: '200px',
                          borderRadius: '10px 10px 0 0',
                          boxSizing: 'inherit',
                          objectFit: 'cover',
                          color: '-webkit-link',
                          cursor: 'pointer'
                        }}
                      />
                    </div>
                    <div
                      style={{ padding: '20px', gridTemplateColumns: '1fr', boxSizing: 'inherit' }}
                    >
                      <h3
                        style={{
                          fontFamily: 'Arial',
                          color: '#000',
                          margin: '0',
                          display: '-webkit-box',
                          WebkitBoxOrient: 'vertical',
                          overflow: 'hidden',
                          fontSize: '17px',
                          textTransform: 'lowercase',
                          boxSizing: 'inherit',
                          marginBlockStart: '1em',
                          marginBlockEnd: '1em',
                          marginInlineStart: '0px',
                          marginInlineEnd: '0px',
                          fontWeight: 'bold'
                        }}
                      >
                        {item.title}
                      </h3>
                      <p
                        style={{
                          WebkitLineClamp: '4',
                          color: '#000',
                          margin: '0',
                          display: '-webkit-box',
                          WebkitBoxOrient: 'vertical',
                          overflow: 'hidden',
                          fontSize: '14px',
                          boxSizing: 'inherit',
                          marginBlockStart: '1em',
                          marginBlockEnd: '1em',
                          marginInlineStart: '0px',
                          marginInlineEnd: '0px'
                        }}
                      >
                        Ingredients: Rice & chicken stuffing...
                      </p>
                      <p
                        style={{
                          WebkitLineClamp: '4',
                          color: '#000',
                          margin: '0',
                          display: '-webkit-box',
                          WebkitBoxOrient: 'vertical',
                          overflow: 'hidden',
                          fontSize: '14px',
                          boxSizing: 'inherit',
                          marginBlockStart: '1em',
                          marginBlockEnd: '1em',
                          marginInlineStart: '0px',
                          marginInlineEnd: '0px'
                        }}
                      >
                        Date: 2022-03-09
                      </p>
                      <p
                        style={{
                          color: '#29a637',
                          fontFamily: 'Poppins SemiBold, sans-serif',
                          display: 'contents',
                          WebkitLineClamp: '4',
                          margin: '0',
                          WebkitBoxOrient: 'vertical',
                          overflow: 'hidden',
                          fontSize: '14px',
                          boxSizing: 'inherit',
                          marginBlockStart: '1em',
                          marginBlockEnd: '1em',
                          marginInlineStart: '0px',
                          marginInlineEnd: '0px',
                          fontWeight: 'bold'
                        }}
                      >
                        Read more
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestRecipes;
