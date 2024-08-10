import React, { useState } from "react";
import { DropdownButton, Dropdown, DropdownMenu, DropdownItem, DropdownHeader, Button } from "react-bootstrap";
import { SiMastodon } from "react-icons/si";

import './Master.css';
const Master = () => {
  const [activeMenu, setActiveMenu] = useState('');
  const handleMenuClick = (menuId) => {
    setActiveMenu(activeMenu === menuId ? '' : menuId)
  };

  return (
    <>
      {/*  Master Start  */}
      <li className="mb-1">
        <span size='md'
          className={`btn btn-toggle d-inline-flex align-content-stretch align-items-center rounded border-2 fw-bold master-header w-75 ${activeMenu === 'master-collapse' ? '' : 'collapsed'}`}
          onClick={() => handleMenuClick('master-collapse')}
          aria-expanded={activeMenu === 'master-collapse'}
        >
        <SiMastodon className="me-2"/>  Master 
        </span>
        <div className={`collapse ps-3  ${activeMenu === 'master-collapse' ? 'show' : ''}`} id="master-collapse">
          <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small ">
            <li><a href="#" className=" d-inline-flex text-decoration-none rounded text-dark">Item Master</a></li>
            <li><a href="#" className=" d-inline-flex text-decoration-none rounded text-dark">Weekly</a></li>
            <li><a href="#" className=" d-inline-flex text-decoration-none rounded text-dark">Monthly</a></li>
            <li><a href="#" className=" d-inline-flex text-decoration-none rounded text-dark">Annually</a></li>
          </ul>
        </div>
      </li>
      {/*  Master End  */}
    </>
  )
};
export default Master