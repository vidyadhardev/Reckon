import React, { useState } from "react";
import { Link } from "react-router-dom";
import { encodePath } from "../../../../utilities/Utils";
import { RiAdminFill } from 'react-icons/ri';
import { MdBackup } from "react-icons/md";
import { LuClipboardType } from "react-icons/lu";
import { FaChartLine } from "react-icons/fa";


const MainAdministrationNavigation = () => {
  const [activeMenu, setActiveMenu] = useState('');
  const handleMenuClick = (menuId) => {
    setActiveMenu(activeMenu === menuId ? '' : menuId);
  };
  return (
    <div className="admin-home sidebar">
      <li className="mb-1">

        <div className="administration-module">
          <div>
            <span
              className={`btn btn-toggle d-inline-flex align-items-center rounded border-2`}
              onClick={() => handleMenuClick('firmMaster-collapse')}
              aria-expanded={activeMenu === 'firmMaster-collapse'}
            >
              <Link to={`/${encodePath('fm-ms')}`} className="text-decoration-none text-dark">
                <RiAdminFill /> Firm Master
              </Link>
            </span>
          </div>
          <div>
            <span className={`btn btn-toggle d-inline-flex align-items-center rounded border-2`}
              onClick={() => handleMenuClick('FYBackUp-collapse')}
              aria-expanded={activeMenu === 'FYBackUp-collapse'}
            >
              <Link to={`/${encodePath('fy-back-up')}`} className="text-decoration-none text-dark"><MdBackup /> FYBackUp</Link>
            </span>
          </div>
          <div className="voucher-type module" >
            <span className={`btn btn-toggle d-inline-flex align-items-center rounded border-2`}
              onClick={() => handleMenuClick('Voucher-collapse')}
              aria-expanded={activeMenu === 'voucher-collapse'}
            >
              <Link to={`/${encodePath('voucher-type')}`} className="text-decoration-none text-dark"><LuClipboardType /> Voucher Type</Link>
            </span>
          </div>
          <div className="sereis-type module" >
            <span className={`btn btn-toggle d-inline-flex align-items-center rounded border-2`}
              onClick={() => handleMenuClick('sereis-collapse')}
              aria-expanded={activeMenu === 'sereis-collapse'}
            >
              <Link to={`/${encodePath('series-master')}`} className="text-decoration-none text-dark"><FaChartLine /> Sereis Master </Link>
            </span>
          </div>
        </div>
      </li>
    </div>
  );
};
export default MainAdministrationNavigation;
