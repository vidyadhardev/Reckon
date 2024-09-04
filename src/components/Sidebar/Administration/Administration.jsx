import React, { useState } from 'react';
import MainAdministrationNavigation from './MainComapnyMaster/MainAdministrationNavigation.jsx';
import { Link } from 'react-router-dom';
import { SiSpring } from "react-icons/si";
import './Administration.css';

const Administration = () => {
  const [activeMenu, setActiveMenu] = useState(''); // State to manage active menu item
  const handleMenuClick = (menuId) => {
    setActiveMenu(activeMenu === menuId ? '' : menuId); // Toggle active menu for collapsed
  };
  return (
    <>
      <div className='reckonjj-fix'>
        <li className="mb-1 administration-fix">
          <span
            className={`btn btn-info d-inline-flex rounded border-info border-2 administration-header w-100 ${activeMenu === 'administration-collapse' ? '' : 'collapsed'}`}
            onClick={() => handleMenuClick('administration-collapse')}
            aria-expanded={activeMenu === 'administration-collapse'}
          >
            <Link className='administration-button navigation-Link align-items-center justify-content-center text-decoration-none text-dark ' >
              <SiSpring className='me-2' />
              Administration
            </Link>
          </span>
          <div className={`collapse ${activeMenu === 'administration-collapse' ? 'show' : ''}`} id="administration-collapse">
            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small dropdownList ">
              <MainAdministrationNavigation />
            
            </ul>
          </div>
        </li>
      </div>
    </>
  )
};
export default Administration;