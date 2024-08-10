// Loader.js
import React from 'react';
import './Loader.css';

const Loader = () => {
  return (
    <div className="loader">
      <div className="blinking-r">
        <img className='img' src='./logo.png' alt='loder' />
      </div>
      <p className='fs-5 text-primary align-content-center justify-content-center mt-5 fw-bold'> Loading Please Wait ...</p>
    </div>
  );
};

export default Loader;
