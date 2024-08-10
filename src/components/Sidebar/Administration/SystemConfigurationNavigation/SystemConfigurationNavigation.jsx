import React, { useState } from "react";
import { Link } from "react-router-dom";
import { encodePath } from "../../../../utilities/Utils";
import { Dropdown } from "react-bootstrap";
import { HiOutlineArrowTrendingDown, HiOutlineArrowTrendingUp } from "react-icons/hi2";
import { SiBmcsoftware, SiLinksys } from "react-icons/si";


const
  SystemConfiguration = () => {
    // const [activeSubMenu, setActiveSubMenu] = useState('');
    // const handleSubMenuClick = (menu) => {
    //   setActiveSubMenu(activeSubMenu === menu ? '' : menu)
    // };
    return (
      <>
        {/* <div>
          <li className="sys-config-sublink border-2" >
            <span
              className={`btn btn-toggle d-inline-flex rounded border-2 fw-bold ps-2 text-muted
            ${activeSubMenu === 'sys-config' ? '' : ''} id="collapsed"`}
              onClick={() => handleSubMenuClick('sys-config')}

              aria-expanded={activeSubMenu === 'sys-config'} style={{ fontSize: '14px' }}
            >
              System Configuration
            </span>
            <ul className={`collapse list-unstyled small ps-4  ${activeSubMenu === 'sys-config' ? 'show' : ''}`}
              style={{ fontSize: "13px" }}>
              <li><Link to={`/${encodePath('old-ss-confi')}`} className="d-inline-flex text-dark text-decoration-none rounded">
                Old System Configuration
              </Link>
              </li>
              <li><Link to={`/${encodePath('new-ss-confi')}`} className=" d-inline-flex text-dark text-decoration-none rounded">
                New System Configuration
              </Link>
              </li>
              <li><Link to={`/${encodePath('ss-confi')}`} className="d-inline-flex text-dark text-decoration-none rounded">
                Software Configuration
              </Link>
              </li>
              <li><Link to={`/${encodePath('sys-param-en')}`} className="d-inline-flex text-dark text-decoration-none rounded">
                Sys Param Module Entry
              </Link>
              </li>
            </ul>
          </li>

        </div> */}
        <Dropdown.Item> <Link to={`/${encodePath('old-ss-confi')}`} className="d-inline-flex text-dark align-items-center text-decoration-none rounded">
          <HiOutlineArrowTrendingDown className="me-2" /> Old System Configuration
        </Link> </Dropdown.Item>
        <Dropdown.Item><Link to={`/${encodePath('new-ss-confi')}`} className=" d-inline-flex text-dark align-items-center text-decoration-none rounded">
          <HiOutlineArrowTrendingUp className="me-2" />  New System Configuration
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