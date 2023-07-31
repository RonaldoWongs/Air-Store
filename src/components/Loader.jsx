import React from 'react';

const Loader = () => {
  return (
    <div className="loader">
      <svg className="curve" viewBox="0 0 220 220">
        {/* Aquí van los elementos SVG del loader */}
      </svg>
      <div className="blackhole">
        <div className="blackhole-circle" />
        <div className="blackhole-disc" />
      </div>
    </div>
  );
};

export default Loader;
