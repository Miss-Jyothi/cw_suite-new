// import Link from 'next/link';

// import FooterMenu from 'components/layout/footer-menu';
// import LogoSquare from 'components/logo-square';
// import { getMenu } from 'lib/shopify';
// import { Suspense } from 'react';

// const { COMPANY_NAME, SITE_NAME } = process.env;

// export default async function Footer() {
//   const currentYear = new Date().getFullYear();
//   const copyrightDate = 2023 + (currentYear > 2023 ? `-${currentYear}` : '');
//   const skeleton = 'w-full h-6 animate-pulse rounded bg-neutral-200 dark:bg-neutral-700';
//   const menu = await getMenu('next-js-frontend-footer-menu');
//   const copyrightName = COMPANY_NAME || SITE_NAME || '';

//   return (
//     <footer className="text-sm text-neutral-500 dark:text-neutral-400">
//       <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 border-t border-neutral-200 px-6 py-12 text-sm dark:border-neutral-700 md:flex-row md:gap-12 md:px-4 min-[1320px]:px-0">
//         <div>
//           <Link className="flex items-center gap-2 text-black dark:text-white md:pt-1" href="/">
//             <LogoSquare size="sm" />
//             <span className="uppercase">{SITE_NAME}</span>
//           </Link>
//         </div>
//         <Suspense
//           fallback={
//             <div className="flex h-[188px] w-[200px] flex-col gap-2">
//               <div className={skeleton} />
//               <div className={skeleton} />
//               <div className={skeleton} />
//               <div className={skeleton} />
//               <div className={skeleton} />
//               <div className={skeleton} />
//             </div>
//           }
//         >
//           <FooterMenu menu={menu} />
//         </Suspense>
//         <div className="md:ml-auto">
//           <a
//             className="flex h-8 w-max flex-none items-center justify-center rounded-md border border-neutral-200 bg-white text-xs text-black dark:border-neutral-700 dark:bg-black dark:text-white"
//             aria-label="Deploy on Vercel"
//             href="https://vercel.com/templates/next.js/nextjs-commerce"
//           >
//             <span className="px-3">▲</span>
//             <hr className="h-full border-r border-neutral-200 dark:border-neutral-700" />
//             <span className="px-3">Deploy</span>
//           </a>
//         </div>
//       </div>
//       <div className="border-t border-neutral-200 py-6 text-sm dark:border-neutral-700">
//         <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-1 px-4 md:flex-row md:gap-0 md:px-4 min-[1320px]:px-0">
//           <p>
//             &copy; {copyrightDate} {copyrightName}
//             {copyrightName.length && !copyrightName.endsWith('.') ? '.' : ''} All rights reserved.
//           </p>
//           <hr className="mx-4 hidden h-4 w-[1px] border-l border-neutral-400 md:inline-block" />
//           <p>Designed in California</p>
//           <p className="md:ml-auto">
//             <a href="https://vercel.com" className="text-black dark:text-white">
//               Crafted by ▲ Vercel
//             </a>
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// }

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import AppleIcon from './apple-icon.png';
import FooterImage from './footer img.png';
import GooglePlay from './google-play-store.png';
import Linkedin from './icn-linkedin.png';
import LogoArab from './logo-arab-text.png';

