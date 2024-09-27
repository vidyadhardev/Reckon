import React, { useState } from 'react'
import { MdOutlineExplicit } from 'react-icons/md';
import './ExpiryReceive.css';
import { Link } from 'react-router-dom';
import { encodePath } from '../../../utilities/Utils';
const ExpiryReceive = () => {
  const [activeMenu, setActiveMenu] = useState('');
  const handleMenuClick = (menuId) => {
    setActiveMenu(activeMenu === menuId ? '' : menuId);
  };

  return (
    <>
      <div>
        <li className='mb-1'>
          <span className={`btn btn-info d-inline-flex align-items-center rounded border-info border-2 expiry-receive-header w-100 ${activeMenu === 'expiry-receive-collapse' ? '' : 'collapsed'}`}
            onClick={() => handleMenuClick('expiry-receive-collapse')}
            aria-expanded={activeMenu === 'expiry-receive-collapse'}
          >
            <MdOutlineExplicit className='me-2' /> Expiry Receive
          </span>
          <div className={`collapse ps-2 ${activeMenu === 'expiry-receive-collapse' ? 'show' : ''}`} id="expiry-receive-collapse">
            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small ">
              <div className='button'>
                <Link to={`/${encodePath('expiry-receive-note')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2  d-inline-flex align-items-center rounded border-2 admin-Sub-button  w-100 text-dark`}
                  >
                    Expiry Receive Note
                  </span>
                </Link>
              </div>
              <div className='button'>
                <Link to={`/${encodePath('expiry-receive-challan')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2  d-inline-flex align-items-center rounded border-2 admin-Sub-button  w-100 text-dark`}
                  >
                    Expiry Receive Challan
                  </span>
                </Link>
              </div>
              <div className='button'>
                <Link to={`/${encodePath('expiry-challan-jv')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2  d-inline-flex align-items-center rounded border-2 admin-Sub-button  w-100 text-dark`}
                  >
                    Expiry Challan JV
                  </span>
                </Link>
              </div>
              <div className='button'>
                <Link to={`/${encodePath('expiry-challan-jv-print')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2  d-inline-flex align-items-center rounded border-2 admin-Sub-button  w-100 text-dark`}
                  >
                    Expiry Challan JV Print
                  </span>
                </Link>
              </div>
              <div className='button'>
                <Link to={`/${encodePath('non-claim-exp-in')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2  d-inline-flex align-items-center rounded border-2 admin-Sub-button  w-100 text-dark`}
                  >
                    Non Claim Exp In
                  </span>
                </Link>
              </div>
              <div className='button'>
                <Link to={`/${encodePath('expiry-receive-book')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2  d-inline-flex align-items-center rounded border-2 admin-Sub-button  w-100 text-dark`}
                  >
                    Expiry Receive Book
                  </span>
                </Link>
              </div>
              <div className='button'>
                <Link to={`/${encodePath('expiry-receive-challan-book')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2  d-inline-flex align-items-center rounded border-2 admin-Sub-button  w-100 text-dark`}
                  >
                    E.ReceiveChallanBook
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

export default ExpiryReceive;