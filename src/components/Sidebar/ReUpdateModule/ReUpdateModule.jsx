import React, { useState } from 'react'
import { FaMegaport } from 'react-icons/fa';
import { encodePath } from "../../../utilities/Utils";
import "./ReUpdateModule.css";
import { Link } from 'react-router-dom';
const ReUpdateModule = () => {
  const [activeMenu, setActiveMenu] = useState('');
  const handleMenuClick = (menuId) => {
    setActiveMenu(activeMenu === menuId ? '' : menuId);
  };
  return (
    <>
      <div>
        <li className="mb-1">
          <span
            className={`btn btn-info d-inline-flex align-items-center rounded border-info border-2 re-update-header w-100 ${activeMenu === 're-update-collapse' ? '' : 'collapsed'}`}
            onClick={() => handleMenuClick('re-update-collapse')}
            aria-expanded={activeMenu === 're-update-collapse'}
          >
            <FaMegaport className="me-1" /> ReUpdate Module
          </span>
          <div className={`collapse ps-2 ${activeMenu === 're-update-collapse' ? 'show' : ''}`} id="re-update-collapse">
            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
              <div className="voucher-type module mt-2">
                <Link to={`/${encodePath('re-update-item-stock')}`} className="media text-decoration-none text-dark">
                  <span className="btn btn-outline-info mb-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button text-dark w-100">
                    ReUpdate Item Stock
                  </span>
                </Link>
              </div>

              <div className="voucher-type module">
                <Link to={`/${encodePath('re-update-ledger-balance')}`} className="media text-decoration-none text-dark">
                  <span className="btn btn-outline-info mb-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button text-dark w-100">
                    ReUpdateLedgerBalance
                  </span>
                </Link>
              </div>

              <div className="voucher-type module">
                <Link to={`/${encodePath('master-rate-update')}`} className="media text-decoration-none text-dark">
                  <span className="btn btn-outline-info mb-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button text-dark w-100">
                    Master Rate Update
                  </span>
                </Link>
              </div>

              <div className="voucher-type module">
                <Link to={`/${encodePath('adjust-nagetive-stock')}`} className="media text-decoration-none text-dark">
                  <span className="btn btn-outline-info mb-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button text-dark w-100">
                    AdjustNegativeStock
                  </span>
                </Link>
              </div>

              <div className="voucher-type module">
                <Link to={`/${encodePath('re-update-godwon-stock')}`} className="media text-decoration-none text-dark">
                  <span className="btn btn-outline-info mb-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button text-dark w-100">
                    ReUpdateGodownStock
                  </span>
                </Link>
              </div>

              <div className="voucher-type module">
                <Link to={`/${encodePath('generation-production-entry')}`} className="media text-decoration-none text-dark">
                  <span className="btn btn-outline-info mb-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button text-dark w-100">
                    GenerateProductionEntry
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


export default ReUpdateModule