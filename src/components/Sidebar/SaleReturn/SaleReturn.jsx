import React, { useState } from 'react'
import {GiReturnArrow } from 'react-icons/gi';
import './SaleReturn.css';
import { Link } from 'react-router-dom';
import { encodePath } from '../../../utilities/Utils';
const SaleReturn = () => {
  const [activeMenu, setActiveMenu] = useState('');
  const handleMenuClick = (menuId) => {
    setActiveMenu(activeMenu === menuId ? '' : menuId);
  };

  return (
    <>
      <div>
        <li className='mb-1'>
          <span className={`btn btn-info d-inline-flex align-items-center rounded border-info border-2 sale-return-header w-100 ${activeMenu === 'sale-return-collapse' ? '' : 'collapsed'}`}
            onClick={() => handleMenuClick('sale-return-collapse')}
            aria-expanded={activeMenu === 'sale-return-collapse'}
          >
            <GiReturnArrow className='me-2' /> Sale Retun
          </span>
          <div className={`collapse ps-2 ${activeMenu === 'sale-return-collapse' ? 'show' : ''}`} id="sale-return-collapse">
            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small ">
              <div className='button'>
                <Link to={`/${encodePath('sale-return-note')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2  d-inline-flex align-items-center rounded border-2 admin-Sub-button  w-100 text-dark`}
                  >
                    Sale Return-Note
                  </span>
                </Link>
              </div>
              <div className='button'>
                <Link to={`/${encodePath('sale-return-retail')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2  d-inline-flex align-items-center rounded border-2 admin-Sub-button  w-100 text-dark`}
                  >
                    Sale Return-Retail
                  </span>
                </Link>
              </div>
              <div className='button'>
                <Link to={`/${encodePath('sale-return-book')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2  d-inline-flex align-items-center rounded border-2 admin-Sub-button  w-100 text-dark`}
                  >
                    Sale Return-Book
                  </span>
                </Link>
              </div>
              <div className='button'>
                <Link to={`/${encodePath('sale-return-challan-book')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2  d-inline-flex align-items-center rounded border-2 admin-Sub-button  w-100 text-dark`}
                  >
                    SaleReturnChallanBook
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

export default SaleReturn;