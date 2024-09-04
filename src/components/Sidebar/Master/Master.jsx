import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SiMastodon } from "react-icons/si";
import LedgerMaster from "./LedgerMaster/Ledger_Master";
import LedgerNavigationPage from "./LedgerMaster/LedgerMainPage/LedgerNavigationPage";
import './Master.css';
const Master = () => {
  const [activeMenu, setActiveMenu] = useState('');
  const handleMenuClick = (menuId) => {
    setActiveMenu(activeMenu === menuId ? '' : menuId)
  };

  return (
    <>
      {/*  Master Start  */}
      <div className='master-fix'>
      <li className="mb-1 master-fix">
        <span
          className={`btn btn-toggle d-inline-flex rounded border-2 fw-bold master-header w-75 ${activeMenu === 'master-collapse' ? '' : 'collapsed'}`}
          onClick={() => handleMenuClick('master-collapse')}
          aria-expanded={activeMenu === 'master-collapse'}
        > 
          <Link to='/' className='master-button navigation-Link align-items-center justify-content-center text-decoration-none text-dark ' >
            <SiMastodon className='me-2' />
            Master
          </Link>
        </span>
        <div className={`collapse ms-1 mt-1  ${activeMenu === 'master-collapse' ? 'show' : ''}`} id="master-collapse">
            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small dropdownList">
              {/* Import Ledger Master Dropdown */}
              <LedgerMaster /> 
              {/* import On this component All Pages */}
              {/* <LedgerNavigationPage/> */}
          </ul>
        </div>
      </li>
      </div>

      {/*  Master End  */}
    </>
  )
};
export default Master