'use client';

import Button, { ButtonProps } from '@/app/components/button';
import { useEffect, useState } from 'react';

export default function ErrorButton(props: ButtonProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count > 2) {
      throw new Error('Error coused');
    }
  }, [count]);

  return (
    <Button {...props} onClick={() => setCount(count + 1)}>
      Cause Error
    </Button>
  );
}
