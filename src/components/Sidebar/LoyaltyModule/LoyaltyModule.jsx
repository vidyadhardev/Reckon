import React, { useState } from 'react'
import { MdLoyalty } from 'react-icons/md';
import './LoyaltyModule.css';
import { Link } from 'react-router-dom';
import { encodePath } from '../../../utilities/Utils';
const LoyaltyModule = () => {
  const [activeMenu, setActiveMenu] = useState('');
  const handleMenuClick = (menuId) => {
    setActiveMenu(activeMenu === menuId ? '' : menuId);
  };

  return (
    <>
      <div>
        <li className='mb-1'>
          <span className={`btn btn-info d-inline-flex align-items-center rounded border-info border-2 loyalty-module-header w-100 ${activeMenu === 'inventory-collapse' ? '' : 'collapsed'}`}
            onClick={() => handleMenuClick('inventory-collapse')}
            aria-expanded={activeMenu === 'inventory-collapse'}
          >
            <MdLoyalty className='me-2' />Loyalty Module
          </span>
          <div className={`collapse ps-2 ${activeMenu === 'inventory-collapse' ? 'show' : ''}`} id="inventory-collapse">
            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small ">
              <div className='button'>
                <Link to={`/${encodePath('loyalty-master-entry')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button mt-1 w-100 text-dark`}
                  >
                    Loyalty Master Entry
                  </span>
                </Link>
              </div>
              <div className='button'>
                <Link to={`/${encodePath('card-received-entry')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button  w-100 text-dark`}
                  >
                    Card Received Entry
                  </span>
                </Link>
              </div>
              <div className='button'>
                <Link to={`/${encodePath('card-recharge-entry')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button mt-1 w-100 text-dark`}
                  >
                    Card Recharge Entry
                  </span>
                </Link>
              </div>
              <div className='button'>
                <Link to={`/${encodePath('gift-voucher-entry')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button  w-100 text-dark`}
                  >
                    Gift Voucher Entry
                  </span>
                </Link>
              </div>
            </ul>
          </div>
        </li>
      </div>
    </>
  )
}

export default LoyaltyModule