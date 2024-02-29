import React from 'react';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className='h-full overflow-auto bg-[#111827]'>
      <div className='mx-auto h-full w-full max-w-screen-xl'>{children}</div>
    </main>
  );
};

export default Layout;
