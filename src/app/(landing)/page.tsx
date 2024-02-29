import LandingNavbar from '@/components/LandingNavbar';
import LandingHero from '@/components/LandingHero';
import LandingContent from '@/components/LandingContent';

const Page = () => {
  return (
    <div className='h-full '>
      <LandingNavbar />
      <LandingHero />
      <LandingContent />
    </div>
  );
};

export default Page;
