'use client';
import Link from 'next/link';
import Image from 'next/image';
import { Montserrat } from 'next/font/google';
import { usePathname } from 'next/navigation';
import { routes } from '@/lib/constants';
import { cn } from '@/lib/utils';
import FreeCounter from '@/components/FreeCounter';

const montserrat = Montserrat({ weight: '600', subsets: ['latin'] });

interface Props {
  apiLimitCount: number;
  isPro: boolean;
  onClose?: () => void;
}

const Sidebar = ({ apiLimitCount = 0, isPro = false, onClose }: Props) => {
  const pathname = usePathname();

  return (
    <div className='flex h-full flex-col space-y-4 bg-[#111827] py-4 text-white'>
      <div className='flex-1 px-3 py-2'>
        <Link href={'/dashboard'} className='mb-14 flex items-center pl-3'>
          <div className='relative mr-4 h-8 w-8'>
            <Image fill alt='Logo' src='/logo.png' />
          </div>
          <h1 className={cn('text-2xl font-bold', montserrat.className)}>
            Genius
          </h1>
        </Link>
        <div className='space-y-1'>
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              onClick={onClose}
              className={cn(
                'group flex w-full cursor-pointer justify-start rounded-lg p-3 text-sm font-medium transition hover:bg-white/10 hover:text-white',
                pathname === route.href
                  ? 'bg-white/10 text-white'
                  : 'text-zinc-400'
              )}>
              <div className='flex flex-1 items-center'>
                <route.icon className={cn('mr-3 h-5 w-5', route.color)} />
                {route.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
      <FreeCounter apiLimitCount={apiLimitCount} isPro={isPro} />
    </div>
  );
};

export default Sidebar;
