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
            <span
              className={`btn btn-outline-info mt-2 w-100 mb-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button `}
            >
              <Link to={`/${encodePath('download-reckon')}`} className='text-decoration-none text-black'>Download Reckon</Link>
            </span>
            <span
              className={`btn btn-outline-info w-100 mb-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button `}
            >
              <Link to={`/${encodePath('download-sql-server')}`} className='text-decoration-none text-black'>Download SQL Server</Link>
            </span>
            <span
              className={`btn btn-outline-info w-100 mb-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button `}
            >
              <Link to={`/${encodePath('sql-server-installation')}`} className='text-decoration-none text-black'> SQL Server Installation</Link>
            </span>
            <span
              className={`btn btn-outline-info w-100 mb-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button `}
            >
              <Link to={`/${encodePath('reckon-installation')}`} className='text-decoration-none text-black'>
                Reckon Installation</Link>
            </span>
            <span
              className={`btn btn-outline-info w-100 mb-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button `}
            >
              <Link to={`/${encodePath('update-new-version')}`} className='text-decoration-none text-black'> Update New Version</Link>
            </span>
            <span
              className={`btn btn-outline-info w-100 mb-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button `}
            >
              <Link to={`/${encodePath('download-control-file')}`} className='text-decoration-none text-black'> Download Control File</Link>
            </span>
            <span
              className={`btn btn-outline-info w-100 mb-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button `}
            >
              <Link to={`/${encodePath('download-print-formate')}`} className='text-decoration-none text-black'> Download Print Format</Link>
            </span>
            <span
              className={`btn btn-outline-info w-100 mb-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button `}
            >
              <Link to={`/${encodePath('create-firm-database')}`} className='text-decoration-none text-black'>Create Firm & Database</Link>
            </span>
            <span
              className={`btn btn-outline-info w-100 mb-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button `}
            > <Link to={`/${encodePath('firm-detail-update')}`} className='text-decoration-none text-black'> Firm Detail Update</Link>
            </span>
            <span
              className={`btn btn-outline-info w-100 mb-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button `}
            >
              <Link to={`/${encodePath('invoice-formate-setup')}`} className='text-decoration-none text-black'> Invoice Format Setup</Link>
            </span>
            <span
              className={`btn btn-outline-info w-100 mb-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button `}
            >
              <Link to={`/${encodePath('e-invoice-setup')}`} className='text-decoration-none text-black'>E-Invoice Setup</Link>
            </span>
            <span
              className={`btn btn-outline-info w-100 mb-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button `}
            >
              <Link to={`/${encodePath('e-way-bill-setup')}`} className='text-decoration-none text-black'>E-Way Bill Setup</Link>
            </span>
            <span
              className={`btn btn-outline-info w-100 mb-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button `}
            >
              <Link to={`/${encodePath('email-setup')}`} className='text-decoration-none text-black'>
                Email Setup</Link>
            </span>
            <span
              className={`btn btn-outline-info w-100 mb-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button `}
            >
              <Link to={`/${encodePath('import-mathod')}`} className='text-decoration-none text-black'>
                Import Method</Link>
            </span>
            <span
              className={`btn btn-outline-info w-100 mb-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button `}
            >
              <Link to={`/${encodePath('whatsapp-setup')}`} className='text-decoration-none text-black'>
                Whatsapp Setup</Link>
            </span>
            <span
              className={`btn btn-outline-info w-100 mb-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button `}
            >
              <Link to={`/${encodePath('lan-config')}`} className='text-decoration-none text-black'>
                LAN Configuration</Link>
            </span>
            <span
              className={`btn btn-outline-info w-100 mb-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button `}
            >
              <Link to={`/${encodePath('auto-backup-path')}`} className='text-decoration-none text-black'>
                Auto Backup Setup</Link>
            </span>
            <span
              className={`btn btn-outline-info w-100 mb-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button `}
            >
              <Link to={`/${encodePath('user-create')}`} className='text-decoration-none text-black'>
                User Create</Link>
            </span>
            <span
              className={`btn btn-outline-info w-100 mb-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button `}
            >
              <Link to={`/${encodePath('print-page-setup')}`} className='text-decoration-none text-black'> Printer Page Setup</Link>
            </span>

          </div>
        </li>

      </div>
    </>
  )
}

export default Installation;