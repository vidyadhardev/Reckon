import React from 'react';
import { HashRouter, Route, Routes, Navigate } from 'react-router-dom';
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
import NonWorkingItems_Company from "./pages/Utilitie/NonWorkingItems_Company.jsx";
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
import OffLineProductionEntryGenerationFromSale from './pages/ReUpdate/OffLineProductionEntryGenerationFromSale.jsx';
// Account Master
import LedgerMaster from './pages/AccountMaster/LedgerMaster.jsx';
import AccGroup from './pages/AccountMaster/AccGroup.jsx';
import Schedule from './pages/AccountMaster/Schedule.jsx';
import LedgerOpeningOrder from './pages/AccountMaster/LedgerOpeningOrder.jsx';
import AccountMasterDetailsEntry from './pages/AccountMaster/AccountMasterDetailsEntry.jsx';
import LedgerOpeningMaster from './pages/AccountMaster/LedgerOpeningMaster.jsx';
import ApproveRetailerReckonOnly from './pages/AccountMaster/ApproveRetailerReckonOnly.jsx';
//  Footer 
import Footer from './pages/Footer/Footer.jsx';
import { encodePath } from './utilities/Utils.js';
import './SubNavigation.css';

const SubNavigation = () => {
  return (
    <HashRouter className="parent">
      <SearchBar />
      <div className="container-fluid ">
        <div className="row flex-nowrap">
          {/* Here Custome Scroll Bar */}
          <div className='col-2 side-bar' style={{ position: 'fixed', height: '93vh', overflow: 'scroll', scrollBehavior: "smooth", scrollbarWidth: "thin", scrollbarColor: "#0dcaf0 white" }}>
            <SideBar />
          </div>
          {/*marginLeft:' 25.00005' */}
          <div className="col-10 all-page-fix" style={{ marginLeft: '16.6667%' }}>
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
              <Route path={`/${encodePath('off-line-production-entry-generation-from-sale')}`} element={<OffLineProductionEntryGenerationFromSale />} />
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
              <Route path={`/${encodePath('import-setting')}`} element={<ImportSetting />} />.

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
              <Route path={`/${encodePath('-approve-retailer-reckonOnly')}`} element={<ApproveRetailerReckonOnly />} />

              {/*  Account Master End */}
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
