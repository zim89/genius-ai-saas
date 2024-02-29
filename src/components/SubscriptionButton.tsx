'use client';
import axios from 'axios';
import { useState } from 'react';
import { Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Props {
  isPro: boolean;
}
const SubscriptionButton = ({ isPro = false }: Props) => {
  const [loading, setLoading] = useState(false);

  const onClick = async () => {
    try {
      setLoading(true);
      const response = await axios.get('/api/stripe');
      window.location.href = response.data.url;
    } catch (error) {
      console.log(error, 'BILLING_ERROR');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button
      variant={isPro ? 'default' : 'premium'}
      disabled={loading}
      onClick={onClick}>
      {isPro ? 'Manage Subscription' : 'Upgrade'}
      {!isPro && <Zap className='ml-2 h-4 w-4 fill-white' />}
    </Button>
  );
};

export default SubscriptionButton;
