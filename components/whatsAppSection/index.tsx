import React from 'react';
import Image from 'next/image';
import WhatsAppIcon from './whatsapp.png';
import Link from 'next/link';

const WhatsApp: React.FC = () => {
  return (
    <div
      style={{ boxSizing: 'inherit', direction: 'ltr', unicodeBidi: 'isolate', display: 'block' }}
    >
      <Link href="https://web.whatsapp.com/">
        <Image
          src={WhatsAppIcon}
          alt="WhatsAppIcon-image"
          style={{
            bottom: '30px',
            right: '30px',
            height: '4em',
            width: '4em',
            opacity: '1',
            overflow: 'hidden',
            position: 'fixed',
            zIndex: '2147483600',
            cursor: 'pointer',
            boxSizing: 'inherit',
            overflowClipMargin: 'content-box'
          }}
        />
      </Link>
    </div>
  );
};

export default WhatsApp;
