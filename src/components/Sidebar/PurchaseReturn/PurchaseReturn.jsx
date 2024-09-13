import React, { useState } from 'react'
import { MdKeyboardReturn } from 'react-icons/md';
import './PurchaseReturn.css';
import { Link } from 'react-router-dom';
import { encodePath } from '../../../utilities/Utils';
const PurchaseReturn = () => {
  const [activeMenu, setActiveMenu] = useState('');
  const handleMenuClick = (menuId) => {
    setActiveMenu(activeMenu === menuId ? '' : menuId);
  };

  return (
    <>
      <div>
        <li className='mb-1'>
          <span className={`btn btn-info d-inline-flex align-items-center rounded border-info border-2 purchase-return-header w-100 ${activeMenu === 'purchase-return-collapse' ? '' : 'collapsed'}`}
            onClick={() => handleMenuClick('purchase-return-collapse')}
            aria-expanded={activeMenu === 'purchase-return-collapse'}
          >
            <MdKeyboardReturn className='me-2' /> Purchase Return
          </span>
          <div className={`collapse ps-2 ${activeMenu === 'purchase-return-collapse' ? 'show' : ''}`} id="purchase-return-collapse">
            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small ">
              <div className='button'>
                <Link to={`/${encodePath('purchase-return-note')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2  d-inline-flex align-items-center rounded border-2 admin-Sub-button  w-100 text-dark`}
                  >
                    Purchase Return-Note
                  </span>
                </Link>
              </div>
              <div className='button'>
                <Link to={`/${encodePath('purchase-return-challan')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2  d-inline-flex align-items-center rounded border-2 admin-Sub-button  w-100 text-dark`}
                  >
                    Purchase Return-Challan
                  </span>
                </Link>
              </div>
              <div className='button'>
                <Link to={`/${encodePath('purchase-return-book')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2  d-inline-flex align-items-center rounded border-2 admin-Sub-button  w-100 text-dark`}
                  >
                    Purchase Return Book
                  </span>
                </Link>
              </div>
              <div className='button'>
                <Link to={`/${encodePath('p-return-challan-book')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2  d-inline-flex align-items-center rounded border-2 admin-Sub-button  w-100 text-dark`}
                  >
                    P-ReturnChallanBook
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

export default PurchaseReturn;