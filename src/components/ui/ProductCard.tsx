
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Product } from '../../data/products';
import { useCart } from '../../contexts/CartContext';
import { Heart, ShoppingCart, Eye, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const navigate = useNavigate();
  const { addItem } = useCart();
  const [isLoading, setIsLoading] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  
  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addItem(product, 1);
  };
  
  const handleViewProduct = () => {
    navigate(`/product/${product.id}`);
  };
  
  const handleImageLoad = () => {
    setIsLoading(false);
  };

  return (
    <div 
      className="group relative rounded-lg overflow-hidden bg-white shadow-product transition-all duration-300 hover:shadow-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Product Image */}
      <div 
        className="aspect-square overflow-hidden bg-accent/30 relative cursor-pointer"
        onClick={handleViewProduct}
      >
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="loader"></span>
          </div>
        )}
        <img 
          src={product.image} 
          alt={product.name}
          className={`w-full h-full object-cover transition-all duration-500 ${
            isHovered ? 'scale-105' : 'scale-100'
          } ${isLoading ? 'opacity-0' : 'opacity-100 fade-image-in'}`}
          onLoad={handleImageLoad}
        />
        
        {/* Quick Actions Overlay */}
        <div className={`absolute inset-0 bg-black/5 flex items-center justify-center opacity-0 transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : ''
        }`}>
          <div className="flex space-x-2">
            <button 
              className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-primary hover:text-white transition-colors duration-300"
              onClick={(e) => {
                e.stopPropagation();
                // Add wishlist functionality
              }}
            >
              <Heart size={18} />
            </button>
            <button 
              className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-primary hover:text-white transition-colors duration-300"
              onClick={handleAddToCart}
            >
              <ShoppingCart size={18} />
            </button>
            <button 
              className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-primary hover:text-white transition-colors duration-300"
              onClick={(e) => {
                e.stopPropagation();
                navigate(`/product/${product.id}`);
              }}
            >
              <Eye size={18} />
            </button>
          </div>
        </div>
        
        {/* Product Tag */}
        {product.featured && (
          <div className="absolute top-2 left-2 bg-primary text-white text-xs px-2 py-1 rounded">
            Featured
          </div>
        )}
        
        {!product.inStock && (
          <div className="absolute top-2 right-2 bg-destructive text-white text-xs px-2 py-1 rounded">
            Out of Stock
          </div>
        )}
      </div>
      
      {/* Product Info */}
      <div className="p-4">
        <div className="flex items-center mb-1">
          <div className="text-amber-400 flex items-center">
            <Star size={14} fill="currentColor" />
            <span className="ml-1 text-xs font-medium">{product.rating}</span>
          </div>
          <span className="text-xs text-muted-foreground ml-2">
            ({product.reviews} reviews)
          </span>
        </div>
        
        <h3 
          className="font-medium text-base mb-1 cursor-pointer hover:text-primary transition-colors line-clamp-1"
          onClick={handleViewProduct}
        >
          {product.name}
        </h3>
        
        <p className="text-lg font-bold">${product.price.toFixed(2)}</p>
        
        <div className="mt-3">
          <Button 
            onClick={handleAddToCart}
            className="w-full"
            disabled={!product.inStock}
          >
            <ShoppingCart size={16} className="mr-2" />
            {product.inStock ? 'Add to Cart' : 'Out of Stock'}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
