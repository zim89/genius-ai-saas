'use client';
import { useEffect, useState } from 'react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import Sidebar from '@/components/Sidebar';

interface Props {
  apiLimitCount: number;
  isPro: boolean;
}

const MobileSidebar = ({ apiLimitCount = 0, isPro = false }: Props) => {
  const [isMounted, setIsMounted] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  const onClose = () => setOpen(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant='ghost' size='icon' className='md:hidden'>
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side='left' className='p-0'>
        <Sidebar
          isPro={isPro}
          apiLimitCount={apiLimitCount}
          onClose={onClose}
        />
      </SheetContent>
    </Sheet>
  );
};

export default MobileSidebar;
