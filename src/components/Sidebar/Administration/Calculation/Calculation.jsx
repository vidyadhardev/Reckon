import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { encodePath } from '../../../../utilities/Utils';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { ImCalculator,ImParagraphCenter  } from "react-icons/im";
import { TbTableExport, TbTableImport } from "react-icons/tb";
import "./Calculation.css";
const Calculation = () => {
  const [activeSubMenu, setActiveSubMenu] = useState('');

  const handleSubMenuClick = (menu) => {
    setActiveSubMenu(activeSubMenu === menu ? '' : menu);
  }
  return (
    <>
      <DropdownButton
        variant='light' id="dropdown-basic-button"
        title={
          <span className='module-button'>
            <ImCalculator className='me-2' />
            Calculation Module
          </span>
        }>
        <div className='dropdown-cal-itme'>
          <Dropdown.Item className=''>
            <Link to={`/${encodePath('cal-en')}`} className="d-inline-flex text-decoration-none rounded text-dark">
             <ImParagraphCenter  className='me-2'/> Calculation Entry
            </Link>
          </Dropdown.Item>
          <Dropdown.Item>
            <Link to={`/${encodePath('ex-cal-en')}`} className="d-inline-flex text-decoration-none rounded text-dark">
             <TbTableImport className='me-2'/> Export Calculation Entry
            </Link>
          </Dropdown.Item>
          <Dropdown.Item>
            <Link to={`/${encodePath('im-cal-en')}`} className="d-inline-flex text-decoration-none rounded text-dark">
             <TbTableExport className='me-2'/> Import Calculation Entry
            </Link>
          </Dropdown.Item>
        </div>
      </DropdownButton>
    </>
  )
};
export default Calculation;