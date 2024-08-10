import React, { useState } from "react";
import "./Report.css";
const Report = () => {
  const [activeMenu, setActiveMenu] = useState('');
  const handleMenuClick = (menu) => {
    setActiveMenu(activeMenu === menu ? '' : menu)
  };
  return (
    <>
      <li className="mb-1">
        <span
          className={`btn btn-toggle d-inline-flex align-items-center rounded border-2 report-header align-content-stretch fw-bold w-75 ${activeMenu === 'report-collapse' ? '' : 'collapsed'}`}
          onClick={() => handleMenuClick('report-collapse')}
          aria-expanded={activeMenu === 'report-collapse'}
        >
          Report
        </span>
        <div className={`collapse ps-3 ${activeMenu === 'report-collapse' ? 'show' : ''}`} id="report-collapse">
          <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
            <li><a href="#" className=" d-inline-flex text-decoration-none rounded ">New</a></li>
            <li><a href="#" className=" d-inline-flex text-decoration-none rounded">Processed</a></li>
            <li><a href="#" className=" d-inline-flex text-decoration-none rounded">Shipped</a></li>
            <li><a href="#" className=" d-inline-flex text-decoration-none rounded">Returned</a></li>
          </ul>
        </div>
      </li>
    </>
  )
};
export default Report;