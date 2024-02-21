import { UserButton } from '@clerk/nextjs';
import MobileSidebar from '@/components/MobileSidebar';

const Navbar = () => {
  return (
    <div className='flex h-20 items-center'>
      <MobileSidebar />
      <div className='flex w-full justify-end'>
        <UserButton afterSignOutUrl='/' />
      </div>
    </div>
  );
};

export default Navbar;
