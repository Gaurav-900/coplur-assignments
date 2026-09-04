import React from 'react';

function Home() {
  return (
    <div className="container mt-4">
      {/* Bootstrap Carousel Slider */}
      <div id="homeCarousel" className="carousel slide mb-5" data-bs-ride="carousel">
        <div className="carousel-inner rounded">
          <div className="carousel-item active bg-primary text-white p-5 text-center" style={{ height: '250px' }}>
            <h2>Welcome to React Web App</h2>
            <p>Learn components, state, and routing in React.</p>
          </div>
          <div className="carousel-item bg-success text-white p-5 text-center" style={{ height: '250px' }}>
            <h2>Interactive React Features</h2>
            <p>Explore Calculator, Counter, and Data Tables.</p>
          </div>
          <div className="carousel-item bg-dark text-white p-5 text-center" style={{ height: '250px' }}>
            <h2>Bootstrap Styled UI</h2>
            <p>Responsive design built with Bootstrap 5.</p>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#homeCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#homeCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>

      {/* Feature Sections */}
      <div className="row text-center">
        <div className="col-md-4 mb-3">
          <div className="card p-3 shadow-sm">
            <h3>Calculator</h3>
            <p>Perform basic arithmetic operations with ease.</p>
          </div>
        </div>
        <div className="col-md-4 mb-3">
          <div className="card p-3 shadow-sm">
            <h3>Counter</h3>
            <p>Increment and decrement count state dynamically.</p>
          </div>
        </div>
        <div className="col-md-4 mb-3">
          <div className="card p-3 shadow-sm">
            <h3>Tables</h3>
            <p>Display structured data using HTML tables.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
