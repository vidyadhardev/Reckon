import React, { useState } from 'react'
import { MdOutbound } from 'react-icons/md';
import './OutstandingReport.css';
import { Link } from 'react-router-dom';
import { encodePath } from '../../../utilities/Utils';
const OutstandingReport = () => {
  const [activeMenu, setActiveMenu] = useState('');
  const handleMenuClick = (menuId) => {
    setActiveMenu(activeMenu === menuId ? '' : menuId);
  };

  return (
    <>
      <div>
        <li className='mb-1'>
          <span className={`btn btn-info d-inline-flex align-items-center rounded border-info border-2 outstanding-report-header w-100 ${activeMenu === 'outstanding-collapse' ? '' : 'collapsed'}`}
            onClick={() => handleMenuClick('outstanding-collapse')}
            aria-expanded={activeMenu === 'outstanding-collapse'}
          >
            <MdOutbound className='me-2' />Out Standing Report
          </span>
          <div className={`collapse ps-2 ${activeMenu === 'outstanding-collapse' ? 'show' : ''}`} id="outstanding-collapse">
            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small ">
              <div className='button'>
                <Link to={`/${encodePath('os-field-staff-wise')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button mt-1 w-100 text-dark`}
                  >
                    O/S Field Staff Wise
                  </span>
                </Link>
              </div>
              <div className='button'>
                <Link to={`/${encodePath('os-area-wise')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2  d-inline-flex align-items-center rounded border-2 admin-Sub-button  w-100 text-dark`}
                  >
                    O/S Area Wise
                  </span>
                </Link>
              </div>
              <div className='button'>
                <Link to={`/${encodePath('os-route-wise')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2  d-inline-flex align-items-center rounded border-2 admin-Sub-button  w-100 text-dark`}
                  >
                    O/S Route Wise
                  </span>
                </Link>
              </div>
              <div className='button'>
                <Link to={`/${encodePath('os-station-wise')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2  d-inline-flex align-items-center rounded border-2 admin-Sub-button  w-100 text-dark`}
                  >
                    O/S Station Wise
                  </span>
                </Link>
              </div>
              <div className='button'>
                <Link to={`/${encodePath('os-supplier-wise')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2  d-inline-flex align-items-center rounded border-2 admin-Sub-button  w-100 text-dark`}
                  >
                    O/S Supplier Wise
                  </span>
                </Link>
              </div>
              <div className='button'>
                <Link to={`/${encodePath('bill-wise-tagging')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2  d-inline-flex align-items-center rounded border-2 admin-Sub-button  w-100 text-dark`}
                  >Bill Wise Tagging
                  </span>
                </Link>
              </div>
              <div className='button'>
                <Link to={`/${encodePath('os-mfg-company-wise')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2  d-inline-flex align-items-center rounded border-2 admin-Sub-button  w-100 text-dark`}
                  >
                    O/S MfgCompany Wise
                  </span>
                </Link>
              </div>
              <div className='button'>
                <Link to={`/${encodePath('os-aging')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2  d-inline-flex align-items-center rounded border-2 admin-Sub-button  w-100 text-dark`}
                  >
                    O/S Aging
                  </span>
                </Link>
              </div>
              <div className='button'>
                <Link to={`/${encodePath('out-standing-report')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2  d-inline-flex align-items-center rounded border-2 admin-Sub-button  w-100 text-dark`}
                  >
                    Outstanding Report
                  </span>
                </Link>
              </div>
              <div className='button'>
                <Link to={`/${encodePath('os-party-wise-print')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2  d-inline-flex align-items-center rounded border-2 admin-Sub-button  w-100 text-dark`}
                  >
                    O/S Party Wise Print
                  </span>
                </Link>
              </div>
              <div className='button'>
                <Link to={`/${encodePath('over-due-list')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2  d-inline-flex align-items-center rounded border-2 admin-Sub-button  w-100 text-dark`}
                  >
                    OverDue List
                  </span>
                </Link>
              </div>
              <div className='button'>
                <Link to={`/${encodePath('area-wise-ledger')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2  d-inline-flex align-items-center rounded border-2 admin-Sub-button  w-100 text-dark`}
                  >
                    Area Wise Ledger
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

export default OutstandingReport;