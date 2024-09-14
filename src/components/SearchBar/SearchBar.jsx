import React, { useState, useEffect } from 'react';
import { Navbar, Form, Container } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import SearchModal from '../SearchModal/SearchModal';
import SearcBarData from "../DummyData/Data";
import logork from "../../logo.png";
import { FiSearch } from "react-icons/fi";
import './Searchbar.css';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [reDirect, setReDirect] = useState({
    path: "",
    status: false
  });
  const [isNavbarOpen, setIsNavbarOpen] = useState(false); // State to toggle navbar

  const navigate = useNavigate();

  useEffect(() => {
    if (reDirect.status) {
      navigate(reDirect.path);
      setReDirect({
        path: "",
        status: false
      });
    }
  }, [reDirect, navigate]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchClick = () => {
    setShowModal(true);
  };

  const handleClose = () => setShowModal(false);

  const filteredItems = SearcBarData.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase().slice(0, 9))
  );

  const UpdateURL = (e) => {
    e.preventDefault();
    const baseURL = window.location.origin;
    window.location.href = baseURL;
  };

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  return (
    <>
      <Navbar expand="sm" className="justify-content-between searchbar-fix" >
        <Container fluid className='navbarScroll'>

          {/* Logo and home navigation */}
          <Link to="#" onClick={UpdateURL} role="link" title="Navigate Reckon Sales Web App" className="d-block align-items-center ps-2 text-decoration-none">
            <img src={logork} alt="Reckon logo" width="40px" className="rounded bg-info" />
          </Link>

          {/* Navbar Toggle Button */}
          <Navbar.Toggle
            aria-controls="navbarScroll"
            onClick={toggleNavbar}
            className=" bg-light border border-2"
            aria-expanded={isNavbarOpen}
            title='Click to Open searchbar'
          ><FiSearch /></Navbar.Toggle>

          {/* Navbar Collapse (search input) */}
          <Navbar.Collapse id="navbarScroll" className={`justify-content-center ms-lg-5 ${'show' ? 'isNavbarOpen' : ''} `}>
            <Form.Control
              type="text"
              onClick={handleSearchClick}
              placeholder=" Search Here ..."
              className='search-input border-2 border-info '
              autoFocus
              readOnly
              // disabled
            />
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* Search Modal */}
      <SearchModal
        show={showModal}
        handleClose={handleClose}
        searchTerm={searchTerm}
        handleSearchChange={handleSearchChange}
        filteredItems={filteredItems}
        setReDirect={setReDirect}
      />
    </>
  );
};

export default SearchBar;
