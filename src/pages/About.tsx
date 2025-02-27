
import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">About Us</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="lead">
            Welcome to our premium online shopping destination. We are dedicated to providing exceptional products that enhance your everyday life.
          </p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">Our Story</h2>
          <p>
            Founded in 2022, our company began with a simple mission: to create a curated shopping experience that connects people with high-quality products. What started as a small passion project has grown into a thriving online marketplace that serves customers worldwide.
          </p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">Our Values</h2>
          <ul className="space-y-2">
            <li><strong>Quality:</strong> We carefully select every product in our catalog to ensure it meets our high standards.</li>
            <li><strong>Customer Experience:</strong> We believe shopping should be enjoyable and hassle-free from browsing to delivery.</li>
            <li><strong>Sustainability:</strong> We're committed to reducing our environmental impact through responsible business practices.</li>
            <li><strong>Innovation:</strong> We continuously explore new ways to improve our products and services.</li>
          </ul>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">Our Team</h2>
          <p>
            Our diverse team brings together expertise from retail, design, technology, and customer service. United by our passion for excellence, we work together to create the best possible shopping experience for our customers.
          </p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">Contact Us</h2>
          <p>
            We'd love to hear from you! If you have any questions, feedback, or concerns, please don't hesitate to reach out to our customer support team.
          </p>
          <p>
            Email: support@example.com<br />
            Phone: (123) 456-7890<br />
            Hours: Monday-Friday, 9am-5pm EST
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
