import React, { useState } from 'react'
import { SiPurgecss } from "react-icons/si";
import './PurchaseReport.css';
import { Link } from 'react-router-dom';
import { encodePath } from '../../../utilities/Utils';
const PurchaseReport = () => {
  const [activeMenu, setActiveMenu] = useState('');
  const handleMenuClick = (menuId) => {
    setActiveMenu(activeMenu === menuId ? '' : menuId);
  };

  return (
    <>
      <div>
        <li className='mb-1'>
          <span className={`btn btn-info d-inline-flex align-items-center rounded border-info border-2 purchase-report-header w-100 ${activeMenu === 'purchase-report-collapse' ? '' : 'collapsed'}`}
            onClick={() => handleMenuClick('purchase-report-collapse')}
            aria-expanded={activeMenu === 'purchase-report-collapse'}
          >
            <SiPurgecss className='me-2' /> Purchase Report
          </span>
          <div className={`collapse ps-2 ${activeMenu === 'purchase-report-collapse' ? 'show' : ''}`} id="purchase-report-collapse">
            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small ">
              <div className='button'>
                <Link to={`/${encodePath('purchase-register')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2  d-inline-flex align-items-center rounded border-2 admin-Sub-button  w-100 text-dark`}
                  >
                    Purchase Register
                  </span>
                </Link>
              </div>
              <div className='button'>
                <Link to={`/${encodePath('dayWise-purchase')}`}className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2  d-inline-flex align-items-center rounded border-2 admin-Sub-button  w-100 text-dark`}
                  >
                    Day Wise Purchase 
                  </span>
                </Link>
              </div>
              <div className='button'>
                <Link to={`/${encodePath('monthly-purchase')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2  d-inline-flex align-items-center rounded border-2 admin-Sub-button  w-100 text-dark`}
                  >
                    Monthly Purchase
                  </span>
                </Link>
              </div>
              <div className='button'>
                <Link to={`/${encodePath('item-purchase-report')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2  d-inline-flex align-items-center rounded border-2 admin-Sub-button  w-100 text-dark`}
                  >
                    Items Purchase Report
                  </span>
                </Link>
              </div>
              <div className='button'>
                <Link to={`/${encodePath('party-purchase-report')}`}  className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2  d-inline-flex align-items-center rounded border-2 admin-Sub-button  w-100 text-dark`}
                  >
                    Party Purchase Report
                  </span>
                </Link>
              </div>
              <div className='button'>
                <Link to={`/${encodePath('group-monthly-purchase')}`}  className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2  d-inline-flex align-items-center rounded border-2 admin-Sub-button  w-100 text-dark`}
                  >
                    {/* GroupWiseMonthlyPurchase */}
                    GroupMonthlyPurchase
                  </span>
                </Link>
              </div>
              <div className='button'>
                <Link to={`/${encodePath('bill-wise-item-purchase')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2  d-inline-flex align-items-center rounded border-2 admin-Sub-button  w-100 text-dark`}
                  >
                   BillWiseItemPurchase
                  </span>
                </Link>
              </div>
              <div className='button'>
                <Link to={`/${encodePath('itemWise-best-supplier')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2  d-inline-flex align-items-center rounded border-2 admin-Sub-button  w-100 text-dark`}
                  >
                   ItemWiseBestSupplier
                  </span>
                </Link>
              </div>
              <div className='button'>
                <Link to={`/${encodePath('supplier-purchase-register')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2  d-inline-flex align-items-center rounded border-2 admin-Sub-button  w-100 text-dark`}
                  >
                  SupplierPurchaseRegister
                  </span>
                </Link>
              </div>
              <div className='button'>
                <Link to={`/${encodePath('mrpRate-diff-report')}`}className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2  d-inline-flex align-items-center rounded border-2 admin-Sub-button  w-100 text-dark`}
                  >
                   Mrp Rate Diff Report
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
export default PurchaseReport;