import React, { useState } from 'react'
import { MdFactCheck } from 'react-icons/md';
import './ChequeBook.css';
import { Link } from 'react-router-dom';
import { encodePath } from '../../../utilities/Utils';
const ChequeBook = () => {
  const [activeMenu, setActiveMenu] = useState('');
  const handleMenuClick = (menuId) => {
    setActiveMenu(activeMenu === menuId ? '' : menuId);
  };

  return (
    <>
      <div>
        <li className='mb-1'>
          <span className={`btn btn-info d-inline-flex align-items-center rounded border-info border-2 cheque-header w-100 ${activeMenu === 'cheque-collapse' ? '' : 'collapsed'}`}
            onClick={() => handleMenuClick('cheque-collapse')}
            aria-expanded={activeMenu === 'cheque-collapse'}
          >
            <MdFactCheck className='me-2' />Cheque Book
          </span>
          <div className={`collapse ps-2 ${activeMenu === 'cheque-collapse' ? 'show' : ''}`} id="cheque-collapse">
            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small ">
              <div className='button'>
                <Link to={`/${encodePath('cheque-Received-bank')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button mt-1 w-100 text-dark`}
                  >
                    ChequeReceivedFromBank
                  </span>
                </Link>
              </div>
              <div className='button'>
                <Link to={`/${encodePath('cheque-issuance-entry')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2  d-inline-flex align-items-center rounded border-2 admin-Sub-button  w-100 text-dark`}
                  >
                    Cheque Issuance Entry
                  </span>
                </Link>
              </div>
              <div className='button'>
                <Link to={`/${encodePath('single-cheque-entry')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2  d-inline-flex align-items-center rounded border-2 admin-Sub-button  w-100 text-dark`}
                  >
                    Single Cheque Entry
                  </span>
                </Link>
              </div>
              <div className='button'>
                <Link to={`/${encodePath('cheque-book-register')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2  d-inline-flex align-items-center rounded border-2 admin-Sub-button  w-100 text-dark`}
                  >
                    Cheque Book Register
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

export default ChequeBook;