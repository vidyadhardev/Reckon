import React, { useState } from 'react'
import { FaModx } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { encodePath } from '../../../utilities/Utils';
import "./MergModule.css";
const MergeModule = () => {
  const [activeMenu, setActiveMenu] = useState('');
  const handleMenuClick = (menuId) => {
    setActiveMenu(activeMenu === menuId ? '' : menuId);
  };
  return (
    <>
      <div>
        <li className="mb-1">
          <span
            className={`btn btn-info d-inline-flex align-items-center rounded border-info border-2 merg-module-header w-100 ${activeMenu === 'merg-module-collapse' ? '' : 'collapsed'}`}
            onClick={() => handleMenuClick('merg-module-collapse')}
            aria-expanded={activeMenu === 'merg-module-collapse'}
          >
            <FaModx className="me-1" /> Merge Module
          </span>
          <div className={`collapse ps-2 ${activeMenu === 'merg-module-collapse' ? 'show' : ''}`} id="merg-module-collapse">
            <div className="voucher-type module" >
              <span className={`btn btn-outline-info w-100 mb-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button mt-2`}
              >
                <Link to={`/${encodePath('merge-item')}`} className="media text-decoration-none text-dark"> Merge Item</Link>
              </span>
            </div>
            <div className="sereis-type module" >
              <span className={`btn btn-outline-info w-100 mb-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button `}
              >
                <Link to={`/${encodePath('merge-batch')}`} className="media text-decoration-none text-dark">Merge Batch </Link>
              </span>
            </div>
            <div className="sereis-type module" >
              <span className={`btn btn-outline-info w-100 mb-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button `}
              >
                <Link to={`/${encodePath('merge-company')}`} className="media text-decoration-none text-dark"> Merge Company</Link>
              </span>
            </div>
            <div className="sereis-type module" >
              <span className={`btn btn-outline-info w-100 mb-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button `}
              >
                <Link to={`/${encodePath('merge-item-group')}`} className="media text-decoration-none text-dark">Merge ItemGroup </Link>
              </span>
            </div>
            <div className="sereis-type module" >
              <span className={`btn btn-outline-info w-100 mb-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button `}
              >
                <Link to={`/${encodePath('merge-tax')}`} className="media text-decoration-none text-dark"> Merge Tax </Link>
              </span>
            </div>
            <div className="sereis-type module" >
              <span className={`btn btn-outline-info w-100 mb-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button `}
              >
                <Link to={`/${encodePath('merge-salt')}`} className="media text-decoration-none text-dark"> Merge Salt </Link>
              </span>
            </div>
            <div className="sereis-type module" >
              <span className={`btn btn-outline-info w-100 mb-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button `}
              >
                <Link to={`/${encodePath('merge-location')}`} className="media text-decoration-none text-dark"> Merge Location </Link>
              </span>
            </div>
            <div className="sereis-type module" >
              <span className={`btn btn-outline-info w-100 mb-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button `}
              >
                <Link to={`/${encodePath('merge-other-group')}`} className="media text-decoration-none text-dark"> Merge Other Group</Link>
              </span>
            </div>
            <div>
              <span className={`btn btn-outline-info w-100 mb-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button `}
              >
                <Link to={`/${encodePath('merge-commodity-master')}`} className="media text-decoration-none text-dark">MergeCommodityMaster</Link>
              </span>
            </div>
            <div>
              <span className={`btn btn-outline-info w-100 mb-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button `}
              >
                <Link to={`/${encodePath('merge-schdule-master')}`} className="media text-decoration-none text-dark"> Merge SchduleMaster</Link>
              </span>
            </div>
            <div className="voucher-type module" >
              <span className={`btn btn-outline-info w-100 mb-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button `}
              >
                <Link to={`/${encodePath('merge-firm-balance')}`}className="media text-decoration-none text-dark"> MergeFirmBalance(Stock/Accounts)</Link>
              </span>
            </div>
            <div className="sereis-type module" >
              <span className={`btn btn-outline-info w-100 mb-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button `}
              >
                <Link to={`/${encodePath('merge-series')}`} className="media text-decoration-none text-dark">Merge Series </Link>
              </span>
            </div>
            <div className="sereis-type module" >
              <span className={`btn btn-outline-info w-100 mb-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button `}
              >
                <Link to={`/${encodePath('merge-ledger-master')}`} className="media text-decoration-none text-dark"> Merge Ledger Master</Link>
              </span>
            </div>
            <div className="sereis-type module" >
              <span className={`btn btn-outline-info w-100 mb-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button `}
              >
                <Link to={`/${encodePath('merge-area')}`} className="media text-decoration-none text-dark">Merge Area </Link>
              </span>
            </div>
            <div className="sereis-type module" >
              <span className={`btn btn-outline-info w-100 mb-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button `}
              >
                <Link to={`/${encodePath('merge-route')}`} className="media text-decoration-none text-dark"> Merge Route </Link>
              </span>
            </div>
            <div className="sereis-type module" >
              <span className={`btn btn-outline-info w-100 mb-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button `}
              >
                <Link to={`/${encodePath('merge-station')}`} className="media text-decoration-none text-dark"> Merge Station </Link>
              </span>
            </div>
            <div className="sereis-type module" >
              <span className={`btn btn-outline-info w-100 mb-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button `}
              >
             
                <Link to={`/${encodePath('merge-sales-man')}`} className="media text-decoration-none text-dark"> Merge Sales Man </Link>
              </span>
            </div>
            <div className="sereis-type module" >
              <span className={`btn btn-outline-info w-100 mb-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button `}
              >
                <Link to={`/${encodePath('merge-delivery-man')}`} className="media text-decoration-none text-dark">Merge Delivery Man</Link>
              </span>
            </div>
            <div className="sereis-type module" >
              <span className={`btn btn-outline-info w-100 mb-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button `}
              >
                <Link to={`/${encodePath('merge-transporter')}`} className="media text-decoration-none text-dark">Merge Transporter </Link>
              </span>
            </div>
            <div className="sereis-type module" >
              <span className={`btn btn-outline-info w-100 mb-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button `}
              >
                <Link to={`/${encodePath('merge-acgroup')}`}  className="media text-decoration-none text-dark"> Merge AcGroup</Link>
              </span>
            </div>
            <div className="sereis-type module" >
              <span className={`btn btn-outline-info w-100 mb-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button `}
              >
                <Link to={`/${encodePath('merge-city')}`} className="media text-decoration-none text-dark">Merge City </Link>
              </span>
            </div>
            <div className="sereis-type module" >
              <span className={`btn btn-outline-info w-100 mb-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button `}
              >
                <Link to={`/${encodePath('merge-state')}`} className="media text-decoration-none text-dark"> Merge State</Link>
              </span>
            </div>
            <div className="sereis-type module" >
              <span className={`btn btn-outline-info w-100 mb-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button `}
              >
                <Link to={`/${encodePath('merge-country')}`} className="media text-decoration-none text-dark"> Merge Country </Link>
              </span>
            </div>
            <div className="sereis-type module" >
              <span className={`btn btn-outline-info w-100 mb-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button `}
              >
          
                <Link to={`/${encodePath('merge-bank')}`} className="media text-decoration-none text-dark"> Merge Bank </Link>
              </span>
            </div>
            <div className="sereis-type module" >
              <span className={`btn btn-outline-info w-100 mb-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button `}
              >
                <Link to={`/${encodePath('merge-r-doctor')}`} className="media text-decoration-none text-dark">Merge RDoctor</Link>
              </span>
            </div>
            <div className="sereis-type module" >
              <span className={`btn btn-outline-info w-100 mb-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button `}
              >
                <Link to={`/${encodePath('merge-patient')}`} className="media text-decoration-none text-dark">Merge Patient</Link>
              </span>
            </div>
          </div>
        </li >
      </div >
    </>
  )
}


export default MergeModule