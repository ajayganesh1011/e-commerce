import React from 'react';
import { Routes, Route } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage';
import ProductDetail from './components/ProductDetail';
import ProductList from './components/ProductList';

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </>
  )
}

export default App
