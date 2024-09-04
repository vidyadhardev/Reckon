import React, { useState } from "react";
import { VscAccount } from "react-icons/vsc";
import "./Account.css";
const Account = () => {
  const [activeMenu, setActiveMenu] = useState('');
  const handleMenuClick = (menuId) => {
    setActiveMenu(activeMenu === menuId ? '' : menuId)
  };

  return (
    <>
      <li className="border-top my-3"></li>
      <li className="mb-1">
        <span
          className={`btn btn-info d-inline-flex align-items-center rounded border-info border-2 account-header fw-bold w-100 ${activeMenu === 'accounts-collapse' ? '' : 'collapsed'}`}
          onClick={() => handleMenuClick('accounts-collapse')}
          aria-expanded={activeMenu === 'accounts-collapse'}
        >
         <VscAccount className="me-2"/> Accounts
        </span>
        <div className={`collapse ps-3 ${activeMenu === 'accounts-collapse' ? 'show' : ''}`} id="accounts-collapse">
          <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
            <li><a href="#" className=" d-inline-flex text-decoration-none rounded">Login</a></li>
            <li><a href="#" className=" d-inline-flex text-decoration-none rounded">Sign Up</a></li>
            <li><a href="#" className=" d-inline-flex text-decoration-none rounded">Services</a></li>
    
          </ul>
        </div>
      </li>
    </>
  )
}
export default Account;