import React from 'react';
import Sidebar from '@/components/Sidebar';
import Navbar from '@/components/Navbar';
import { getApiLimitCount } from '@/lib/api-limit';
import { checkSubscription } from '@/lib/subscription';

const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
  const apiLimitCount = await getApiLimitCount();
  const isPro = await checkSubscription();

  return (
    <div className='relative h-full'>
      <div className='hidden h-full bg-gray-900 md:fixed md:inset-y-0 md:flex md:w-72 md:flex-col'>
        <Sidebar isPro={isPro} apiLimitCount={apiLimitCount} />
      </div>
      <main className='pb-10 md:pl-72'>
        <div className='container'>
          <Navbar />
          {children}
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;
