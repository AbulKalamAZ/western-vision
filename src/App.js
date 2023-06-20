import React from 'react';
import './App.css';
import { Brand, CTA } from './components';
import { ContactModal, Features, Footer, Header, Possibility, WhatWV } from './containers';





function App() {

  const [showDialog, setShowDialog] = React.useState(false);
  const open = () => setShowDialog(true);
  const close = () => setShowDialog(false);


  return (
    <div className="app">
        
      <Header openModal={open} />
      <ContactModal showDialog={showDialog} close={close} />
      <Brand />
      <WhatWV />
      <Features />
      <Possibility />
      <CTA openModal={open} />
      <Footer />

    </div>
  )
}

export default App