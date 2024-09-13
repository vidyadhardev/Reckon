import React, { useState } from 'react'
import { FaFileImport } from 'react-icons/fa';
import './PurchaseInvoice.css';
import { Link } from 'react-router-dom';
import { encodePath } from '../../../utilities/Utils';
const PurchaseInvoice = () => {
  const [activeMenu, setActiveMenu] = useState('');
  const handleMenuClick = (menuId) => {
    setActiveMenu(activeMenu === menuId ? '' : menuId);
  };

  return (
    <>
      <div>
        <li className='mb-1'>
          <span className={`btn btn-info d-inline-flex align-items-center rounded border-info border-2 purchase-invoice-header w-100 ${activeMenu === 'purchase-invoice-collapse' ? '' : 'collapsed'}`}
            onClick={() => handleMenuClick('purchase-invoice-collapse')}
            aria-expanded={activeMenu === 'purchase-invoice-collapse'}
          >
            <FaFileImport className='me-2' /> Purchase Invoice
          </span>
          <div className={`collapse ps-2 ${activeMenu === 'purchase-invoice-collapse' ? 'show' : ''}`} id="purchase-invoice-collapse">
            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small ">
              <div className='button'>
                <Link to={`/${encodePath('p-invoice')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button mt-1 w-100 text-dark`}
                  >
                    P-Invoice
                  </span>
                </Link>
              </div>
              <div className='button'>
                <Link to={`/${encodePath('p-challan-to-bill')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2  d-inline-flex align-items-center rounded border-2 admin-Sub-button  w-100 text-dark`}
                  >
                    P-Challan To Bill
                  </span>
                </Link>
              </div>
              <div className='button'>
                <Link to={`/${encodePath('stock-receive')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2  d-inline-flex align-items-center rounded border-2 admin-Sub-button  w-100 text-dark`}
                  >
                    Stock Receive
                  </span>
                </Link>
              </div>
              <div className='button'>
                <Link to={`/${encodePath('import-purchase')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2  d-inline-flex align-items-center rounded border-2 admin-Sub-button  w-100 text-dark`}
                  >
                    Import Purchase
                  </span>
                </Link>
              </div>
              <div className='button'>
                <Link to={`/${encodePath('map-item-list')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2  d-inline-flex align-items-center rounded border-2 admin-Sub-button  w-100 text-dark`}
                  >
                    Map Item List
                  </span>
                </Link>
              </div>
              <div className='button'>
                <Link to={`/${encodePath('purchase-book')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2  d-inline-flex align-items-center rounded border-2 admin-Sub-button  w-100 text-dark`}
                  >
                    Purchase Book
                  </span>
                </Link>
              </div>
              <div className='button'>
                <Link to={`/${encodePath('purchase-challan-bill')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2  d-inline-flex align-items-center rounded border-2 admin-Sub-button  w-100 text-dark`}
                  >
                    Purchase Challan Book
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

export default PurchaseInvoice;