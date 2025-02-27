
import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-6">Product Detail</h1>
      <p>Viewing product with ID: {id}</p>
      <p className="text-muted-foreground mt-4">
        Product details will be displayed here. This is a placeholder page.
      </p>
    </div>
  );
};

export default ProductDetail;
