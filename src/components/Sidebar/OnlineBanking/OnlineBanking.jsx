import React, { useState } from 'react'
import { RiBankFill } from 'react-icons/ri';
import './OnlineBanking.css';
import { Link } from 'react-router-dom';
import { encodePath } from '../../../utilities/Utils';
const OnlineBanking = () => {
  const [activeMenu, setActiveMenu] = useState('');
  const handleMenuClick = (menuId) => {
    setActiveMenu(activeMenu === menuId ? '' : menuId);
  };

  return (
    <>
      <div>
        <li className='mb-1'>
          <span className={`btn btn-info d-inline-flex align-items-center rounded border-info border-2 online-banking-header w-100 ${activeMenu === 'online-banking-collapse' ? '' : 'collapsed'}`}
            onClick={() => handleMenuClick('online-banking-collapse')}
            aria-expanded={activeMenu === 'online-banking-collapse'}
          >
            <RiBankFill className='me-2' /> Online Banking
          </span>
          <div className={`collapse ps-2 ${activeMenu === 'online-banking-collapse' ? 'show' : ''}`} id="online-banking-collapse">
            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small ">
              <div className='button'>
                <Link to={`/${encodePath('payment-entry')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2  d-inline-flex align-items-center rounded border-2 admin-Sub-button  w-100 text-dark`}
                  >
                    Payment Entry
                  </span>
                </Link>
              </div>
              <div className='button'>
                <Link to={`/${encodePath('schedule-payment-entry')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2  d-inline-flex align-items-center rounded border-2 admin-Sub-button  w-100 text-dark`}
                  >
                    Schedule Payment Entry
                  </span>
                </Link>
              </div>
              <div className='button'>
                <Link to={`/${encodePath('bank-statment')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2  d-inline-flex align-items-center rounded border-2 admin-Sub-button  w-100 text-dark`}
                  >
                    Bank Statement
                  </span>
                </Link>
              </div>
              <div className='button'>
                <Link to={`/${encodePath('account-online-bank-detail-entry')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2  d-inline-flex align-items-center rounded border-2 admin-Sub-button  w-100 text-dark`}
                  >
                    OnLineBankDetailEntry
                  </span>
                </Link>
              </div>
              <div className='button'>
                <Link to={`/${encodePath('account-online-bank-api-test')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2  d-inline-flex align-items-center rounded border-2 admin-Sub-button  w-100 text-dark`}
                  >
                     OnLineBankApiTest
                  </span>
                </Link>
              </div>
              <div className='button'>
                <Link to={`/${encodePath('auto-bank-reconcilation-entry')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2  d-inline-flex align-items-center rounded border-2 admin-Sub-button  w-100 text-dark`}
                  >
                    AutoBankReconcilation
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

export default OnlineBanking;