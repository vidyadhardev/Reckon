import React, { useState } from 'react'
import { PiBuildingsBold } from "react-icons/pi";
import './DepartmentalReport.css';
import { Link } from 'react-router-dom';
import { encodePath } from '../../../utilities/Utils';
const DepartmentalReport = () => {
  const [activeMenu, setActiveMenu] = useState('');
  const handleMenuClick = (menuId) => {
    setActiveMenu(activeMenu === menuId ? '' : menuId);
  };

  return (
    <>
      <div>
        <li className='mb-1'>
          <span className={`btn btn-info d-inline-flex align-items-center rounded border-info border-2 departmental-header w-100 ${activeMenu === 'departmental-collapse' ? '' : 'collapsed'}`}
            onClick={() => handleMenuClick('departmental-collapse')}
            aria-expanded={activeMenu === 'departmental-collapse'}
          >
            <PiBuildingsBold className='me-2' /> Departmental Report
          </span>
          <div className={`collapse ps-2 ${activeMenu === 'departmental-collapse' ? 'show' : ''}`} id="departmental-collapse">
            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small ">
              <div className='button'>
                <Link to={`/${encodePath('GpReportGrid')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2  d-inline-flex align-items-center rounded border-2 admin-Sub-button  w-100 text-dark`}
                  >
                    Gp Report Grid
                  </span>
                </Link>
              </div>
              <div className='button'>
                <Link to={`/${encodePath('billWise-itemWise-schedule-register-retail')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2  d-inline-flex align-items-center rounded border-2 admin-Sub-button  w-100 text-dark`}
                  >
                    Bill Wise Item Wise Schedule Register(Retail)
                  </span>
                </Link>
              </div>
              <div className='button'>
                <Link to={`/${encodePath('billWise-itemWise-schedule-register-wholsale')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2  d-inline-flex align-items-center rounded border-2 admin-Sub-button  w-100 text-dark`}
                  >
                    Bill Wise Item Wise Schedule Register(Wholsale)
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

export default DepartmentalReport;