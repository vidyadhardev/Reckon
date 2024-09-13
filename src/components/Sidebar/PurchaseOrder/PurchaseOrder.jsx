import React, { useState } from 'react'
import { RiListOrdered } from 'react-icons/ri';
import './PurchaseOrder.css';
import { Link } from 'react-router-dom';
import { encodePath } from '../../../utilities/Utils';
const PurchaseOrder = () => {
  const [activeMenu, setActiveMenu] = useState('');
  const handleMenuClick = (menuId) => {
    setActiveMenu(activeMenu === menuId ? '' : menuId);
  };

  return (
    <>
      <div>
        <li className='mb-1'>
          <span className={`btn btn-info d-inline-flex align-items-center rounded border-info border-2 purchase-order-header w-100 ${activeMenu === 'purchase-order-collapse' ? '' : 'collapsed'}`}
            onClick={() => handleMenuClick('purchase-order-collapse')}
            aria-expanded={activeMenu === 'purchase-order-collapse'}
          >
            <RiListOrdered className='me-2' /> Purchase Order
          </span>
          <div className={`collapse ps-2 ${activeMenu === 'purchase-order-collapse' ? 'show' : ''}`} id="purchase-order-collapse">
            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small ">
              <div className='button'>
                <Link to={`/${encodePath('purchase-order')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2  d-inline-flex align-items-center rounded border-2 admin-Sub-button  w-100 text-dark`}
                  >
                    Purchase Order
                  </span>
                </Link>
              </div>
              <div className='button'>
                <Link to={`/${encodePath('re-order-system')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2  d-inline-flex align-items-center rounded border-2 admin-Sub-button  w-100 text-dark`}
                  >
                    Re-Order System
                  </span>
                </Link>
              </div>
              <div className='button'>
              <Link to={`/${encodePath('on-line-order-print')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2  d-inline-flex align-items-center rounded border-2 admin-Sub-button  w-100 text-dark`}
                  >
                    On Line Order Print
                  </span>
                </Link>
              </div>
              <div className='button'>
                <Link to={`/${encodePath('purchase-order-register')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2  d-inline-flex align-items-center rounded border-2 admin-Sub-button  w-100 text-dark`}
                  >
                    Purchase Order Register
                  </span>
                </Link>
              </div>
              <div className='button'>
                <Link to={`/${encodePath('party-po')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2  d-inline-flex align-items-center rounded border-2 admin-Sub-button  w-100 text-dark`}
                  >
                    Party P.O.
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

export default PurchaseOrder;