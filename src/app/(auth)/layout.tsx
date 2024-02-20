import React from 'react';

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className='flex h-full items-center justify-center bg-[#111827]'>
      {children}
    </main>
  );
};

export default AuthLayout;
