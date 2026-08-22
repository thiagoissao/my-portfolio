import * as React from 'react';
import Footer from './Footer';
import Masthead from './Masthead';
import { useRise } from './useRise';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  useRise();

  return (
    <div className="wrap">
      <Masthead />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
