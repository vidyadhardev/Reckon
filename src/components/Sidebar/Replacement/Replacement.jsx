import React, { useState } from 'react'
import { BiSolidPurchaseTagAlt } from 'react-icons/bi';
import './Replacement.css';
import { Link } from 'react-router-dom';
import { encodePath } from '../../../utilities/Utils';
const Replacement = () => {
  const [activeMenu, setActiveMenu] = useState('');
  const handleMenuClick = (menuId) => {
    setActiveMenu(activeMenu === menuId ? '' : menuId);
  };

  return (
    <>
      <div>
        <li className='mb-1'>
          <span className={`btn btn-info d-inline-flex align-items-center rounded border-info border-2 replacement-header w-100 ${activeMenu === 'replacement-collapse' ? '' : 'collapsed'}`}
            onClick={() => handleMenuClick('replacement-collapse')}
            aria-expanded={activeMenu === 'replacement-collapse'}
          >
            <BiSolidPurchaseTagAlt className='me-2' /> Replacement
          </span>
          <div className={`collapse ps-2 ${activeMenu === 'replacement-collapse' ? 'show' : ''}`} id="replacement-collapse">
            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small ">
              <div className='button'>
                <Link to={`/${encodePath('replacement-issue')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2  d-inline-flex align-items-center rounded border-2 admin-Sub-button  w-100 text-dark`}
                  >
                    Replacement Issue
                  </span>
                </Link>
              </div>
              <div className='button'>
                <Link to={`/${encodePath('replacement-receive')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2  d-inline-flex align-items-center rounded border-2 admin-Sub-button  w-100 text-dark`}
                  >
                    Replacement Receive
                  </span>
                </Link>
              </div>
              <div className='button'>
                <Link to={`/${encodePath('replacement-issue-book')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2  d-inline-flex align-items-center rounded border-2 admin-Sub-button  w-100 text-dark`}
                  >
                    Replacement Issue Book
                  </span>
                </Link>
              </div>
              <div className='button'>
                <Link to={`/${encodePath('replacement-receive-book')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2  d-inline-flex align-items-center rounded border-2 admin-Sub-button  w-100 text-dark`}
                  >
                    ReplacementReceiveBook
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

export default Replacement;