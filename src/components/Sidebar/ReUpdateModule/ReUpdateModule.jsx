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
          <div className={`collapse ps-3 ${activeMenu === 're-update-collapse' ? 'show' : ''}`} id="re-update-collapse">
            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small ">
              <div>
                <span
                  className={`btn btn-outline-info mt-2 w-100 mb-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button mt-1`}
                >
                  <Link to={`/${encodePath('re-update-item-stock')}`} className="d-inline-flex text-dark text-decoration-none rounded">
                  ReUpdate Item Stock
                  </Link>
                </span>
              </div>
              <div>
                <span
                  className={`btn btn-outline-info w-100 mb-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button `}
                >
                  <Link to={`/${encodePath('re-update-ledger-balance')}`} className="d-inline-flex text-dark text-decoration-none rounded">
                  ReUpdateLedgerBalance
                  </Link>
                </span>
              </div>
              <div>
                <span
                  className={`btn btn-outline-info w-100 mb-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button `}
                >
                  <Link to={`/${encodePath('master-rate-update')}`} className="d-inline-flex text-dark text-decoration-none rounded">
                  Master Rate Update
                  </Link>
                </span>
              </div>
              <div>
                <span
                  className={`btn btn-outline-info w-100 mb-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button `}
                >
                  <Link to={`/${encodePath('adjust-nagetive-stock')}`} className="d-inline-flex text-dark text-decoration-none rounded">
                  Adjust Negative Stock
                  </Link>
                </span>
              </div>
              <div>
                <span
                  className={`btn btn-outline-info w-100 mb-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button `}
                >
                  <Link to={`/${encodePath('re-update-godwon-stock')}`} className="d-inline-flex text-dark text-decoration-none rounded">
                  ReUpdateGodownStock
                  </Link>
                </span>
              </div>
              <div>
                <span
                  className={`btn btn-outline-info w-100 mb-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button `}
                >
                  <Link to={`/${encodePath('off-line-production-entry-generation-from-sale')}`} className="d-inline-flex text-dark text-decoration-none rounded">
                  OffLineProductionEntry<br/>GenerationFromSale
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


export default ReUpdateModule