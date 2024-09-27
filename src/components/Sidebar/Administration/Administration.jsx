import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { encodePath } from '../../../utilities/Utils';
import { SiSpring } from "react-icons/si";
import './Administration.css';
const Administration = () => {
  const [activeMenu, setActiveMenu] = useState('');
  const handleMenuClick = (menuId) => {
    setActiveMenu(activeMenu === menuId ? '' : menuId);
  };
  // const handleItemClick = () => {
  //   handleClose();
  // }
  return (
    <>
      <div className='reckonjj-fix'>
        <li className="mb-1 administration-fix">
          <span
            className={`btn btn-info d-inline-flex rounded border-info border-2 administration-header w-100 ${activeMenu === 'administration-collapse' ? '' : 'collapsed'}`}
            onClick={() => handleMenuClick('administration-collapse')}
            aria-expanded={activeMenu === 'administration-collapse'}
          >
            <Link className='administration-button navigation-Link align-items-center justify-content-center text-decoration-none text-dark' >
              <SiSpring className='me-2' />
              Administration
            </Link>
          </span>
          <div className={`collapse ${activeMenu === 'administration-collapse' ? 'show' : ''}`} id="administration-collapse">
            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small dropdownList ">
              <div className="administration-module ms-2">
                <div className='mt-2'>
                  <Link to={`/${encodePath('fm-ms')}`} className="media text-decoration-none " >
                    <span className={`btn btn-outline-info w-100 mb-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button text-dark`}
                    >
                      Firm Master
                    </span>
                  </Link>
                </div>
                <div>
                  <Link to={`/${encodePath('fy-back-up')}`} className="media text-decoration-none ">
                    <span className={`btn btn-outline-info w-100 mb-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button text-dark`}
                    >
                      FYBackUp
                    </span>
                  </Link>
                </div>
                <div>
                  <Link to={`/${encodePath('fy-restore')}`} className="media text-decoration-none ">
                    <span className={`btn btn-outline-info w-100 mb-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button text-dark`}
                    >
                      FY Restore
                    </span>
                  </Link>
                </div>
                <div className="voucher-type module" >
                  <Link to={`/${encodePath('voucher-type')}`} className="media text-decoration-none ">
                    <span className={`btn btn-outline-info w-100 mb-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button text-dark`}
                    >
                      Voucher type
                    </span>
                  </Link>
                </div>
                <div className="sereis-type module" >
                  <Link to={`/${encodePath('series-master')}`} className="media text-decoration-none ">
                    <span className={`btn btn-outline-info w-100 mb-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button text-dark`}
                    >
                      Sereis Master
                    </span>
                  </Link>
                </div>
                <div className="sereis-type module" >
                  <Link to={`/${encodePath('backup-path-entry')}`} className="media text-decoration-none ">
                    <span className={`btn btn-outline-info w-100 mb-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button text-dark`}
                    >
                      Backup Path Entry
                    </span>
                  </Link>
                </div>
                <div className="sereis-type module" >
                  <Link to={`/${encodePath('holiday-path-en')}`} className="media text-decoration-none ">
                    <span className={`btn btn-outline-info w-100 mb-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button text-dark`}
                    >
                      Holiday Setup
                    </span>
                  </Link>
                </div>
                <div className="sereis-type module" >
                  <Link to={`/${encodePath('transfer-next-year')}`} className="media text-decoration-none ">
                    <span className={`btn btn-outline-info w-100 mb-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button text-dark`}
                    >
                      Transfer Next Year
                    </span>
                  </Link>
                </div>
                <div className="sereis-type module" >
                  <Link to={`/${encodePath('fev-menu-en')}`} className="media text-decoration-none ">
                    <span className={`btn btn-outline-info w-100 mb-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button text-dark`}
                    >
                      Favourite Menu Entry
                    </span>
                  </Link>
                </div>
                <div className="sereis-type module" >
                  <Link to={`/${encodePath('trans-stock-ledger-bal')}`} className="media text-decoration-none ">
                    <span className={`btn btn-outline-info w-100 mb-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button text-dark`}
                    >
                      Trans.Stock,Ledger Bal.
                    </span>
                  </Link>
                </div>
                <div className="sereis-type module" >
                  <Link to={`/${encodePath('import-setting')}`} className="media text-decoration-none ">
                    <span className={`btn btn-outline-info w-100 mb-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button text-dark`}
                    >
                      Import Settings
                    </span>
                  </Link>
                </div>
              </div>
            </ul>
          </div>
        </li>
      </div>
    </>
  )
};
export default Administration;