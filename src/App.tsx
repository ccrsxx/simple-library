import { useState, useEffect } from 'react';
import { Navbar, Bookholder, Footer } from './components';

export function App() {
  return (
    <div className='App'>
      <Navbar />
      <Bookholder />
      <Footer />
    </div>
  );
}
