import React, { useState, useEffect } from 'react';
import { HashRouter, Route, Routes, Navigate } from 'react-router-dom';
import { encodePath } from './utilities/Utils.js';
import MobileSideBar from './MobileLayout/MobileSideBar.jsx';
// Reckon Demo
import DepartmentalStore from './pages/ReckonDemoPage/DepartmentalStore.jsx';
import ChemistShopSoftware from './pages/ReckonDemoPage/ChemistShopSoftware.jsx';
import PharmaStockistSoftware from './pages/ReckonDemoPage/PharmaStockistSoftware.jsx';
import GarmentFootwearSoftware from "./pages/ReckonDemoPage/GarmentFootwearSoftware.jsx";
import MobileElectronicsSoftware from './pages/ReckonDemoPage/MobileElectronicsSoftware.jsx';
import PharmaDistributorSoftware from './pages/ReckonDemoPage/PharmaDistributorSoftware.jsx';
import RestaurantBarSoftware from "./pages/ReckonDemoPage/RestaurantBarSoftware.jsx"
// Reckon Demo End
// Instalation Import
import DownloadReckon from './pages/Installation/DownloadReckon.jsx';
import AutoBackupSetup from './pages/Installation/AutoBackupSetup.jsx';
import SQLServerInstallation from './pages/Installation/SQLServerInstallation.jsx';
import ReckonInstallation from "./pages/Installation/ReckonInstallation.jsx";
import UpdateNewVersion from "./pages/Installation/UpdateNewVersion.jsx";
import DownloadControlFile from "./pages/Installation/DownloadControlFile.jsx";
import DownloadPrintFormat from './pages/Installation/DownloadPrintFormat.jsx';
import CreateFirmDataBase from './pages/Installation/CreateFirmDataBase.jsx';
import FirmDetailUpdate from './pages/Installation/FirmDetailUpdate.jsx';
import InvoiceFormateSetup from './pages/Installation/InvoiceFormateSetup.jsx';
import EInvoiceSetup from './pages/Installation/EInvoiceSetup.jsx';
import EWayBillSetup from './pages/Installation/EWayBillSetup.jsx';
import EmailSetup from './pages/Installation/EmailSetup.jsx';
import ImpotMathod from './pages/Installation/ImpotMathod.jsx';
import WhatsAppSetup from './pages/Installation/WhatsAppSetup.jsx';
import LANConfigure from './pages/Installation/LANConfigure.jsx';
import UserCreate from './pages/Installation/UserCreate.jsx';
import PrinterPageSetup from './pages/Installation/PrinterPageSetup.jsx';
import DownloadSQLServer from './pages/Installation/DownloadSQLServer.jsx';
// Installation End 
import ReckonDemo from './components/Sidebar/ReckonDemo/ReckonDemo.jsx';
import Installation from './components/Sidebar/Installation/Installation.jsx';
import SearchBar from './components/SearchBar/SearchBar.jsx';
import SideBar from "./components/Sidebar/Sidebar.jsx"
import VoucherType from './pages/Administration/VoucherType.jsx';
import FirmMaster from './pages/Administration/FirmMaster.jsx';
import Home from './pages/Home/Home.jsx';
import UserModuleEntry from './pages/Administration/UserModuleEntry.jsx';
import GlobalUserEntry from './pages/Administration/GlobalUserEntry.jsx';
import GlobalUpdateRightsEntry from './pages/Administration/GlobalUpdateRightsEntry.jsx';
import UserFirmRightsEntry from './pages/Administration/UserFirmRightsEntry.jsx';
import UserSeriesRightsEntry from './pages/Administration/UserSeriesRightsEntry.jsx';
import UserOtherEntry from './pages/Administration/UserOtherEntry.jsx';
import FYBackUp from './pages/Administration/FYBackUp.jsx';
import FyRestore from "./pages/Administration/FyRestore.jsx";
import SereisMaster from './pages/Administration/SereisMaster.jsx';
import BackupPathEntry from './pages/Administration/BackupPathEntry.jsx';
import HolidaySetup from "./pages/Administration/HolidaySetup.jsx";
import TransferNextYear from './pages/Administration/TransferNextYear.jsx';
import FavouriteMenuEntry from './pages/Administration/FavouriteMenuEntry.jsx';
import TransferStockLedgerBalance from './pages/Administration/TransferStockLedgerBalance.jsx';
import ImportSetting from './pages/Administration/ImportSetting.jsx';
// Utilities
import Reupdate from './pages/Utilitie/Reupdate.jsx';
import RefreshOutStanding from './pages/Utilitie/RefreshOutStanding.jsx';
import DETelly from './pages/Utilitie/DETelly.jsx';
import DEReckon from './pages/Utilitie/DEReckon.jsx';
import ImportImportMethod from "./pages/Utilitie/ImportImportMethod.jsx";
import ImportReckonVoucher from "./pages/Utilitie/ImportReckonVoucher.jsx";
import NonWorkingItems_Company from "./pages/Utilitie/NonWorkingItemsCompany.jsx";
import NonWorkingLedger from "./pages/Utilitie/NonWorkingLedger.jsx";
import ItemMasterEditing from "./pages/Utilitie/ItemMasterEditing.jsx";
import MultiBillPrint from "./pages/Utilitie/MultiBillPrint.jsx";
import FreezSalePurchase from "./pages/Utilitie/FreezSalePurchase.jsx";
import UpdateHSNCode from "./pages/Utilitie/UpdateHSNCode.jsx";
import UpdateGSTCode from "./pages/Utilitie/UpdateGSTCode.jsx";
import UpdateGSTDetailInAccount from "./pages/Utilitie/UpdateGSTDetailInAccount.jsx";
import MultiReceiptVoucherPrint from "./pages/Utilitie/MultiReceiptVoucherPrint.jsx";
import MarkTransaction from "./pages/Utilitie/MarkTransaction.jsx";
import UnMarkTransaction from "./pages/Utilitie/UnMarkTransaction.jsx";
import SeriesWiseFormatEntry from "./pages/Utilitie/SeriesWiseFormatEntry.jsx";
import BulkCompanyEmailEntry from "./pages/Utilitie/BulkCompanyEmailEntry.jsx";
import SeriesWisePartyWiseLimitEntry from "./pages/Utilitie/SeriesWisePartyWiseLimitEntry.jsx";
//  Merge Module
import MergeItemModule from "./pages/MergModule/MergeItemModule.jsx"
import MergeLedgermodule from "./pages/MergModule/MergeLedgerModule.jsx"
import MergeItem from "./pages/MergModule/MergeItem.jsx";
import MergeBatch from "./pages/MergModule/MergeBatch.jsx";
import MergeCompany from "./pages/MergModule/MergeCompany.jsx";
import MergeItemGroup from "./pages/MergModule/MergeItemGroup.jsx";
import MergeTax from "./pages/MergModule/MergeTax.jsx";
import MergeSalt from './pages/MergModule/MergeSalt.jsx';
import MergeLocation from "./pages/MergModule/MergeLocation.jsx"
import MergeOtherGroup from "./pages/MergModule/MergeOtherGroup.jsx";
import MergeCommodityMaster from './pages/MergModule/MergeCommodityMaster.jsx';
import MergeSchduleMaster from './pages/MergModule/MergeSchduleMaster.jsx';
import MergeFirmBalance from './pages/MergModule/MergeFirmBalance.jsx';
import MergeLedgerMaster from './pages/MergModule/MergeLedgerMaster.jsx';
import MergeSeries from './pages/MergModule/MergeSeries.jsx';
import MergeArea from './pages/MergModule/MergeArea.jsx';
import MergeRoute from './pages/MergModule/MergeRoute.jsx';
import MergeStation from './pages/MergModule/MergeStation.jsx';
import MergeSalesMan from './pages/MergModule/MergeSalesMan.jsx';
import MergeDeliveryMan from './pages/MergModule/MergeDeliveryMan.jsx';
import MergeTransporter from './pages/MergModule/MergeTransporter.jsx';
import MergeAcGroup from './pages/MergModule/MergeAcGroup.jsx';
import MergeCity from './pages/MergModule/MergeCity.jsx';
import MergeState from "./pages/MergModule/MergeState.jsx";
import MergeCountry from "./pages/MergModule/MergeCountry.jsx";
import MergeBank from './pages/MergModule/MergeBank.jsx';
import MeregRDoctor from './pages/MergModule/MergeRDoctor.jsx';
import MergePatient from './pages/MergModule/MergePatient.jsx';
// Merge Module End
// Re Update
import ReUpdateItemStock from './pages/ReUpdate/ReUpdateItemStock.jsx';
import ReUpdateLedgerBalance from './pages/ReUpdate/ReUpdateLedgerBalance.jsx';
import MasterRateUpdate from './pages/ReUpdate/MasterRateUpdate.jsx';
import AdjustNegativeStack from './pages/ReUpdate/AdjustNegativeStack.jsx';
import ReUpdateGodownStack from './pages/ReUpdate/ReUpdateGodownStack.jsx';
import GenerateProductionEntry from './pages/ReUpdate/GenerateProductionEntry.jsx';
// Account Master
import LedgerMaster from './pages/AccountMaster/LedgerMaster.jsx';
import AccGroup from './pages/AccountMaster/AccGroup.jsx';
import Schedule from './pages/AccountMaster/Schedule.jsx';
import LedgerOpeningOrder from './pages/AccountMaster/LedgerOpeningOrder.jsx';
import AccountMasterDetailsEntry from './pages/AccountMaster/AccountMasterDetailsEntry.jsx';
import LedgerOpeningMaster from './pages/AccountMaster/LedgerOpeningMaster.jsx';
import ApproveRetailerReckonOnly from './pages/AccountMaster/ApproveRetailerReckonOnly.jsx';
// InventoryMaster
import ItemMaster from './pages/InventoryMaster/ItemMaster.jsx';
import CompanyMaster from './pages/InventoryMaster/CompanyMaster.jsx';
import StoreGodown from "./pages/InventoryMaster/StoreGodown.jsx";
import SaltMaster from './pages/InventoryMaster/SaltMaster.jsx';
import CategoryMaster from './pages/InventoryMaster/CategoryMaster.jsx';
import ScheduleMasterEntry from "./pages/InventoryMaster/ScheduleMasterEntry.jsx";
import MfgCompanyVsSupplier from './pages/InventoryMaster/MfgCompanyVsSupplier.jsx';
import SupplierVsMfgCompany from './pages/InventoryMaster/SupplierVsMfgCompany.jsx';
import KitMasterEntry from './pages/InventoryMaster/KitMasterEntry.jsx';
import StockOpenig from './pages/InventoryMaster/StockOpening.jsx';
import DiscComm from './pages/InventoryMaster/DiscComm.jsx';
// OtherMaster
import Location from './pages/OtherMaster/Location.jsx';
import State from './pages/OtherMaster/State.jsx';
import City from './pages/OtherMaster/City.jsx';
import Station from './pages/OtherMaster/Station.jsx';
import RouteOtherMaster from './pages/OtherMaster/RouteOtherMaster.jsx';
import Area from './pages/OtherMaster/Area.jsx';
import Transport from './pages/OtherMaster/Transport.jsx';
import Bank from './pages/OtherMaster/Bank.jsx';
import Narretion from './pages/OtherMaster/Narretion.jsx';
import DeliveryMan from './pages/OtherMaster/DeliveryMan.jsx';
import MarkTypeEntry from './pages/OtherMaster/MarkTypeEntry.jsx';
import RetailOrderEntry from './pages/OtherMaster/RetailOrderEntry.jsx';
import ItemPO from './pages/OtherMaster/ItemPO.jsx';
import RetailOrderVsPurchase from './pages/OtherMaster/RetailOrderVsPurchase.jsx';
// Price Discount
import PriceList from './pages/PriceDiscount/PriceList.jsx';
import PartyWisePriceList from './pages/PriceDiscount/PartyWisePriceList.jsx';
import ImportFromExcel from './pages/PriceDiscount/ImportFromExcel.jsx';
import SeriesWisePriceList from './pages/PriceDiscount/SeriesWisePriceList.jsx';
// FieldForce
import SalesMan from './pages/FieldForce/SalesMan.jsx';
import RDoctorEntry from './pages/FieldForce/RDoctorEntry.jsx';
import FieldStaffAreaEntry from './pages/FieldForce/FieldStaffAreaEntry.jsx';
import FieldStaffRouteEntry from './pages/FieldForce/FieldStaffRouteEntry.jsx';
import RegionalSalesManager from './pages/FieldForce/RegionalSalesManager.jsx';
import AreaSalesManager from './pages/FieldForce/AreaSalesManager.jsx';
import SalesManager from './pages/FieldForce/SalesManager.jsx';
import ZonalSalesManager from './pages/FieldForce/ZonalSalesManager.jsx';
// Loyalty Master 
import CardReceivedEntry from './pages/LoyaltyMaster/CardReceivedEntry.jsx';
import LoyaltyMasterEntry from './pages/LoyaltyMaster/LoyaltyMasterEntry.jsx';
import CardRechargeEntry from './pages/LoyaltyMaster/CardRechargeEntry.jsx';
import GiftVoucherEntry from './pages/LoyaltyMaster/GiftVoucherEntry.jsx';
// Acount Master
import AllLedger from './pages/AccountModule/AllLedger.jsx';
import BankReconcilation from './pages/AccountModule/BankReconcilation.jsx';
import CashBank from './pages/AccountModule/CashBank.jsx';
import CreditorAccounts from './pages/AccountModule/CreditorAccounts.jsx';
import DebtorAccounts from './pages/AccountModule/DebtorAccounts.jsx';
import Depriciation from './pages/AccountModule/Depriciation.jsx';
import DutiesTaxes from './pages/AccountModule/DutiesTaxes.jsx';
import InterestCalculation from './pages/AccountModule/InterestCalculation.jsx';
import Ledger from './pages/AccountModule/Ledger.jsx';
import Payment from './pages/AccountModule/Payment.jsx';
import PurchaseSummary from './pages/AccountModule/PurchaseSummary.jsx';
import SaleSummary from './pages/AccountModule/SaleSummary.jsx';
// MultiVoucher
import BankPaySlipPrint from './pages/MultiVoucherEntry/BankPaySlipPrint.jsx';
import BankReceipt from './pages/MultiVoucherEntry/BankReceipt.jsx';
import CashBankReceiptEntry from './pages/MultiVoucherEntry/CashBankReceiptEntry.jsx';
import CashierEntry from './pages/MultiVoucherEntry/CashierEntry.jsx';
import PeriodicVoucherEntry from './pages/MultiVoucherEntry/PeriodicVoucherEntry.jsx';
import CashReceipt from './pages/MultiVoucherEntry/CashReceipt.jsx';
import CreditBillApproving from './pages/MultiVoucherEntry/CreditBillApproving.jsx';
import MultipleVoucher from './pages/MultiVoucherEntry/MultipleVoucher.jsx';
// Voucher Entry
import ChequeReturnEntry from './pages/VoucherEntry/ChequeReturnEntry.jsx';
import ContraVoucher from './pages/VoucherEntry/ContraVoucher.jsx';
import CreditNoteVoucher from './pages/VoucherEntry/CreditNoteVoucher.jsx';
import DebitNoteVoucher from './pages/VoucherEntry/DebitNoteVoucher.jsx';
import ExpenseRCMVoucher from './pages/VoucherEntry/ExpenseRCMVoucher.jsx';
import JournalVoucher from './pages/VoucherEntry/JournalVoucher.jsx';
import PaymentVoucher from './pages/VoucherEntry/PaymentVoucher.jsx';
import PurchaseVoucher from './pages/VoucherEntry/PurchaseVoucher.jsx';
import ReceiptVoucher from './pages/VoucherEntry/ReceiptVoucher.jsx';
import SaleVoucher from './pages/VoucherEntry/SaleVoucher.jsx';
import ShowVoucher from './pages/VoucherEntry/ShowVoucher.jsx';
import VoucherApproving from './pages/VoucherEntry/VoucherApproving.jsx';
import SelfVoucher from './pages/VoucherEntry/SelfVoucher.jsx';
// Post Date Cheque
import PayInSlip from './pages/PostDateCheque/PayInSlip.jsx';
import PayInSlipBoth from './pages/PostDateCheque/PayInSlipBoth.jsx';
import PayInSlipPosted from './pages/PostDateCheque/PayInSlipPosted.jsx';
import PDCClearence from './pages/PostDateCheque/PDCClearence.jsx';
import PDCReceipt from './pages/PostDateCheque/PDCReceipt.jsx';
import PDCRegisterPayment from './pages/PostDateCheque/PDCRegisterPayment.jsx';
import PDCRegisterPrint from './pages/PostDateCheque/PDCRegisterPrint.jsx';
import PDCRegisterReceipt from './pages/PostDateCheque/PDCRegisterReceipt.jsx';
import PDCPayment from './pages/PostDateCheque/PDCPayment.jsx';
// BooksOfAccount
import BankBook from './pages/BooksofAccounts/BankBook.jsx';
import CashBook from './pages/BooksofAccounts/CashBook.jsx';
import CashBookTally from './pages/BooksofAccounts/CashBookTally.jsx';
import ContraBook from './pages/BooksofAccounts/ContraBook.jsx';
import CreditNoteBookVoucher from './pages/BooksofAccounts/CreditNoteBookVoucher.jsx';
import DayBook from './pages/BooksofAccounts/DayBook.jsx';
import DebitNoteBookVoucher from './pages/BooksofAccounts/DebitNoteBookVoucher.jsx';
import ItemDayBook from './pages/BooksofAccounts/ItemDayBook.jsx';
import JournalBook from './pages/BooksofAccounts/JournalBook.jsx';
import PaymentBook from './pages/BooksofAccounts/PaymentBook.jsx';
import PurchaseBookVoucher from './pages/BooksofAccounts/PurchaseBookVoucher.jsx';
import RCMBook from './pages/BooksofAccounts/RCMBook.jsx';
import ReceiptBook from './pages/BooksofAccounts/ReceiptBook.jsx';
import SaleBookVoucher from './pages/BooksofAccounts/SaleBookVoucher.jsx';
// Bank Reconcilation
import ReconcilationStatement from './pages/BankReconcilation/ReconcilationStatement.jsx';
import AutoBankReckoncilation from './pages/BankReconcilation/AutoBankReckoncilation.jsx';
import BankReconcilationEntry from './pages/BankReconcilation/BankReconcilationEntry.jsx';
import ChequeRegisterCleared from './pages/BankReconcilation/ChequeRegisterCleared.jsx';
import ChequeRegisterUnCleared from './pages/BankReconcilation/ChequeRegisterUnCleared.jsx';
//  ChequeBook
import SingleChequeEntry from './pages/ChequeBook/SingleChequeEntry.jsx';
import ChequeBookRegister from './pages/ChequeBook/ChequeBookRegister.jsx';
import ChequeIssuanceEntry from './pages/ChequeBook/ChequeIssuanceEntry.jsx';
import ChequeReceivedFromBank from './pages/ChequeBook/ChequeReceivedFromBank.jsx';
// OutStanding
import AreaWiseLedger from './pages/OutstandingReport/AreaWiseLedger.jsx';
import BillWiseTagging from './pages/OutstandingReport/BillWiseTagging.jsx';
import OSAging from './pages/OutstandingReport/OSAging.jsx';
import OSAreaWise from './pages/OutstandingReport/OSAreaWise.jsx';
import OSFieldStaffWise from './pages/OutstandingReport/OSFieldStaffWise.jsx';
import OSMfgCompanyWise from './pages/OutstandingReport/OSMfgCompanyWise.jsx';
import OSPartyWisePrint from './pages/OutstandingReport/OSPartyWisePrint.jsx';
import OSRouteWise from './pages/OutstandingReport/OSRouteWise.jsx';
import OSStationWise from './pages/OutstandingReport/OSStationWise.jsx';
import OSSupplierWise from './pages/OutstandingReport/OSSupplierWise.jsx';
import OutstandingReport from './pages/OutstandingReport/OutstandingReport.jsx';
import OverDueList from './pages/OutstandingReport/OverDueList.jsx';
// Collection Report
import AreaWiseSaleSaleReturn from './pages/CollectionReport/AreaWiseSaleSaleReturn.jsx';
import CollectionAll from './pages/CollectionReport/CollectionAll.jsx';
import CollectionAreaWise from './pages/CollectionReport/CollectionAreaWise.jsx';
import CollectionFieldStaffWise from './pages/CollectionReport/CollectionFieldStaffWise.jsx';
import CollectionPartyWise from './pages/CollectionReport/CollectionPartyWise.jsx';
import CollectionReportComparision from './pages/CollectionReport/CollectionReportComparision.jsx';
import CollectionRouteWise from './pages/CollectionReport/CollectionRouteWise.jsx';
import CollectionStationWise from './pages/CollectionReport/CollectionStationWise.jsx';
import InventoryFieldStaffWise from './pages/CollectionReport/InventoryFieldStaffWise.jsx';
import MissingReceiptNumber from './pages/CollectionReport/MissingReceiptNumber.jsx';
// Online Banking
import AccountsOnLineBankApiTest from './pages/OnlineBanking/AccountsOnLineBankApiTest.jsx';
import AccountsOnLineBankDetailEntry from './pages/OnlineBanking/AccountsOnLineBankDetailEntry.jsx';
import AutoBankReconcilationEntry from './pages/OnlineBanking/AutoBankReconcilationEntry.jsx';
import BankStatement from './pages/OnlineBanking/BankStatement.jsx';
import SchedulePaymentEntry from './pages/OnlineBanking/SchedulePaymentEntry.jsx';
import PaymentEntry from './pages/OnlineBanking/PaymentEntry.jsx';
// Sale Order
import ItemSO from './pages/SaleOrder/ItemSO.jsx';
import ItemWiseOrderRegister from './pages/SaleOrder/ItemWiseOrderRegister.jsx';
import OnLineSaleOrderEntry from './pages/SaleOrder/OnLineSaleOrderEntry.jsx';
import PartySO from './pages/SaleOrder/PartySO.jsx';
import PendingSO from './pages/SaleOrder/PendingSO.jsx';
import SaleOrderRegister from './pages/SaleOrder/SaleOrderRegister.jsx';
import SoGenerationFromExcel from './pages/SaleOrder/SoGenerationFromExcel.jsx';
// PurchaseOrder
import OnlineOrderPrint from './pages/PurchaseOrder/OnlineOrderPrint.jsx';
import PartyPO from './pages/PurchaseOrder/PartyPO.jsx';
import PurchaseOrder from './pages/PurchaseOrder/PurchaseOrder.jsx';
import PurchaseOrderRegister from './pages/PurchaseOrder/PurchaseOrderRegister.jsx';
import ReOrderSystem from './pages/PurchaseOrder/ReOrderSystem.jsx';
// Inventory Module
import ExpiryIssue from './pages/InventoryModule/ExpiryIssue.jsx';
import ExpiryRecieve from './pages/InventoryModule/ExpiryRecieve.jsx';
import GodwonTransfer from './pages/InventoryModule/GodwonTransfer.jsx';
import PhysicalStockStockAdjustment from './pages/InventoryModule/PhysicalStockStockAdjustment.jsx';
import PriceDifference from './pages/InventoryModule/PriceDifference.jsx';
import Purchase from './pages/InventoryModule/Purchase.jsx';
import PurchaseReturn from './pages/InventoryModule/PurchaseReturn.jsx';
import Replacement from './pages/InventoryModule/Replacement.jsx';
import Sale from './pages/InventoryModule/Sale.jsx';
import SaleReturn from './pages/InventoryModule/SaleReturn.jsx';
import StockTransfer from './pages/InventoryModule/StockTransfer.jsx';
// Sale Invoice
import BillHistory from './pages/SaleInvoice/BillHistory.jsx';
import BillUpload from './pages/SaleInvoice/BillUpload.jsx';
import Challan from './pages/SaleInvoice/Challan.jsx';
import ChallanBook from './pages/SaleInvoice/ChallanBook.jsx';
import ChallanToBill from './pages/SaleInvoice/ChallanToBill.jsx';
import CounterBook from './pages/SaleInvoice/CounterBook.jsx';
import CounterSale from './pages/SaleInvoice/CounterSale.jsx';
import Invoice from './pages/SaleInvoice/Invoice.jsx';
import RetailChallan from './pages/SaleInvoice/RetailChallan.jsx';
import RetailSale from './pages/SaleInvoice/RetailSale.jsx';
import SaleBook from './pages/SaleInvoice/SaleBook.jsx';
import StockIssue from './pages/SaleInvoice/StockIssue.jsx';
import StockIssueBook from './pages/SaleInvoice/StockIssueBook.jsx';
//  Sale Return 
import SaleReturnBook from './pages/SaleReturn/SaleReturnBook.jsx';
import SaleReturnChallan from './pages/SaleReturn/SaleReturnChallan.jsx';
import SaleReturnChallanBook from './pages/SaleReturn/SaleReturnChallanBook.jsx';
import SaleReturnNote from './pages/SaleReturn/SaleReturnNote.jsx';
import SaleReturnRetail from './pages/SaleReturn/SaleReturnRetail.jsx';
// Purchase Invoice
import ImportPurchase from './pages/PurchaseInvoice/ImportPurchase.jsx';
import MapItemList from './pages/PurchaseInvoice/MapItemList.jsx';
import PChallanToBill from './pages/PurchaseInvoice/PChallanToBill.jsx';
import PInvoice from './pages/PurchaseInvoice/PInvoice.jsx';
import PurchaseBook from './pages/PurchaseInvoice/PurchaseBook.jsx';
import PurchaseChallanBook from './pages/PurchaseInvoice/PurchaseChallanBook.jsx';
import StockRecieve from './pages/PurchaseInvoice/StockRecieve.jsx';
// Purchase Return
import PurchaseReturnBook from './pages/PurchaseReturn/PurchaseReturnBook.jsx';
import PurchaseReturnChallan from './pages/PurchaseReturn/PurchaseReturnChallan.jsx';
import PurchaseReturnChallanBook from './pages/PurchaseReturn/PurchaseReturnChallanBook.jsx';
import PurchaseReturnNote from './pages/PurchaseReturn/PurchaseReturnNote.jsx';
//  Replacement
import ReplacementIssue from './pages/Replacement/ReplacementIssue.jsx';
import ReplacementIssueBook from './pages/Replacement/ReplacementIssue.jsx';
import ReplacementReceive from './pages/Replacement/ReplacementReceive.jsx';
import ReplacementReceiveBook from './pages/Replacement/ReplacementReceiveBook.jsx';
// Price Difference
import PPDifferenceNoteBook from './pages/PriceDifference/PPDifferenceNoteBook.jsx';
import PPriceDifferenceNote from './pages/PriceDifference/PPriceDifferenceNote.jsx';
import SalePriceDifferenceNote from './pages/PriceDifference/SalePriceDifferenceNote.jsx';
import SalePriceDifferenceNoteB from './pages/PriceDifference/SalePriceDifferenceNoteB.jsx';

