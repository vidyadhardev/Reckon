import React, { useState } from 'react'
import { FaFileInvoice } from 'react-icons/fa';
import './SaleInvoice.css';
import { Link } from 'react-router-dom';
import { encodePath } from '../../../utilities/Utils';
const SaleInvoice = () => {
  const [activeMenu, setActiveMenu] = useState('');
  const handleMenuClick = (menuId) => {
    setActiveMenu(activeMenu === menuId ? '' : menuId);
  };

  return (
    <>
      <div>
        <li className='mb-1'>
          <span className={`btn btn-info d-inline-flex align-items-center rounded border-info border-2 sale-invoice-header w-100 ${activeMenu === 'sale-invoice-collapse' ? '' : 'collapsed'}`}
            onClick={() => handleMenuClick('sale-invoice-collapse')}
            aria-expanded={activeMenu === 'sale-invoice-collapse'}
          >
            <FaFileInvoice className='me-2' /> Sale Invoice
          </span>
          <div className={`collapse ps-2 ${activeMenu === 'sale-invoice-collapse' ? 'show' : ''}`} id="sale-invoice-collapse">
            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small ">
              <div className='button'>
                <Link to={`/${encodePath('invoice')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button mt-1 w-100 text-dark`}
                  >
                    Invoice
                  </span>
                </Link>
              </div>
              <div className='button'>
                <Link to={`/${encodePath('challan')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2  d-inline-flex align-items-center rounded border-2 admin-Sub-button  w-100 text-dark`}
                  >
                    Challan
                  </span>
                </Link>
              </div>
              <div className='button'>
                <Link to={`/${encodePath('retail-sale')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2  d-inline-flex align-items-center rounded border-2 admin-Sub-button  w-100 text-dark`}
                  >
                    Retail Sale
                  </span>
                </Link>
              </div>
              <div className='button'>
                <Link to={`/${encodePath('retail-challan')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2  d-inline-flex align-items-center rounded border-2 admin-Sub-button  w-100 text-dark`}
                  >
                    Retail Challan
                  </span>
                </Link>
              </div>
              <div className='button'>
                <Link to={`/${encodePath('stock-issue')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2  d-inline-flex align-items-center rounded border-2 admin-Sub-button  w-100 text-dark`}
                  >
                    Stock Issue
                  </span>
                </Link>
              </div>
              <div className='button'>
                <Link to={`/${encodePath('counter-sale')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2  d-inline-flex align-items-center rounded border-2 admin-Sub-button  w-100 text-dark`}
                  >
                    Counter Sale
                  </span>
                </Link>
              </div>
              <div className='button'>
                <Link to={`/${encodePath('challan-to-bill')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2  d-inline-flex align-items-center rounded border-2 admin-Sub-button  w-100 text-dark`}
                  >
                    Challan To Bill
                  </span>
                </Link>
              </div>
              <div className='button'>
                <Link to={`/${encodePath('sale-book')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2  d-inline-flex align-items-center rounded border-2 admin-Sub-button  w-100 text-dark`}
                  >
                    Sale Book
                  </span>
                </Link>
              </div>
              <div className='button'>
                <Link to={`/${encodePath('challan-book')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2  d-inline-flex align-items-center rounded border-2 admin-Sub-button  w-100 text-dark`}
                  >
                    Challan Book
                  </span>
                </Link>
              </div>
              <div className='button'>
                <Link to={`/${encodePath('stock-issue-book')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2  d-inline-flex align-items-center rounded border-2 admin-Sub-button  w-100 text-dark`}
                  >
                    Stock Issue Book
                  </span>
                </Link>
              </div>
              <div className='button'>
                <Link to={`/${encodePath('counter-book')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2  d-inline-flex align-items-center rounded border-2 admin-Sub-button  w-100 text-dark`}
                  >
                    Counter Book
                  </span>
                </Link>
              </div>
              <div className='button'>
                <Link to={`/${encodePath('bill-history')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2  d-inline-flex align-items-center rounded border-2 admin-Sub-button  w-100 text-dark`}
                  >
                    Bill History
                  </span>
                </Link>
              </div>
              <div className='button'>
                <Link to={`/${encodePath('bill-upload')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2  d-inline-flex align-items-center rounded border-2 admin-Sub-button  w-100 text-dark`}
                  >
                    Bill Upload
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

export default SaleInvoice;