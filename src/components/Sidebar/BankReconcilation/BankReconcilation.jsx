import React, { useState } from 'react'
import { MdFoodBank } from 'react-icons/md';
import './BankReconcilation.css';
import { Link } from 'react-router-dom';
import { encodePath } from '../../../utilities/Utils';
const BankReconcilation = () => {
  const [activeMenu, setActiveMenu] = useState('');
  const handleMenuClick = (menuId) => {
    setActiveMenu(activeMenu === menuId ? '' : menuId);
  };

  return (
    <>
      <div>
        <li className='mb-1'>
          <span className={`btn btn-info d-inline-flex align-items-center rounded border-info border-2 bank-reconcilation-header w-100 ${activeMenu === 'bank-reconcilation-collapse' ? '' : 'collapsed'}`}
            onClick={() => handleMenuClick('bank-reconcilation-collapse')}
            aria-expanded={activeMenu === 'bank-reconcilation-collapse'}
          >
            <MdFoodBank className='me-2' />Bank Reconcilation
          </span>
          <div className={`collapse ps-2 ${activeMenu === 'bank-reconcilation-collapse' ? 'show' : ''}`} id="bank-reconcilation-collapse">
            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small ">
              <div className='button'>
                <Link to={`/${encodePath('ReconcilationStatement')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2  d-inline-flex align-items-center rounded border-2 admin-Sub-button  w-100 text-dark`}
                  >
                    ReconcilationStatement
                  </span>
                </Link>
              </div>
              <div className='button'>
                <Link to={`/${encodePath('ChequeRegister')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2  d-inline-flex align-items-center rounded border-2 admin-Sub-button  w-100 text-dark`}
                  >
                    ChequeRegister(Cleared)
                  </span>
                </Link>
              </div>
              <div className='button'>
                <Link to={`/${encodePath('ChequeRegister-UnCleared')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2  d-inline-flex align-items-center rounded border-2 admin-Sub-button  w-100 text-dark`}
                  >
                    ChequeRegister(UnCleared)
                  </span>
                </Link>
              </div>
              <div className='button'>
                <Link to={`/${encodePath('AutoBankReckoncilation')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2  d-inline-flex align-items-center rounded border-2 admin-Sub-button  w-100 text-dark`}
                  >
                    AutoBankReckoncilation
                  </span>
                </Link>
              </div>
              <div className='button'>
                <Link to={`/${encodePath('BankReconcilationEntry')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2  d-inline-flex align-items-center rounded border-2 admin-Sub-button  w-100 text-dark`}
                  >
                    BankReconcilationEntry
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

export default BankReconcilation;