import React, { useState } from 'react'
import { FaTrailer } from "react-icons/fa";
import './TrialBalanceAlpha.css';
import { Link } from 'react-router-dom';
import { encodePath } from '../../../utilities/Utils';
const TrialBalanceAlpha = () => {
  const [activeMenu, setActiveMenu] = useState('');
  const handleMenuClick = (menuId) => {
    setActiveMenu(activeMenu === menuId ? '' : menuId);
  };

  return (
    <>
      <div>
        <li className='mb-1'>
          <span className={`btn btn-info d-inline-flex align-items-center rounded border-info border-2 TrialBalanceAlpha-header w-100 ${activeMenu === 'TrialBalanceAlpha-collapse' ? '' : 'collapsed'}`}
            onClick={() => handleMenuClick('TrialBalanceAlpha-collapse')}
            aria-expanded={activeMenu === 'TrialBalanceAlpha-collapse'}
          >
            <FaTrailer className='me-2' /> Trial Balance Alpha
          </span>
          <div className={`collapse ps-2 ${activeMenu === 'TrialBalanceAlpha-collapse' ? 'show' : ''}`} id="TrialBalanceAlpha-collapse">
            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small ">
              <div className='button'>
                <Link to={`/${encodePath('expiry-issue-note')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2  d-inline-flex align-items-center rounded border-2 admin-Sub-button  w-100 text-dark`}
                  >
                    Trial Balance-Alpha
                  </span>
                </Link>
              </div>
              <div className='button'>
                <Link to={`/${encodePath('expiry-issue-book')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2  d-inline-flex align-items-center rounded border-2 admin-Sub-button  w-100 text-dark`}
                  >
                    Trial Balance-Group
                  </span>
                </Link>
              </div>
              <div className='button'>
                <Link to={`/${encodePath('expiry-issue-challan-book')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2  d-inline-flex align-items-center rounded border-2 admin-Sub-button  w-100 text-dark`}
                  >
                    Trading /P&L A/c
                  </span>
                </Link>
              </div>
              <div className='button'>
                <Link to={`/${encodePath('expiry-issue-challan-jv')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2  d-inline-flex align-items-center rounded border-2 admin-Sub-button  w-100 text-dark`}
                  >
                    Balance Sheet
                  </span>
                </Link>
              </div>
              <div className='button'>
                <Link to={`/${encodePath('expiry-issue-challan-jv-print')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2  d-inline-flex align-items-center rounded border-2 admin-Sub-button  w-100 text-dark`}
                  >
                    Annexure
                  </span>
                </Link>
              </div>
              <div className='button'>
                <Link to={`/${encodePath('expiry-issue-challan-jv-print')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2  d-inline-flex align-items-center rounded border-2 admin-Sub-button  w-100 text-dark`}
                  >
                    Group Summary
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
                    Update Date Wise Stock Entry
                  </span>
                </Link>
              </div>
              <div className='button'>
                <Link to={`/${encodePath('expiry-issue-challan-jv-print')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2  d-inline-flex align-items-center rounded border-2 admin-Sub-button  w-100 text-dark`}
                  >
                    Update Stock Value
                  </span>
                </Link>
              </div>
              <div className='button'>
                <Link to={`/${encodePath('expiry-issue-challan-jv-print')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2  d-inline-flex align-items-center rounded border-2 admin-Sub-button  w-100 text-dark`}
                  >
                    Trail Summary (Grid)
                  </span>
                </Link>
              </div>
              <div className='button'>
                <Link to={`/${encodePath('expiry-issue-challan-jv-print')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2  d-inline-flex align-items-center rounded border-2 admin-Sub-button  w-100 text-dark`}
                  >
                    Cash Book Print
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

export default TrialBalanceAlpha;