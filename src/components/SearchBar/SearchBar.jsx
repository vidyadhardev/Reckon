import React, { useState, useEffect } from 'react';
import { Navbar, Form, Container } from 'react-bootstrap';
import { Link, useNavigate, } from 'react-router-dom';
import SearchModal from '../SearchModal/SearchModal';
import SearcBarData from "../DummyData/Data";
import logork from "../../logo.png";
import { FaLinkedin, FaWhatsapp, FaTwitter } from "react-icons/fa";
import './SearchBar.css';
const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [reDirect, setReDirect] = useState({
    path: "",
    status: false
  })
  const navigate = useNavigate();
  useEffect(() => {
    if (reDirect.status) {
      navigate(reDirect.path);
      setReDirect({
        path: "",
        status: false
      })
    }
  }, [reDirect]);
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };
  const handleSearchClick = () => {
    setShowModal(true)
  };
  const handleClose = () => setShowModal(false);
  const filteredItems = SearcBarData.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase().slice(0, 9))
  );
  const UpdateURL = (e) => {
    e.preventDefault(); // Prevent the default link behavior
    const baseURL = window.location.origin; // Get the base URL e.g., https://reckonsales.in
    window.location.href = baseURL; // Redirect to the base URL, ignoring any hash or query string
  };
// If click icon ask to You Open Link External site Then open new tab
  const handleExternalLink = (url) => {
    if (window.confirm("You are about to leave this website and visit an external link.Do you want to continue?")) {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };
  return (
    <>
      <Navbar expand="sm" className="justify-content-between searchbar-fix" >
        <Container fluid className='navbarScroll'>

          <Link to="#" onClick={UpdateURL} role="link" title="Navigate Reckon Sales Web App" className="d-block align-items-center ps-2 text-decoration-none">
            <img src={logork} alt="Reckon Image" width="40px" className="rounded bg-info" />
          </Link>

          <Navbar.Collapse id="navbarScroll" className='justify-content-center ms-lg-5'>
            <Form.Control
              type="text"
              onClick={handleSearchClick}
              placeholder=" Search Here ..."
              className='search-input border-2 border-info ms-5'
              style={{ width: "450px" }}
              autoFocus
              readOnly
            />
          </Navbar.Collapse>
          <p className='d-inline-flex gap-3 text-primary'>
            <Navbar aria-controls="basic-navbar-nav" className='justify-content-around' style={{ fontSize: '10px' }} />
            <span onClick={() => handleExternalLink("https://www.linkedin.com/in/vidya-dhar-maurya-435a40222/")} className='me-3 fs-4' style={{ cursor: 'pointer' }}><FaLinkedin /></span>
            <span onClick={() => handleExternalLink("https://x.com/MauryaVidyadhar")} className='me-3 fs-4' style={{ cursor: 'pointer' }}><FaTwitter /></span>
            <span onClick={() => handleExternalLink("https://wa.me/9076944738")} className='me-3 fs-4' style={{ cursor: 'pointer' }}><FaWhatsapp /></span>
          </p>
        </Container>
      </Navbar>
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
}
export default SearchBar;

