import React, { useState } from 'react'
import { MdAccountTree } from 'react-icons/md';
import './AccountModule.css';
import { Link } from 'react-router-dom';
import { encodePath } from '../../../utilities/Utils';
const AccountModule = () => {
  const [activeMenu, setActiveMenu] = useState('');
  const handleMenuClick = (menuId) => {
    setActiveMenu(activeMenu === menuId ? '' : menuId);
  };

  return (
    <>
      <div>
        <li className='mb-1'>
          <span className={`btn btn-info d-inline-flex align-items-center rounded border-info border-2 account-master-header w-100 ${activeMenu === 'account-module-collapse' ? '' : 'collapsed'}`}
            onClick={() => handleMenuClick('account-module-collapse')}
            aria-expanded={activeMenu === 'account-module-collapse'}
          >
            <MdAccountTree className='me-2' />Account Module
          </span>
          <div className={`collapse ps-2 ${activeMenu === 'account-module-collapse' ? 'show' : ''}`} id="account-module-collapse">
            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small ">
              <div className='button'>
                <Link to={`/${encodePath('cash-bank')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button mt-1 w-100 text-dark`}
                  >
                    Cash && Bank
                  </span>
                </Link>
              </div>
              <div className='button'>
                <Link to={`/${encodePath('ledger')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button  w-100 text-dark`}
                  >
                    Ledger
                  </span>
                </Link>
              </div>
              <div className='button'>
                <Link to={`/${encodePath('debtor-accounts')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button mt-1 w-100 text-dark`}
                  >
                    Debtor's Accounts
                  </span>
                </Link>
              </div>
              <div className='button'>
                <Link to={`/${encodePath('creditor-accounts')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button  w-100 text-dark`}
                  >
                    Creditor's Accounts
                  </span>
                </Link>
              </div>
              <div className='button'>
                <Link to={`/${encodePath('all-ledger')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button  w-100 text-dark`}
                  >
                    All Ledger
                  </span>
                </Link>
              </div>
              <div className='button'>
                <Link to={`/${encodePath('bank-reconcilation')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button  w-100 text-dark`}
                  >
                    Bank Reconcilation
                  </span>
                </Link>
              </div>
              <div className='button'>
                <Link to={`/${encodePath('depriciation')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button  w-100 text-dark`}
                  >
                    Depriciation
                  </span>
                </Link>
              </div>
              <div className='button'>
                <Link to={`/${encodePath('interest-calculation')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button  w-100 text-dark`}
                  >
                    Interest Calculation
                  </span>
                </Link>
              </div>
              <div className='button'>
                <Link to={`/${encodePath('payment')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button  w-100 text-dark`}
                  >
                    Payment
                  </span>
                </Link>
              </div>
              <div className='button'>
                <Link to={`/${encodePath('sale-summary')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button  w-100 text-dark`}
                  >
                    Sale Summary
                  </span>
                </Link>
              </div>
              <div className='button'>
                <Link to={`/${encodePath('purchase-summary')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button  w-100 text-dark`}
                  >
                    Purchase Summary
                  </span>
                </Link>
              </div>
              <div className='button'>
                <Link to={`/${encodePath('duties-taxes')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button  w-100 text-dark`}
                  >
                    Duties & Taxes
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

export default AccountModule