import React, { useState } from "react";
import { Link } from "react-router-dom";
import { encodePath } from "../../../../../utilities/Utils";
import { RiAdminFill } from 'react-icons/ri';
import { MdBackup } from "react-icons/md";
import "./LedgerNavigationPage.css";

const LedgerNavigationPage = () => {
  const [activeMenu, setActiveMenu] = useState('');
  const handleMenuClick = (menuId) => {
    setActiveMenu(activeMenu === menuId ? '' : menuId);
  };
  return (
    <div className="ledger-home sidebar">
      <div className="mb-1">

        <div className="master-module">
          <div>
            <span
              className={`btn btn-toggle d-inline-flex align-items-center rounded border-2 master-Sub-button `}
              onClick={() => handleMenuClick('master-collapse')}
              aria-expanded={activeMenu === 'master-collapse'}
            >
              <Link to={`/${encodePath('fm-ms')}`} className=" text-decoration-none text-dark">
                <RiAdminFill />Acc Group
              </Link>
            </span>
          </div>
          <div>
            <span className={`btn btn-toggle d-inline-flex align-items-center rounded border-2 master-Sub-button `}
              onClick={() => handleMenuClick('FYBackUp-collapse')}
              aria-expanded={activeMenu === 'FYBackUp-collapse'}
            >
              <Link to={`/${encodePath('#')}`} className="media text-decoration-none text-dark"><MdBackup /> Ledger Openig</Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LedgerNavigationPage;
