import React, { useState } from 'react'
import { FaModx } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { encodePath } from '../../../utilities/Utils';
import "./MergModule.css";
const MergeModule = () => {
  const [activeMenu, setActiveMenu] = useState('');
  const handleMenuClick = (menuId) => {
    setActiveMenu(activeMenu === menuId ? '' : menuId);
  };
  return (
    <>
      <div>
        <li className="mb-1">
          <span
            className={`btn btn-info d-inline-flex align-items-center rounded border-info border-2 merg-module-header w-100 ${activeMenu === 'merg-module-collapse' ? '' : 'collapsed'}`}
            onClick={() => handleMenuClick('merg-module-collapse')}
            aria-expanded={activeMenu === 'merg-module-collapse'}
          >
            <FaModx className="me-1" /> Merge Module
          </span>
          <div className={`collapse ps-2 ${activeMenu === 'merg-module-collapse' ? 'show' : ''}`} id="merg-module-collapse">
            <div className="voucher-type module">
              <Link to={`/${encodePath('merge-item')}`} className="media text-decoration-none text-dark">
                <span className="btn btn-outline-info mb-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button mt-2 text-dark w-100">
                  Merge Item
                </span>
              </Link>
            </div>
            <div className="voucher-type module">
              <Link to={`/${encodePath('merge-batch')}`} className="media text-decoration-none text-dark">
                <span className="btn btn-outline-info mb-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button text-dark w-100">
                  Merge Batch
                </span>
              </Link>
            </div>
            <div className="voucher-type module">
              <Link to={`/${encodePath('merge-company')}`} className="media text-decoration-none text-dark">
                <span className="btn btn-outline-info mb-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button text-dark w-100">
                  Merge Company
                </span>
              </Link>
            </div>
            <div className="voucher-type module">
              <Link to={`/${encodePath('merge-item-group')}`} className="media text-decoration-none text-dark">
                <span className="btn btn-outline-info mb-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button text-dark w-100">
                  Merge Item Group
                </span>
              </Link>
            </div>
            <div className="voucher-type module">
              <Link to={`/${encodePath('merge-tax')}`} className="media text-decoration-none text-dark">
                <span className="btn btn-outline-info mb-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button text-dark w-100">
                  Merge Tax
                </span>
              </Link>
            </div>
            <div className="voucher-type module">
              <Link to={`/${encodePath('merge-salt')}`} className="media text-decoration-none text-dark">
                <span className="btn btn-outline-info mb-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button text-dark w-100">
                  Merge Salt
                </span>
              </Link>
            </div>
            <div className="voucher-type module">
              <Link to={`/${encodePath('merge-location')}`} className="media text-decoration-none text-dark">
                <span className="btn btn-outline-info mb-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button text-dark w-100">
                  Merge Location
                </span>
              </Link>
            </div>
            <div className="voucher-type module">
              <Link to={`/${encodePath('merge-other-group')}`} className="media text-decoration-none text-dark">
                <span className="btn btn-outline-info mb-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button text-dark w-100">
                  Merge Other Group
                </span>
              </Link>
            </div>
            <div className="voucher-type module">
              <Link to={`/${encodePath('merge-commodity-master')}`} className="media text-decoration-none text-dark">
                <span className="btn btn-outline-info mb-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button text-dark w-100">
                  MergeCommodityMaster
                </span>
              </Link>
            </div>
            <div className="voucher-type module">
              <Link to={`/${encodePath('merge-schdule-master')}`} className="media text-decoration-none text-dark">
                <span className="btn btn-outline-info mb-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button text-dark w-100">
                  MergeScheduleMaster
                </span>
              </Link>
            </div>
            <div className="voucher-type module">
              <Link to={`/${encodePath('merge-firm-balance')}`} className="media text-decoration-none text-dark">
                <span className="btn btn-outline-info mb-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button text-dark w-100">
                  MergeFirmBalance(Stock/Accounts)
                </span>
              </Link>
            </div>
            <div className="voucher-type module">
              <Link to={`/${encodePath('merge-series')}`} className="media text-decoration-none text-dark">
                <span className="btn btn-outline-info mb-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button text-dark w-100">
                  Merge Series
                </span>
              </Link>
            </div>
            <div className="voucher-type module">
              <Link to={`/${encodePath('merge-ledger-master')}`} className="media text-decoration-none text-dark">
                <span className="btn btn-outline-info mb-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button text-dark w-100">
                  Merge Ledger Master
                </span>
              </Link>
            </div>
            <div className="voucher-type module">
              <Link to={`/${encodePath('merge-area')}`} className="media text-decoration-none text-dark">
                <span className="btn btn-outline-info mb-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button text-dark w-100">
                  Merge Area
                </span>
              </Link>
            </div>
            <div className="voucher-type module">
              <Link to={`/${encodePath('merge-route')}`} className="media text-decoration-none text-dark">
                <span className="btn btn-outline-info mb-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button text-dark w-100">
                  Merge Route
                </span>
              </Link>
            </div>
            <div className="voucher-type module">
              <Link to={`/${encodePath('merge-station')}`} className="media text-decoration-none text-dark">
                <span className="btn btn-outline-info mb-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button text-dark w-100">
                  Merge Station
                </span>
              </Link>
            </div>
            <div className="voucher-type module">
              <Link to={`/${encodePath('merge-sales-man')}`} className="media text-decoration-none text-dark">
                <span className="btn btn-outline-info mb-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button text-dark w-100">
                  Merge Sales Man
                </span>
              </Link>
            </div>
            <div className="voucher-type module">
              <Link to={`/${encodePath('merge-delivery-man')}`} className="media text-decoration-none text-dark">
                <span className="btn btn-outline-info mb-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button text-dark w-100">
                  Merge Delivery Man
                </span>
              </Link>
            </div>
            <div className="voucher-type module">
              <Link to={`/${encodePath('merge-transporter')}`} className="media text-decoration-none text-dark">
                <span className="btn btn-outline-info mb-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button text-dark w-100">
                  Merge Transporter
                </span>
              </Link>
            </div>
            <div className="voucher-type module">
              <Link to={`/${encodePath('merge-acgroup')}`} className="media text-decoration-none text-dark">
                <span className="btn btn-outline-info mb-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button text-dark w-100">
                  Merge AcGroup
                </span>
              </Link>
            </div>
            <div className="voucher-type module">
              <Link to={`/${encodePath('merge-city')}`} className="media text-decoration-none text-dark">
                <span className="btn btn-outline-info mb-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button text-dark w-100">
                  Merge City
                </span>
              </Link>
            </div>
            <div className="voucher-type module">
              <Link to={`/${encodePath('merge-state')}`} className="media text-decoration-none text-dark">
                <span className="btn btn-outline-info mb-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button text-dark w-100">
                  Merge State
                </span>
              </Link>
            </div>
            <div className="voucher-type module">
              <Link to={`/${encodePath('merge-country')}`} className="media text-decoration-none text-dark">
                <span className="btn btn-outline-info mb-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button text-dark w-100">
                  Merge Country
                </span>
              </Link>
            </div>
          </div>
        </li >
      </div >
    </>
  )
}


export default MergeModule