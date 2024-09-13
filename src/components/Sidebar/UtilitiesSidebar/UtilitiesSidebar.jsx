import React, { useState } from 'react'
import { FaJediOrder } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { encodePath } from '../../../utilities/Utils';
import './UtilitiesSidebar.css';
const UtilitiesSidebar = () => {
  const [activeMenu, setActiveMenu] = useState('');
  const handleMenuClick = (menuId) => {
    setActiveMenu(activeMenu === menuId ? '' : menuId);
  };
  return (
    <>
      <div>
        <li className="mb-1">
          <span
            className={`btn btn-info border-info border-2 d-inline-flex align-items-center rounded Utilities-header w-100 ${activeMenu === 'Utilities-collapse' ? '' : 'collapsed'}`}
            onClick={() => handleMenuClick('Utilities-collapse')}
            aria-expanded={activeMenu === 'Utilities-collapse'}
          >
            <FaJediOrder className="me-2" /> Utilities
          </span>
          <div className={`collapse ps-2 ${activeMenu === 'Utilities-collapse' ? 'show' : ''}`} id="Utilities-collapse">
            <ul className="btn-toggle-nav list-unstyled fw-normal small ">
             
              <div className='mt-2'>
                <span
                  className={`btn btn-outline-info w-100 mb-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button `}
                >
                  <Link to={`/${encodePath('refresh-out-standing')}`} className=" text-dark text-decoration-none rounded">
                    Refresh OutStanding
                  </Link>
                </span>
              </div>
              <div>
                <Link to={`/${encodePath('de-telly')}`} className=" text-dark text-decoration-none rounded">
                  <span
                    className={`btn btn-outline-info text-dark w-100 mb-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button `}
                  >
                    Data Export-Tally
                  </span>
                </Link>
              </div>
              <div>
                <Link to={`/${encodePath('de-reckon')}`} className=" text-dark text-decoration-none rounded">
                  <span
                    className={`btn btn-outline-info text-dark w-100 mb-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button `}
                  >
                    	Data Export-Reckon
                  </span>
                </Link>
              </div>
              <div>
                <span
                  className={`btn btn-outline-info w-100 mb-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button `}
                >
                  <Link to={`/${encodePath('import-import-method')}`} className=" text-dark text-decoration-none rounded">
                  ImportPurchaseMethod
                  </Link>
                </span>
              </div>
              <div>
                <span
                  className={`btn btn-outline-info w-100 mb-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button `}
                >
                  <Link to={`/${encodePath('import-reckon-voucher')}`} className=" text-dark text-decoration-none rounded">
                  Data Import-Reckon
                  </Link>
                </span>
                <span
                  className={`btn btn-outline-info w-100 mb-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button mt-1`}
                >
                  <Link to={`/${encodePath('non-working-items-company')}`} className=" text-dark text-decoration-none rounded">
                  Lock Non-Working Item
                  </Link>
                </span>
              </div>
              <div>
                <span
                  className={`btn btn-outline-info w-100 mb-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button `}
                >
                  <Link to={`/${encodePath('non-working-ledger')}`} className=" text-dark text-decoration-none rounded">
                  Non-WorkingLedger
                  </Link>
                </span>
              </div>
              <div>
                <span
                  className={`btn btn-outline-info w-100 mb-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button `}
                >
                  <Link to={`/${encodePath('item-master-editing')}`} className=" text-dark text-decoration-none rounded">
                    Item Master Editing
                  </Link>
                </span>
              </div>
              <div>
                <span
                  className={`btn btn-outline-info w-100 mb-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button `}
                >
                  <Link to={`/${encodePath('multi-bill-print')}`} className=" text-dark text-decoration-none rounded">
                    Multi Bill Print
                  </Link>
                </span>
              </div>
              <div>
                <span
                  className={`btn btn-outline-info w-100 mb-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button `}
                >
                  <Link to={`/${encodePath('freez-sale-purchase')}`} className=" text-dark text-decoration-none rounded">
                    Freeze Sale Purchase
                  </Link>
                </span>
              </div>
              <div>
                <span
                  className={`btn btn-outline-info w-100 mb-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button `}
                >
                  <Link to={`/${encodePath('update-hsn-code')}`} className=" text-dark text-decoration-none rounded">
                    Update HSN CODE
                  </Link>
                </span>
              </div>
              <div>
                <span
                  className={`btn btn-outline-info w-100 mb-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button mt-1`}
                >
                  <Link to={`/${encodePath('update-gst-code')}`} className=" text-dark text-decoration-none rounded">
                    Update GST CODE
                  </Link>
                </span>
              </div>
              <div>
                <span
                  className={`btn btn-outline-info w-100 mb-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button `}
                >
                  <Link to={`/${encodePath('update-gst-in-detail-account')}`} className=" text-dark text-decoration-none rounded">
                    UpdateGSTDetailInAcc.
                  </Link>
                </span>
              </div>
              <div>
                <span
                  className={`btn btn-outline-info w-100 mb-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button `}
                >
                  <Link to={`/${encodePath('multi-receipt-voucher-print')}`} className=" text-dark text-decoration-none rounded">
                  Multi Voucher Print
                  </Link>
                </span>
              </div>
              <div>
                <span
                  className={`btn btn-outline-info w-100 mb-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button `}
                >
                  <Link to={`/${encodePath('mark-transaction')}`} className=" text-dark text-decoration-none rounded">
                    Mark Transaction
                  </Link>
                </span>
              </div>
              <div>
                <span
                  className={`btn btn-outline-info w-100 mb-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button `}
                >
                  <Link to={`/${encodePath('un-mark-transaction')}`} className=" text-dark text-decoration-none rounded">
                    Un Mark Transaction
                  </Link>
                </span>
              </div>
              <div>
                <span
                  className={`btn btn-outline-info w-100 mb-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button `}
                >
                  <Link to={`/${encodePath('series-wise-format-entry')}`} className=" text-dark text-decoration-none rounded">
                    Series Wise Format Entry
                  </Link>
                </span>
              </div>
              <div>
                <span
                  className={`btn btn-outline-info w-100 mb-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button mt-1`}
                >
                  <Link to={`/${encodePath('bulk-company-email.entry')}`} className=" text-dark text-decoration-none rounded">
                    BulkCompanyEmailEntry
                  </Link>
                </span>
              </div>
              <div>
                <span
                  className={`btn btn-outline-info w-100 mb-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button mt-1`}
                >
                  <Link to={`/${encodePath('sereise-wise-party-wise-limit-entry')}`} className=" text-dark text-decoration-none rounded">
                  Series-WisePartyLimit
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

export default UtilitiesSidebar