import React, { useState } from 'react';
import Calculation from './Calculation/Calculation.jsx';
import MainAdministrationNavigation from './MainComapnyMaster/MainAdministrationNavigation.jsx';
import UserModule from './UserModule/UserModule.jsx';
import Configurations from './Configuration/Configurations.jsx';
import Utilities from './Utilities/Utilities.jsx'
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
      <div className='administration-fix'>
      <li className="mb-1 mt-3 admin-fix">
        <span
          className={`btn btn-toggle d-inline-flex  rounded border-2 fw-bold administration-header w-75 ${activeMenu === 'administration-collapse' ? '' : 'collapsed'}`}
          onClick={() => handleMenuClick('administration-collapse')}
          aria-expanded={activeMenu === 'administration-collapse'}
        > 
          <Link to='/' className='administration-button navigation-Link align-items-center justify-content-center text-decoration-none text-dark ' >
            <SiSpring className='me-2' />
            Administration
          </Link>
        </span>
        <div className={`collapse ms-1 mt-1  ${activeMenu === 'administration-collapse' ? 'show' : ''}`} id="administration-collapse">
          <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small dropdownList">
            <MainAdministrationNavigation />
            <UserModule />
            <Calculation />
            <Configurations />
            <Utilities />
          </ul>
        </div>
      </li>
      </div>
    </>
  )
};
export default Administration;