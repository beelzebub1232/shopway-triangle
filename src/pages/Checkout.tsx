
import React from 'react';
import { Button } from '@/components/ui/button';

const Checkout = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>
      <p className="text-muted-foreground mb-6">
        This is the checkout page where users can complete their purchase.
      </p>
      <Button>Complete Order</Button>
    </div>
  );
};

export default Checkout;
