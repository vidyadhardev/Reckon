import React, { useState } from 'react'
import { MdInventory } from 'react-icons/md';
import './InventoryMaster.css';
import { Link } from 'react-router-dom';
import { encodePath } from '../../../utilities/Utils';
const InventoryMaster = () => {
  const [activeMenu, setActiveMenu] = useState('');
  const handleMenuClick = (menuId) => {
    setActiveMenu(activeMenu === menuId ? '' : menuId);
  };

  return (
    <>
      <div>
        <li className='mb-1'>
          <span className={`btn btn-info d-inline-flex align-items-center rounded border-info border-2 inventory-header w-100 ${activeMenu === 'inventory-collapse' ? '' : 'collapsed'}`}
            onClick={() => handleMenuClick('inventory-collapse')}
            aria-expanded={activeMenu === 'inventory-collapse'}
          >
            <MdInventory className='me-2' />Inventory Master
          </span>
          <div className={`collapse ps-2 ${activeMenu === 'inventory-collapse' ? 'show' : ''}`} id="inventory-collapse">
            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small ">
              <div className='button'>
                <Link to={`/${encodePath('item-master')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button mt-1 w-100 text-dark`}
                  >
                    Item Master
                  </span>
                </Link>
              </div>
              <div className='button'>
                <Link to={`/${encodePath('company-master')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2 mb-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button  w-100 text-dark`}
                  >
                   Company Master
                  </span>
                </Link>
              </div>
              <div className='button'>
                <Link to={`/${encodePath('store-godwon')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mb-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button w-100 text-dark`}
                  >
                    Store/Godown
                  </span>
                </Link>
              </div>
              <div className='button'>
                <Link to={`/${encodePath('salt-master')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mb-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button w-100 text-dark`}
                  >
                   Salt Master
                  </span>
                </Link>
              </div>
              <div className='button'>
                <Link to={`/${encodePath('category-master')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mb-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button w-100 text-dark`}
                  >
                   Category Master
                  </span>
                </Link>
              </div>
              {/* <div className='button'>
                <Link to={`/${encodePath('item-master')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mb-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button w-100 text-dark`}
                  >
                   Other Group Entry
                  </span>
                </Link>
              </div> */}
              <div className='button'>
                <Link to={`/${encodePath('schedule-master-entry')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mb-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button w-100 text-dark`}
                  >
                   Schedule Master Entry
                  </span>
                </Link>
              </div>
              <div className='button'>
                <Link to={`/${encodePath('mfgcompany-vs-supplier')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mb-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button w-100 text-dark`}
                  >
                  MfgCompanyVsSupplier
                  </span>
                </Link>
              </div>
              <div className='button'>
                <Link to={`/${encodePath('supplier-vs-mfgcompany')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mb-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button w-100 text-dark`}
                  >
                 SupplierVsMfgCompany
                  </span>
                </Link>
              </div>
              <div className='button'>
                <Link to={`/${encodePath('kit-master-entry')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mb-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button w-100 text-dark`}
                  >
               Kit Master Entry
                  </span>
                </Link>
              </div>
              <div className='button'>
                <Link to={`/${encodePath('stock-opening')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mb-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button w-100 text-dark`}
                  >
                 Stock Opening
                  </span>
                </Link>
              </div>
              <div className='button'>
                <Link to={`/${encodePath('disc-comm')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mb-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button w-100 text-dark`}
                  >
                 Disc/Comm
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

export default InventoryMaster