import React from 'react';
import { Link } from 'react-router-dom';

function ProductList({ products }) {
    return (
        <div className="row">
            {products.map(product => (
                <div className="col-md-4 col-sm-6 mb-4" key={product.id}>
                    <div className="card product-card">
                        <img
                            src={product.thumbnail}
                            className="card-img-top product-image"
                            alt={product.title}
                        />
                        <div className="card-body">
                            <h5 className="card-title">{product.title}</h5>
                            <p className="card-text text-muted">Price: <strong>${product.price}</strong></p>
                            <Link
                                to={`/product/${product.id}`}
                                className="btn btn-primary btn-custom"
                            >
                                View Details
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ProductList;
