import React, { useState } from "react";
import './Inventory.css';
const Inventory = () => {
  const [activeMenu, setActiveMenu] = useState('');
  const handleMenuClick = (menuId) => {
    setActiveMenu(activeMenu === menuId ? '' : menuId); // Toggle active menu for collapsed
  };

  return (
    <>
      <li className="mb-1 ">
        <span
          className={`btn btn-toggle d-inline-flex align-items-center rounded border-2 fw-bold inventory-header w-75 ${activeMenu === 'inventory-collapse' ? '' : 'collapsed'}`}
          onClick={() => handleMenuClick('inventory-collapse')}
          aria-expanded={activeMenu === 'inventory-collapse'}
        >
          Inventory
        </span>
        <div className={`collapse ps-3 ${activeMenu === 'inventory-collapse' ? 'show' : ''}`} id="inventory-collapse">
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
export default Inventory;