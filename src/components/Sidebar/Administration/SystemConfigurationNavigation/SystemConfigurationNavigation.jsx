import React, { useState } from "react";
import { Link } from "react-router-dom";
import { encodePath } from "../../../../utilities/Utils";
import { Dropdown } from "react-bootstrap";
import { HiOutlineArrowTrendingDown, HiOutlineArrowTrendingUp } from "react-icons/hi2";
import { SiBmcsoftware, SiLinksys } from "react-icons/si";


const
  SystemConfiguration = () => {
    return (
      <>
        <Dropdown.Item> <Link to={`/${encodePath('old-ss-confi')}`} className="d-inline-flex text-dark align-items-center text-decoration-none rounded">
          <HiOutlineArrowTrendingDown className="me-2" /> Old Sys Config. &nbsp; Ctrl+y
        </Link> </Dropdown.Item>
        <Dropdown.Item><Link to={`/${encodePath('new-ss-confi')}`} className=" d-inline-flex text-dark align-items-center text-decoration-none rounded">
          <HiOutlineArrowTrendingUp className="me-2" />  New Sys Config. &nbsp; Ctrl+t
        </Link></Dropdown.Item>
        <Dropdown.Item><Link to={`/${encodePath('ss-confi')}`} className="d-inline-flex text-dark align-items-center text-decoration-none rounded">
          <SiBmcsoftware className="me-2" />  Software Configuration
        </Link></Dropdown.Item>
        <Dropdown.Item><Link to={`/${encodePath('sys-param-en')}`} className="d-inline-flex text-dark align-items-center text-decoration-none rounded">
          <SiLinksys className="me-2" /> Sys Param Module Entry
        </Link></Dropdown.Item>
      </>
    )
  };
export default SystemConfiguration;