import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  console.log('Footer loaded');
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-background px-4 md:px-6 py-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
        <p>&copy; {currentYear} CommerceIQ. All rights reserved.</p>
        <nav className="flex gap-4 mt-2 md:mt-0">
          <Link to="#" className="hover:text-primary transition-colors">
            Support
          </Link>
          <Link to="#" className="hover:text-primary transition-colors">
            Terms of Service
          </Link>
          <Link to="#" className="hover:text-primary transition-colors">
            Privacy Policy
          </Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;