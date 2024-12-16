import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

function ProductDetail() {
    const { id } = useParams(); // Get product ID from route params
    const [product, setProduct] = useState(null);

    useEffect(() => {
        // Fetch single product details using Axios
        axios.get(`https://dummyjson.com/products/${id}`)
            .then(response => {
                setProduct(response.data); // Single product data
            })
            .catch(error => {
                console.error('Error fetching product details:', error);
            });
    }, [id]);

    if (!product) return <p>Loading...</p>;

    return (
        <div className="container mt-4">
            <Link to="/" className="btn btn-secondary mb-3 btn-back">
                &larr; Back to Home
            </Link>
            <div className="card product-detail-card">
                <img
                    src={product.thumbnail}
                    className="card-img-top product-image"
                    alt={product.title}
                />
                <div className="card-body">
                    <h1 className="card-title product-title">{product.title}</h1>
                    <p className="card-text product-price">Price: <strong>${product.price}</strong></p>
                    <p className="card-text product-description">Description: {product.description}</p>
                    <p className="card-text product-category">Category: <em>{product.category}</em></p>
                </div>
            </div>
        </div>
    );
}

export default ProductDetail;
