import React, { useState } from 'react'
import { FaRankingStar } from "react-icons/fa6";
import './GSTReport.css';
import { Link } from 'react-router-dom';
import { encodePath } from '../../../utilities/Utils';
const GSTReport = () => {
  const [activeMenu, setActiveMenu] = useState('');
  const handleMenuClick = (menuId) => {
    setActiveMenu(activeMenu === menuId ? '' : menuId);
  };

  return (
    <>
      <div>
        <li className='mb-1'>
          <span className={`btn btn-info d-inline-flex align-items-center rounded border-info border-2 gst-report-header w-100 ${activeMenu === 'gst-report-collapse' ? '' : 'collapsed'}`}
            onClick={() => handleMenuClick('gst-report-collapse')}
            aria-expanded={activeMenu === 'gst-report-collapse'}
          >
            <FaRankingStar className='me-2' /> GST Report
          </span>
          <div className={`collapse ps-2 ${activeMenu === 'gst-report-collapse' ? 'show' : ''}`} id="gst-report-collapse">
            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small ">
              <div className='button'>
                <Link to={`/${encodePath('show-gst-detail')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2  d-inline-flex align-items-center rounded border-2 admin-Sub-button  w-100 text-dark`}
                  >
                    Show GST Detail
                  </span>
                </Link>
              </div>
              <div className='button'>
                <Link to={`/${encodePath('gst-registers')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2  d-inline-flex align-items-center rounded border-2 admin-Sub-button  w-100 text-dark`}
                  >
                    GST Registers
                  </span>
                </Link>
              </div>
              <div className='button'>
                <Link to={`/${encodePath('gst-return')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2  d-inline-flex align-items-center rounded border-2 admin-Sub-button  w-100 text-dark`}
                  >
                    GST Returns
                  </span>
                </Link>
              </div>
              <div className='button'>
                <Link to={`/${encodePath('eway-invoice')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2  d-inline-flex align-items-center rounded border-2 admin-Sub-button  w-100 text-dark`}
                  >
                    EWay/EInvoice
                  </span>
                </Link>
              </div>
              <div className='button'>
                <Link to={`/${encodePath('tcstds-register')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2  d-inline-flex align-items-center rounded border-2 admin-Sub-button  w-100 text-dark`}
                  >
                    TCS/TDS Registes
                  </span>
                </Link>
              </div>
              <div className='button'>
                <Link to={`/${encodePath('update-gstin-pin-code')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2  d-inline-flex align-items-center rounded border-2 admin-Sub-button  w-100 text-dark`}
                  >
                    Update GSTIN PinCode 
                  </span>
                </Link>
              </div>
              <div className='button'>
                <Link to={`/${encodePath('gst-purchase-register')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2  d-inline-flex align-items-center rounded border-2 admin-Sub-button  w-100 text-dark`}
                  >
                    GST Purchase Register
                  </span>
                </Link>
              </div>
              <div className='button'>
                <Link to={`/${encodePath('gst-column-purchase')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2  d-inline-flex align-items-center rounded border-2 admin-Sub-button  w-100 text-dark`}
                  >
                   GST Column Purchase 
                  </span>
                </Link>
              </div>
              <div className='button'>
                <Link to={`/${encodePath('gst-column-purchase-old')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2  d-inline-flex align-items-center rounded border-2 admin-Sub-button  w-100 text-dark`}
                  >
                    GSTColumnPurchase(Old)
                  </span>
                </Link>
              </div>
              <div className='button'>
                <Link to={`/${encodePath('gst-sale-register')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2  d-inline-flex align-items-center rounded border-2 admin-Sub-button  w-100 text-dark`}
                  >
                    GST Sale Register
                  </span>
                </Link>
              </div>
              <div className='button'>
                <Link to={`/${encodePath('gst-column-sale')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2  d-inline-flex align-items-center rounded border-2 admin-Sub-button  w-100 text-dark`}
                  >
                    GST Column Sale
                  </span>
                </Link>
              </div>
              <div className='button'>
                <Link to={`/${encodePath('gst-column-sale-old')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2  d-inline-flex align-items-center rounded border-2 admin-Sub-button  w-100 text-dark`}
                  >
                    GST Column Sale(Old)
                  </span>
                </Link>
              </div>
              <div className='button'>
                <Link to={`/${encodePath('gst-tax-clubbing')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2  d-inline-flex align-items-center rounded border-2 admin-Sub-button  w-100 text-dark`}
                  >
                    GST Tax Clubbing
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

export default GSTReport;