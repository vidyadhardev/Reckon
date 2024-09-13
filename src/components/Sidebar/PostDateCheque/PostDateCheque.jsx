import React, { useState } from 'react'
import { FaPodcast } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { encodePath } from '../../../utilities/Utils';
import './PostDateCheque.css';
const PostDateCheque = () => {
  const [activeMenu, setActiveMenu] = useState('');
  const handleMenuClick = (menuId) => {
    setActiveMenu(activeMenu === menuId ? '' : menuId);
  };
  return (
    <>
      <div>
        <li className="mb-1">
          <span
            className={`btn btn-info d-inline-flex align-items-center rounded border-info border-2 post-date-cheque-header w-100 ${activeMenu === 'voucher-entry-collapse' ? '' : 'collapsed'}`}
            onClick={() => handleMenuClick('voucher-entry-collapse')}
            aria-expanded={activeMenu === 'voucher-entry-collapse'}
          >
            <FaPodcast className='me-2' />Post Date Cheque
          </span>
          <div className={`collapse ps-1 ${activeMenu === 'voucher-entry-collapse' ? 'show' : ''}`} id="voucher-entry-collapse">
            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small ">
              <div>
                <span
                  className={`btn btn-outline-info mt-2 w-100 mb-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button mt-1`}
                >
                  <Link to={`/${encodePath('pdc-receipt')}`} className="d-inline-flex text-dark text-decoration-none rounded">
                    PDC - Receipt
                  </Link>
                </span>
              </div>
              <div>
                <span
                  className={`btn btn-outline-info w-100 mb-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button `}
                >
                  <Link to={`/${encodePath('pay-in-slip')}`} className="d-inline-flex text-dark text-decoration-none rounded">
                    Pay in Slip
                  </Link>
                </span>
              </div>
              <div>
                <span
                  className={`btn btn-outline-info w-100 mb-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button `}
                >
                  <Link to={`/${encodePath('pay-in-slip-posted')}`} className="d-inline-flex text-dark text-decoration-none rounded">
                    Pay in Slip - Posted
                  </Link>
                </span>
              </div>
              <div>
                <span
                  className={`btn btn-outline-info w-100 mb-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button `}
                >
                  <Link to={`/${encodePath('pay-in-slip-both')}`} className="d-inline-flex text-dark text-decoration-none rounded">
                    Pay in Slip - Both
                  </Link>
                </span>
              </div>
              <div>
                <span
                  className={`btn btn-outline-info w-100 mb-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button `}
                >
                  <Link to={`/${encodePath('pdc-payment')}`} className="d-inline-flex text-dark text-decoration-none rounded">
                    PDC - Payment
                  </Link>
                </span>
              </div>
              <div>
                <span
                  className={`btn btn-outline-info w-100 mb-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button `}
                >
                  <Link to={`/${encodePath('pdc-clearence')}`} className="d-inline-flex text-dark text-decoration-none rounded">
                    PDC - Clearence
                  </Link>
                </span>
              </div>
              <div>
                <span
                  className={`btn btn-outline-info w-100 mb-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button `}
                >
                  <Link to={`/${encodePath('pdc-register-receipt')}`} className="d-inline-flex text-dark text-decoration-none rounded">
                    PDC Register Receipt
                  </Link>
                </span>
              </div>
              <div>
                <span
                  className={`btn btn-outline-info w-100 mb-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button `}
                >
                  <Link to={`/${encodePath('pdc-register-payment')}`} className="d-inline-flex text-dark text-decoration-none rounded">
                    PDC Register Payment
                  </Link>
                </span>
              </div>
              <div>
                <span
                  className={`btn btn-outline-info w-100 mb-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button `}
                >
                  <Link to={`/${encodePath('pdc-register-print')}`} className="d-inline-flex text-dark text-decoration-none rounded">
                    PDC Register Print
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

export default PostDateCheque