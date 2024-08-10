import { useState } from "react";
import { Link } from "react-router-dom";
import { encodePath } from "../../../../utilities/Utils";
import { Dropdown, DropdownButton } from "react-bootstrap";
import { LuUtilityPole } from "react-icons/lu";
import { CgImport } from "react-icons/cg";
import { PiExportBold, PiTextUnderlineBold } from "react-icons/pi";
import { FcMultipleInputs } from "react-icons/fc";
import { GrUpdate } from "react-icons/gr";

const Utilities = () => {
  const [activeSubMenu, setActiveSubMenu] = useState('');
  const handleSubMenuClick = (menu) => {
    setActiveSubMenu(activeSubMenu === menu ? '' : menu);
  };
  return (
    <>
      <DropdownButton variant="light" title={
        <span>
          <LuUtilityPole className="me-2" /> Utilities
        </span>
      }>
        <Dropdown.Item className="">
          <Link to={`/${encodePath('dt-im')}`} className="d-inline-flex text-dark align-items-center text-decoration-none rounded">
            <CgImport className="me-2" /> Data Import
          </Link>
        </Dropdown.Item>
        <Dropdown.Item >
          <Link to={`/${encodePath('dt-em')}`} className="d-inline-flex text-dark align-items-center text-decoration-none rounded">
            <PiExportBold className="me-2" />  Data Export
          </Link>
        </Dropdown.Item>
        <DropdownButton variant="light" title={
          <span>
            <FcMultipleInputs className="me-2" />  Multi Edition
          </span>
        }>
          <Dropdown.Item >
            <Link to={`/${encodePath('utilitie')}`} className="d-inline-flex align-items-center text-dark text-decoration-none rounded ">
              <PiTextUnderlineBold className="me-2" />  Utilitie
            </Link>
          </Dropdown.Item>
          {/* <Dropdown.Item>
            <Link to="/" className="d-inline-flex align-items-center text-dark text-decoration-none rounded">
              <GrUpdate className="me-2" />  Reupdate </Link>
          </Dropdown.Item> */}
        </DropdownButton>
      </DropdownButton>

    </>
  )
};
export default Utilities;