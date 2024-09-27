import React, { useState } from 'react'
import { FaTrailer } from "react-icons/fa";
import './OtherReport.css';
import { Link } from 'react-router-dom';
import { encodePath } from '../../../utilities/Utils';
const OtherReport = () => {
  const [activeMenu, setActiveMenu] = useState('');
  const handleMenuClick = (menuId) => {
    setActiveMenu(activeMenu === menuId ? '' : menuId);
  };

  return (
    <>
      <div>
        <li className='mb-1'>
          <span className={`btn btn-info d-inline-flex align-items-center rounded border-info border-2 other-report-header w-100 ${activeMenu === 'other-report-collapse' ? '' : 'collapsed'}`}
            onClick={() => handleMenuClick('other-report-collapse')}
            aria-expanded={activeMenu === 'other-report-collapse'}
          >
            <FaTrailer className='me-2' /> Other Report
          </span>
          <div className={`collapse ps-2 ${activeMenu === 'other-report-collapse' ? 'show' : ''}`} id="other-report-collapse">
            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small ">
              <div className='button'>
                <Link to={`/${encodePath('expiry-issue-note')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2  d-inline-flex align-items-center rounded border-2 admin-Sub-button  w-100 text-dark`}
                  >
                    Dispatch Register
                  </span>
                </Link>
              </div>
              <div className='button'>
                <Link to={`/${encodePath('expiry-issue-book')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2  d-inline-flex align-items-center rounded border-2 admin-Sub-button  w-100 text-dark`}
                  >
                    Packing Slip Dispatch Register
                  </span>
                </Link>
              </div>
              <div className='button'>
                <Link to={`/${encodePath('expiry-issue-challan-book')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2  d-inline-flex align-items-center rounded border-2 admin-Sub-button  w-100 text-dark`}
                  >
                   Item Wise Claim Register
                  </span>
                </Link>
              </div>
              <div className='button'>
                <Link to={`/${encodePath('expiry-issue-challan-jv')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2  d-inline-flex align-items-center rounded border-2 admin-Sub-button  w-100 text-dark`}
                  >
                    SalesMan Wise Commission Report
                  </span>
                </Link>
              </div>
              <div className='button'>
                <Link to={`/${encodePath('expiry-issue-challan-jv-print')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2  d-inline-flex align-items-center rounded border-2 admin-Sub-button  w-100 text-dark`}
                  >
                    SalesMan Wise MfgCompany Wise Commission Report
                  </span>
                </Link>
              </div>
              <div className='button'>
                <Link to={`/${encodePath('expiry-issue-challan-jv-print')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2  d-inline-flex align-items-center rounded border-2 admin-Sub-button  w-100 text-dark`}
                  >
                    SalesMan Wise Item Wise Commission Report
                  </span>
                </Link>
              </div>
              <div className='button'>
                <Link to={`/${encodePath('expiry-issue-challan-jv-print')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2  d-inline-flex align-items-center rounded border-2 admin-Sub-button  w-100 text-dark`}
                  >
                    Trading P&&L && Balance Sheet
                  </span>
                </Link>
              </div>
              <div className='button'>
                <Link to={`/${encodePath('expiry-issue-challan-jv-print')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2  d-inline-flex align-items-center rounded border-2 admin-Sub-button  w-100 text-dark`}
                  >
                   Reminder Date Report
                  </span>
                </Link>
              </div>
              <div className='button'>
                <Link to={`/${encodePath('expiry-issue-challan-jv-print')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2  d-inline-flex align-items-center rounded border-2 admin-Sub-button  w-100 text-dark`}
                  >
                    Pending Challan
                  </span>
                </Link>
              </div>
              <div className='button'>
                <Link to={`/${encodePath('expiry-issue-challan-jv-print')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2  d-inline-flex align-items-center rounded border-2 admin-Sub-button  w-100 text-dark`}
                  >
                   Rate Comparision Report
                  </span>
                </Link>
              </div>
              <div className='button'>
                <Link to={`/${encodePath('expiry-issue-challan-jv-print')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2  d-inline-flex align-items-center rounded border-2 admin-Sub-button  w-100 text-dark`}
                  >
                    Adjustment Statement
                  </span>
                </Link>
              </div>
              <div className='button'>
                <Link to={`/${encodePath('expiry-issue-challan-jv-print')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2  d-inline-flex align-items-center rounded border-2 admin-Sub-button  w-100 text-dark`}
                  >
                    Stock Adjustment Register
                  </span>
                </Link>
              </div>
              <div className='button'>
                <Link to={`/${encodePath('expiry-issue-challan-jv-print')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2  d-inline-flex align-items-center rounded border-2 admin-Sub-button  w-100 text-dark`}
                  >
                    Mobile Diary List
                  </span>
                </Link>
              </div>
              <div className='button'>
                <Link to={`/${encodePath('expiry-issue-challan-jv-print')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2  d-inline-flex align-items-center rounded border-2 admin-Sub-button  w-100 text-dark`}
                  >
                   Reminder Report
                  </span>
                </Link>
              </div>
              <div className='button'>
                <Link to={`/${encodePath('expiry-issue-challan-jv-print')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2  d-inline-flex align-items-center rounded border-2 admin-Sub-button  w-100 text-dark`}
                  >
                    Account List
                  </span>
                </Link>
              </div>
              <div className='button'>
                <Link to={`/${encodePath('expiry-issue-challan-jv-print')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2  d-inline-flex align-items-center rounded border-2 admin-Sub-button  w-100 text-dark`}
                  >
                    User Log Report
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

export default OtherReport;