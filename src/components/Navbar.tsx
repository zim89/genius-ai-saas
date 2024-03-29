import { UserButton } from '@clerk/nextjs';
import MobileSidebar from '@/components/MobileSidebar';
import { getApiLimitCount } from '@/lib/api-limit';
import { checkSubscription } from '@/lib/subscription';

const Navbar = async () => {
  const apiLimitCount = await getApiLimitCount();
  const isPro = await checkSubscription();

  return (
    <div className='flex h-20 items-center'>
      <MobileSidebar isPro={isPro} apiLimitCount={apiLimitCount} />
      <div className='flex w-full justify-end'>
        <UserButton afterSignOutUrl='/' />
      </div>
    </div>
  );
};

export default Navbar;
