import React, { useState } from 'react';
import ReckonDemo from './ReckonDemo/ReckonDemo';
import './SideBar.css';
import { FaAccusoft } from 'react-icons/fa6';
import Administration from "./Administration/Administration";
import UserModule from './UserModule/UserModule';
import UtilitiesSidebar from './UtilitiesSidebar/UtilitiesSidebar';
import MergeModule from './MergeModule/MergeModule';
import ReUpdateModule from './ReUpdateModule/ReUpdateModule';
import AccountMaster from './AccountMaster/AccountMaster';
import Installation from './Installation/Installation';
import InventoryMaster from './InventoryMaster/InventoryMaster';
import OtherMaster from './OtherMaster/OtherMaster';
import SchemOffer from './SchemOffer/SchemOffer';
import PriceDiscount from './PriceDiscount/PriceDiscount';
import FieldForce from './FieldForce/FieldForce';
import LoyaltyModule from './LoyaltyModule/LoyaltyModule';
import AccountModule from './AccountModule/AccountModule';
import MultiVoucherEntry from './MultiVoucherEntry/MultiVoucherEntry';
import VoucherEntry from './VoucherEntry/VoucherEntry';
import PostDateCheque from './PostDateCheque/PostDateCheque';
import BooksofAccounts from './BooksofAccounts/BooksofAccounts';
import BankReconcilation from './BankReconcilation/BankReconcilation';
import ChequeBook from './ChequeBook/ChequeBook';
import OutstandingReport from './OutstandingReport/OutstandingReport';
import CollectionReport from './CollectionReport/CollectionReport';
import OnlineBanking from './OnlineBanking/OnlineBanking';
import SaleOrder from './SaleOrder/SaleOrder';
import PurchaseOrder from './PurchaseOrder/PurchaseOrder';
import InventoryModule from './InventoryModule/InventoryModule';
import SaleInvoice from './SaleInvoice/SaleInvoice';
import SaleReturn from './SaleReturn/SaleReturn';
import PurchaseInvoice from './PurchaseInvoice/PurchaseInvoice';
import PurchaseReturn from './PurchaseReturn/PurchaseReturn';
import Replacement from './Replacement/Replacement';
import PriceDifference from './PriceDifference/PriceDifference';



const SideBar = () => {
  const [activeMenu, SetActiveMenu] = useState('');
  const handleMenuClick = (menuId) => {
    SetActiveMenu(activeMenu === menuId ? '' : menuId);
  }
  return (
    <div className=' sidebar w-auto'>
      <ul className="list-unstyled fix-top-sidebar ">
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
         <Installation /> 
        <li className="mb-5">
          <span
            className={`btn btn-toggle d-inline-flex align-items-center rounded border-info border-2 fw-bold reckon-header w-100 mb-2 mt-2 ${activeMenu === 'reckon-software-collapse' ? '' : 'collapsed'}`}
            onClick={() => handleMenuClick('reckon-software-collapse')}
            aria-expanded={activeMenu === 'reckon-software-collapse'}
          >
            <FaAccusoft className="me-2" />Reckon Software
          </span>
          <div className={`collapse ps-2 ${activeMenu === 'reckon-software-collapse' ? 'show' : ''}`} id="reckon-software-collapse">
            <ul className="btn-toggle-nav list-unstyled fw-normal pb-5 small"> 
               <Administration />
              <UserModule />
              <UtilitiesSidebar />
              <MergeModule />
              <ReUpdateModule />
              <AccountMaster />
              <InventoryMaster />
              <OtherMaster /> 
               <SchemOffer/>  
               <PriceDiscount />
              <FieldForce />
              <LoyaltyModule />
              <AccountModule />
              <MultiVoucherEntry />
              <VoucherEntry />
              <PostDateCheque />
              <BooksofAccounts />
              <BankReconcilation />
              <ChequeBook />
              <OutstandingReport />
              <CollectionReport />
              <OnlineBanking />
              <SaleOrder />
              <PurchaseOrder />
              <InventoryModule />
              <SaleInvoice />
              <SaleReturn />
              <PurchaseInvoice />
              <PurchaseReturn />
              <Replacement />
              <PriceDifference/> 
            </ul>
          </div>
        </li>  
      </ul>
    </div>
  );
};

export default SideBar;
