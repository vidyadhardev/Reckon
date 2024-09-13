import React, { useState } from 'react'
import { MdDifference } from 'react-icons/md';
import './PriceDifference.css';
import { Link } from 'react-router-dom';
import { encodePath } from '../../../utilities/Utils';
const PriceDifference = () => {
  const [activeMenu, setActiveMenu] = useState('');
  const handleMenuClick = (menuId) => {
    setActiveMenu(activeMenu === menuId ? '' : menuId);
  };

  return (
    <>
      <div>
        <li className='mb-1'>
          <span className={`btn btn-info d-inline-flex align-items-center rounded border-info border-2 price-difference-header w-100 ${activeMenu === 'price-difference-collapse' ? '' : 'collapsed'}`}
            onClick={() => handleMenuClick('price-difference-collapse')}
            aria-expanded={activeMenu === 'price-difference-collapse'}
          >
            <MdDifference className='me-2' /> Price Difference
          </span>
          <div className={`collapse ps-2 ${activeMenu === 'price-difference-collapse' ? 'show' : ''}`} id="price-difference-collapse">
            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small ">
              <div className='button'>
                <Link to={`/${encodePath('p-price-difference-note')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2  d-inline-flex align-items-center rounded border-2 admin-Sub-button  w-100 text-dark`}
                  >
                    P-PriceDifferenceNote
                  </span>
                </Link>
              </div>
              <div className='button'>
                <Link to={`/${encodePath('sale-price-difference-note')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2  d-inline-flex align-items-center rounded border-2 admin-Sub-button  w-100 text-dark`}
                  >
                    SalePriceDifferenceNote
                  </span>
                </Link>
              </div>
              <div className='button'>
                <Link to={`/${encodePath('p-price-difference-note')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2  d-inline-flex align-items-center rounded border-2 admin-Sub-button  w-100 text-dark`}
                  >
                    PPDifferenceNoteBook
                  </span>
                </Link>
              </div>
              <div className='button'>
                <Link to={`/${encodePath('sale-price-difference-note')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2  d-inline-flex align-items-center rounded border-2 admin-Sub-button  w-100 text-dark`}
                  >
                    SalePriceDifferenceNoteB
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

export default PriceDifference;