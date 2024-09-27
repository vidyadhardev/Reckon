import React, { useState } from 'react'
import { BsFillDiscFill } from "react-icons/bs";
import './DispatchModule.css';
import { Link } from 'react-router-dom';
import { encodePath } from '../../../utilities/Utils';
const DispatchModule = () => {
  const [activeMenu, setActiveMenu] = useState('');
  const handleMenuClick = (menuId) => {
    setActiveMenu(activeMenu === menuId ? '' : menuId);
  };

  return (
    <>
      <div>
        <li className='mb-1'>
          <span className={`btn btn-info d-inline-flex align-items-center rounded border-info border-2 dispatch-module-header w-100 ${activeMenu === 'dispatch-module-collapse' ? '' : 'collapsed'}`}
            onClick={() => handleMenuClick('dispatch-module-collapse')}
            aria-expanded={activeMenu === 'dispatch-module-collapse'}
          >
            <BsFillDiscFill className='me-2' /> Dispatch Module
          </span>
          <div className={`collapse ps-2 ${activeMenu === 'dispatch-module-collapse' ? 'show' : ''}`} id="dispatch-module-collapse">
            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small ">
              <div className='button'>
                <Link to={`/${encodePath('expiry-issue-note')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2  d-inline-flex align-items-center rounded border-2 admin-Sub-button  w-100 text-dark`}
                  >
                    Multi Bill Print
                  </span>
                </Link>
              </div>
              <div className='button'>
                <Link to={`/${encodePath('picking-dispatch-summary')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2  d-inline-flex align-items-center rounded border-2 admin-Sub-button  w-100 text-dark`}
                  >
                    Picking(Dispatch Summary)
                  </span>
                </Link>
              </div>
              <div className='button'>
                <Link to={`/${encodePath('expiry-issue-challan-book')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2  d-inline-flex align-items-center rounded border-2 admin-Sub-button  w-100 text-dark`}
                  >
                    Checking
                  </span>
                </Link>
              </div>
              <div className='button'>
                <Link to={`/${encodePath('packing')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2  d-inline-flex align-items-center rounded border-2 admin-Sub-button  w-100 text-dark`}
                  >
                    Packing
                  </span>
                </Link>
              </div>
              <div className='button'>
                <Link to={`/${encodePath('expiry-issue-challan-jv-print')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2  d-inline-flex align-items-center rounded border-2 admin-Sub-button  w-100 text-dark`}
                  >
                    Annexure
                  </span>
                </Link>
              </div>
              <div className='button'>
                <Link to={`/${encodePath('expiry-issue-challan-jv-print')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2  d-inline-flex align-items-center rounded border-2 admin-Sub-button  w-100 text-dark`}
                  >
                    Delivery
                  </span>
                </Link>
              </div>
              <div className='button'>
                <Link to={`/${encodePath('un-deliver')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2  d-inline-flex align-items-center rounded border-2 admin-Sub-button  w-100 text-dark`}
                  >
                    UnDeliver
                  </span>
                </Link>
              </div>
              <div className='button'>
                <Link to={`/${encodePath('dispatch-report')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2  d-inline-flex align-items-center rounded border-2 admin-Sub-button  w-100 text-dark`}
                  >
                    Dispatch Report
                  </span>
                </Link>
              </div>
              <div className='button'>
                <Link to={`/${encodePath('update-stock-value')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2  d-inline-flex align-items-center rounded border-2 admin-Sub-button  w-100 text-dark`}
                  >
                    Update Stock Value
                  </span>
                </Link>
              </div>
              <div className='button'>
                <Link to={`/${encodePath('dispatch-dash-board')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2  d-inline-flex align-items-center rounded border-2 admin-Sub-button  w-100 text-dark`}
                  >
                    Dispatch DashBoard
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

export default DispatchModule;