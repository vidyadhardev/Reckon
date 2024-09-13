import React, { useState } from 'react'
import { MdViewModule } from 'react-icons/md';
import './InventoryModule.css';
import { Link } from 'react-router-dom';
import { encodePath } from '../../../utilities/Utils';
const InventoryModule = () => {
  const [activeMenu, setActiveMenu] = useState('');
  const handleMenuClick = (menuId) => {
    setActiveMenu(activeMenu === menuId ? '' : menuId);
  };
  return (
    <>
      <div>
        <li className='mb-1'>
          <span className={`btn btn-info d-inline-flex align-items-center rounded border-info border-2 inventory-module-header w-100 ${activeMenu === 'inventory-module-collapse' ? '' : 'collapsed'}`}
            onClick={() => handleMenuClick('inventory-module-collapse')}
            aria-expanded={activeMenu === 'inventory-module-collapse'}
          >
            <MdViewModule className='me-2' /> Inventory Module
          </span>
          <div className={`collapse ps-2 ${activeMenu === 'inventory-module-collapse' ? 'show' : ''}`} id="inventory-module-collapse">
            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small ">
              <div className='button'>
                <Link to={`/${encodePath('sale')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button mt-1 w-100 text-dark`}
                  >
                    Sale
                  </span>
                </Link>
              </div>
              <div className='button'>
                <Link to={`/${encodePath('sale-return')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2  d-inline-flex align-items-center rounded border-2 admin-Sub-button  w-100 text-dark`}
                  >
                    Sale Return
                  </span>
                </Link>
              </div>
              <div className='button'>
                <Link to={`/${encodePath('expiry-receive')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2  d-inline-flex align-items-center rounded border-2 admin-Sub-button  w-100 text-dark`}
                  >
                    Expiry Receive
                  </span>
                </Link>
              </div>
              <div className='button'>
                <Link to={`/${encodePath('purchase')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2  d-inline-flex align-items-center rounded border-2 admin-Sub-button  w-100 text-dark`}
                  >
                    Purchase
                  </span>
                </Link>
              </div>
              <div className='button'>
                <Link to={`/${encodePath('purchase-return')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2  d-inline-flex align-items-center rounded border-2 admin-Sub-button  w-100 text-dark`}
                  >
                    Purchase Return
                  </span>
                </Link>
              </div>
              <div className='button'>
                <Link to={`/${encodePath('expiry-issue')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2  d-inline-flex align-items-center rounded border-2 admin-Sub-button  w-100 text-dark`}
                  >
                    Expiry Issue
                  </span>
                </Link>
              </div>
              <div className='button'>
                <Link to={`/${encodePath('replacemnt')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2  d-inline-flex align-items-center rounded border-2 admin-Sub-button  w-100 text-dark`}
                  >
                    Replacement
                  </span>
                </Link>
              </div>
              <div className='button'>
                <Link to={`/${encodePath('price-difference')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2  d-inline-flex align-items-center rounded border-2 admin-Sub-button  w-100 text-dark`}
                  >
                    Price Difference
                  </span>
                </Link>
              </div>
              <div className='button'>
                <Link to={`/${encodePath('stock-maintain')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2  d-inline-flex align-items-center rounded border-2 admin-Sub-button  w-100 text-dark`}
                  >
                    Physical/AdjustmentStock
                  </span>
                </Link>
              </div>
              <div className='button'>
                <Link to={`/${encodePath('stock-transfer')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2  d-inline-flex align-items-center rounded border-2 admin-Sub-button  w-100 text-dark`}
                  >
                    Stock Transfer
                  </span>
                </Link>
              </div>
              <div className='button'>
                <Link to={`/${encodePath('gowdown-transfer')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2  d-inline-flex align-items-center rounded border-2 admin-Sub-button  w-100 text-dark`}
                  >
                    Godown Transfer
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

export default InventoryModule;