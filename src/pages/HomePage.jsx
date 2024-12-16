import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductList from '../components/ProductList';
import SearchBar from '../components/SearchBar';

function Homepage() {

    const [products, setProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        // Fetch products using Axios
        axios.get('https://dummyjson.com/products')
            .then(response => {
                setProducts(response.data.products); // Extract products array
            })
            .catch(error => {
                console.error('Error fetching product data:', error);
            });
    }, []);

    // Filter products by search term
    const filteredProducts = products.filter(product =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
            <div className="container mt-4">
                <h1 className="mb-4">E-commerce Store</h1>
                <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
                <ProductList products={filteredProducts} />
            </div>
        </>
    )
}

export default Homepage