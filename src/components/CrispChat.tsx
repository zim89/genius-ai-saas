'use client';
import { useEffect } from 'react';
import { Crisp } from 'crisp-sdk-web';

const CrispChat = () => {
  useEffect(() => {
    Crisp.configure('58577449-93ad-47b2-b84d-f882c0cefbf7');
  }, []);

  return null;
};

export default CrispChat;
