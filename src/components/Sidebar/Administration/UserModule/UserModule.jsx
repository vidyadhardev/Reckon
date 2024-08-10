
import { encodePath } from "../../../../utilities/Utils";
import { DropdownButton, Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaUser, FaUsers, FaGlobe, FaSync, FaBuilding, FaThList, FaEllipsisH } from 'react-icons/fa'; // Importing icons
const UserModule = () => {
  // const [activeSubMenu, setActiveSubMenu] = useState('');
  // const handleSubMenuClick = (menu) => {
  //   setActiveSubMenu(activeSubMenu === menu ? '' : menu);
  // };

  return (
    <>
      <DropdownButton variant="light"
        id="dropdown-basic-button"
        title={
          <span>
            <FaUsers className="me-2" />
            User Module 
          </span>
        }
      >
        <Dropdown.Item>
          <Link to={`/${encodePath('user-module-en')}`} className="d-inline-flex text-dark text-decoration-none rounded">
            <FaUser className="me-2" />
            User Entry 
          </Link>
        </Dropdown.Item>
        <Dropdown.Item>
          <Link to={`/${encodePath('global-user-en')}`} className="d-inline-flex text-dark text-decoration-none rounded">
            <FaGlobe className="me-2" />
            Global User Entry
          </Link>
        </Dropdown.Item>
        <Dropdown.Item>
          <Link to={`/${encodePath('gb-update-rt')}`} className="d-inline-flex text-dark text-decoration-none rounded">
            <FaSync className="me-2" />
            Global Rights Update 
          
          </Link>
        </Dropdown.Item>
        <Dropdown.Item>
          <Link to={`/${encodePath('user-frm-rt-en')}`} className="d-inline-flex text-dark text-decoration-none rounded">
            <FaBuilding className="me-2" />
            User Firm Rights 
          </Link>
        </Dropdown.Item>
        <Dropdown.Item>
          <Link to={`/${encodePath('user-srs-rth-en')}`} className="d-inline-flex text-dark text-decoration-none rounded">
            <FaThList className="me-2" />
            User Series Rights 
          </Link>
        </Dropdown.Item>
        <Dropdown.Item>
          <Link to={`/${encodePath('user-other-en')}`} className="d-inline-flex text-dark text-decoration-none rounded">
            <FaEllipsisH className="me-2" />
            User Other Entry
          </Link>
        </Dropdown.Item>
      </DropdownButton>

    </>
  );
};

export default UserModule;
