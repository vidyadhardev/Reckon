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
          <div className={`collapse ps-2 mt-1 ${activeMenu === 'account-master-collapse' ? 'show' : ''}`} id="Utilities-collapse">
            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
              <div className="voucher-type module">
                <Link to={`/${encodePath('acc-group')}`} className="media text-decoration-none text-dark">
                  <span className="btn btn-outline-info mb-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button text-dark w-100">
                    Account Group
                  </span>
                </Link>
              </div>

              <div className="voucher-type module">
                <Link to={`/${encodePath('schedule')}`} className="media text-decoration-none text-dark">
                  <span className="btn btn-outline-info mb-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button text-dark w-100">
                    Schedule
                  </span>
                </Link>
              </div>

              <div className="voucher-type module">
                <Link to={`/${encodePath('ledger-opening-order')}`} className="media text-decoration-none text-dark">
                  <span className="btn btn-outline-info mb-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button text-dark w-100">
                    Ledger Opening (Order)
                  </span>
                </Link>
              </div>

              <div className="voucher-type module">
                <Link to={`/${encodePath('account-maste-details-entry')}`} className="media text-decoration-none text-dark">
                  <span className="btn btn-outline-info mb-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button text-dark w-100">
                    AccountMasterDetailEntry
                  </span>
                </Link>
              </div>

              <div className="voucher-type module">
                <Link to={`/${encodePath('ledger-opening-master')}`} className="media text-decoration-none text-dark">
                  <span className="btn btn-outline-info mb-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button text-dark w-100">
                    Ledger Opening
                  </span>
                </Link>
              </div>

              <div className="voucher-type module">
                <Link to={`/${encodePath('approve-retailer-reckonOnly')}`} className="media text-decoration-none text-dark">
                  <span className="btn btn-outline-info mb-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button text-dark w-100">
                    Approve Retailers
                  </span>
                </Link>
              </div>
            </ul>

          </div>
        </li>
      </div>
    </>
  )
};
export default AccountMaster;