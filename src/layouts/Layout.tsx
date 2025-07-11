import React from 'react';
import Header from '../components/Header';
import type { ReactNode } from 'react';

type LayoutProps = {
  children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Header />
      <main style={{ padding: '4rem' }}>{children}</main>
    </div>
  );
};

export default Layout;
