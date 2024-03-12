import Image from 'next/image';
import React from 'react';
import ConsumerRights from './consumer-rights-logo.png';
import Certificates from './certificates.png';
import PaymentMethods from './payment-methods.png';

const Wrapper: React.FC = () => {
  return (
    <div
      style={{
        maxWidth: '85%',
        margin: '0 auto',
        padding: '20px',
        borderRadius: '10px',
        marginTop: '1%'
      }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '20px',
          padding: '20px',
          backgroundColor: '#fff',
          borderRadius: '10px',
          boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.05)'
        }}
      >
        <div style={{ textAlign: 'center' }}>
          <h3
            style={{
              fontFamily: 'Arial',
              textTransform: 'uppercase',
              margin: '0',
              fontSize: '17px',
              fontWeight: 'bold'
            }}
          >
            CONSUMER RIGHTS
          </h3>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: '10px'
            }}
          >
            <Image
              src={ConsumerRights}
              alt="ConsumerRightsImage"
              style={{ width: '55px', marginRight: '10px' }}
            />
            <p style={{ color: '#757575', margin: '0', fontSize: '14px' }}>
              Consumer protection law
            </p>
          </div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <h3
            style={{
              fontFamily: 'Arial',
              textTransform: 'uppercase',
              margin: '0',
              fontSize: '17px',
              fontWeight: 'bold'
            }}
          >
            Certificates
          </h3>
          <Image
            src={Certificates}
            alt="CertificatesImage"
            style={{ width: '100%', maxWidth: '215px', margin: '0 auto', marginTop: '15px' }}
          />
        </div>
        <div style={{ textAlign: 'center' }}>
          <h3
            style={{
              fontFamily: 'Arial',
              textTransform: 'uppercase',
              margin: '0',
              fontSize: '17px',
              fontWeight: 'bold'
            }}
          >
            Payment Options
          </h3>
          <p style={{ color: '#757575', margin: '0', fontSize: '14px', marginBottom: '10px' }}>
            Secure Online Payment
          </p>
          <Image
            src={PaymentMethods}
            alt="PaymentMethodsImage"
            style={{ width: '100%', maxWidth: '215px', margin: '0 auto' }}
          />
        </div>
      </div>
    </div>
  );
};

export default Wrapper;

// import Image from "next/image";
// import React from "react";
// import ConsumerRights from './consumer-rights-logo.png';
// import Certificates from './certificates.png';
// import PaymentMethods from './payment-methods.png'

// interface ObjItem {
//     id: number;
//     image: any;
//     title: string;
// }

// const arrObj: ObjItem[] = [
//     { id: 1, image: "", title: 'DJAJ MAHSHI' },
//     { id: 2, image: "", title: 'VEGETABLE SAMOSA' },
//     { id: 3, image: "", title: 'CHICHKEN SAMOSA' },
//     { id: 4, image: "", title: 'CHICKEN TIKKA' },
// ];

// const Wrapper: React.FC = () => {
//     return (
//         <div style={{
//             maxWidth: '85%',
//             margin: '0 auto',
//             padding: '20px',
//             borderRadius: '10px',
//             marginTop: "1%",
//             marginBottom: "1%"
//         }}>
//             <div style={{display:"grid", alignItems:"center", gridTemplateColumns:"repeat(auto-fit, minmax(50px))", padding:"50px, 125px", backgroundColor:"#fff", textAlign:"center", borderRadius:"10px", marginBottom:"35px", boxSizing:"inherit"}}>
//                 <div style={{boxSizing:"inherit"}}>
//                     <h3 style={{fontFamily:"Arial", textTransform:"uppercase", marginTop:"0", marginBottom:"8px", fontSize:"17px", boxSizing:"inherit", marginBlockStart:"1em", marginBlockEnd:"1em", marginInlineStart:"0px", marginInlineEnd:"0px", fontWeight:"bold", textAlign:"center"}}>CONSUMER RIGHTS</h3>
//                     <div style={{display:"grid", gridTemplateColumns:"55px max-content", gridGap:"10px", alignItems:"center", justifyContent:"center", boxSizing:"inherit"}}>
//                         <Image src={ConsumerRights} alt="ConsumerRightsImage" style={{width:"55px", boxSizing:"inherit", overflow:"clip", overflowClipMargin:"content-box"}} />
//                         <p style={{marginTop:"-3px", color:"#757575", margin:"0", fontSize:"14px", boxSizing:"inherit", marginBlockStart:"1em", marginBlockEnd:"1em", marginInlineStart:"0px", marginInlineEnd:"0px"}}>Consumer protection law</p>
//                     </div>
//                 </div>
//                 <div style={{width:"100%", height:"100%", display:"flex", justifyContent:"center", alignItems:"center", boxSizing:"inherit", textAlign:"center"}}>
//                     <div style={{borderLeft:"1px solid #aeaeae", height:"95%", boxSizing:"inherit"}}></div>
//                 </div>
//                 <div style={{borderBottom:"1px solid #aeaeae", width:"100%", height:"100%", display:"none", boxSizing:"inherit"}}></div>
//                 <div style={{boxSizing:"inherit"}}>
//                     <h3 style={{fontFamily:"Arial", textTransform:"uppercase", marginTop:"0", marginBottom:"8px", fontSize:"17px", boxSizing:"inherit", marginBlockStart:"1em", marginBlockEnd:"1em", marginInlineStart:"0px", marginInlineEnd:"0px", fontWeight:"bold"}}>Certificates</h3>
//                     <div style={{boxSizing:"inherit"}}>
//                         <Image src={Certificates} alt="CertificatesImage" style={{width:"215px", marginTop:"5px", boxSizing:"inherit", overflowClipMargin:"content-box", overflow:"clip"}} />
//                     </div>
//                 </div>
//                 <div style={{margin:"", width:"100%", height:"100%", display:"flex", justifyContent:"center", alignItems:"center", boxSizing:"inherit", textAlign:"center"}}>
//                     <div style={{borderLeft:"1px solid #aeaeae", height:"95%", boxSizing:"inherit"}}></div>
//                 </div>
//                 <div style={{borderBottom:"1px solid #aeaeae", margin:"", width:"100%", height:"100%", display:"none", boxSizing:"inherit"}}></div>
//                 <div style={{boxSizing:"inherit"}}>
//                     <h3 style={{fontFamily:"Arial", textTransform:"uppercase", marginTop:"0", marginBottom:"8px", fontSize:"17px", boxSizing:"inherit", marginBlockStart:"1em", marginBlockEnd:"1em", marginInlineStart:"0px", marginInlineEnd:"0px", fontWeight:"bold"}}>Payment Options</h3>
//                     <p style={{marginTop:"-3px", color:"#757575", margin:"0", fontSize:"14px", boxSizing:"inherit", marginBlockStart:"1em", marginBlockEnd:"1em", marginInlineStart:"0px", marginInlineEnd:"0px"}}>Secure Online Payment</p>
//                     <div style={{boxSizing:"inherit"}}>
//                         <Image src={PaymentMethods} alt="PaymentMethodsImage" style={{width:"215px", marginTop:"5px", boxSizing:"inherit", overflowClipMargin:"content-box", overflow:"clip"}} />
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Wrapper;
