import { Button } from '@/components/ui/button';
import Link from 'next/link';

const HomePage = () => {
  const isSignedIn = true;
  return (
    <div>
      <h2>Home Page (unprotected)</h2>
      <Button variant='outline' className='rounded-full' asChild>
        <Link href={isSignedIn ? '/dashboard' : '/login'}>Get Started</Link>
      </Button>
    </div>
  );
};

export default HomePage;
