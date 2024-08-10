import React, { useState } from "react";
import "./GST.css";
const GST = () => {
  const [activeMenu, setActiveMenu] = useState('');
  const handleMenuClick = (menu) => {
    setActiveMenu(activeMenu === menu ? '' : menu)
  };
  return (
    <>
      <li className="mb-1">
        <span
          className={`btn btn-toggle d-inline-flex align-items-center rounded border-2 gst-header fw-bold w-75 ${activeMenu === 'gst-collapse' ? '' : 'collapsed'}`}
          onClick={() => handleMenuClick('gst-collapse')}
          aria-expanded={activeMenu === 'gst-collapse'}
        >
          GST
        </span>
        <div className={`collapse ps-3 ${activeMenu === 'gst-collapse' ? 'show' : ''}`} id="gst-collapse">
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
export default GST;