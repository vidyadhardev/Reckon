import React, { useState } from 'react'
import { FaInstalod } from 'react-icons/fa';
import { encodePath } from '../../../utilities/Utils';
import { Link } from 'react-router-dom';
const Installation = () => {
  const [activeMenu, setActiveMenu] = useState('');
  const handleMenuClick = (menuId) => {
    setActiveMenu(activeMenu === menuId ? '' : menuId);
  }
  return (
    <>
      <div>
        <li className="mb-1">
          <span
            className={`btn btn-toggle d-inline-flex align-items-center rounded border-info border-2 mt-2 fw-bold reckon-header w-100 ${activeMenu === 'installation-collapse' ? '' : 'collapsed'}`}
            onClick={() => handleMenuClick('installation-collapse')}
            aria-expanded={activeMenu === 'installation-collapse'}
          >
            <FaInstalod className="me-2 abs" />Installation
          </span>
          <div className={`collapse ${activeMenu === 'installation-collapse' ? 'show' : ''}`} id="installation-collapse">
            <Link to={`/${encodePath('download-reckon')}`} className='text-decoration-none '>
              <span
                className={`btn btn-outline-info mt-2 w-100 mb-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button text-black `}
              >
                Download Reckon
              </span>
            </Link>
            <Link to={`/${encodePath('download-sql-server')}`} className='text-decoration-none'>
              <span
                className={`btn btn-outline-info w-100 mb-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button text-black `}
              >
                Download SQL Server
              </span>
            </Link>
            <Link to={`/${encodePath('sql-server-installation')}`} className='text-decoration-none'>
              <span
                className={`btn btn-outline-info w-100 mb-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button text-black `}
              >
                SQL Server Installation
              </span>
            </Link>
            <Link to={`/${encodePath('reckon-installation')}`} className='text-decoration-none'>
              <span
                className={`btn btn-outline-info w-100 mb-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button text-black `}
              >
                Reckon Installation
              </span>
            </Link>
            <Link to={`/${encodePath('update-new-version')}`} className='text-decoration-none'>
              <span
                className={`btn btn-outline-info w-100 mb-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button text-black `}
              >
                Update New Version
              </span>
            </Link>
            <Link to={`/${encodePath('download-control-file')}`} className='text-decoration-none'>
              <span
                className={`btn btn-outline-info w-100 mb-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button text-black `}
              >
                Download Control File
              </span>
            </Link>
            <Link to={`/${encodePath('download-print-formate')}`} className='text-decoration-none'>
              <span
                className={`btn btn-outline-info w-100 mb-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button text-black `}
              >
                Download Print Format
              </span>
            </Link>
            <Link to={`/${encodePath('create-firm-database')}`} className='text-decoration-none'>
              <span
                className={`btn btn-outline-info w-100 mb-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button text-black `}
              >
                Create Firm & Database
              </span>
            </Link>
            <Link to={`/${encodePath('firm-detail-update')}`} className='text-decoration-none'>
              <span
                className={`btn btn-outline-info w-100 mb-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button text-black `}
              >  Firm Detail Update
              </span>
            </Link>
            <Link to={`/${encodePath('invoice-formate-setup')}`} className='text-decoration-none'>
              <span
                className={`btn btn-outline-info w-100 mb-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button text-black `}
              >
                Invoice Format Setup
              </span>
            </Link>
            <Link to={`/${encodePath('e-invoice-setup')}`} className='text-decoration-none'>
              <span
                className={`btn btn-outline-info w-100 mb-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button text-black `}
              >
                E-Invoice Setup
              </span>
            </Link>
            <Link to={`/${encodePath('e-way-bill-setup')}`} className='text-decoration-none'>
              <span
                className={`btn btn-outline-info w-100 mb-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button text-black `}
              >
                E-Way Bill Setup
              </span>
            </Link>
            <Link to={`/${encodePath('email-setup')}`} className='text-decoration-none'>
              <span
                className={`btn btn-outline-info w-100 mb-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button text-black `}
              >
                Email Setup
              </span>
            </Link>
            <Link to={`/${encodePath('import-mathod')}`} className='text-decoration-none'>
              <span
                className={`btn btn-outline-info w-100 mb-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button text-black `}
              >
                Import Method
              </span>
            </Link>
            <Link to={`/${encodePath('whatsapp-setup')}`} className='text-decoration-none'>
              <span
                className={`btn btn-outline-info w-100 mb-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button text-black `}
              >
                Whatsapp Setup
              </span>
            </Link>
            <Link to={`/${encodePath('lan-config')}`} className='text-decoration-none'>
              <span
                className={`btn btn-outline-info w-100 mb-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button text-black `}
              >
                LAN Configuration
              </span>
            </Link>
            <Link to={`/${encodePath('auto-backup-setup')}`} className='text-decoration-none'>
              <span
                className={`btn btn-outline-info w-100 mb-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button text-black `}
              >
                Auto Backup Setup
              </span>
            </Link>
            <Link to={`/${encodePath('user-create')}`} className='text-decoration-none'>
              <span
                className={`btn btn-outline-info w-100 mb-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button text-black `}
              >
                User Create
              </span>
            </Link>
            <Link to={`/${encodePath('print-page-setup')}`} className='text-decoration-none'>
              <span
                className={`btn btn-outline-info w-100 mb-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button text-black `}
              >
                Printer Page Setup
              </span>
            </Link>
          </div>
        </li>
      </div>
    </>
  )
}

export default Installation;