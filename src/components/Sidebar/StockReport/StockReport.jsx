import React, { useState } from "react";
import "./StockReport.css";
const StockReport = () => {
  const [activeMenu, setActiveMenu] = useState('');
  const handleMenuClick = (menu) => {
    setActiveMenu(activeMenu === menu ? '' : menu)
  };
  return (
    <>
      <li className="mb-1">
        <span
          className={`btn btn-toggle d-inline-flex align-items-center rounded border-2 fw-bold align-content-stretch stockreport-header w-75 ${activeMenu === 'stock report-collapse' ? '' : 'collapsed'}`}
          onClick={() => handleMenuClick('stock report-collapse')}
          aria-expanded={activeMenu === 'stock report-collapse'}
        >
          Stock Report
        </span>
        <div className={`collapse ps-3 ${activeMenu === 'stock report-collapse' ? 'show' : ''}`} id="stock report-collapse">
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
export default StockReport;