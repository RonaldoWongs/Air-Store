import React from 'react';



const Header = () => {
  return (
    <header className="header-container">      
          <img
            className="carousel-image"
            src="https://1000marcas.net/wp-content/uploads/2020/01/Air-Jordan-logo.png"
            alt="Tennis Shoe 2"
            
          />   
      <div className="header-content">
        <h2 className="header-title">New Arrivals</h2>
        <p className="header-text">Check out our latest tennis shoe models!</p>
      </div>
    </header>
  );
};

export default Header;
