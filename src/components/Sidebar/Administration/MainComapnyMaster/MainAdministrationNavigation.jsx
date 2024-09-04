import React from "react";
import { Link } from "react-router-dom";
import { encodePath } from "../../../../utilities/Utils";
// import { RiAdminFill } from 'react-icons/ri';
// import { MdBackup, MdRestore } from "react-icons/md";
// import { LuClipboardType } from "react-icons/lu";
// import { FaBalanceScale, FaChartLine, FaFileInvoiceDollar, FaHooli, FaStackpath } from "react-icons/fa";
// import UserModule from "../Administration/UserModule/UserModule";
import "./MainAdministrationNavigation.css";
import { FcCallTransfer } from "react-icons/fc";

const MainAdministrationNavigation = () => {
  return (
    <div className="admin-home sidebar mt-1">
      <div className="administration-module ms-2">
        <div>
        <span className={`btn btn-outline-info w-100 mb-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button `}
          >
            <Link to={`/${encodePath('fm-ms')}`} className="media text-decoration-none text-dark"> Firm Master</Link>
          </span>
        </div>
      <div>
          <span className={`btn btn-outline-info w-100 mb-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button `}
          >
            <Link to={`/${encodePath('fy-back-up')}`} className="media text-decoration-none text-dark"> FYBackUp</Link>
          </span>
        </div>
        <div>
          <span className={`btn btn-outline-info w-100 mb-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button `}
          >
            <Link to={`/${encodePath('fy-restore')}`} className="media text-decoration-none text-dark"> FY Restore</Link>
          </span>
        </div>
        <div className="voucher-type module" >
          <span className={`btn btn-outline-info w-100 mb-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button `}
          >
            <Link to={`/${encodePath('voucher-type')}`} className="media text-decoration-none text-dark"> Voucher Type</Link>
          </span>
        </div>
        <div className="sereis-type module" >
          <span className={`btn btn-outline-info w-100 mb-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button `}
          >
            <Link to={`/${encodePath('series-master')}`} className="media text-decoration-none text-dark"> Sereis Master </Link>
          </span>
        </div>
        <div className="sereis-type module" >
          <span className={`btn btn-outline-info w-100 mb-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button `}
          >
            <Link to={`/${encodePath('backup-path-entry')}`} className="media text-decoration-none text-dark"> Backup Path Entry </Link>
          </span>
        </div>
        <div className="sereis-type module" >
          <span className={`btn btn-outline-info w-100 mb-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button `}
          >
            <Link to={`/${encodePath('holiday-path-en')}`} className="media text-decoration-none text-dark">Holiday Setup </Link>
          </span>
        </div>
        <div className="sereis-type module" >
          <span className={`btn btn-outline-info w-100 mb-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button `}
          >
            <Link to={`/${encodePath('transfer-next-year')}`} className="media text-decoration-none text-dark"> Transfer Next Year </Link>
          </span>
        </div>
        <div className="sereis-type module" >
          <span className={`btn btn-outline-info w-100 mb-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button `}
          >
            <Link to={`/${encodePath('fev-menu-en')}`} className="media text-decoration-none text-dark"> Favourite Menu Entry </Link>
          </span>
        </div>
        <div className="sereis-type module" >
          <span className={`btn btn-outline-info w-100 mb-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button `}
          >
            {/* Transfer Stack And ledger Balance */}
            <Link to={`/${encodePath('trans-stock-ledger-bal')}`} className="media text-decoration-none text-dark"> Trans.Stock,Ledger Bal. </Link>
          </span>
        </div>
        <div className="sereis-type module" >
          <span className={`btn btn-outline-info w-100 mb-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button `}
          >
            <Link to={`/${encodePath('import-setting')}`} className="media text-decoration-none text-dark"> Import Settings </Link>
          </span>
        </div>
      </div>
    </div>
  );
};
export default MainAdministrationNavigation;
