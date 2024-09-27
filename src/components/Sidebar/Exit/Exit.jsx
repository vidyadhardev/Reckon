import React, { useState } from 'react'
import { ImExit } from "react-icons/im";
import './Exit.css';
import { Link } from 'react-router-dom';
import { encodePath } from '../../../utilities/Utils';
const Exit = () => {
  const [activeMenu, setActiveMenu] = useState('');
  const handleMenuClick = (menuId) => {
    setActiveMenu(activeMenu === menuId ? '' : menuId);
  };

  return (
    <>
      <div>
        <li className='mb-1'>
          <span className={`btn btn-info d-inline-flex align-items-center rounded border-info border-2 exit-header w-100 ${activeMenu === 'exit-collapse' ? '' : 'collapsed'}`}
            onClick={() => handleMenuClick('exit-collapse')}
            aria-expanded={activeMenu === 'exit-collapse'}
          >
            <ImExit className='me-2' /> Exit
          </span>
          <div className={`collapse ps-2 ${activeMenu === 'exit-collapse' ? 'show' : ''}`} id="exit-collapse">
            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small ">
              <div className='button'>
                <Link to={`/${encodePath('set-device')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2  d-inline-flex align-items-center rounded border-2 admin-Sub-button  w-100 text-dark`}
                  >
                    Set Device
                  </span>
                </Link>
              </div>
              <div className='button'>
                <Link to={`/${encodePath('change-wallpaper')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2  d-inline-flex align-items-center rounded border-2 admin-Sub-button  w-100 text-dark`}
                  >
                   Change Wallpaper
                  </span>
                </Link>
              </div>
              <div className='button'>
                <Link to={`/${encodePath('MenuHelp')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2  d-inline-flex align-items-center rounded border-2 admin-Sub-button  w-100 text-dark`}
                  >
                   Menu Help
                  </span>
                </Link>
              </div>
              <div className='button'>
                <Link to={`/${encodePath('refresh-printer-names')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2  d-inline-flex align-items-center rounded border-2 admin-Sub-button  w-100 text-dark`}
                  >
                  Refresh Printer Names
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

export default Exit;