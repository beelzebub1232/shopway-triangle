
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShoppingBag, Clock, Shield, ArrowDown, Truck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { getFeaturedProducts, getCategories } from '../data/products';
import ProductCard from '../components/ui/ProductCard';

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const featuredProducts = getFeaturedProducts();
  const categories = getCategories();

  useEffect(() => {
    // Add animation classes once component mounts
    setIsLoaded(true);
    
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page-transition">
      {/* Hero Section */}
      <section className="min-h-[80vh] flex items-center relative overflow-hidden bg-gradient-to-br from-accent to-secondary">
        <div className="container mx-auto px-4 py-20 flex flex-col lg:flex-row items-center">
          <div className={`lg:w-1/2 text-center lg:text-left space-y-6 mb-10 lg:mb-0 ${isLoaded ? 'animate-fade-up' : 'opacity-0'}`}>
            <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm inline-block">
              Premium Quality
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight">
              Discover <span className="text-gradient">Exceptional</span> Products For Modern Living
            </h1>
            <p className="text-lg text-muted-foreground max-w-lg mx-auto lg:mx-0">
              Curated collection of premium products designed with precision and care.
              Experience quality that speaks for itself.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" asChild>
                <Link to="/products">Shop Now</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/about">Our Story</Link>
              </Button>
            </div>
          </div>
          
          <div className={`lg:w-1/2 relative ${isLoaded ? 'animate-scale-up' : 'opacity-0'}`}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-xl transform rotate-3"></div>
              <img 
                src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1399&q=80" 
                alt="Premium watch" 
                className="w-full rounded-xl shadow-lg"
              />
            </div>
            
            <div className="absolute top-1/2 -right-4 transform -translate-y-1/2 bg-white p-5 rounded-lg shadow-xl">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <ShoppingBag className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium">Limited Edition</p>
                  <p className="text-xs text-muted-foreground">While stocks last</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6" />
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 text-center rounded-lg transition-transform hover:scale-105">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Free Shipping</h3>
              <p className="text-muted-foreground">
                On all orders over $50. International shipping available.
              </p>
            </div>
            
            <div className="p-8 text-center rounded-lg transition-transform hover:scale-105">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">30-Day Returns</h3>
              <p className="text-muted-foreground">
                Not satisfied? Return within 30 days for a full refund.
              </p>
            </div>
            
            <div className="p-8 text-center rounded-lg transition-transform hover:scale-105">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Secure Payments</h3>
              <p className="text-muted-foreground">
                Your payment information is always safe and secure.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Products */}
      <section className="py-16 bg-accent">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-display font-bold mb-4">
              Featured Products
            </h2>
            <p className="text-muted-foreground">
              Discover our handpicked selection of premium products that exemplify quality, 
              design excellence, and exceptional functionality.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button asChild>
              <Link to="/products" className="inline-flex items-center">
                View All Products <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Categories Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-display font-bold mb-4">
              Shop by Category
            </h2>
            <p className="text-muted-foreground">
              Browse our carefully curated collections and find exactly what you're looking for.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <Link 
                key={category} 
                to={`/products?category=${category}`} 
                className="group relative overflow-hidden rounded-lg h-64 flex items-center justify-center"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent z-10"></div>
                <img 
                  src={`https://source.unsplash.com/random/600x400?${category.toLowerCase()}`} 
                  alt={category}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="relative z-20 text-center">
                  <div className="bg-white/90 px-6 py-4 rounded-lg shadow-lg">
                    <h3 className="text-lg font-bold">{category}</h3>
                    <p className="text-sm text-muted-foreground">{Math.floor(Math.random() * 20) + 5} products</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Ready to Experience Exceptional Quality?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who have chosen our premium products.
          </p>
          <Button 
            size="lg" 
            variant="secondary" 
            asChild
            className="bg-white text-primary hover:bg-white/90"
          >
            <Link to="/products">Shop Now</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
