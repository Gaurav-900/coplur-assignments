import React from 'react';
import { useParams, Link } from 'react-router-dom';
import productsData from './productsData';

function ProductDetail() {
  const { id } = useParams();
  const product = productsData.find((p) => p.id === parseInt(id));

  if (!product) {
    return <div className="container mt-4"><h3>Product Not Found</h3></div>;
  }

  return (
    <div className="container mt-4">
      <Link to="/products" className="btn btn-secondary mb-3">
        &larr; Back to Products
      </Link>
      <div className="card p-4 shadow">
        <div className="row">
          <div className="col-md-5">
            <img src={product.image} className="img-fluid rounded" alt={product.name} />
          </div>
          <div className="col-md-7">
            <h2>{product.name}</h2>
            <h4 className="text-success">{product.price}</h4>
            <p className="lead">{product.description}</p>
            <hr />
            <h5>Product Details:</h5>
            <p>{product.details}</p>
            <button className="btn btn-success btn-lg">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
