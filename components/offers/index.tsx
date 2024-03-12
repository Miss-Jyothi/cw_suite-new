import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import FavImg from './fav image.png';
import NewSymbol from './newProduct image.png';
import offerPercentage from './offer percentage.png';
import ItemImage from './offers image.jpg';

interface ObjItem {
  id: number;
  image: any;
  title: string;
}

const arrObj: ObjItem[] = [
  { id: 1, image: ItemImage, title: 'Organic Alfalfa Sprouts' },
  { id: 2, image: ItemImage, title: 'Organic Broccoli Sprouts' },
  { id: 3, image: ItemImage, title: 'Organic Spinach' },
  { id: 4, image: ItemImage, title: 'Organic Mixed Sprouts' }
];

const Offers: React.FC = () => {
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
      <div style={{ color: '#f7682b', boxSizing: 'inherit', fontFamily: 'Arial' }}>
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
              fontFamily: 'Arial',
              fontSize: '25px',
              margin: '25px, 0',
              boxSizing: 'inherit',
              marginBlockStart: '0.83em',
              marginBlockEnd: '0.83em',
              marginInlineStart: '0px',
              marginInlineEnd: '0px',
              fontWeight: 'bold'
            }}
          >
            OFFERS
          </h2>
          <div style={{ display: 'flex', justifyContent: 'flex-end', boxSizing: 'inherit' }}>
            <Link
              href="#"
              style={{
                backgroundColor: '#f7682b',
                color: '#fff',
                cursor: 'pointer',
                padding: '12px 20px',
                fontFamily: 'Arial',
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
              <div
                key={item.id}
                style={{
                  display: 'flex',
                  height: '100%',
                  flexDirection: 'column',
                  backgroundColor: '#fff',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  textAlign: 'center',
                  padding: '15px 5px',
                  border: '1px solid #e8e8e8',
                  borderRadius: '10px',
                  boxSizing: 'inherit'
                }}
              >
                <Link
                  href="#"
                  style={{
                    width: '100%',
                    textDecoration: 'none',
                    fontSize: '14px',
                    boxSizing: 'inherit',
                    textAlign: 'center',
                    fontFamily: 'Arial'
                  }}
                >
                  <div style={{ width: '100%', color: '#757575', cursor: 'pointer' }}>
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        position: 'relative',
                        height: '0px',
                        bottom: '10px',
                        boxSizing: 'inherit'
                      }}
                    >
                      <div style={{ boxSizing: 'inherit' }}>
                        <div style={{ boxSizing: 'inherit' }}>
                          <Image
                            src={offerPercentage}
                            alt="offerPercentageImage"
                            style={{
                              width: '40px',
                              boxSizing: 'inherit',
                              overflowClipMargin: 'content-box',
                              overflow: 'clip'
                            }}
                          />
                        </div>
                        <div style={{ boxSizing: 'inherit' }}>
                          <Image
                            src={NewSymbol}
                            alt="NewSymbolImage"
                            style={{
                              width: '40px',
                              boxSizing: 'inherit',
                              overflowClipMargin: 'content-box',
                              overflow: 'clip'
                            }}
                          />
                        </div>
                      </div>
                      <div style={{ boxSizing: 'inherit' }}>
                        <Image
                          src={FavImg}
                          alt="FavImg"
                          style={{
                            width: '37px',
                            boxSizing: 'inherit',
                            overflowClipMargin: 'content-box',
                            overflow: 'clip'
                          }}
                        />
                      </div>
                    </div>
                    <div
                      style={{
                        height: '150px',
                        width: '150px',
                        margin: '0 auto',
                        boxSizing: 'inherit'
                      }}
                    >
                      <Image src={item.image} alt={item.title} />
                    </div>
                    <div
                      style={{
                        width: '80%',
                        margin: '5px auto',
                        justifyContent: 'center',
                        boxSizing: 'inherit'
                      }}
                    >
                      <div
                        style={{
                          display: '-webkit-box',
                          WebkitBoxOrient: 'vertical',
                          WebkitLineClamp: '2',
                          overflow: 'hidden',
                          boxSizing: 'inherit'
                        }}
                      >
                        <h3
                          style={{
                            color: '#000',
                            fontSize: '14px',
                            fontFamily: 'Arial',
                            margin: '0',
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
                      </div>
                      <div style={{ boxSizing: 'inherit' }}>
                        <p
                          style={{
                            fontSize: '12px',
                            margin: '0px',
                            boxSizing: 'inherit',
                            marginBlockStart: '0em',
                            marginBlockEnd: '0em',
                            marginInlineStart: '0px',
                            marginInlineEnd: '0px'
                          }}
                        >
                          <span
                            style={{
                              fontSize: '16px',
                              fontFamily: 'Arial',
                              color: '#ca011d',
                              boxSizing: 'inherit',
                              display: 'block'
                            }}
                          >
                            AED 6.40
                          </span>
                          <span
                            style={{
                              textDecoration: 'line-through',
                              fontFamily: 'Arial',
                              fontSize: '14px',
                              boxSizing: 'inherit'
                            }}
                          >
                            AED 8.00/Pack
                          </span>
                        </p>
                      </div>
                      <p
                        style={{
                          fontSize: '12px',
                          margin: '0px',
                          boxSizing: 'inherit',
                          marginBlockStart: '0em',
                          marginBlockEnd: '0em',
                          marginInlineStart: '0px',
                          marginInlineEnd: '0px'
                        }}
                      >
                        50g per pack
                      </p>
                      <p
                        style={{
                          fontSize: '12px',
                          margin: '0px',
                          boxSizing: 'inherit',
                          marginBlockStart: '1em',
                          marginBlockEnd: '1em',
                          marginInlineStart: '0px',
                          marginInlineEnd: '0px'
                        }}
                      >
                        Origin:
                        <span
                          style={{ fontSize: '16px', fontFamily: 'Arial', boxSizing: 'inherit' }}
                        >
                          THE NETHERLAND
                        </span>
                      </p>
                    </div>
                  </div>
                </Link>
                <div style={{ boxSizing: 'inherit' }}>
                  <div style={{ boxSizing: 'inherit' }}>
                    <div style={{ boxSizing: 'inherit' }}>
                      <button
                        style={{
                          width: '150px',
                          height: '30px',
                          cursor: 'pointer',
                          padding: '12px 20px',
                          backgroundColor: '#29a637',
                          fontFamily: 'Poppins SemiBold, sans-serif',
                          color: '#fff',
                          borderRadius: '25px',
                          border: 'none',
                          fontSize: '12px',
                          boxSizing: 'inherit',
                          appearance: 'auto',
                          textRendering: 'auto',
                          letterSpacing: 'normal',
                          wordSpacing: 'normal',
                          lineHeight: 'normal',
                          textTransform: 'none',
                          textIndent: '0px',
                          textShadow: 'none',
                          display: 'inline-block',
                          textAlign: 'center',
                          margin: '0em',
                          paddingBlock: '1px',
                          paddingInline: '6px'
                        }}
                      >
                        <label
                          style={{
                            fontSize: '12px',
                            pointerEvents: 'none',
                            boxSizing: 'inherit',
                            cursor: 'default'
                          }}
                        >
                          Add to cart
                        </label>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offers;

// import React from "react";
// import Link from "next/link";
// import Image from "next/image";
// import FavImg from './fav image.png'
// import NewSymbol from './newProduct image.png'
// import offerPercentage from './offer percentage.png'
// import ItemImage from './offers image.jpg'

// interface ObjItem {
//     id: number;
//     image: any;
//     title: string;
// }

// const arrObj: ObjItem[] = [
//     { id: 1, image: ItemImage, title: 'Organic Alfalfa Sprouts' },
//     { id: 2, image: ItemImage, title: 'Organic Broccoli Sprouts' },
//     { id: 3, image: ItemImage, title: 'Organic Spinach' },
//     { id: 4, image: ItemImage, title: 'Organic Mixed Sprouts' },
// ];

// const Offers: React.FC = () => {
//     return (
//         <div style={{
//             maxWidth: '85%',
//             margin: '0 auto',
//             padding: '20px',
//             borderRadius: '10px',
//             marginTop: "1%",
//             marginBottom: "1%"
//         }}>
//             <div style={{ color: "#f7682b", boxSizing: "inherit", fontFamily: "sans-serif" }}>
//                 <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", boxSizing: "inherit" }}>
//                     <h2 style={{ fontFamily: "sans-serif", fontSize: "25px", margin: "25px, 0", boxSizing: "inherit", marginBlockStart: "0.83em", marginBlockEnd: "0.83em", marginInlineStart: "0px", marginInlineEnd: "0px", fontWeight: "bold" }}>OFFERS</h2>
//                     <div style={{ display: "flex", justifyContent: "flex-end", boxSizing: "inherit", padding: "12px 20px" }}>
//                         <button style={{ backgroundColor: "#f7682b", color: "#fff", cursor: "pointer", height: "40px", padding: "12px 20px", fontFamily: "sans-serif", borderRadius: "25px", border: "none", fontSize: "12px", boxSizing: "inherit", appearance: "auto", letterSpacing: "normal", wordSpacing: "normal", lineHeight: "normal", textTransform: "none", textIndent: "0px", textShadow: "none", display: "inline-block", textAlign: "center", margin: "0em", paddingBlock: "1px", paddingInline: "6px" }}>View all</button>
//                     </div>
//                 </div>
//                 <div style={{ boxSizing: "inherit" }}>
//                     <div style={{ gridTemplateColumns: "repeat(5, minmax(125px, 1fr))", display: "grid", gridGap: "15px", boxSizing: "inherit" }}>
//                         {arrObj.map((item) => (
//                             <div key={item.id} style={{ display: "flex", height: "100%", flexDirection: "column", backgroundColor: "#fff", alignItems: "center", justifyContent: "space-between", textAlign: "center", padding: "15px 5px", border: "1px solid #e8e8e8", borderRadius: "10px", boxSizing: "inherit" }}>
//                                 <Link href="#" style={{ width: "100%", textDecoration: "none", fontSize: "14px", boxSizing: "inherit", textAlign: "center", fontFamily: "sans-serif" }}>
//                                     <div style={{ width: "100%", color: "#757575", cursor: "pointer" }}>
//                                         <div style={{ display: "flex", justifyContent: "space-between", position: "relative", height: "0px", bottom: "10px", boxSizing: "inherit" }}>
//                                             <div style={{ boxSizing: "inherit" }}>
//                                                 <div style={{ boxSizing: "inherit" }}>
//                                                     <Image src={offerPercentage} alt="offerPercentageImage" style={{ width: "40px", boxSizing: "inherit", overflowClipMargin: "content-box", overflow: "clip" }} />
//                                                 </div>
//                                                 <div style={{ boxSizing: "inherit" }}>
//                                                     <Image src={NewSymbol} alt="NewSymbolImage" style={{ width: "40px", boxSizing: "inherit", overflowClipMargin: "content-box", overflow: "clip" }} />
//                                                 </div>
//                                             </div>
//                                             <div style={{ boxSizing: "inherit" }}>
//                                                 <Image src={FavImg} alt="FavImg" style={{ width: "37px", boxSizing: "inherit", overflowClipMargin: "content-box", overflow: "clip" }} />
//                                             </div>
//                                         </div>
//                                         <div style={{ height: "150px", width: "150px", margin: "0 auto", boxSizing: "inherit" }}>
//                                             <Image src={item.image} alt={item.title} />
//                                         </div>
//                                         <div style={{ display: "grid", gridGap: "2.5px", width: "80%", margin: "10px auto", justifyContent: "center", boxSizing: "inherit" }}>
//                                             <div style={{ display: "-webkit-box", WebkitBoxOrient: "vertical", WebkitLineClamp: "2", overflow: "hidden", boxSizing: "inherit" }}>
//                                                 <p style={{ color: "#000", fontSize: "12px", fontFamily: "Arial", margin: "0", boxSizing: "inherit", marginBlockStart: "1em", marginBlockEnd: "1em", marginInlineStart: "0px", marginInlineEnd: "0px", fontWeight: "bold" }}>{item.title}</p>
//                                             </div>
//                                             <div style={{ boxSizing: "inherit" }}>
//                                                 <p style={{ fontSize: "12px", margin: "0px", boxSizing: "inherit", marginBlockStart: "1em", marginBlockEnd: "1em", marginInlineStart: "0px", marginInlineEnd: "0px" }}>
//                                                     <span style={{ fontSize: "16px", fontFamily: "Poppins SemiBold, sans-serif", color: "#ca011d", boxSizing: "inherit", display: "block" }}>AED 6.40</span>
//                                                     <span style={{ textDecoration: "line-through", fontFamily: "Poppins SemiBold, sans-serif", fontSize: "14px", boxSizing: "inherit" }}>AED 8.00/Pack</span>
//                                                 </p>
//                                             </div>
//                                             <p style={{ fontSize: "12px", margin: "0px", boxSizing: "inherit", marginBlockStart: "1em", marginBlockEnd: "1em", marginInlineStart: "0px", marginInlineEnd: "0px" }}>50g per pack</p>
//                                             <p style={{ fontSize: "12px", margin: "0px", boxSizing: "inherit", marginBlockStart: "1em", marginBlockEnd: "1em", marginInlineStart: "0px", marginInlineEnd: "0px" }}>
//                                                 Origin:<span style={{ fontSize: "16px", fontFamily: "Poppins SemiBold, sans-serif", boxSizing: "inherit" }}>THE NETHERLAND</span>
//                                             </p>
//                                         </div>
//                                     </div>
//                                 </Link>
//                                 <div style={{ boxSizing: "inherit" }}>
//                                     <div style={{ boxSizing: "inherit" }}>
//                                         <div style={{ boxSizing: "inherit" }}>
//                                             <button style={{ width: "250px", height: "30px", cursor: "pointer", padding: "12px 20px", backgroundColor: "#29a637", fontFamily: "Poppins SemiBold, sans-serif", color: "#fff", borderRadius: "25px", border: "none", fontSize: "12px", boxSizing: "inherit", appearance: "auto", textRendering: "auto", letterSpacing: "normal", wordSpacing: "normal", lineHeight: "normal", textTransform: "none", textIndent: "0px", textShadow: "none", display: "inline-block", textAlign: "center", margin: "0em", paddingBlock: "1px", paddingInline: "6px" }}>
//                                                 <label style={{ fontSize: "12px", pointerEvents: "none", boxSizing: "inherit", cursor: "default" }}>Add to cart</label>
//                                             </button>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Offers;
