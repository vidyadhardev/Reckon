import React, { useState } from 'react';
import { GiDemolish } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import { encodePath } from '../../utilities/Utils';
import Administration from "./Administration/Administration";
import UserModule from './UserModule/UserModule';
import UtilitiesSidebar from './UtilitiesSidebar/UtilitiesSidebar';
import MergeModule from './MergeModule/MergeModule';
import ReUpdateModule from './ReUpdateModule/ReUpdateModule';
import AccountMaster from './AccountMaster/AccountMaster';
import Installation from './Installation/Installation';
import ReckonDemo from './ReckonDemo/ReckonDemo';
import './SideBar.css';
import { FaAccusoft } from 'react-icons/fa6';
const SideBar = () => {
  const [activeMenu, SetActiveMenu] = useState('');
  const handleMenuClick = (menuId) => {
    SetActiveMenu(activeMenu === menuId ? '' : menuId);
  }
  return (
    <div className=' sidebar w-auto'>
      <ul className="list-unstyled fix-top-sidebar ">
        {/* Reckon Demo Videos */}
        <li className="">
          <span
            className={`btn btn-toggle d-inline-flex align-items-center rounded border-info border-2 fw-bold reckon-header w-100 mb-2 mt-2 ${activeMenu === 'reckon-demo-collapse' ? '' : 'collapsed'}`}
            onClick={() => handleMenuClick('reckon-demo-collapse')}
            aria-expanded={activeMenu === 'reckon-demo-collapse'}
          >
            <FaAccusoft className="me-2" />Reckon Demo
          </span>
          <div className={`collapse ps-2 ${activeMenu === 'reckon-demo-collapse' ? 'show' : ''}`} id="reckon-demo-collapse">
            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
              <ReckonDemo />
            </ul>
          </div>
        </li>
        {/* Reckon Installetion */}
        <Installation />
        {/* All Module Under Reckon Demo */}
        <li className="">
          <span
            className={`btn btn-toggle d-inline-flex align-items-center rounded border-info border-2 fw-bold reckon-header w-100 mb-2 mt-2 ${activeMenu === 'reckon-software-collapse' ? '' : 'collapsed'}`}
            onClick={() => handleMenuClick('reckon-software-collapse')}
            aria-expanded={activeMenu === 'reckon-software-collapse'}
          >
            <FaAccusoft className="me-2" />Reckon Software
                    </span>
          <div className={`collapse ps-2 ${activeMenu === 'reckon-software-collapse' ? 'show' : ''}`} id="reckon-software-collapse">
            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
              <Administration />
              <UserModule />
              <UtilitiesSidebar />
              <MergeModule />
              <ReUpdateModule />
              <AccountMaster />
 </ul>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
