import React from 'react';
import Administration from "./Administration/Administration";
// import Order from "./Order/Order";
// import Inventory from "./Inventory/Inventory";
import Master from './Master/Master';
// import Dispatch from './Dispatch/Dispatch';
// import OnLineBanking from './OnlineBanking/OnlineBanking';
// import GST from './GST/GST';
// import StockReport from './StockReport/StockReport';
// import Report from './Report/Report';
// import Fevorites from './Fevorietes/Fevorites';
// import Account from './Account/Account';
import './SideBar.css'
const SideBar = () => {

  return (
    <div className=' bg-light fix-sidebar' style={{
      minWidth: '90px', maxWidth: '355px',
      minHeight: "750px", 
    }}>
      <ul className="list-unstyled ps-1 border-top fix-top-sidebar">
        <Administration />
         <Master />
      {/*  <Order />
        <Inventory />
        <Dispatch />
        <OnLineBanking />
        <GST />
        <StockReport />
        <Report />
        <Fevorites />
        <Account /> */}
      </ul>
    </div>
  );
};

export default SideBar;
