
import React, { useState } from "react";
import "./Fevorites.css";
const Fevorites = () => {
  const [activeMenu, setActiveMenu] = useState('');
  const handleMenuClick = (menu) => {
    setActiveMenu(activeMenu === menu ? '' : menu)
  };

  return (
    <> <li className="mb-1">
      <span
        className={`btn btn-toggle d-inline-flex align-items-center rounded border-2 fw-bold w-75 fevorite-header ${activeMenu === 'fevorites-collapse' ? '' : 'collapsed'}`}
        onClick={() => handleMenuClick('fevorites-collapse')}
        aria-expanded={activeMenu === 'fevorites-collapse'}
      >
        Fevorites
      </span>
      <div className={`collapse ps-3 ${activeMenu === 'fevorites-collapse' ? 'show' : ''}`} id="fevorites-collapse">
        <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
          <li><a href="#" className=" d-inline-flex text-decoration-none rounded">New</a></li>
          <li><a href="#" className=" d-inline-flex text-decoration-none rounded">Processed</a></li>
          <li><a href="#" className=" d-inline-flex text-decoration-none rounded">Shipped</a></li>
          <li><a href="#" className=" d-inline-flex text-decoration-none rounded">Returned</a></li>
        </ul>
      </div>
    </li>

    </>
  )
};
export default Fevorites;