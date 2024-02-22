'use client';
import { useEffect, useState } from 'react';
import { Zap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { MAX_FREE_COUNTS } from '@/lib/constants';
import { useProModal } from '@/hooks/useProModal';

interface Props {
  apiLimitCount: number;
  isPro: boolean;
}

const FreeCounter = ({ isPro = false, apiLimitCount = 0 }: Props) => {
  const [mounted, setMounted] = useState(false);
  const proModal = useProModal();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  if (isPro) {
    return null;
  }

  return (
    <div className='px-3'>
      <Card className='border-0 bg-white/10'>
        <CardContent className='py-6'>
          <div className='mb-4 space-y-2 text-center text-sm text-white'>
            <p>
              {apiLimitCount} / {MAX_FREE_COUNTS} Free Generations
            </p>
            <Progress
              className='h-3'
              value={(apiLimitCount / MAX_FREE_COUNTS) * 100}
            />
          </div>
          <Button
            onClick={proModal.onOpen}
            variant='premium'
            className='w-full'>
            Upgrade
            <Zap className='ml-2 h-4 w-4 fill-white' />
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default FreeCounter;
