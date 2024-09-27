import React, { useState } from 'react'
import { MdOutlineMailLock } from "react-icons/md";
import './EmailModule.css';
import { Link } from 'react-router-dom';
import { encodePath } from '../../../utilities/Utils';
const EmailModule = () => {
  const [activeMenu, setActiveMenu] = useState('');
  const handleMenuClick = (menuId) => {
    setActiveMenu(activeMenu === menuId ? '' : menuId);
  };

  return (
    <>
      <div>
        <li className='mb-1'>
          <span className={`btn btn-info d-inline-flex align-items-center rounded border-info border-2 email-header w-100 ${activeMenu === 'email-collapse' ? '' : 'collapsed'}`}
            onClick={() => handleMenuClick('email-collapse')}
            aria-expanded={activeMenu === 'email-collapse'}
          >
            <MdOutlineMailLock className='me-2' /> Email Module
          </span>
          <div className={`collapse ps-2 ${activeMenu === 'email-collapse' ? 'show' : ''}`} id="email-collapse">
            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small ">
              <div className='button'>
                <Link to={`/${encodePath('mail-config-entry')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2  d-inline-flex align-items-center rounded border-2 admin-Sub-button  w-100 text-dark`}
                  >
                    MailConfig Entry
                  </span>
                </Link>
              </div>
              <div className='button'>
                <Link to={`/${encodePath('general-email')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2  d-inline-flex align-items-center rounded border-2 admin-Sub-button  w-100 text-dark`}
                  >
                    General Email
                  </span>
                </Link>
              </div>
              <div className='button'>
                <Link to={`/${encodePath('general-SMS')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2  d-inline-flex align-items-center rounded border-2 admin-Sub-button  w-100 text-dark`}
                  >
                   General SMS
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

export default EmailModule;