const Footer: React.FC = () => {
  return (
    <div
      className="responsive-card"
      style={{
        maxWidth: '100%',
        margin: '0 auto',
        padding: '20px',
        borderRadius: '10px',
        marginBottom: '1%',
        display: 'block',
        fontFamily: 'sans-serif'
      }}
    >
      <div
        style={{
          position: 'relative',
          flex: '1',
          alignSelf: 'stretch',
          fontSize: '15px',
          backgroundColor: '#464646',
          color: '#fff',
          padding: '30px 0',
          boxSizing: 'inherit',
          display: 'block'
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            maxWidth: '80%',
            margin: '0 auto',
            boxSizing: 'inherit'
          }}
        >
          <div
            style={{
              width: '100%',
              display: 'grid',
              alignItems: 'center',
              marginBottom: '10px',
              gridGap: '10px',
              gridTemplateColumns: 'repeat(1, 1fr)!important',
              boxSizing: 'inherit'
            }}
          >
            <div
              style={{
                display: 'grid!important',
                gridTemplateColumns: 'repeat(1, 1fr)',
                gridGap: '25px!important',
                justifyContent: 'center',
                marginBottom: '25px',
                boxSizing: 'inherit'
              }}
            >
              <div
                style={{
                  gridGap: '30px',
                  display: 'grid',
                  textAlign: 'center',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
                  boxSizing: 'inherit'
                }}
              >
                <div style={{ display: 'flex', flexDirection: 'column', boxSizing: 'inherit' }}>
                  <h3
                    style={{
                      fontFamily: 'sans-serif',
                      marginTop: '0',
                      textTransform: 'uppercase',
                      fontSize: '17px',
                      boxSizing: 'inherit',
                      marginBlockStart: '1em',
                      marginBlockEnd: '1em',
                      marginInlineStart: '0px',
                      marginInlineEnd: '0px',
                      fontWeight: 'bold',
                      textAlign: 'center'
                    }}
                  >
                    CONTACT
                  </h3>
                  <ul
                    style={{
                      fontSize: '15px',
                      color: '#fff',
                      fontFamily: 'sans-serif',
                      boxSizing: 'inherit'
                    }}
                  >
                    <li
                      style={{
                        listStyleType: 'none',
                        fontFamily: 'sans-serif',
                        fontSize: '14px',
                        boxSizing: 'inherit',
                        display: 'list-item'
                      }}
                    >
                      Contact us: +971 4 3382911
                    </li>
                    <li
                      style={{
                        listStyleType: 'none',
                        fontFamily: 'sans-serif',
                        fontSize: '14px',
                        boxSizing: 'inherit',
                        display: 'list-item'
                      }}
                    >
                      Call us: 7:45 a.m to 10:00 p.m
                    </li>
                    <li
                      style={{
                        listStyleType: 'none',
                        fontFamily: 'sans-serif',
                        fontSize: '14px',
                        boxSizing: 'inherit',
                        display: 'list-item'
                      }}
                    >
                      P.O. Box: 49337, Sheikh Zayed Road, Dubai, UAE
                    </li>
                  </ul>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', boxSizing: 'inherit' }}>
                  <h3
                    style={{
                      fontFamily: 'sans-serif',
                      marginTop: '0',
                      textTransform: 'uppercase',
                      fontSize: '17px',
                      boxSizing: 'inherit',
                      marginBlockStart: '1em',
                      marginBlockEnd: '1em',
                      marginInlineStart: '0px',
                      marginInlineEnd: '0px',
                      fontWeight: 'bold',
                      textAlign: 'center'
                    }}
                  >
                    CONTACT
                  </h3>
                  <ul
                    style={{
                      fontSize: '15px',
                      color: '#fff',
                      fontFamily: 'sans-serif',
                      boxSizing: 'inherit'
                    }}
                  >
                    <li
                      style={{
                        listStyleType: 'none',
                        fontFamily: 'sans-serif',
                        fontSize: '14px',
                        boxSizing: 'inherit',
                        display: 'list-item'
                      }}
                    >
                      Contact us: +971 4 3382911
                    </li>
                    <li
                      style={{
                        listStyleType: 'none',
                        fontFamily: 'sans-serif',
                        fontSize: '14px',
                        boxSizing: 'inherit',
                        display: 'list-item'
                      }}
                    >
                      Call us: 7:45 a.m to 10:00 p.m
                    </li>
                    <li
                      style={{
                        listStyleType: 'none',
                        fontFamily: 'sans-serif',
                        fontSize: '14px',
                        boxSizing: 'inherit',
                        display: 'list-item'
                      }}
                    >
                      P.O. Box: 49337, Sheikh Zayed Road, Dubai, UAE
                    </li>
                  </ul>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', boxSizing: 'inherit' }}>
                  <h3
                    style={{
                      fontFamily: 'sans-serif',
                      marginTop: '0',
                      textTransform: 'uppercase',
                      fontSize: '17px',
                      boxSizing: 'inherit',
                      marginBlockStart: '1em',
                      marginBlockEnd: '1em',
                      marginInlineStart: '0px',
                      marginInlineEnd: '0px',
                      fontWeight: 'bold',
                      textAlign: 'center'
                    }}
                  >
                    CONTACT
                  </h3>
                  <ul
                    style={{
                      fontSize: '15px',
                      color: '#fff',
                      fontFamily: 'sans-serif',
                      boxSizing: 'inherit'
                    }}
                  >
                    <li
                      style={{
                        listStyleType: 'none',
                        fontFamily: 'sans-serif',
                        fontSize: '14px',
                        boxSizing: 'inherit',
                        display: 'list-item'
                      }}
                    >
                      Contact us: +971 4 3382911
                    </li>
                    <li
                      style={{
                        listStyleType: 'none',
                        fontFamily: 'sans-serif',
                        fontSize: '14px',
                        boxSizing: 'inherit',
                        display: 'list-item'
                      }}
                    >
                      Call us: 7:45 a.m to 10:00 p.m
                    </li>
                    <li
                      style={{
                        listStyleType: 'none',
                        fontFamily: 'sans-serif',
                        fontSize: '14px',
                        boxSizing: 'inherit',
                        display: 'list-item'
                      }}
                    >
                      P.O. Box: 49337, Sheikh Zayed Road, Dubai, UAE
                    </li>
                  </ul>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', boxSizing: 'inherit' }}>
                  <h3
                    style={{
                      fontFamily: 'sans-serif',
                      marginTop: '0',
                      textTransform: 'uppercase',
                      fontSize: '17px',
                      boxSizing: 'inherit',
                      marginBlockStart: '1em',
                      marginBlockEnd: '1em',
                      marginInlineStart: '0px',
                      marginInlineEnd: '0px',
                      fontWeight: 'bold',
                      textAlign: 'center'
                    }}
                  >
                    CONTACT
                  </h3>
                  <ul
                    style={{
                      fontSize: '15px',
                      color: '#fff',
                      fontFamily: 'sans-serif',
                      boxSizing: 'inherit'
                    }}
                  >
                    <li
                      style={{
                        listStyleType: 'none',
                        fontFamily: 'sans-serif',
                        fontSize: '14px',
                        boxSizing: 'inherit',
                        display: 'list-item'
                      }}
                    >
                      Contact us: +971 4 3382911
                    </li>
                    <li
                      style={{
                        listStyleType: 'none',
                        fontFamily: 'sans-serif',
                        fontSize: '14px',
                        boxSizing: 'inherit',
                        display: 'list-item'
                      }}
                    >
                      Call us: 7:45 a.m to 10:00 p.m
                    </li>
                    <li
                      style={{
                        listStyleType: 'none',
                        fontFamily: 'sans-serif',
                        fontSize: '14px',
                        boxSizing: 'inherit',
                        display: 'list-item'
                      }}
                    >
                      P.O. Box: 49337, Sheikh Zayed Road, Dubai, UAE
                    </li>
                  </ul>
                </div>
              </div>
              {/* <div style={{ gridGap: '25px', display: 'grid', textAlign: 'center', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', boxSizing: 'inherit' }}>
                <div style={{ display: 'flex', flexDirection: 'column', boxSizing: 'inherit' }}>
                  <h3 style={{ fontFamily: 'sans-serif', marginTop: '0', textTransform: 'uppercase', fontSize: '17px', boxSizing: 'inherit', marginBlockStart: '1em', marginBlockEnd: '1em', marginInlineStart: '0px', marginInlineEnd: '0px', fontWeight: 'bold', textAlign: 'center' }}>CONTACT</h3>
                  <ul style={{ fontSize: '15px', color: '#fff', fontFamily: 'sans-serif', boxSizing: 'inherit' }}>
                    <li style={{ listStyleType: 'none', fontFamily: 'sans-serif', fontSize: '14px', boxSizing: 'inherit', display: 'list-item' }}>Contact us: +971 4 3382911</li>
                    <li style={{ listStyleType: 'none', fontFamily: 'sans-serif', fontSize: '14px', boxSizing: 'inherit', display: 'list-item' }}>Call us: 7:45 a.m to 10:00 p.m</li>
                    <li style={{ listStyleType: 'none', fontFamily: 'sans-serif', fontSize: '14px', boxSizing: 'inherit', display: 'list-item' }}>P.O. Box: 49337, Sheikh Zayed Road, Dubai, UAE</li>
                  </ul>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', boxSizing: 'inherit' }}>
                  <h3 style={{ fontFamily: 'sans-serif', marginTop: '0', textTransform: 'uppercase', fontSize: '17px', boxSizing: 'inherit', marginBlockStart: '1em', marginBlockEnd: '1em', marginInlineStart: '0px', marginInlineEnd: '0px', fontWeight: 'bold', textAlign: 'center' }}>CONTACT</h3>
                  <ul style={{ fontSize: '15px', color: '#fff', fontFamily: 'sans-serif', boxSizing: 'inherit' }}>
                    <li style={{ listStyleType: 'none', fontFamily: 'sans-serif', fontSize: '14px', boxSizing: 'inherit', display: 'list-item' }}>Contact us: +971 4 3382911</li>
                    <li style={{ listStyleType: 'none', fontFamily: 'sans-serif', fontSize: '14px', boxSizing: 'inherit', display: 'list-item' }}>Call us: 7:45 a.m to 10:00 p.m</li>
                    <li style={{ listStyleType: 'none', fontFamily: 'sans-serif', fontSize: '14px', boxSizing: 'inherit', display: 'list-item' }}>P.O. Box: 49337, Sheikh Zayed Road, Dubai, UAE</li>
                  </ul>
                </div>
              </div> */}
            </div>

            <div
              style={{
                display: 'grid',
                alignItems: 'center',
                gridTemplateColumns: '1fr 2fr',
                gridGap: '30px',
                boxSizing: 'inherit'
              }}
            >
              <div
                style={{
                  textAlign: 'center',
                  boxSizing: 'inherit',
                  display: 'block',
                  fontSize: '15px',
                  color: '#fff'
                }}
              >
                <Image
                  src={FooterImage}
                  alt="Footer-image"
                  style={{
                    width: '190px',
                    boxSizing: 'inherit',
                    overflowClipMargin: 'content-box',
                    overflow: 'clip',
                    textAlign: 'center'
                  }}
                />
              </div>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(1, 1fr)',
                  height: '100%',
                  gap: '20px',
                  boxSizing: 'inherit'
                }}
              >
                <div style={{ textAlign: 'center', boxSizing: 'inherit', display: 'block' }}>
                  <form
                    style={{
                      boxSizing: 'inherit',
                      display: 'block',
                      marginTop: '0em',
                      textAlign: 'center'
                    }}
                  >
                    <div
                      style={{
                        backgroundColor: '#a8a8a8',
                        borderRadius: '25px',
                        color: '#fff',
                        display: 'flex',
                        padding: '5px 13px',
                        justifyContent: 'space-between',
                        boxSizing: 'inherit'
                      }}
                    >
                      <label
                        style={{ fontSize: '14px', boxSizing: 'inherit', cursor: 'default' }}
                      ></label>
                      <input
                        type="email"
                        className="custom-input"
                        placeholder="SUBSCRIBE TO NEWSLETTER"
                        style={{
                          fontFamily: 'sans-serif',
                          width: '100%',
                          minWidth: '60px',
                          textOverflow: 'ellipsis',
                          border: 'none',
                          backgroundColor: 'transparent',
                          color: '#ffffff',
                          borderRadius: '25px',
                          fontSize: '14px',
                          padding: '8px 15px',
                          textDecoration: 'none',
                          boxSizing: 'inherit',
                          textRendering: 'auto',
                          letterSpacing: 'normal',
                          wordSpacing: 'normal',
                          lineHeight: 'normal',
                          textTransform: 'none',
                          textIndent: '0px',
                          textShadow: 'none',
                          display: 'inline-block',
                          textAlign: 'start',
                          appearance: 'auto',
                          cursor: 'text',
                          margin: '0em'
                        }}
                      />
                      <button
                        style={{
                          width: '100px',
                          cursor: 'pointer',
                          padding: '12px 20px',
                          backgroundColor: '#29a637',
                          fontFamily: 'sans-serif',
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
                          Submit
                        </label>
                      </button>
                    </div>
                  </form>
                </div>
                <div
                  style={{
                    display: 'flex',
                    width: '100%',
                    justifyContent: 'center',
                    boxSizing: 'inherit'
                  }}
                >
                  <div style={{ textAlign: 'center', boxSizing: 'inherit', display: 'block' }}>
                    <Image
                      src={LogoArab}
                      alt="LogoArab-Img"
                      style={{
                        marginTop: '35px',
                        width: '175px',
                        boxSizing: 'inherit',
                        overflowClipMargin: 'content-box',
                        overflow: 'clip'
                      }}
                    />
                  </div>
                  <div
                    style={{
                      margin: '0 45px',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      boxSizing: 'inherit'
                    }}
                  >
                    <div
                      style={{
                        borderLeft: '1px solid #ffffff',
                        height: '95%',
                        boxSizing: 'inherit',
                        display: 'block'
                      }}
                    ></div>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', boxSizing: 'inherit' }}>
                    <p
                      style={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        fontFamily: 'sans-serif',
                        margin: '14px 0',
                        fontSize: '14px',
                        boxSizing: 'inherit',
                        marginBlockStart: '1em',
                        marginBlockEnd: '1em',
                        marginInlineStart: '0px',
                        marginInlineEnd: '0px',
                        color: '#ffffff'
                      }}
                    >
                      DOWNLOAD OUR APP:
                    </p>
                    <div
                      style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(2, max-content)',
                        marginBottom: '15px',
                        marginTop: '-10px',
                        gap: '10px',
                        justifyContent: 'flex-end',
                        boxSizing: 'inherit'
                      }}
                    >
                      <div style={{ textAlign: 'right', boxSizing: 'inherit', display: 'block' }}>
                        <Link
                          style={{
                            boxSizing: 'inherit',
                            textDecoration: 'none',
                            fontSize: '14px',
                            cursor: 'pointer'
                          }}
                          href="https://apps.apple.com/us/app/organic-grocery-online/id1352968357"
                        >
                          <Image
                            src={AppleIcon}
                            alt="AppleIcon-image"
                            style={{
                              width: '100%',
                              boxSizing: 'inherit',
                              overflowClipMargin: 'content-box',
                              overflow: 'clip'
                            }}
                          />
                        </Link>
                      </div>
                      <div style={{ textAlign: 'right', boxSizing: 'inherit', display: 'block' }}>
                        <Link
                          style={{
                            boxSizing: 'inherit',
                            textDecoration: 'none',
                            fontSize: '14px',
                            cursor: 'pointer'
                          }}
                          href="https://play.google.com/store/apps/details?id=app.organicfood.com.organicfoodcafe&hl=es_419&gl=US"
                        >
                          <Image
                            src={GooglePlay}
                            alt="GooglePlay-image"
                            style={{
                              width: '100%',
                              boxSizing: 'inherit',
                              overflowClipMargin: 'content-box',
                              overflow: 'clip'
                            }}
                          />
                        </Link>
                      </div>
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        boxSizing: 'inherit'
                      }}
                    >
                      <Link
                        style={{
                          margin: '0 3px',
                          textDecoration: 'none',
                          fontSize: '14px',
                          boxSizing: 'inherit'
                        }}
                        href="https://www.linkedin.com/in/organicfoodsandcafe/"
                      >
                        <Image
                          src={Linkedin}
                          alt="Linkedin-image"
                          style={{
                            height: '35px',
                            width: '35px',
                            boxSizing: 'inherit',
                            overflowClipMargin: 'content-box',
                            overflow: 'clip'
                          }}
                        />
                      </Link>
                      <Link
                        style={{
                          margin: '0 3px',
                          textDecoration: 'none',
                          fontSize: '14px',
                          boxSizing: 'inherit'
                        }}
                        href="https://www.linkedin.com/in/organicfoodsandcafe/"
                      >
                        <Image
                          src={Linkedin}
                          alt="Linkedin-image"
                          style={{
                            height: '35px',
                            width: '35px',
                            boxSizing: 'inherit',
                            overflowClipMargin: 'content-box',
                            overflow: 'clip'
                          }}
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              style={{
                borderBottom: '1px solid #ffffff',
                margin: '15px 0',
                boxSizing: 'inherit',
                display: 'block'
              }}
            ></div>

            <div
              style={{
                textAlign: 'center',
                display: 'grid',
                alignItems: 'center',
                justifyContent: 'center',
                gridTemplateColumns: 'repeat(auto-fit, minmax(90px, 1fr))',
                gap: '10px',
                padding: '10px 0 0',
                boxSizing: 'inherit'
              }}
            >
              <div style={{ textAlign: 'center', boxSizing: 'inherit', display: 'block' }}>
                <Link href="#">Stores Locator</Link>
              </div>
              <div style={{ textAlign: 'center', boxSizing: 'inherit', display: 'block' }}>
                <Link href="#">Terms & Conditions</Link>
              </div>
              <div style={{ textAlign: 'center', boxSizing: 'inherit', display: 'block' }}>
                <Link href="#">Sitemap</Link>
              </div>
              <div style={{ textAlign: 'center', boxSizing: 'inherit', display: 'block' }}>
                <Link href="#">Contact Us</Link>
              </div>
              <div style={{ textAlign: 'center', boxSizing: 'inherit', display: 'block' }}>
                <Link href="#">CR Number: 1010626349</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
