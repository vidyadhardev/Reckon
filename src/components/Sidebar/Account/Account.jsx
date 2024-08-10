import React, { useState } from "react";
import "./Account.css";
const Account = () => {
  const [activeMenu, setActiveMenu] = useState('');
  const handleMenuClick = (menuId) => {
    setActiveMenu(activeMenu === menuId ? '' : menuId)
  };

  return (
    <>
      <li className="border-top mt-5 my-4"></li>
      <li className="mb-1">
        <span
          className={`btn btn-toggle d-inline-flex align-items-center rounded border-2 account-header fw-bold w-75 ${activeMenu === 'accounts-collapse' ? '' : 'collapsed'}`}
          onClick={() => handleMenuClick('accounts-collapse')}
          aria-expanded={activeMenu === 'accounts-collapse'}
        >
          Accounts
        </span>
        <div className={`collapse ps-3 ${activeMenu === 'accounts-collapse' ? 'show' : ''}`} id="accounts-collapse">
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
}
export default Account;