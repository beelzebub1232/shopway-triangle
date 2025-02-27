
import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../contexts/CartContext';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { Product } from '../../data/products';

interface CartItemProps {
  product: Product;
  quantity: number;
}

const CartItem: React.FC<CartItemProps> = ({ product, quantity }) => {
  const { updateQuantity, removeItem } = useCart();
  
  const handleIncrease = () => {
    updateQuantity(product.id, quantity + 1);
  };
  
  const handleDecrease = () => {
    if (quantity > 1) {
      updateQuantity(product.id, quantity - 1);
    } else {
      removeItem(product.id);
    }
  };
  
  const handleRemove = () => {
    removeItem(product.id);
  };

  return (
    <div className="flex items-center py-4 border-b border-border">
      {/* Product Image */}
      <Link to={`/product/${product.id}`} className="shrink-0">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-20 h-20 object-cover rounded-md"
        />
      </Link>
      
      {/* Product Info */}
      <div className="ml-4 flex-grow">
        <Link to={`/product/${product.id}`} className="font-medium hover:text-primary transition-colors">
          {product.name}
        </Link>
        <p className="text-sm text-muted-foreground">
          Category: {product.category}
        </p>
        <div className="flex items-center justify-between mt-2">
          <div className="text-lg font-bold">
            ${product.price.toFixed(2)}
          </div>
          
          <div className="flex items-center space-x-2">
            {/* Quantity Controls */}
            <div className="flex items-center border border-border rounded-md">
              <button 
                onClick={handleDecrease}
                className="px-2 py-1 text-muted-foreground hover:text-primary transition-colors"
              >
                <Minus size={16} />
              </button>
              
              <span className="px-2 py-1 min-w-[40px] text-center">
                {quantity}
              </span>
              
              <button 
                onClick={handleIncrease}
                className="px-2 py-1 text-muted-foreground hover:text-primary transition-colors"
              >
                <Plus size={16} />
              </button>
            </div>
            
            {/* Remove Button */}
            <button 
              onClick={handleRemove}
              className="p-2 text-muted-foreground hover:text-destructive transition-colors"
            >
              <Trash2 size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
