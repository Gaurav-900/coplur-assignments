import React from 'react';
import { Link } from 'react-router-dom';
import productsData from './productsData';

function Products() {
  return (
    <div className="container mt-4">
      <h2>Products List</h2>
      <div className="row mt-3">
        {productsData.map((product) => (
          <div className="col-md-4 mb-4" key={product.id}>
            <div className="card h-100 shadow-sm">
              <img src={product.image} className="card-img-top" alt={product.name} />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <h6 className="text-primary">{product.price}</h6>
                <p className="card-text">{product.description}</p>
                <Link to={`/products/${product.id}`} className="btn btn-primary">
                  More Info
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
