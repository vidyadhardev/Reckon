import React, { useState } from "react";
import "./Dispatch.css"
const Dispatch = () => {
  const [activeMenu, setActiveMenu] = useState('');
  const handleMenuClick = (menuId) => {
    setActiveMenu(activeMenu === menuId ? '' : menuId)
  }
  return (
    <>
      <li className="mb-1">
        <span
          className={`btn btn-toggle d-inline-flex align-items-center rounded border-2 fw-bold dispatch-header w-75 ${activeMenu === 'dispatch-collapse' ? '' : 'collapsed'}`}
          onClick={() => handleMenuClick('dispatch-collapse')}
          aria-expanded={activeMenu === 'dispatch-collapse'}
        >
          Dispatch
        </span>
        <div className={`collapse ps-3 ${activeMenu === 'dispatch-collapse' ? 'show' : ''}`} id="dispatch-collapse">
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
export default Dispatch;