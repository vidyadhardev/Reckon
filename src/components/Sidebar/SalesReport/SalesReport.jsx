import React, { useState } from 'react'
import { SiSalesforce } from "react-icons/si";
import './SalesReport.css';
import { Link } from 'react-router-dom';
import { encodePath } from '../../../utilities/Utils';
const SalesReport = () => {
  const [activeMenu, setActiveMenu] = useState('');
  const handleMenuClick = (menuId) => {
    setActiveMenu(activeMenu === menuId ? '' : menuId);
  };

  return (
    <>
      <div>
        <li className='mb-1'>
          <span className={`btn btn-info d-inline-flex align-items-center rounded border-info border-2 stock-header w-100 ${activeMenu === 'stock-collapse' ? '' : 'collapsed'}`}
            onClick={() => handleMenuClick('stock-collapse')}
            aria-expanded={activeMenu === 'stock-collapse'}
          >
            <SiSalesforce className='me-2' /> Sales Report
          </span>
          <div className={`collapse ps-2 ${activeMenu === 'stock-collapse' ? 'show' : ''}`} id="stock-collapse">
            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small ">
              <div className='button'>
                <Link to={`/${encodePath('sale-register')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2  d-inline-flex align-items-center rounded border-2 admin-Sub-button  w-100 text-dark`}
                  >
                    Sale Register
                  </span>
                </Link>
              </div>
              <div className='button'>
                <Link to={`/${encodePath('day-wise-sale-register')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2  d-inline-flex align-items-center rounded border-2 admin-Sub-button  w-100 text-dark`}
                  >
                    Day Wise Sale Register
                  </span>
                </Link>
              </div>
              {/* Stock Report */}
              <div className='button'>
                <Link to={`/${encodePath('monthly-sale-register')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2  d-inline-flex align-items-center rounded border-2 admin-Sub-button  w-100 text-dark`}
                  >
                    Monthly Sale Register
                  </span>
                </Link>
              </div>
              <div className='button'>
                <Link to={`/${encodePath('item-wise-sale-summary')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2  d-inline-flex align-items-center rounded border-2 admin-Sub-button  w-100 text-dark`}
                  >
                    Items wise Sale Report
                  </span>
                </Link>
              </div>
              <div className='button'>
                <Link to={`/${encodePath('party-wise-sale-report')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2  d-inline-flex align-items-center rounded border-2 admin-Sub-button  w-100 text-dark`}
                  >
                    Party Wise Sale Report
                  </span>
                </Link>
              </div>
              <div className='button'>
                <Link to={`/${encodePath('group-wise-sale-summary')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2  d-inline-flex align-items-center rounded border-2 admin-Sub-button  w-100 text-dark`}
                  >
                    {/* GroupWiseSaleSummary */}
                    Group wise Sale
                  </span>
                </Link>
              </div>
              <div className='button'>
                <Link to={`/${encodePath('group-subGroup-month-wise-sale-report')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2  d-inline-flex align-items-center rounded border-2 admin-Sub-button  w-100 text-dark`}
                  >
                    {/* GroupSubGroupMonthWiseSaleReport */}
                    Group wise Monthly Sale
                  </span>
                </Link>
              </div>
              <div className='button'>
                <Link to={`/${encodePath('group-wise-item-wise-sale-summary')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2  d-inline-flex align-items-center rounded border-2 admin-Sub-button  w-100 text-dark`}
                  >
                    {/* GroupWiseItemWiseSaleSummary */}
                    Group wise Item Sale
                  </span>
                </Link>
              </div>
              <div className='button'>
                <Link to={`/${encodePath('party-wise-group-wise-sale-summary')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2  d-inline-flex align-items-center rounded border-2 admin-Sub-button  w-100 text-dark`}
                  >
                    {/* PartyWiseGroupWiseSaleSummary */}
                    Party wise Group Sale
                  </span>
                </Link>
              </div>
              <div className='button'>
                <Link to={`/${encodePath('company-wise-group-wise-sale-summary')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2  d-inline-flex align-items-center rounded border-2 admin-Sub-button  w-100 text-dark`}
                  >
                    {/* CompanyWiseGroupWiseSaleSummary */}
                    CompanyWiseGroupSale
                  </span>
                </Link>
              </div>
              <div className='button'>
                <Link to={`/${encodePath('item-party-sale-report')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2  d-inline-flex align-items-center rounded border-2 admin-Sub-button  w-100 text-dark`}
                  >
                    {/* ItemPartySaleReport */}
                    Item Party wise Sale
                  </span>
                </Link>
              </div>
              <div className='button'>
                <Link to={`/${encodePath('bill-item-wise-sale-register')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2  d-inline-flex align-items-center rounded border-2 admin-Sub-button  w-100 text-dark`}
                  >
                    {/* BillItemWiseSaleRegister */}
                    Bill wise Item Sale
                  </span>
                </Link>
              </div>
              <div className='button'>
                <Link to={`/${encodePath('item-moving-report')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2  d-inline-flex align-items-center rounded border-2 admin-Sub-button  w-100 text-dark`}
                  >
                    Item Moving Report
                  </span>
                </Link>
              </div>
              <div className='button'>
                <Link to={`/${encodePath('clubbed-sale-register')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2  d-inline-flex align-items-center rounded border-2 admin-Sub-button  w-100 text-dark`}
                  >
                    Clubbed Sale Register
                  </span>
                </Link>
              </div>
              <div className='button'>
                <Link to={`/${encodePath('MfgCompany-wise-item-wise-sale-register')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2  d-inline-flex align-items-center rounded border-2 admin-Sub-button  w-100 text-dark`}
                  >
                    {/* MfgCompanyWiseItemWiseSaleRegister */}
                    Company Item wise Sale
                  </span>
                </Link>
              </div>
              <div className='button'>
                <Link to={`/${encodePath('MfgCompany-wise-bill-wise-sale-register')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2  d-inline-flex align-items-center rounded border-2 admin-Sub-button  w-100 text-dark`}
                  >
                    {/* MfgCompanyWiseBillWiseSaleRegister */}
                    Company Bill wise Sale
                  </span>
                </Link>
              </div>
              <div className='button'>
                <Link to={`/${encodePath('disc-wise-sale-summary')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2  d-inline-flex align-items-center rounded border-2 admin-Sub-button  w-100 text-dark`}
                  >
                    {/* DiscWiseSaleSummary */}Discount wise Sale
                  </span>
                </Link>
              </div>
              <div className='button'>
                <Link to={`/${encodePath('mobile-wise-sale-register')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2  d-inline-flex align-items-center rounded border-2 admin-Sub-button  w-100 text-dark`}
                  >
                    {/* MobileWiseSaleRegister */}
                    Mobile wise Sale
                  </span>
                </Link>
              </div>
              <div className='button'>
                <Link to={`/${encodePath('supplier-wise-item-wise-sale-register')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2  d-inline-flex align-items-center rounded border-2 admin-Sub-button  w-100 text-dark`}
                  >
                    {/* SupplierWiseItemWiseSaleRegister */}
                    Suppier wise Sale
                  </span>
                </Link>
              </div>
              <div className='button'>
                <Link to={`/${encodePath('price-diff-credit-note')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2  d-inline-flex align-items-center rounded border-2 admin-Sub-button  w-100 text-dark`}
                  >
                    Price Diff CreditNote
                  </span>
                </Link>
              </div>
              <div className='button'>
                <Link to={`/${encodePath('party-wise-sale-statment')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2  d-inline-flex align-items-center rounded border-2 admin-Sub-button  w-100 text-dark`}
                  >
                    {/* PartyWiseSaleStatement */}
                    Party wise Statement
                  </span>
                </Link>
              </div><div className='button'>
                <Link to={`/${encodePath('item-wise-batch-wise-tranLedger')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2  d-inline-flex align-items-center rounded border-2 admin-Sub-button  w-100 text-dark`}
                  >
                    {/* ItemWiseBatchWiseTranLedger */}
                    Batch wise Transaction
                  </span>
                </Link>
              </div>
              <div className='button'>
                <Link to={`/${encodePath('company-wise-sale-summary')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2  d-inline-flex align-items-center rounded border-2 admin-Sub-button  w-100 text-dark`}
                  >
                    {/* CompanyWiseSaleSummary */}
                    Company wise Sale
                  </span>
                </Link>
              </div>
              <div className='button'>
                <Link to={`/${encodePath('party-wise-sale-summary')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2  d-inline-flex align-items-center rounded border-2 admin-Sub-button  w-100 text-dark`}
                  >
                    {/* PartyWiseSaleSummary */}
                    Party wise Sale
                  </span>
                </Link>
              </div>
              <div className='button'>
                <Link to={`/${encodePath('MrWise-sale-summary')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2  d-inline-flex align-items-center rounded border-2 admin-Sub-button  w-100 text-dark`}
                  >
                    {/* MR Wise Sale Summary */}
                    MR wise Sale
                  </span>
                </Link>
              </div>
              <div className='button'>
                <Link to={`/${encodePath('category-wise-sale-summary')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2  d-inline-flex align-items-center rounded border-2 admin-Sub-button  w-100 text-dark`}
                  >
                    {/* CategoryWiseSaleSummary */}
                    Category wise Sale
                  </span>
                </Link>
              </div>
              <div className='button'>
                <Link to={`/${encodePath('salt-wise-sale-summary')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2  d-inline-flex align-items-center rounded border-2 admin-Sub-button  w-100 text-dark`}
                  >
                    {/* Salt Wise Sale Summary */}
                    Salt wise Sale
                  </span>
                </Link>
              </div>
              <div className='button'>
                <Link to={`/${encodePath('company-wise-item-wise-sale-summary')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2  d-inline-flex align-items-center rounded border-2 admin-Sub-button  w-100 text-dark`}
                  >
                    {/* CompanyWiseItemWiseSaleSummary */}
                    Company/Item Sale
                  </span>
                </Link>
              </div>
              <div className='button'>
                <Link to={`/${encodePath('party-wise-item-wise-sale-summary')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2  d-inline-flex align-items-center rounded border-2 admin-Sub-button  w-100 text-dark`}
                  >
                    {/* PartyWiseItemWiseSaleSummary */}
                    Party/Item wise Sale
                  </span>
                </Link>
              </div>
              <div className='button'>
                <Link to={`/${encodePath('MRWise-item-wise-sale-summary')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2  d-inline-flex align-items-center rounded border-2 admin-Sub-button  w-100 text-dark`}
                  >
                    {/* MRWiseItemWiseSaleSummary */}MR/Item wise Sale
                  </span>
                </Link>
              </div>
              <div className='button'>
                <Link to={`/${encodePath('category-wise-item-wise-sale-summary')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2  d-inline-flex align-items-center rounded border-2 admin-Sub-button  w-100 text-dark`}
                  >
                    {/* CategoryWiseItemWiseSaleSummary */}Category/Item wise Sale
                  </span>
                </Link>
              </div>
              <div className='button'>
                <Link to={`/${encodePath('item-wise-sale-summary')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2  d-inline-flex align-items-center rounded border-2 admin-Sub-button  w-100 text-dark`}
                  >
                    {/* Item Wise Sale Summary */}Item wise Sale
                  </span>
                </Link>
              </div>
              <div className='button'>
                <Link to={`/${encodePath('salt-wise-item-wise-sale-summary')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2  d-inline-flex align-items-center rounded border-2 admin-Sub-button  w-100 text-dark`}
                  >
                    {/* SaltWiseItemWiseSaleSummary */}
                    Salt/Item wise Sale
                  </span>
                </Link>
              </div>
              <div className='button'>
                <Link to={`/${encodePath('party-wise-comapny-wise-sale-summary')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2  d-inline-flex align-items-center rounded border-2 admin-Sub-button  w-100 text-dark`}
                  >
                    {/* PartyWiseComapnyWiseSaleSummary */}
                    Party/Company wise Sale
                  </span>
                </Link>
              </div>
              <div className='button'>
                <Link to={`/${encodePath('party-wise-salt-wise-sale-summary')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2  d-inline-flex align-items-center rounded border-2 admin-Sub-button  w-100 text-dark`}
                  >
                    {/* PartyWiseSaltWiseSaleSummary */}
                    Party/Salt wise Sale
                  </span>
                </Link>
              </div>
              <div className='button'>
                <Link to={`/${encodePath('company-wise-party-wise-sale-summary')}`} className="d-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2  d-inline-flex align-items-center rounded border-2 admin-Sub-button  w-100 text-dark`}
                  >
                    {/* CompanyWisePartyWiseSaleSummary */}
                    Company/Party wise Sale
                  </span>
                </Link>
              </div>
              <div className='button'>
                <Link to={`/${encodePath('company-wise-salt-wise-sale-summary')}`} className="f-inline-flex text-dark text-decoration-none rounded w-100">
                  <span
                    className={`btn btn-outline-info mt-2  d-inline-flex align-items-center rounded border-2 admin-Sub-button  w-100 text-dark`}
                  >
                    {/* CompanyWiseSaltWiseSaleSummary */}
                    Company Salt wise Sale
                  </span>
                </Link>
              </div>
            </ul>
          </div>
        </li>
      </div>
    </>
  )
}
export default SalesReport;