import React, { useState } from 'react'
import { MdBalcony } from 'react-icons/md';
import './OtherMaster.css';
import { Link } from 'react-router-dom';
import { encodePath } from '../../../utilities/Utils';
const OtherMaster = () => {
  const [activeMenu, setActiveMenu] = useState('');
  const handleMenuClick = (menuId) => {
    setActiveMenu(activeMenu === menuId ? '' : menuId);
  };

  return (
    <>
      <div>
        <li className='mb-1'>
          <span className={`btn btn-info d-inline-flex align-items-center rounded border-info border-2 other-master-header w-100 ${activeMenu === 'inventory-collapse' ? '' : 'collapsed'}`}
            onClick={() => handleMenuClick('inventory-collapse')}
            aria-expanded={activeMenu === 'inventory-collapse'}
          >
            <MdBalcony className='me-2' />Other Master
          </span>
          <div className={`collapse ps-2 ${activeMenu === 'inventory-collapse' ? 'show' : ''}`} id="inventory-collapse">
            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small ">
              <div className='button'>
                <Link to={`/${encodePath('location')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button mt-1 w-100 text-dark`}
                  >
                    Location
                  </span>
                </Link>
              </div>
              <div className='button'>
                <Link to={`/${encodePath('state')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2 mb-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button  w-100 text-dark`}
                  >
                    State
                  </span>
                </Link>
              </div>
              <div className='button'>
                <Link to={`/${encodePath('city')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mb-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button w-100 text-dark`}
                  >
                    City
                  </span>
                </Link>
              </div>
              <div className='button'>
                <Link to={`/${encodePath('station')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mb-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button w-100 text-dark`}
                  >
                    Station
                  </span>
                </Link>
              </div>
              <div className='button'>
                <Link to={`/${encodePath('route-other-master')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mb-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button w-100 text-dark`}
                  >
                    Route
                  </span>
                </Link>
              </div>
              <div className='button'>
                <Link to={`/${encodePath('area')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mb-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button w-100 text-dark`}
                  >
                    Area
                  </span>
                </Link>
              </div>
              <div className='button'>
                <Link to={`/${encodePath('transport')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mb-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button w-100 text-dark`}
                  >
                    Transport
                  </span>
                </Link>
              </div>
              <div className='button'>
                <Link to={`/${encodePath('bank')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mb-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button w-100 text-dark`}
                  >
                    Bank                  </span>
                </Link>
              </div>
              <div className='button'>
                <Link to={`/${encodePath('narretion')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mb-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button w-100 text-dark`}
                  >
                    Narretion
                  </span>
                </Link>
              </div>
              <div className='button'>
                <Link to={`/${encodePath('delivery-man')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mb-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button w-100 text-dark`}
                  >
                   Delivery Man
                  </span>
                </Link>
              </div>
              <div className='button'>
                <Link to={`/${encodePath('mark-type-entry')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mb-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button w-100 text-dark`}
                  >
                  Mark Type Entry
                  </span>
                </Link>
              </div>
              <div className='button'>
                <Link to={`/${encodePath('retail-order-entry')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mb-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button w-100 text-dark`}
                  >
                   Retail Order Entry
                  </span>
                </Link>
              </div>
              <div className='button'>
                <Link to={`/${encodePath('item-p-o')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mb-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button w-100 text-dark`}
                  >
                 Item P.O.
                  </span>
                </Link>
              </div>
              <div className='button'>
                <Link to={`/${encodePath('retail-order-vs-purchase')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mb-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button w-100 text-dark`}
                  >
                   RetailOrderVSPurchase
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

export default OtherMaster