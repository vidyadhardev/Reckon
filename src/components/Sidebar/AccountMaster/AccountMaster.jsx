import React, { useState } from "react";
import { FaAdn } from "react-icons/fa";
import { encodePath } from "../../../utilities/Utils";
import { Link } from "react-router-dom";
import './AccountMaster.css';
const AccountMaster = () => {
  const [activeMenu, setActiveMenu] = useState('');
  const handleMenuClick = (menuId) => {
    setActiveMenu(activeMenu === menuId ? '' : menuId);
  };
  return (
    <>
      <div>
        <li className="mb-1">
          <span className={`btn btn-info d-inline-flex align-items-center rounded border-info border-2 account-master-header w-100 ${activeMenu === 'account-master' ? '' : 'collapsed'}`}
            onClick={() => handleMenuClick('account-master-collapse')}
            aria-expanded={activeMenu === 'account-master-collapse'}
          >
            <FaAdn className="me-2" /> Account Master 
          </span>
          <div className={`collapse ps-2 mt-1 ${activeMenu==='account-master-collapse'? 'show':''}`} id="Utilities-collapse">
          <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small ">
              {/* <div>
                <span
                  className={`btn btn-outline-info mt-2 w-100 mb-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button mt-1`}
                >
                  <Link to={`/${encodePath('ledger-master')}`} className="d-inline-flex text-dark text-decoration-none rounded">
                  Ledger Master
                  </Link>
                </span>
              </div> */}
              <div>
                <span
                  className={`btn btn-outline-info w-100 mb-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button `}
                >
                  <Link to={`/${encodePath('acc-group')}`} className="d-inline-flex text-dark text-decoration-none rounded">
                  Account Group
                  </Link>
                </span>
              </div>
              <div>
                <span
                  className={`btn btn-outline-info w-100 mb-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button `}
                >
                  <Link to={`/${encodePath('schedule')}`} className="d-inline-flex text-dark text-decoration-none rounded">
                  Schedule
                  </Link>
                </span>
              </div>
              <div>
                <span
                  className={`btn btn-outline-info w-100 mb-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button `}
                >
                  <Link to={`/${encodePath('ledger-opening-order')}`} className="d-inline-flex text-dark text-decoration-none rounded">
                  Ledger Opening(Order)
                  </Link>
                </span>
              </div>
              <div>
                <span
                  className={`btn btn-outline-info w-100 mb-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button `}
                >
                  <Link to={`/${encodePath('account-maste-details-entry')}`} className="d-inline-flex text-dark text-decoration-none rounded">
                  AccountMasterDetailEntry
                  </Link>
                </span>
              </div>
              <div>
                <span
                  className={`btn btn-outline-info w-100 mb-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button `}
                >
                  <Link to={`/${encodePath('ledger-opening-master')}`} className="d-inline-flex text-dark text-decoration-none rounded">
                  LedgerOpening
                  </Link>
                </span>
              </div>
              <div>
                <span
                  className={`btn btn-outline-info w-100 mb-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button `}
                >
                  <Link to={`/${encodePath('-approve-retailer-reckonOnly')}`} className="d-inline-flex text-dark text-decoration-none rounded">
                  Approve Retailers
                  </Link>
                </span>
              </div>
            </ul>
          </div>
        </li>
      </div>
    </>
  )
};
export default AccountMaster;