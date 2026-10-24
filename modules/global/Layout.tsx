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
      <div className="content">{children}</div>
      <Footer />

      <style jsx>{`
        .content {
          flex: 1;
        }
      `}</style>
    </div>
  );
};

export default Layout;
