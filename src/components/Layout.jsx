// src/components/Layout.jsx
import React from 'react';
import Navbar from './NavBar';

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main className="container mx-auto p-4">{children}</main>
    </div>
  );
};

export default Layout;
