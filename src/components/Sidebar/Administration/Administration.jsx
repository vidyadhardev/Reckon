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
                  <span className={`btn btn-outline-info w-100 mb-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button `}
                
                  >
                    <Link to={`/${encodePath('fm-ms')}`} className="media text-decoration-none text-dark" > Firm Master</Link>
                  </span>
                </div>
                <div>
                  <span className={`btn btn-outline-info w-100 mb-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button `}
                  >
                    <Link to={`/${encodePath('fy-back-up')}`} className="media text-decoration-none text-dark"> FYBackUp</Link>
                  </span>
                </div>
                <div>
                  <span className={`btn btn-outline-info w-100 mb-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button `}
                  >
                    <Link to={`/${encodePath('fy-restore')}`} className="media text-decoration-none text-dark"> FY Restore</Link>
                  </span>
                </div>
                <div className="voucher-type module" >
                  <span className={`btn btn-outline-info w-100 mb-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button `}
                  >
                    <Link to={`/${encodePath('voucher-type')}`} className="media text-decoration-none text-dark"> Voucher Type</Link>
                  </span>
                </div>
                <div className="sereis-type module" >
                  <span className={`btn btn-outline-info w-100 mb-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button `}
                  >
                    <Link to={`/${encodePath('series-master')}`} className="media text-decoration-none text-dark"> Sereis Master </Link>
                  </span>
                </div>
                <div className="sereis-type module" >
                  <span className={`btn btn-outline-info w-100 mb-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button `}
                  >
                    <Link to={`/${encodePath('backup-path-entry')}`} className="media text-decoration-none text-dark"> Backup Path Entry </Link>
                  </span>
                </div>
                <div className="sereis-type module" >
                  <span className={`btn btn-outline-info w-100 mb-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button `}
                  >
                    <Link to={`/${encodePath('holiday-path-en')}`} className="media text-decoration-none text-dark">Holiday Setup </Link>
                  </span>
                </div>
                <div className="sereis-type module" >
                  <span className={`btn btn-outline-info w-100 mb-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button `}
                  >
                    <Link to={`/${encodePath('transfer-next-year')}`} className="media text-decoration-none text-dark"> Transfer Next Year </Link>
                  </span>
                </div>
                <div className="sereis-type module" >
                  <span className={`btn btn-outline-info w-100 mb-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button `}
                  >
                    <Link to={`/${encodePath('fev-menu-en')}`} className="media text-decoration-none text-dark"> Favourite Menu Entry </Link>
                  </span>
                </div>
                <div className="sereis-type module" >
                  <span className={`btn btn-outline-info w-100 mb-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button `}
                  >
                    <Link to={`/${encodePath('trans-stock-ledger-bal')}`} className="media text-decoration-none text-dark"> Trans.Stock,Ledger Bal. </Link>
                  </span>
                </div>
                <div className="sereis-type module" >
                  <span className={`btn btn-outline-info w-100 mb-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button `}
                  >
                    <Link to={`/${encodePath('import-setting')}`} className="media text-decoration-none text-dark"> Import Settings </Link>
                  </span>
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