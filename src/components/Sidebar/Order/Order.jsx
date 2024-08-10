import React, { useState } from "react";
import './Order.css';
const Order = () => {
  const [activeMenu, setActiveMenu] = useState('');
  const handleMenuClick = (menuId) => {
    setActiveMenu(activeMenu === menuId ? '' : menuId)
  };

  return (
    <>
      <li className="mb-1">
        <span
          className={`btn btn-toggle d-inline-flex align-items-center rounded border-2 fw-bold order-header w-75 ${activeMenu === 'order-collapse' ? '' : 'collapsed'}`}
          onClick={() => handleMenuClick('order-collapse')}
          aria-expanded={activeMenu === 'order-collapse'}
        >
          Order
        </span>
        <div className={`collapse ps-3 ${activeMenu === 'order-collapse' ? 'show' : ''}`} id="order-collapse">
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
export default Order;