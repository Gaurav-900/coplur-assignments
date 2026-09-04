import React from 'react';

function Home() {
  return (
    <div className="container mt-4">
      <div id="homeCarousel" className="carousel slide mb-5" data-bs-ride="carousel">
        <div className="carousel-inner rounded">
          <div className="carousel-item active bg-primary text-white p-5 text-center" style={{ height: '250px' }}>
            <h2>Welcome to Product Store App</h2>
            <p>Check out our brand new products page!</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
