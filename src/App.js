import React from 'react';
import './App.css';
import { Brand, CTA } from './components';
import { Features, Footer, Header, Possibility, WhatWV } from './containers';





function App() {
  return (
    <div className="app">
        
        <Header />
        <Brand />
        <WhatWV />
        <Features />
        <Possibility />
        <CTA />
        <Footer />
    </div>
  )
}

export default App