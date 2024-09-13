import React, { useState } from 'react'
import { MdCollections } from 'react-icons/md';
import './CollectionReport.css';
import { Link } from 'react-router-dom';
import { encodePath } from '../../../utilities/Utils';
const CollectionReport = () => {
  const [activeMenu, setActiveMenu] = useState('');
  const handleMenuClick = (menuId) => {
    setActiveMenu(activeMenu === menuId ? '' : menuId);
  };

  return (
    <>
      <div>
        <li className='mb-1'>
          <span className={`btn btn-info d-inline-flex align-items-center rounded border-info border-2 collaction-report-header w-100 ${activeMenu === 'collaction-collapse' ? '' : 'collapsed'}`}
            onClick={() => handleMenuClick('collaction-collapse')}
            aria-expanded={activeMenu === 'collaction-collapse'}
          >
            <MdCollections className='me-2' /> Collection Report
          </span>
          <div className={`collapse ps-2 ${activeMenu === 'collaction-collapse' ? 'show' : ''}`} id="collaction-collapse">
            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small ">
              <div className='button'>
                <Link to={`/${encodePath('collection-all')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button mt-1 w-100 text-dark`}
                  >
                    Collection All
                  </span>
                </Link>
              </div>
              <div className='button'>
                <Link to={`/${encodePath('collection-party-wise')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2  d-inline-flex align-items-center rounded border-2 admin-Sub-button  w-100 text-dark`}
                  >
                    Collection Party Wise
                  </span>
                </Link>
              </div>
              <div className='button'>
                <Link to={`/${encodePath('collection-field-staff-wise')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2  d-inline-flex align-items-center rounded border-2 admin-Sub-button  w-100 text-dark`}
                  >
                    CollectionFieldStaffWise
                  </span>
                </Link>
              </div>
              <div className='button'>
                <Link to={`/${encodePath('collection-area-wise')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2  d-inline-flex align-items-center rounded border-2 admin-Sub-button  w-100 text-dark`}
                  >
                    Collection Area Wise
                  </span>
                </Link>
              </div>
              <div className='button'>
                <Link to={`/${encodePath('collection-route-wise')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2  d-inline-flex align-items-center rounded border-2 admin-Sub-button  w-100 text-dark`}
                  >
                    Collection Route Wise
                  </span>
                </Link>
              </div>
              <div className='button'>
                <Link to={`/${encodePath('collection-station-wise')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2  d-inline-flex align-items-center rounded border-2 admin-Sub-button  w-100 text-dark`}
                  > Collection Station Wise
                  </span>
                </Link>
              </div>
              <div className='button'>
                <Link to={`/${encodePath('inventory-field-staff-wise')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2  d-inline-flex align-items-center rounded border-2 admin-Sub-button  w-100 text-dark`}
                  >
                    InventoryFieldStaffWise
                  </span>
                </Link>
              </div>
              <div className='button'>
                <Link to={`/${encodePath('area-wise-sale-sale-return')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2  d-inline-flex align-items-center rounded border-2 admin-Sub-button  w-100 text-dark`}
                  >
                    AreaWiseSaleSaleReturn
                  </span>
                </Link>
              </div>
              <div className='button'>
                <Link to={`/${encodePath('collection-report')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2  d-inline-flex align-items-center rounded border-2 admin-Sub-button  w-100 text-dark`}
                  >
                    Collection Report
                  </span>
                </Link>
              </div>
              <div className='button'>
                <Link to={`/${encodePath('missing-receipt-number')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2  d-inline-flex align-items-center rounded border-2 admin-Sub-button  w-100 text-dark`}
                  >
                    Missing Receipt Number
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

export default CollectionReport;