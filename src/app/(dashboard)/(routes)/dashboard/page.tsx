import { UserButton } from '@clerk/nextjs';

const Page = () => {
  return (
    <div>
      <h2>Dashboard Page</h2>
      <UserButton afterSignOutUrl={'/'} />
    </div>
  );
};

export default Page;
