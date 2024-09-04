import React, { useState } from 'react'
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { encodePath } from '../../../utilities/Utils';
import './UserModule.css';
const UserModule = () => {
  const [activeMenu, setActiveMenu] = useState('');
  const handleMenuClick = (menuId) => {
    setActiveMenu(activeMenu === menuId ? '' : menuId);
  };
  return (
    <>
      <div>
        <li className="mb-1">
          <span
            className={`btn btn-info d-inline-flex align-items-center rounded border-info border-2 user-module-header w-100 ${activeMenu === 'user-module-collapse' ? '' : 'collapsed'}`}
            onClick={() => handleMenuClick('user-module-collapse')}
            aria-expanded={activeMenu === 'user-module-collapse'}
          >
            <FaUser className='me-2' /> User Module
          </span>
          <div className={`collapse ps-1 ${activeMenu === 'user-module-collapse' ? 'show' : ''}`} id="user-module-collapse">
            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small ">
              <div>
                <span
                  className={`btn btn-outline-info mt-2 w-100 mb-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button mt-1`}
                >
                  <Link to={`/${encodePath('user-module-en')}`} className="d-inline-flex text-dark text-decoration-none rounded">

                    User Module Entry
                  </Link>
                </span>
              </div>
              <div>
                <span
                  className={`btn btn-outline-info w-100 mb-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button `}
                >
                  <Link to={`/${encodePath('global-user-en')}`} className="d-inline-flex text-dark text-decoration-none rounded">

                    Global User Entry
                  </Link>
                </span>
              </div>
              <div>
                <span
                  className={`btn btn-outline-info w-100 mb-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button `}
                >
                  <Link to={`/${encodePath('gb-update-rt')}`} className="d-inline-flex text-dark text-decoration-none rounded">

                    Global Rights Update
                  </Link>
                </span>
              </div>
              <div>
                <span
                  className={`btn btn-outline-info w-100 mb-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button `}
                >
                  <Link to={`/${encodePath('user-frm-rt-en')}`} className="d-inline-flex text-dark text-decoration-none rounded">

                    User Firm Rights Entry
                  </Link>
                </span>
              </div>
              <div>
                <span
                  className={`btn btn-outline-info w-100 mb-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button `}
                >
                  <Link to={`/${encodePath('user-srs-rth-en')}`} className="d-inline-flex text-dark text-decoration-none rounded">

                    User Series Rights
                  </Link>
                </span>
              </div>
              <div>
                <span
                  className={`btn btn-outline-info w-100 mb-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button `}
                >
                  <Link to={`/${encodePath('user-other-en')}`} className="d-inline-flex text-dark text-decoration-none rounded">

                    User Other Entry
                  </Link>
                </span>
              </div>
            </ul>
          </div>
        </li>
      </div>
    </>
  )
}

export default UserModule