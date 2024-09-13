import React, { useState } from 'react'
import { MdArrowDropDownCircle } from 'react-icons/md';
import './FieldForce.css';
import { Link } from 'react-router-dom';
import { encodePath } from '../../../utilities/Utils';
const FieldForce = () => {
  const [activeMenu, setActiveMenu] = useState('');
  const handleMenuClick = (menuId) => {
    setActiveMenu(activeMenu === menuId ? '' : menuId);
  };

  return (
    <>
      <div>
        <li className='mb-1'>
          <span className={`btn btn-info d-inline-flex align-items-center rounded border-info border-2 FieldForce-header w-100 ${activeMenu === 'inventory-collapse' ? '' : 'collapsed'}`}
            onClick={() => handleMenuClick('inventory-collapse')}
            aria-expanded={activeMenu === 'inventory-collapse'}
          >
            <MdArrowDropDownCircle className='me-2' />Field Force
          </span>
          <div className={`collapse ps-2 ${activeMenu === 'inventory-collapse' ? 'show' : ''}`} id="inventory-collapse">
            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small ">
              <div className='button'>
                <Link to={`/${encodePath('sales-manager')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button mt-1 w-100 text-dark`}
                  >
                    Sales Manager
                  </span>
                </Link>
              </div>
              <div className='button'>
                <Link to={`/${encodePath('zonal-sales-manager')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button  w-100 text-dark`}
                  >
                    Zonal Sales Manager
                  </span>
                </Link>
              </div>
              <div className='button'>
                <Link to={`/${encodePath('regional-sales-manager')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button mt-1 w-100 text-dark`}
                  >
                    Regional Sales Manager
                  </span>
                </Link>
              </div>
              <div className='button'>
                <Link to={`/${encodePath('area-sales-manager')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button  w-100 text-dark`}
                  >
                    Area Sales Manager
                  </span>
                </Link>
              </div><div className='button'>
                <Link to={`/${encodePath('sales-man')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button mt-1 w-100 text-dark`}
                  >
                    Sales Man
                  </span>
                </Link>
              </div>
              <div className='button'>
                <Link to={`/${encodePath('r-doctor-entry')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button  w-100 text-dark`}
                  >
                    R Doctor Entry
                  </span>
                </Link>
              </div><div className='button'>
                <Link to={`/${encodePath('field-staff-area-entry')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button mt-1 w-100 text-dark`}
                  >
                    FieldStaffAreaEntry
                  </span>
                </Link>
              </div>
              <div className='button'>
                <Link to={`/${encodePath('field-staff-route-entry')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button  w-100 text-dark`}
                  >
                    FieldStaffRouteEntry
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

export default FieldForce