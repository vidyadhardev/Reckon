import { encodePath } from "../../../../utilities/Utils";
import { DropdownButton, Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaUser, FaUsers, FaGlobe, FaSync, FaBuilding, FaThList, FaEllipsisH } from 'react-icons/fa';
import "./Ledger_Master.css";

// Icon mapping
const iconMapping = {
  "Account Entry": FaUser,
  "Account Global User Entry": FaGlobe,
  "Account Global Rights Update": FaSync,
  "Account User Firm Rights": FaBuilding,
  "Account User Series Rights": FaThList,
  "Account User Other Entry": FaEllipsisH,
};

const LedgerMaster = () => {
  const menuItems = [
    { name: "Account Entry", path: "user-module-en" },
    { name: "Account Global User Entry", path: "global-user-en" },
    { name: "Account Global Rights Update", path: "gb-update-rt" },
    { name: "Account User Firm Rights", path: "user-frm-rt-en" },
    { name: "Account User Series Rights", path: "user-srs-rth-en" },
    { name: "Account User Other Entry", path: "user-other-en" },
  ];

  return (
    <>
      <DropdownButton variant="light" id="dropdown-basic-button" title={
        <span className="module-button">
          <FaUsers className="me-2" />
          Ledger Master
        </span>
      }>
        {/*  Here Item Dropdown , icon Name Map  */}
        {menuItems.map((item, index) => {
          const IconComponent = iconMapping[item.name]; // Get the icon component based on the item name
          return (
            <Dropdown.Item key={index} as="div" className="dropdown-item-responsive">
              <Link to={`/${encodePath(item.path)}`} className="d-inline-flex align-items-center text-dark text-decoration-none rounded w-100"> 
                <IconComponent className="me-2" />
                <span>{item.name}</span>
              </Link>
            </Dropdown.Item>
          );
        })}
      </DropdownButton>
    </>
  );
};

export default LedgerMaster;
