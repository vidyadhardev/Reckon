import React, { useState } from 'react'
import { MdTransform } from 'react-icons/md';
import './StockTransfer.css';
import { Link } from 'react-router-dom';
import { encodePath } from '../../../utilities/Utils';
const StockTransfer = () => {
  const [activeMenu, setActiveMenu] = useState('');
  const handleMenuClick = (menuId) => {
    setActiveMenu(activeMenu === menuId ? '' : menuId);
  };

  return (
    <>
      <div>
        <li className='mb-1'>
          <span className={`btn btn-info d-inline-flex align-items-center rounded border-info border-2 stock-header w-100 ${activeMenu === 'stock-collapse' ? '' : 'collapsed'}`}
            onClick={() => handleMenuClick('stock-collapse')}
            aria-expanded={activeMenu === 'stock-collapse'}
          >
            <MdTransform className='me-2' /> Stock Transfer&Report
          </span>
          <div className={`collapse ps-2 ${activeMenu === 'stock-collapse' ? 'show' : ''}`} id="stock-collapse">
            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small ">
              <div className='button'>
                <Link to={`/${encodePath('saleable-to-non-saleable')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2  d-inline-flex align-items-center rounded border-2 admin-Sub-button  w-100 text-dark`}
                  >
                    SaleableToNonSaleable
                  </span>
                </Link>
              </div>
              <div className='button'>
                <Link to={`/${encodePath('non-saleable-to-saleable')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2  d-inline-flex align-items-center rounded border-2 admin-Sub-button  w-100 text-dark`}
                  >
                    NonSaleableToSaleable
                  </span>
                </Link>
              </div>
              {/* Stock Report */}
              <div className='button'>
                <Link to={`/${encodePath('stock status')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2  d-inline-flex align-items-center rounded border-2 admin-Sub-button  w-100 text-dark`}
                  >
                    Stock Status
                  </span>
                </Link>
              </div>
              <div className='button'>
                <Link to={`/${encodePath('closing-stock')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2  d-inline-flex align-items-center rounded border-2 admin-Sub-button  w-100 text-dark`}
                  >
                    Closing Stock
                  </span>
                </Link>
              </div>
              <div className='button'>
                <Link to={`/${encodePath('dump-stock')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2  d-inline-flex align-items-center rounded border-2 admin-Sub-button  w-100 text-dark`}
                  >
                    Dump Stock
                  </span>
                </Link>
              </div>
              <div className='button'>
                <Link to={`/${encodePath('hold-stock')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2  d-inline-flex align-items-center rounded border-2 admin-Sub-button  w-100 text-dark`}
                  >
                    Hold Stock
                  </span>
                </Link>
              </div>
              <div className='button'>
                <Link to={`/${encodePath('ban-stock')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2  d-inline-flex align-items-center rounded border-2 admin-Sub-button  w-100 text-dark`}
                  >
                    Ban Stock
                  </span>
                </Link>
              </div>
              <div className='button'>
                <Link to={`/${encodePath('minimum-level-stock')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2  d-inline-flex align-items-center rounded border-2 admin-Sub-button  w-100 text-dark`}
                  >
                    Minimum Level Stock
                  </span>
                </Link>
              </div>
              <div className='button'>
                <Link to={`/${encodePath('maximum-level-stock')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2  d-inline-flex align-items-center rounded border-2 admin-Sub-button  w-100 text-dark`}
                  >
                    Maximum Level Stock
                  </span>
                </Link>
              </div>
              <div className='button'>
                <Link to={`/${encodePath('near-expiry-stock')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2  d-inline-flex align-items-center rounded border-2 admin-Sub-button  w-100 text-dark`}
                  >
                    Near Expiry Stock
                  </span>
                </Link>
              </div>
              <div className='button'>
                <Link to={`/${encodePath('expiry-stock')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2  d-inline-flex align-items-center rounded border-2 admin-Sub-button  w-100 text-dark`}
                  >
                    Expired Stock
                  </span>
                </Link>
              </div>
              <div className='button'>
                <Link to={`/${encodePath('stock-&-sales-statment')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2  d-inline-flex align-items-center rounded border-2 admin-Sub-button  w-100 text-dark`}
                  >
                    Stock & Sales Statement
                  </span>
                </Link>
              </div>
              <div className='button'>
                <Link to={`/${encodePath('expiry-report')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2  d-inline-flex align-items-center rounded border-2 admin-Sub-button  w-100 text-dark`}
                  >
                    Expiry Report
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
export default StockTransfer;