// Footer 
import Footer from './pages/Footer/Footer.jsx';

const SubNavigation = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const toggleMobileSidebar = () => {
    setIsMobileSidebarOpen(!isMobileSidebarOpen);
  };


  return (
    <HashRouter className="parent">
      <SearchBar />
      {isMobile && (
        <div
          onClick={toggleMobileSidebar} // Toggle MobileSideBar visibility on click
          style={{
            position: 'fixed',
            top: '8px',
            left: '60px',
            zIndex: 1000,
            // width:'',
            // backgroundColor: '#0dcaf0',
            color: 'white',
            borderRadius: '5px',
            cursor: 'pointer',
            padding: '10px',
          }}
        >

          <MobileSideBar /> {/* Use MobileSideBar as clickable toggle */}
        </div>
      )}

      {isMobileSidebarOpen && (
        <div
          style={{
            position: 'fixed',
            top: '0',
            left: '0',
            height: '100%',
            width: '0px', // Adjust width as needed
            backgroundColor: '#fff',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
            zIndex: 1000,
          }}
        >
            {/* This Sidebar For Mobile View */}
          <MobileSideBar /> {/* Render MobileSideBar when open */}
        </div>
      )}


      <div className="container-fluid">
        <div className="row flex-nowrap">
          <div
            className='col-2 side-bar'
            style={{
              position: 'fixed',
              height: '93vh',
              overflow: 'scroll',
              scrollBehavior: "smooth",
              scrollbarWidth: "thin",
              scrollbarColor: "#0dcaf0 white",
              display: isMobile && !isSidebarOpen ? 'none' : 'block',
            }}
          >
            {/* This Sidebar For Desktop View */}
            <SideBar /> 
          </div>

          <div className="col-10 all-page-fix"
            style={{
              marginLeft: isMobile && !isSidebarOpen ? '0%' : '17.5%',
              width: isMobile && !isSidebarOpen ? '100%' : 'calc(100% - 17.5%)'
            }}
          >

            <Routes>
              {/* Reckon Demo */}
              <Route path={`/${encodePath('departmental-store')}`} element={<DepartmentalStore />} />
              <Route path={`/${encodePath('chemist-shop-software')}`} element={<ChemistShopSoftware />} />
              <Route path={`/${encodePath('pharm-stockist-software')}`} element={<PharmaStockistSoftware />} />
              <Route path={`/${encodePath('garment-sootwear-software')}`} element={<GarmentFootwearSoftware />} />
              <Route path={`/${encodePath('mobile-electronics-software')}`} element={<MobileElectronicsSoftware />} />
              <Route path={`/${encodePath('pharma-distributor-software')}`} element={<PharmaDistributorSoftware />} />
              <Route path={`/${encodePath('restaurant-bar-software')}`} element={<RestaurantBarSoftware />} />
              {/* Installation */}
              <Route path={`/${encodePath('download-reckon')}`} element={<DownloadReckon />} />
              <Route path={`/${encodePath('download-sql-server')}`} element={<DownloadSQLServer />} />
              <Route path={`/${encodePath('reckon-installation')}`} element={<ReckonInstallation />} />
              <Route path={`/${encodePath('sql-server-installation')}`} element={<SQLServerInstallation />} />
              <Route path={`/${encodePath('update-new-version')}`} element={<UpdateNewVersion />} />
              <Route path={`/${encodePath('download-control-file')}`} element={<DownloadControlFile />} />
              <Route path={`/${encodePath('download-print-formate')}`} element={<DownloadPrintFormat />} />
              <Route path={`/${encodePath('create-firm-database')}`} element={<CreateFirmDataBase />} />
              <Route path={`/${encodePath('firm-detail-update')}`} element={<FirmDetailUpdate />} />
              <Route path={`/${encodePath('invoice-formate-setup')}`} element={<InvoiceFormateSetup />} />
              <Route path={`/${encodePath('e-invoice-setup')}`} element={<EInvoiceSetup />} />
              <Route path={`/${encodePath('e-way-bill-setup')}`} element={<EWayBillSetup />} />
              <Route path={`/${encodePath('email-setup')}`} element={<EmailSetup />} />
              <Route path={`/${encodePath('import-mathod')}`} element={<ImpotMathod />} />
              <Route path={`/${encodePath('whatsapp-setup')}`} element={<WhatsAppSetup />} />
              <Route path={`/${encodePath('lan-config')}`} element={<LANConfigure />} />
              <Route path={`/${encodePath('auto-backup-setup')}`} element={<AutoBackupSetup />} />
              <Route path={`/${encodePath('user-create')}`} element={<UserCreate />} />
              <Route path={`/${encodePath('print-page-setup')}`} element={<PrinterPageSetup />} />
              {/* Reckon Software */}
              {/* Re Update Start */}
              <Route path={`/${encodePath('re-update-item-stock')}`} element={<ReUpdateItemStock />} />
              <Route path={`/${encodePath('re-update-ledger-balance')}`} element={<ReUpdateLedgerBalance />} />
              <Route path={`/${encodePath('master-rate-update')}`} element={<MasterRateUpdate />} />
              <Route path={`/${encodePath('adjust-nagetive-stock')}`} element={<AdjustNegativeStack />} />
              <Route path={`/${encodePath('re-update-godwon-stock')}`} element={<ReUpdateGodownStack />} />
              <Route path={`/${encodePath('generation-production-entry')}`} element={<GenerateProductionEntry />} />
              {/* Re Update End */}
              <Route path={`/${encodePath('home')}`} element={<Home />} />
              <Route path={`/${encodePath('reckon')}`} element={<ReckonDemo />} />
              <Route path={`/${encodePath('installetion-reckon')}`} element={<Installation />} />
              <Route path={`/${encodePath('fy-back-up')}`} element={<FYBackUp />} />
              <Route path={`/${encodePath('fy-restore')}`} element={<FyRestore />} />
              <Route path={`/${encodePath('fm-ms')}`} element={<FirmMaster />} />
              <Route path={`/${encodePath('voucher-type')}`} element={<VoucherType />} />
              <Route path={`/${encodePath('series-master')}`} element={<SereisMaster />} />
              <Route path={`/${encodePath('user-module-en')}`} element={<UserModuleEntry />} />
              <Route path={`/${encodePath('global-user-en')}`} element={<GlobalUserEntry />} />
              <Route path={`/${encodePath('gb-update-rt')}`} element={<GlobalUpdateRightsEntry />} />
              <Route path={`/${encodePath('user-srs-rth-en')}`} element={<UserSeriesRightsEntry />} />
              <Route path={`/${encodePath('user-frm-rt-en')}`} element={<UserFirmRightsEntry />} />
              <Route path={`/${encodePath('user-other-en')}`} element={<UserOtherEntry />} />
              <Route path={`/${encodePath('backup-path-entry')}`} element={<BackupPathEntry />} />
              <Route path={`/${encodePath('holiday-path-en')}`} element={<HolidaySetup />} />
              <Route path={`/${encodePath('transfer-next-year')}`} element={<TransferNextYear />} />
              <Route path={`/${encodePath('fev-menu-en')}`} element={<FavouriteMenuEntry />} />
              <Route path={`/${encodePath('trans-stock-ledger-bal')}`} element={<TransferStockLedgerBalance />} />
              <Route path={`/${encodePath('import-setting')}`} element={<ImportSetting />} />
              {/* End Home & Administration */}
              {/* Start Utilitie */}
              <Route path={`/${encodePath('re-update')}`} element={<Reupdate />} />
              <Route path={`/${encodePath('refresh-out-standing')}`} element={<RefreshOutStanding />} />
              <Route path={`/${encodePath('de-telly')}`} element={<DETelly />} />
              <Route path={`/${encodePath('de-reckon')}`} element={<DEReckon />} />
              <Route path={`/${encodePath('import-import-method')}`} element={<ImportImportMethod />} />
              <Route path={`/${encodePath('import-reckon-voucher')}`} element={<ImportReckonVoucher />} />
              <Route path={`/${encodePath('non-working-items-company')}`} element={<NonWorkingItems_Company />} />
              <Route path={`/${encodePath('non-working-ledger')}`} element={<NonWorkingLedger />} />
              <Route path={`/${encodePath('item-master-editing')}`} element={<ItemMasterEditing />} />
              <Route path={`/${encodePath('multi-bill-print')}`} element={<MultiBillPrint />} />
              <Route path={`/${encodePath('freez-sale-purchase')}`} element={<FreezSalePurchase />} />
              <Route path={`/${encodePath('update-hsn-code')}`} element={<UpdateHSNCode />} />
              <Route path={`/${encodePath('update-gst-code')}`} element={<UpdateGSTCode />} />
              <Route path={`/${encodePath('update-gst-in-detail-account')}`} element={<UpdateGSTDetailInAccount />} />
              <Route path={`/${encodePath('multi-receipt-voucher-print')}`} element={<MultiReceiptVoucherPrint />} />
              <Route path={`/${encodePath('mark-transaction')}`} element={<MarkTransaction />} />
              <Route path={`/${encodePath('un-mark-transaction')}`} element={<UnMarkTransaction />} />
              <Route path={`/${encodePath('series-wise-format-entry')}`} element={<SeriesWiseFormatEntry />} />
              <Route path={`/${encodePath('bulk-company-email.entry')}`} element={<BulkCompanyEmailEntry />} />
              <Route path={`/${encodePath('sereise-wise-party-wise-limit-entry')}`} element={<SeriesWisePartyWiseLimitEntry />} />
              {/* End Utilities */}
              {/* Start Merge Module */}
              <Route path={`/${encodePath('merge-item-module')}`} element={<MergeItemModule />} />
              <Route path={`/${encodePath('merge-ledger-module')}`} element={<MergeLedgermodule />} />
              <Route path={`/${encodePath('merge-item')}`} element={<MergeItem />} />
              <Route path={`/${encodePath('merge-batch')}`} element={<MergeBatch />} />
              <Route path={`/${encodePath('merge-company')}`} element={<MergeCompany />} />
              <Route path={`/${encodePath('merge-item-group')}`} element={<MergeItemGroup />} />
              <Route path={`/${encodePath('merge-tax')}`} element={<MergeTax />} />
              <Route path={`/${encodePath('merge-salt')}`} element={<MergeSalt />} />
              <Route path={`/${encodePath('merge-location')}`} element={<MergeLocation />} />
              <Route path={`/${encodePath('merge-other-group')}`} element={<MergeOtherGroup />} />
              <Route path={`/${encodePath('merge-commodity-master')}`} element={<MergeCommodityMaster />} />
              <Route path={`/${encodePath('merge-schdule-master')}`} element={<MergeSchduleMaster />} />
              <Route path={`/${encodePath('merge-firm-balance')}`} element={<MergeFirmBalance />} />
              <Route path={`/${encodePath('merge-ledger-master')}`} element={<MergeLedgerMaster />} />
              <Route path={`/${encodePath('merge-series')}`} element={<MergeSeries />} />
              <Route path={`/${encodePath('merge-area')}`} element={<MergeArea />} />
              <Route path={`/${encodePath('merge-route')}`} element={<MergeRoute />} />
              <Route path={`/${encodePath('merge-station')}`} element={<MergeStation />} />
              <Route path={`/${encodePath('merge-sales-man')}`} element={<MergeSalesMan />} />
              <Route path={`/${encodePath('merge-delivery-man')}`} element={<MergeDeliveryMan />} />
              <Route path={`/${encodePath('merge-transporter')}`} element={<MergeTransporter />} />
              <Route path={`/${encodePath('merge-acgroup')}`} element={<MergeAcGroup />} />
              <Route path={`/${encodePath('merge-city')}`} element={<MergeCity />} />
              <Route path={`/${encodePath('merge-state')}`} element={<MergeState />} />
              <Route path={`/${encodePath('merge-country')}`} element={<MergeCountry />} />
              <Route path={`/${encodePath('merge-bank')}`} element={<MergeBank />} />
              <Route path={`/${encodePath('merge-r-doctor')}`} element={<MeregRDoctor />} />
              <Route path={`/${encodePath('merge-patient')}`} element={<MergePatient />} />
              {/* End Merge Module */}
              {/*  Account Master Star */}
              <Route path={`/${encodePath('ledger-master')}`} element={<LedgerMaster />} />
              <Route path={`/${encodePath('acc-group')}`} element={<AccGroup />} />
              <Route path={`/${encodePath('schedule')}`} element={<Schedule />} />
              <Route path={`/${encodePath('ledger-opening-order')}`} element={<LedgerOpeningOrder />} />
              <Route path={`/${encodePath('account-maste-details-entry')}`} element={<AccountMasterDetailsEntry />} />
              <Route path={`/${encodePath('ledger-opening-master')}`} element={<LedgerOpeningMaster />} />
              <Route path={`/${encodePath('approve-retailer-reckonOnly')}`} element={<ApproveRetailerReckonOnly />} />
              {/*  Account Master End */}
              {/* InventoryMaster */}
              <Route path={`/${encodePath('item-master')}`} element={<ItemMaster />} />
              <Route path={`/${encodePath('company-master')}`} element={<CompanyMaster />} />
              <Route path={`/${encodePath('store-godwon')}`} element={<StoreGodown />} />
              <Route path={`/${encodePath('salt-master')}`} element={<SaltMaster />} />
              <Route path={`/${encodePath('category-master')}`} element={<CategoryMaster />} />
              <Route path={`/${encodePath('schedule-master-entry')}`} element={<ScheduleMasterEntry />} />
              <Route path={`/${encodePath('mfgcompany-vs-supplier')}`} element={<MfgCompanyVsSupplier />} />
              <Route path={`/${encodePath('supplier-vs-mfgcompany')}`} element={<SupplierVsMfgCompany />} />
              <Route path={`/${encodePath('kit-master-entry')}`} element={<KitMasterEntry />} />
              <Route path={`/${encodePath('stock-opening')}`} element={<StockOpenig />} />
              <Route path={`/${encodePath('disc-comm')}`} element={<DiscComm />} />
              {/* Other Master */}
              <Route path={`/${encodePath('location')}`} element={<Location />} />
              <Route path={`/${encodePath('state')}`} element={<State />} />
              <Route path={`/${encodePath('city')}`} element={<City />} />
              <Route path={`/${encodePath('station')}`} element={<Station />} />
              <Route path={`/${encodePath('route-other-master')}`} element={<RouteOtherMaster />} />
              <Route path={`/${encodePath('area')}`} element={<Area />} />
              <Route path={`/${encodePath('transport')}`} element={<Transport />} />
              <Route path={`/${encodePath('bank')}`} element={<Bank />} />
              <Route path={`/${encodePath('narretion')}`} element={<Narretion />} />
              <Route path={`/${encodePath('delivery-man')}`} element={<DeliveryMan />} />
              <Route path={`/${encodePath('mark-type-entry')}`} element={<MarkTypeEntry />} />
              <Route path={`/${encodePath('retail-order-entry')}`} element={<RetailOrderEntry />} />
              <Route path={`/${encodePath('item-p-o')}`} element={<ItemPO />} />
              <Route path={`/${encodePath('retail-order-vs-purchase')}`} element={<RetailOrderVsPurchase />} />
              {/* PriceDiscount */}
              <Route path={`/${encodePath('price-list')}`} element={<PriceList />} />
              <Route path={`/${encodePath('party-wise-price-list')}`} element={<PartyWisePriceList />} />
              <Route path={`/${encodePath('import-from-excel')}`} element={<ImportFromExcel />} />
              <Route path={`/${encodePath('series-Wise-Price-list')}`} element={<SeriesWisePriceList />} />
              {/* FieldForce */}
              <Route path={`/${encodePath('sales-man')}`} element={<SalesMan />} />
              <Route path={`/${encodePath('sales-manager')}`} element={<SalesManager />} />
              <Route path={`/${encodePath('r-doctor-entry')}`} element={<RDoctorEntry />} />
              <Route path={`/${encodePath('zonal-sales-manager')}`} element={<ZonalSalesManager />} />
              <Route path={`/${encodePath('regional-sales-manager')}`} element={<RegionalSalesManager />} />
              <Route path={`/${encodePath('area-sales-manager')}`} element={<AreaSalesManager />} />
              <Route path={`/${encodePath('field-staff-area-entry')}`} element={<FieldStaffAreaEntry />} />
              <Route path={`/${encodePath('field-staff-route-entry')}`} element={<FieldStaffRouteEntry />} />
              {/* Loyalty Master */}
              <Route path={`/${encodePath('loyalty-master-entry')}`} element={<LoyaltyMasterEntry />} />
              <Route path={`/${encodePath('card-received-entry')}`} element={<CardReceivedEntry />} />
              <Route path={`/${encodePath('card-recharge-entry')}`} element={<CardRechargeEntry />} />
              <Route path={`/${encodePath('gift-voucher-entry')}`} element={<GiftVoucherEntry />} />
              {/* Account Master */}
              <Route path={`/${encodePath('all-ledger')}`} element={<AllLedger />} />
              <Route path={`/${encodePath('bank-reconcilation')}`} element={<BankReconcilation />} />
              <Route path={`/${encodePath('cash-bank')}`} element={<CashBank />} />
              <Route path={`/${encodePath('creditor-accounts')}`} element={<CreditorAccounts />} />
              <Route path={`/${encodePath('debtor-accounts')}`} element={<DebtorAccounts />} />
              <Route path={`/${encodePath('depriciation')}`} element={<Depriciation />} />
              <Route path={`/${encodePath('duties-taxes')}`} element={<DutiesTaxes />} />
              <Route path={`/${encodePath('interest-calculation')}`} element={<InterestCalculation />} />
              <Route path={`/${encodePath('ledger')}`} element={<Ledger />} />
              <Route path={`/${encodePath('payment')}`} element={<Payment />} />
              <Route path={`/${encodePath('purchase-summary')}`} element={<PurchaseSummary />} />
              <Route path={`/${encodePath('sale-summary')}`} element={<SaleSummary />} />
              {/* MultiVoucher */}
              <Route path={`/${encodePath('bank-pay-slip-print')}`} element={<BankPaySlipPrint />} />
              <Route path={`/${encodePath('bank-receipt')}`} element={<BankReceipt />} />
              <Route path={`/${encodePath('cash-Bank-receipt-entry')}`} element={<CashBankReceiptEntry />} />
              <Route path={`/${encodePath('cashier-entry')}`} element={<CashierEntry />} />
              <Route path={`/${encodePath('periodic-voucher-entry')}`} element={<PeriodicVoucherEntry />} />
              <Route path={`/${encodePath('cash-receipt')}`} element={<CashReceipt />} />
              <Route path={`/${encodePath('credit-bill-approving')}`} element={<CreditBillApproving />} />
              <Route path={`/${encodePath('multiple-voucher')}`} element={<MultipleVoucher />} />
              {/* Voucher Entry */}
              <Route path={`/${encodePath('cheque-return-entry')}`} element={<ChequeReturnEntry />} />
              <Route path={`/${encodePath('contra-voucher')}`} element={<ContraVoucher />} />
              <Route path={`/${encodePath('credit-note-voucher')}`} element={<CreditNoteVoucher />} />
              <Route path={`/${encodePath('debit-note-voucher')}`} element={<DebitNoteVoucher />} />
              <Route path={`/${encodePath('expense-rcm-voucher')}`} element={<ExpenseRCMVoucher />} />
              <Route path={`/${encodePath('journal-voucher')}`} element={<JournalVoucher />} />
              <Route path={`/${encodePath('payment-voucher')}`} element={<PaymentVoucher />} />
              <Route path={`/${encodePath('purchase-voucher')}`} element={<PurchaseVoucher />} />
              <Route path={`/${encodePath('receipt-voucher')}`} element={<ReceiptVoucher />} />
              <Route path={`/${encodePath('sale-voucher')}`} element={<SaleVoucher />} />
              <Route path={`/${encodePath('show-voucher')}`} element={<ShowVoucher />} />
              <Route path={`/${encodePath('voucher-approving')}`} element={<VoucherApproving />} />
              <Route path={`/${encodePath('self-voucher')}`} element={<SelfVoucher />} />
              {/* Post Date Cheque */}
              <Route path={`/${encodePath('pay-in-slip')}`} element={<PayInSlip />} />
              <Route path={`/${encodePath('pay-in-slip-both')}`} element={<PayInSlipBoth />} />
              <Route path={`/${encodePath('pay-in-slip-posted')}`} element={<PayInSlipPosted />} />
              <Route path={`/${encodePath('pdc-clearence')}`} element={<PDCClearence />} />
              <Route path={`/${encodePath('pdc-receipt')}`} element={<PDCReceipt />} />
              <Route path={`/${encodePath('pdc-register-payment')}`} element={<PDCRegisterPayment />} />
              <Route path={`/${encodePath('pdc-register-print')}`} element={<PDCRegisterPrint />} />
              <Route path={`/${encodePath('pdc-register-receipt')}`} element={<PDCRegisterReceipt />} />
              <Route path={`/${encodePath('pdc-payment')}`} element={<PDCPayment />} />
              {/* BooksOfAccount*/}
              <Route path={`/${encodePath('bank-book')}`} element={<BankBook />} />
              <Route path={`/${encodePath('cash-book')}`} element={<CashBook />} />
              <Route path={`/${encodePath('cash-book-tally')}`} element={<CashBookTally />} />
              <Route path={`/${encodePath('contra-book')}`} element={<ContraBook />} />
              <Route path={`/${encodePath('creditNoteBook')}`} element={<CreditNoteBookVoucher />} />
              <Route path={`/${encodePath('day-book')}`} element={<DayBook />} />
              <Route path={`/${encodePath('debitNoteBook')}`} element={<DebitNoteBookVoucher />} />
              <Route path={`/${encodePath('item-day-book')}`} element={<ItemDayBook />} />
              <Route path={`/${encodePath('journal-book')}`} element={<JournalBook />} />
              <Route path={`/${encodePath('payment-book')}`} element={<PaymentBook />} />
              <Route path={`/${encodePath('PurchaseBook')}`} element={<PurchaseBookVoucher />} />
              <Route path={`/${encodePath('rcm-book')}`} element={<RCMBook />} />
              <Route path={`/${encodePath('receipt-book')}`} element={<ReceiptBook />} />
              <Route path={`/${encodePath('SaleBook')}`} element={<SaleBookVoucher />} />
              {/* Bank Reconcilation */}
              <Route path={`/${encodePath('ReconcilationStatement')}`} element={<ReconcilationStatement />} />
              <Route path={`/${encodePath('ChequeRegister')}`} element={<ChequeRegisterCleared />} />
              <Route path={`/${encodePath('ChequeRegister-UnCleared')}`} element={<ChequeRegisterUnCleared />} />
              <Route path={`/${encodePath('AutoBankReckoncilation')}`} element={<AutoBankReckoncilation />} />
              <Route path={`/${encodePath('BankReconcilationEntry')}`} element={<BankReconcilationEntry />} />
              {/* Cheuqe Book */}
              <Route path={`/${encodePath('single-cheque-entry')}`} element={<SingleChequeEntry />} />
              <Route path={`/${encodePath('cheque-book-register')}`} element={<ChequeBookRegister />} />
              <Route path={`/${encodePath('cheque-issuance-entry')}`} element={<ChequeIssuanceEntry />} />
              <Route path={`/${encodePath('cheque-Received-bank')}`} element={<ChequeReceivedFromBank />} />
              {/* OutStanding Report */}
              <Route path={`/${encodePath('area-wise-ledger')}`} element={<AreaWiseLedger />} />
              <Route path={`/${encodePath('bill-wise-tagging')}`} element={<BillWiseTagging />} />
              <Route path={`/${encodePath('os-aging')}`} element={<OSAging />} />
              <Route path={`/${encodePath('os-area-wise')}`} element={<OSAreaWise />} />
              <Route path={`/${encodePath('os-field-staff-wise')}`} element={<OSFieldStaffWise />} />
              <Route path={`/${encodePath('os-mfg-company-wise')}`} element={<OSMfgCompanyWise />} />
              <Route path={`/${encodePath('os-party-wise-print')}`} element={<OSPartyWisePrint />} />
              <Route path={`/${encodePath('os-route-wise')}`} element={<OSRouteWise />} />
              <Route path={`/${encodePath('os-station-wise')}`} element={<OSStationWise />} />
              <Route path={`/${encodePath('os-supplier-wise')}`} element={<OSSupplierWise />} />
              <Route path={`/${encodePath('out-standing-report')}`} element={<OutstandingReport />} />
              <Route path={`/${encodePath('over-due-list')}`} element={<OverDueList />} />
              {/* Collection Report */}
              <Route path={`/${encodePath('area-wise-sale-sale-return')}`} element={<AreaWiseSaleSaleReturn />} />
              <Route path={`/${encodePath('collection-all')}`} element={<CollectionAll />} />
              <Route path={`/${encodePath('collection-area-wise')}`} element={<CollectionAreaWise />} />
              <Route path={`/${encodePath('collection-field-staff-wise')}`} element={<CollectionFieldStaffWise />} />
              <Route path={`/${encodePath('collection-party-wise')}`} element={<CollectionPartyWise />} />
              <Route path={`/${encodePath('collection-report')}`} element={<CollectionReportComparision />} />
              <Route path={`/${encodePath('collection-route-wise')}`} element={<CollectionRouteWise />} />
              <Route path={`/${encodePath('collection-station-wise')}`} element={<CollectionStationWise />} />
              <Route path={`/${encodePath('inventory-field-staff-wise')}`} element={<InventoryFieldStaffWise />} />
              <Route path={`/${encodePath('missing-receipt-number')}`} element={<MissingReceiptNumber />} />
              {/* Online Banking */}
              <Route path={`/${encodePath('payment-entry')}`} element={<PaymentEntry />} />
              <Route path={`/${encodePath('account-online-bank-api-test')}`} element={<AccountsOnLineBankApiTest />} />
              <Route path={`/${encodePath('account-online-bank-detail-entry')}`} element={<AccountsOnLineBankDetailEntry />} />
              <Route path={`/${encodePath('auto-bank-reconcilation-entry')}`} element={<AutoBankReconcilationEntry />} />
              <Route path={`/${encodePath('bank-statment')}`} element={<BankStatement />} />
              <Route path={`/${encodePath('schedule-payment-entry')}`} element={<SchedulePaymentEntry />} />
              {/* Sale Order */}
              <Route path={`/${encodePath('item-so')}`} element={<ItemSO />} />
              <Route path={`/${encodePath('item-wise-order-register')}`} element={<ItemWiseOrderRegister />} />
              <Route path={`/${encodePath('on-line-sale-order-entry')}`} element={<OnLineSaleOrderEntry />} />
              <Route path={`/${encodePath('party-so')}`} element={<PartySO />} />
              <Route path={`/${encodePath('pending-so')}`} element={<PendingSO />} />
              <Route path={`/${encodePath('sale-order-register')}`} element={<SaleOrderRegister />} />
              <Route path={`/${encodePath('so-generation-excel')}`} element={<SoGenerationFromExcel />} />
              {/* PurchaseOrder */}
              <Route path={`/${encodePath('on-line-order-print')}`} element={<OnlineOrderPrint />} />
              <Route path={`/${encodePath('party-po')}`} element={<PartyPO />} />
              <Route path={`/${encodePath('purchase-order')}`} element={<PurchaseOrder />} />
              <Route path={`/${encodePath('purchase-order-register')}`} element={<PurchaseOrderRegister />} />
              <Route path={`/${encodePath('re-order-system')}`} element={<ReOrderSystem />} />
              {/* Inventory Module */}
              <Route path={`/${encodePath('expiry-issue')}`} element={<ExpiryIssue />} />
              <Route path={`/${encodePath('expiry-receive')}`} element={<ExpiryRecieve />} />
              <Route path={`/${encodePath('gowdown-transfer')}`} element={<GodwonTransfer />} />
              {/*Physical Stock, Stock Adjustment = stock-maintain shortcut url define */}
              <Route path={`/${encodePath('stock-maintain')}`} element={<PhysicalStockStockAdjustment />} />
              <Route path={`/${encodePath('price-difference')}`} element={<PriceDifference />} />
              <Route path={`/${encodePath('purchase')}`} element={<Purchase />} />
              <Route path={`/${encodePath('purchase-return')}`} element={<PurchaseReturn />} />
              <Route path={`/${encodePath('replacemnt')}`} element={<Replacement />} />
              <Route path={`/${encodePath('sale')}`} element={<Sale />} />
              <Route path={`/${encodePath('sale-return')}`} element={<SaleReturn />} />
              <Route path={`/${encodePath('stock-transfer')}`} element={<StockTransfer />} />
              {/* Sale Invoice */}
              <Route path={`/${encodePath('bill-history')}`} element={<BillHistory />} />
              <Route path={`/${encodePath('bill-upload')}`} element={<BillUpload />} />
              <Route path={`/${encodePath('challan')}`} element={<Challan />} />
              <Route path={`/${encodePath('challan-book')}`} element={<ChallanBook />} />
              <Route path={`/${encodePath('challan-to-bill')}`} element={<ChallanToBill />} />
              <Route path={`/${encodePath('counter-book')}`} element={<CounterBook />} />
              <Route path={`/${encodePath('counter-sale')}`} element={<CounterSale />} />
              <Route path={`/${encodePath('invoice')}`} element={<Invoice />} />
              <Route path={`/${encodePath('retail-challan')}`} element={<RetailChallan />} />
              <Route path={`/${encodePath('retail-sale')}`} element={<RetailSale />} />
              <Route path={`/${encodePath('sale-book')}`} element={<SaleBook />} />
              <Route path={`/${encodePath('stock-issue')}`} element={<StockIssue />} />
              <Route path={`/${encodePath('stock-issue-book')}`} element={<StockIssueBook />} />
              {/* Sale Retun Challan */}
              <Route path={`/${encodePath('sale-return-book')}`} element={<SaleReturnBook />} />
              <Route path={`/${encodePath('sale-return-challan')}`} element={<SaleReturnChallan />} />
              <Route path={`/${encodePath('sale-return-challan-book')}`} element={<SaleReturnChallanBook />} />
              <Route path={`/${encodePath('sale-return-note')}`} element={<SaleReturnNote />} />
              <Route path={`/${encodePath('sale-return-retail')}`} element={<SaleReturnRetail />} />
              {/* Purchase Invoice */}
              <Route path={`/${encodePath('sale-return-book')}`} element={<SaleReturnBook />} />
              <Route path={`/${encodePath('sale-return-challan')}`} element={<SaleReturnChallan />} />
              <Route path={`/${encodePath('sale-return-challan-book')}`} element={<SaleReturnChallanBook />} />
              <Route path={`/${encodePath('sale-return-note')}`} element={<SaleReturnNote />} />
              <Route path={`/${encodePath('sale-return-retail')}`} element={<SaleReturnRetail />} />
              {/* Purchase Invoice */}
              <Route path={`/${encodePath('import-purchase')}`} element={<ImportPurchase />} />
              <Route path={`/${encodePath('map-item-list')}`} element={<MapItemList />} />
              <Route path={`/${encodePath('p-challan-to-bill')}`} element={<PChallanToBill />} />
              <Route path={`/${encodePath('p-invoice')}`} element={<PInvoice />} />
              <Route path={`/${encodePath('purchase-book')}`} element={<PurchaseBook />} />
              <Route path={`/${encodePath('purchase-challan-bill')}`} element={<PurchaseChallanBook />} />
              <Route path={`/${encodePath('stock-receive')}`} element={<StockRecieve />} />
              {/* Purchase Return */}
              <Route path={`/${encodePath('purchase-return-book')}`} element={<PurchaseReturnBook />} />
              <Route path={`/${encodePath('purchase-return-challan')}`} element={<PurchaseReturnChallan />} />
              <Route path={`/${encodePath('p-return-challan-book')}`} element={<PurchaseReturnChallanBook />} />
              <Route path={`/${encodePath('purchase-return-note')}`} element={<PurchaseReturnNote />} />
              {/* Replacement */}
              <Route path={`/${encodePath('replacement-issue')}`} element={<ReplacementIssue />} />
              <Route path={`/${encodePath('replacement-issue-book')}`} element={<ReplacementIssueBook />} />
              <Route path={`/${encodePath('replacement-receive')}`} element={<ReplacementReceive />} />
              <Route path={`/${encodePath('replacement-receive-book')}`} element={<ReplacementReceiveBook />} />
              {/* Price Diference */}
              <Route path={`/${encodePath('p-price-difference-note')}`} element={<PPDifferenceNoteBook />} />
              <Route path={`/${encodePath('p-price-difference-note')}`} element={<PPriceDifferenceNote />} />
              <Route path={`/${encodePath('sale-price-difference-note')}`} element={<SalePriceDifferenceNote />} />
              <Route path={`/${encodePath('sale-price-difference-note')}`} element={<SalePriceDifferenceNoteB />} />
              {/* If Click Wrong Url Redirect Home Page */}
              <Route path="*" element={<Navigate to={`/${encodePath('home')}`} replace />} />
            </Routes>
            <Footer />
          </div>
        </div>
      </div>
    </HashRouter>
  );
}

export default SubNavigation;
