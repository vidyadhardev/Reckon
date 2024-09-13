import React, { useState } from 'react'
import { Md14Mp } from 'react-icons/md';
import './SaleOrder.css';
import { Link } from 'react-router-dom';
import { encodePath } from '../../../utilities/Utils';
const SaleOrder = () => {
  const [activeMenu, setActiveMenu] = useState('');
  const handleMenuClick = (menuId) => {
    setActiveMenu(activeMenu === menuId ? '' : menuId);
  };

  return (
    <>
      <div>
        <li className='mb-1'>
          <span className={`btn btn-info d-inline-flex align-items-center rounded border-info border-2 sale-order-header w-100 ${activeMenu === 'sale-order-collapse' ? '' : 'collapsed'}`}
            onClick={() => handleMenuClick('sale-order-collapse')}
            aria-expanded={activeMenu === 'sale-order-collapse'}
          >
            <Md14Mp className='me-2' /> Sale Order
          </span>
          <div className={`collapse ps-2 ${activeMenu === 'sale-order-collapse' ? 'show' : ''}`} id="sale-order-collapse">
            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small ">
              <div className='button'>
                <Link to={`/${encodePath('pending-so')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button mt-1 w-100 text-dark`}
                  >
                    Pending S.O.
                  </span>
                </Link>
              </div>
              <div className='button'>
                <Link to={`/${encodePath('on-line-sale-order-entry')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2  d-inline-flex align-items-center rounded border-2 admin-Sub-button  w-100 text-dark`}
                  >
                    On Line SaleOrder Entry
                  </span>
                </Link>
              </div>
              <div className='button'>
                <Link to={`/${encodePath('sale-order-register')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2  d-inline-flex align-items-center rounded border-2 admin-Sub-button  w-100 text-dark`}
                  >
                    Sale Order Register
                  </span>
                </Link>
              </div>
              <div className='button'>
                <Link to={`/${encodePath('party-so')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2  d-inline-flex align-items-center rounded border-2 admin-Sub-button  w-100 text-dark`}
                  >
                    Party S.O.
                  </span>
                </Link>
              </div>
              <div className='button'>
                <Link to={`/${encodePath('item-so')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2  d-inline-flex align-items-center rounded border-2 admin-Sub-button  w-100 text-dark`}
                  >
                    Item S.O.
                  </span>
                </Link>
              </div>
              <div className='button'>
                <Link to={`/${encodePath('so-generation-excel')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2  d-inline-flex align-items-center rounded border-2 admin-Sub-button  w-100 text-dark`}
                  >
                    SoGenerationFromExcel
                  </span>
                </Link>
              </div>
              <div className='button'>
                <Link to={`/${encodePath('item-wise-order-register')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2  d-inline-flex align-items-center rounded border-2 admin-Sub-button  w-100 text-dark`}
                  >
                    ItemWiseOrderRegister
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

export default SaleOrder;