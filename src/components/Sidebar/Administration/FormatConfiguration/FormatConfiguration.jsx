import { encodePath } from '../../../../utilities/Utils';
import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import { CgImport } from "react-icons/cg";
import { PiExportBold } from "react-icons/pi";

const FormatConfiguration = () => {
  return (
    <>
      <Dropdown.Item>
        <Link to={`/${encodePath('bill-fmt-im')}`} className="d-inline-flex align-items-center text-dark text-decoration-none rounded">
          <CgImport className='me-2' />  Bill Format Imaport
        </Link>
      </Dropdown.Item>
      <Dropdown.Item>
        <Link to={`/${encodePath('bill-fmt-ex')}`} className="d-inline-flex align-items-center text-dark text-decoration-none rounded" >
          <PiExportBold className='me-2' />  Bill Format Export
        </Link>
      </Dropdown.Item>
    </>
  )
};
export default FormatConfiguration;