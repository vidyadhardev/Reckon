import React, { useState } from 'react'
import { MdBookOnline } from 'react-icons/md';
import './BooksofAccounts.css';
import { Link } from 'react-router-dom';
import { encodePath } from '../../../utilities/Utils';
const BooksofAccounts = () => {
  const [activeMenu, setActiveMenu] = useState('');
  const handleMenuClick = (menuId) => {
    setActiveMenu(activeMenu === menuId ? '' : menuId);
  };

  return (
    <>
      <div>
        <li className='mb-1'>
          <span className={`btn btn-info d-inline-flex align-items-center rounded border-info border-2 books-account-header w-100 ${activeMenu === 'inventory-collapse' ? '' : 'collapsed'}`}
            onClick={() => handleMenuClick('inventory-collapse')}
            aria-expanded={activeMenu === 'inventory-collapse'}
          >
            <MdBookOnline className='me-2' />Books & Accounts
          </span>
          <div className={`collapse ps-2 ${activeMenu === 'inventory-collapse' ? 'show' : ''}`} id="inventory-collapse">
            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small ">
              <div className='button'>
                <Link to={`/${encodePath('cash-book')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button mt-1 w-100 text-dark`}
                  >
                    Cash Book
                  </span>
                </Link>
              </div>
              <div className='button'>
                <Link to={`/${encodePath('bank-book')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2  d-inline-flex align-items-center rounded border-2 admin-Sub-button  w-100 text-dark`}
                  >
                    Bank book
                  </span>
                </Link>
              </div>
              <div className='button'>
                <Link to={`/${encodePath('day-book')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2  d-inline-flex align-items-center rounded border-2 admin-Sub-button  w-100 text-dark`}
                  >
                    Day book
                  </span>
                </Link>
              </div>
              <div className='button'>
                <Link to={`/${encodePath('payment-book')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2  d-inline-flex align-items-center rounded border-2 admin-Sub-button  w-100 text-dark`}
                  >
                    Payment book
                  </span>
                </Link>
              </div>
              <div className='button'>
                <Link to={`/${encodePath('receipt-book')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2  d-inline-flex align-items-center rounded border-2 admin-Sub-button  w-100 text-dark`}
                  >
                    Receipt Book
                  </span>
                </Link>
              </div>
              <div className='button'>
                <Link to={`/${encodePath('contra-book')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2  d-inline-flex align-items-center rounded border-2 admin-Sub-button  w-100 text-dark`}
                  >
                    Contra Book
                  </span>
                </Link>
              </div>
              <div className='button'>
                <Link to={`/${encodePath('journal-book')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2  d-inline-flex align-items-center rounded border-2 admin-Sub-button  w-100 text-dark`}
                  >
                    Journal Book
                  </span>
                </Link>
              </div>
              <div className='button'>
                <Link to={`/${encodePath('creditNoteBook')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2  d-inline-flex align-items-center rounded border-2 admin-Sub-button  w-100 text-dark`}
                  >
                    CreditNoteBook(Voucher)
                  </span>
                </Link>
              </div>
              <div className='button'>
                <Link to={`/${encodePath('debitNoteBook')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2  d-inline-flex align-items-center rounded border-2 admin-Sub-button  w-100 text-dark`}
                  >
                    DebitNoteBook(Voucher)
                  </span>
                </Link>
              </div>
              <div className='button'>
                <Link to={`/${encodePath('SaleBook')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2  d-inline-flex align-items-center rounded border-2 admin-Sub-button  w-100 text-dark`}
                  >
                    SaleBook(Voucher)
                  </span>
                </Link>
              </div>

              <div className='button'>
                <Link to={`/${encodePath('PurchaseBook')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2  d-inline-flex align-items-center rounded border-2 admin-Sub-button  w-100 text-dark`}
                  >
                    PurchaseBook(Voucher)
                  </span>
                </Link>
              </div><div className='button'>
                <Link to={`/${encodePath('rcm-book')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2  d-inline-flex align-items-center rounded border-2 admin-Sub-button  w-100 text-dark`}
                  >
                    RCM Book
                  </span>
                </Link>
              </div>

              <div className='button'>
                <Link to={`/${encodePath('item-day-book')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2  d-inline-flex align-items-center rounded border-2 admin-Sub-button  w-100 text-dark`}
                  >
                    Item Day Book
                  </span>
                </Link>
              </div>
              <div className='button'>
                <Link to={`/${encodePath('cash-book-tally')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2  d-inline-flex align-items-center rounded border-2 admin-Sub-button  w-100 text-dark`}
                  >
                    Cash Book Tally
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

export default BooksofAccounts;