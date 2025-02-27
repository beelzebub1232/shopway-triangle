
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { products, getCategories } from '../data/products';
import ProductCard from '../components/ui/ProductCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Slider } from '@/components/ui/slider';
import { Search, FilterX, SlidersHorizontal } from 'lucide-react';

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || '';
  
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [searchTerm, setSearchTerm] = useState('');
  const [priceRange, setPriceRange] = useState([0, 300]);
  const [sortBy, setSortBy] = useState('featured');
  const [showFilters, setShowFilters] = useState(false);
  
  useEffect(() => {
    setCategories(getCategories());
    handleFiltering();
    
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, [selectedCategory, searchTerm, priceRange, sortBy]);
  
  const handleFiltering = () => {
    let filtered = [...products];
    
    // Filter by category
    if (selectedCategory) {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }
    
    // Filter by search term
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(product => 
        product.name.toLowerCase().includes(term) || 
        product.description.toLowerCase().includes(term) ||
        product.category.toLowerCase().includes(term)
      );
    }
    
    // Filter by price range
    filtered = filtered.filter(product => 
      product.price >= priceRange[0] && product.price <= priceRange[1]
    );
    
    // Sort products
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'name':
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'featured':
      default:
        filtered.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
        break;
    }
    
    setFilteredProducts(filtered);
    
    // Update URL parameters
    if (selectedCategory) {
      searchParams.set('category', selectedCategory);
    } else {
      searchParams.delete('category');
    }
    setSearchParams(searchParams);
  };
  
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category === selectedCategory ? '' : category);
  };
  
  const handlePriceChange = (values: number[]) => {
    setPriceRange(values);
  };
  
  const clearFilters = () => {
    setSelectedCategory('');
    setSearchTerm('');
    setPriceRange([0, 300]);
    setSortBy('featured');
    searchParams.delete('category');
    setSearchParams(searchParams);
  };

  return (
    <div className="container mx-auto px-4 py-8 pt-32 md:pt-24 page-transition">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Mobile Filter Toggle */}
        <button
          className="md:hidden flex items-center justify-center gap-2 w-full py-2 border border-border rounded-md"
          onClick={() => setShowFilters(!showFilters)}
        >
          <SlidersHorizontal size={18} />
          {showFilters ? 'Hide Filters' : 'Show Filters'}
        </button>
        
        {/* Filters Sidebar */}
        <aside className={`md:w-1/4 md:block ${showFilters ? 'block' : 'hidden'}`}>
          <div className="sticky top-24 rounded-lg border border-border p-6 space-y-6">
            <h2 className="text-xl font-bold mb-4">Filters</h2>
            
            {/* Search */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Search</label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  type="text"
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            
            {/* Categories */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Categories</label>
              <div className="flex flex-wrap gap-2">
                {categories.map(category => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => handleCategoryChange(category)}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
            
            {/* Price Range */}
            <div className="space-y-4">
              <div className="flex justify-between">
                <label className="text-sm font-medium">Price Range</label>
                <span className="text-sm text-muted-foreground">
                  ${priceRange[0]} - ${priceRange[1]}
                </span>
              </div>
              <Slider
                defaultValue={[0, 300]}
                min={0}
                max={300}
                step={10}
                value={priceRange}
                onValueChange={handlePriceChange}
              />
            </div>
            
            {/* Sorting */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Sort By</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-3 py-2 bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="name">Name</option>
              </select>
            </div>
            
            {/* Clear Filters */}
            <Button variant="ghost" onClick={clearFilters} className="w-full">
              <FilterX size={16} className="mr-2" /> Clear Filters
            </Button>
          </div>
        </aside>
        
        {/* Products Grid */}
        <div className="md:w-3/4">
          <h1 className="text-3xl font-bold mb-2">
            {selectedCategory || 'All Products'}
          </h1>
          <p className="text-muted-foreground mb-6">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'} found
          </p>
          
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 rounded-lg border border-border">
              <h3 className="text-lg font-medium mb-2">No products found</h3>
              <p className="text-muted-foreground mb-4">
                Try adjusting your filters or search term.
              </p>
              <Button onClick={clearFilters}>Clear All Filters</Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
