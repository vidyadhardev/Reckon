import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { encodePath } from "../../../../utilities/Utils";
import SystemConfiguration from "../SystemConfigurationNavigation/SystemConfigurationNavigation";
import FormatConfiguration from "../FormatConfiguration/FormatConfiguration";
import { Dropdown, DropdownButton } from "react-bootstrap";
import { GrDocumentConfig } from "react-icons/gr";
import { FcDownload } from "react-icons/fc";
import { BsUbuntu } from "react-icons/bs";
import { BiAbacus } from "react-icons/bi";

const Configurations = () => {

  return (
    <>
      <DropdownButton variant="light" title={
        <span>
          <GrDocumentConfig className="me-2" />
          Configuration
        </span>
      }>
        <Dropdown.Item>
          <Link to={`/${encodePath('load-df-ms')}`} className="d-inline-flex text-dark align-items-center text-decoration-none rounded">
            <FcDownload /> Load Default Master
          </Link>
        </Dropdown.Item>
        <DropdownButton variant="light" title={
          <span>
            <BsUbuntu className="me-2" />
            System Config
          </span>
        }>
          
          <SystemConfiguration />  {/* System Configuration page added here */}

        </DropdownButton>
        <DropdownButton variant="light" title={
          <span>
            <BiAbacus className="me-2" /> Formate Config
          </span>}>
          <FormatConfiguration />  {/* Format Configuration page added here */}
        </DropdownButton>
      </DropdownButton>



    </>
  )
};
export default Configurations;