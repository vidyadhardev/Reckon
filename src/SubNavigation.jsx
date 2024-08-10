import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import SearchBar from './components/SearchBar/SearchBar.jsx';
import SideBar from "./components/Sidebar/Sidebar.jsx"
import VoucherType from './pages/VoucherType/VoucherType.jsx';
import FirmMaster from './pages/FirmMaster/FirmMaster.jsx';
import Home from './pages/Home/Home.jsx';
import UserModuleEntry from './pages/UserModule/UserModuleEntry.jsx';
import GlobalUserEntry from './pages/UserModule/GlobalUserEntry.jsx';
import GlobalUpdateRightsEntry from './pages/UserModule/GlobalUpdateRightsEntry.jsx';
import UserFirmRightsEntry from './pages/UserModule/UserFirmRightsEntry.jsx';
import UserSeriesRightsEntry from './pages/UserModule/UserSeriesRightsEntry.jsx';
import UserOtherEntry from './pages/UserModule/UserOtherEntry.jsx';
import FYBackUp from './pages/FYBackUp/FYBackUp.jsx';
import CalculationEntry from './pages/Calculation/CalculationEntry.jsx';
import ExportCalculationEntry from './pages/Calculation/ExportCalculationEntry.jsx';
import ImportCalculationEntry from './pages/Calculation/ImportCalculationEntry.jsx';
import SereisMaster from './pages/SereisMaster/SereisMaster.jsx';
import LoadDefaultMaster from './pages/ConfigurationPage/LoadDefaultMaster.jsx';
import OldSystemConfig from './pages/ConfigurationPage/SystemConfig/OldSystemConfig.jsx';
import NewSystemConfig from './pages/ConfigurationPage/SystemConfig/NewSystemConfig.jsx';
import SysParamModuleEntry from './pages/ConfigurationPage/SystemConfig/SysParamModuleEntry.jsx';
import SoftwareConfig from './pages/ConfigurationPage/SystemConfig/SoftwareConfig.jsx';
import BillFormatImaport from './pages/ConfigurationPage/FormatConfiguration/BillFormatImport.jsx';
import BillFormatExport from './pages/ConfigurationPage/FormatConfiguration/BillFormatExport.jsx';
import DataImport from './pages/Utility/DataImport.jsx';
import DataExport from './pages/Utility/DataExport.jsx';
import Utilitie from "./pages/Utility/Utilitie/Utilitie.jsx"
import Footer from './pages/Footer/Footer.jsx';
import { encodePath } from './utilities/Utils.js';
import './Loader.css';
import './SubNavigation.css';

const SubNavigation = () => {
  // const [isMobile, setIsMobile] = useState(window.innerWidth < 576);

  // useEffect(() => {
  //   const handleResize = () => {
  //     setIsMobile(window.innerWidth < 576);
  //   };

  //   window.addEventListener('resize', handleResize);
  //   return () => window.removeEventListener('resize', handleResize);
  // }, []);
  return (
    <BrowserRouter>
      <div className="container-fluid ">
      <SearchBar />
        <div className="row flex-nowrap">
          <div className='col-2 side-bar'>
            <SideBar />
          </div>
          <div className="col-10 all-page-fix">
            <Routes>
              <Route path="/" element={<Navigate to={`/${encodePath('home')}`} replace />} />
              <Route path={`/${encodePath('home')}`} element={<Home />} />
              <Route path={`/${encodePath('fy-back-up')}`} element={<FYBackUp />} />
              <Route path={`/${encodePath('fm-ms')}`} element={<FirmMaster />} />
              <Route path={`/${encodePath('voucher-type')}`} element={<VoucherType />} />
              <Route path={`/${encodePath('series-master')}`} element={<SereisMaster />} />
              <Route path={`/${encodePath('user-module-en')}`} element={<UserModuleEntry />} />
              <Route path={`/${encodePath('global-user-en')}`} element={<GlobalUserEntry />} />
              <Route path={`/${encodePath('gb-update-rt')}`} element={<GlobalUpdateRightsEntry />} />
              <Route path={`/${encodePath('user-frm-rt-en')}`} element={<UserFirmRightsEntry />} />
              <Route path={`/${encodePath('user-srs-rth-en')}`} element={<UserSeriesRightsEntry />} />
              <Route path={`/${encodePath('user-other-en')}`} element={<UserOtherEntry />} />
              <Route path={`/${encodePath('cal-en')}`} element={<CalculationEntry />} />
              <Route path={`/${encodePath('ex-cal-en')}`} element={<ExportCalculationEntry />} />
              <Route path={`/${encodePath('im-cal-en')}`} element={<ImportCalculationEntry />} />
              <Route path={`/${encodePath('load-df-ms')}`} element={<LoadDefaultMaster />} />
              <Route path={`/${encodePath('old-ss-confi')}`} element={<OldSystemConfig />} />
              <Route path={`/${encodePath('new-ss-confi')}`} element={<NewSystemConfig />} />
              <Route path={`/${encodePath('sys-param-en')}`} element={<SysParamModuleEntry />} />
              <Route path={`/${encodePath('ss-confi')}`} element={<SoftwareConfig />} />
              <Route path={`/${encodePath('bill-fmt-im')}`} element={<BillFormatImaport />} />
              <Route path={`/${encodePath('bill-fmt-ex')}`} element={<BillFormatExport />} />
              <Route path={`/${encodePath('dt-im')}`} element={<DataImport />} />
              <Route path={`/${encodePath('dt-em')}`} element={<DataExport />} />
              <Route path={`/${encodePath('utilitie')}`} element={<Utilitie />} />
              <Route path="*" element={<Navigate to={`/${encodePath('home')}`} replace />} />
            </Routes>
            <Footer />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}
export default SubNavigation;
