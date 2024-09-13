import React, { useState } from 'react'
import { FaChevronCircleUp } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { encodePath } from '../../../utilities/Utils';
import './VoucherEntry.css';
const VoucherEntry = () => {
  const [activeMenu, setActiveMenu] = useState('');
  const handleMenuClick = (menuId) => {
    setActiveMenu(activeMenu === menuId ? '' : menuId);
  };
  return (
    <>
      <div>
        <li className="mb-1">
          <span
            className={`btn btn-info d-inline-flex align-items-center rounded border-info border-2 voucher-entry-header w-100 ${activeMenu === 'voucher-entry-collapse' ? '' : 'collapsed'}`}
            onClick={() => handleMenuClick('voucher-entry-collapse')}
            aria-expanded={activeMenu === 'voucher-entry-collapse'}
          >
            <FaChevronCircleUp className='me-2' /> Voucher Entry
          </span>
          <div className={`collapse ps-1 ${activeMenu === 'voucher-entry-collapse' ? 'show' : ''}`} id="voucher-entry-collapse">
            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small ">
              <div>
                <span
                  className={`btn btn-outline-info mt-2 w-100 mb-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button mt-1`}
                >
                  <Link to={`/${encodePath('cheque-return-entry')}`} className="d-inline-flex text-dark text-decoration-none rounded">

                    Cheque Return Entry
                  </Link>
                </span>
              </div>
              <div>
                <span
                  className={`btn btn-outline-info w-100 mb-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button `}
                >
                  <Link to={`/${encodePath('payment-voucher')}`} className="d-inline-flex text-dark text-decoration-none rounded">

                    Payment Voucher
                  </Link>
                </span>
              </div>
              <div>
                <span
                  className={`btn btn-outline-info w-100 mb-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button `}
                >
                  <Link to={`/${encodePath('receipt-voucher')}`} className="d-inline-flex text-dark text-decoration-none rounded">
                    Receipt Voucher
                  </Link>
                </span>
              </div>
              <div>
                <span
                  className={`btn btn-outline-info w-100 mb-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button `}
                >
                  <Link to={`/${encodePath('contra-voucher')}`} className="d-inline-flex text-dark text-decoration-none rounded">
                    Contra Voucher
                  </Link>
                </span>
              </div>
              <div>
                <span
                  className={`btn btn-outline-info w-100 mb-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button `}
                >
                  <Link to={`/${encodePath('journal-voucher')}`} className="d-inline-flex text-dark text-decoration-none rounded">
                    Journal Voucher
                  </Link>
                </span>
              </div>
              <div>
                <span
                  className={`btn btn-outline-info w-100 mb-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button `}
                >
                  <Link to={`/${encodePath('credit-note-voucher')}`} className="d-inline-flex text-dark text-decoration-none rounded">
                    Credit Note Voucher
                  </Link>
                </span>
              </div>
              <div>
                <span
                  className={`btn btn-outline-info w-100 mb-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button `}
                >
                  <Link to={`/${encodePath('debit-note-voucher')}`} className="d-inline-flex text-dark text-decoration-none rounded">
                    Debit Note Voucher
                  </Link>
                </span>
              </div>
              <div>
                <span
                  className={`btn btn-outline-info w-100 mb-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button `}
                >
                  <Link to={`/${encodePath('sale-voucher')}`} className="d-inline-flex text-dark text-decoration-none rounded">
                    Sale Voucher
                  </Link>
                </span>
              </div>
              <div>
                <span
                  className={`btn btn-outline-info w-100 mb-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button `}
                >
                  <Link to={`/${encodePath('purchase-voucher')}`} className="d-inline-flex text-dark text-decoration-none rounded">
                    Purchase Voucher
                  </Link>
                </span>
              </div>
              <div>
                <span
                  className={`btn btn-outline-info w-100 mb-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button `}
                >
                  <Link to={`/${encodePath('expense-rcm-voucher')}`} className="d-inline-flex text-dark text-decoration-none rounded">
                    Expense/RCM Voucher
                  </Link>
                </span>
              </div>
              <div>
                <span
                  className={`btn btn-outline-info w-100 mb-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button `}
                >
                  <Link to={`/${encodePath('voucher-approving')}`} className="d-inline-flex text-dark text-decoration-none rounded">
                    Voucher Approving
                  </Link>
                </span>
              </div>
              <div>
                <span
                  className={`btn btn-outline-info w-100 mb-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button `}
                >
                  <Link to={`/${encodePath('show-voucher')}`} className="d-inline-flex text-dark text-decoration-none rounded">
                    Show Voucher
                  </Link>
                </span>
              </div>
              <div>
                <span
                  className={`btn btn-outline-info w-100 mb-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button `}
                >
                  <Link to={`/${encodePath('self-voucher')}`} className="d-inline-flex text-dark text-decoration-none rounded">
                    Self Voucher
                  </Link>
                </span>
              </div>
            </ul>
          </div>
        </li>
      </div>
    </>
  )
}

export default VoucherEntry