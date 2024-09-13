import React, { useState } from 'react'
import { SiMultisim  } from 'react-icons/si';
import { Link } from 'react-router-dom';
import { encodePath } from '../../../utilities/Utils';
import "./MultiVoucherEntry.css";
const MultiVoucherEntry = () => {
  const [activeMenu, setActiveMenu] = useState('');
  const handleMenuClick = (menuId) => {
    setActiveMenu(activeMenu === menuId ? '' : menuId);
  };
  return (
    <>
      <div>
        <li className="mb-1">
          <span
            className={`btn btn-info d-inline-flex align-items-center rounded border-info border-2 multi-voucher-header w-100 ${activeMenu === 'multi-voucher-entry-collapse' ? '' : 'collapsed'}`}
            onClick={() => handleMenuClick('multi-voucher-entry-collapse')}
            aria-expanded={activeMenu === 'multi-voucher-entry-collapse'}
          >
            <SiMultisim  className="me-1" /> Multi Voucher Entry
          </span>
          <div className={`collapse ps-2 ${activeMenu === 'multi-voucher-entry-collapse' ? 'show' : ''}`} id="multi-voucher-entry-collapse">
            <div className="voucher-type module" >
              <span className={`btn btn-outline-info w-100 mb-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button mt-2`}
              >
                <Link to={`/${encodePath('bank-receipt')}`} className="media text-decoration-none text-dark"> Bank Receipt</Link>
              </span>
            </div>
            <div className="sereis-type module" >
              <span className={`btn btn-outline-info w-100 mb-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button `}
              >
                <Link to={`/${encodePath('multiple-voucher')}`} className="media text-decoration-none text-dark">Multiple Voucher </Link>
              </span>
            </div>
            <div className="sereis-type module" >
              <span className={`btn btn-outline-info w-100 mb-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button `}
              >
                <Link to={`/${encodePath('cash-Bank-receipt-entry')}`} className="media text-decoration-none text-dark"> Cash Bank Receipt Entry</Link>
              </span>
            </div>
            <div className="sereis-type module" >
              <span className={`btn btn-outline-info w-100 mb-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button `}
              >
                <Link to={`/${encodePath('bank-pay-slip-print')}`} className="media text-decoration-none text-dark">Bank Pay Slip Print </Link>
              </span>
            </div>
            <div className="sereis-type module" >
              <span className={`btn btn-outline-info w-100 mb-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button `}
              >
                <Link to={`/${encodePath('cashier-entry')}`} className="media text-decoration-none text-dark"> Cashier Entry </Link>
              </span>
            </div>
            <div className="sereis-type module" >
              <span className={`btn btn-outline-info w-100 mb-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button `}
              >
                <Link to={`/${encodePath('credit-bill-approving')}`} className="media text-decoration-none text-dark"> Credit Bill Approving </Link>
              </span>
            </div>
            <div className="sereis-type module" >
              <span className={`btn btn-outline-info w-100 mb-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button `}
              >
                <Link to={`/${encodePath('cashier-entry')}`} className="media text-decoration-none text-dark"> Cashier Entry </Link>
              </span>
            </div>
            <div className="sereis-type module" >
              <span className={`btn btn-outline-info w-100 mb-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button `}
              >
                <Link to={`/${encodePath("periodic-voucher-entry")}`} className="media text-decoration-none text-dark"> Periodic Voucher Entry</Link>
              </span>
            </div>
          </div>
        </li >
      </div >
    </>
  )
}


export default MultiVoucherEntry