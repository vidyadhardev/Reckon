import React, { useState, useEffect } from 'react';
import { Navbar, Form, Container } from 'react-bootstrap';
import { Link, useNavigate, } from 'react-router-dom';
import SearchModal from '../SearchModal/SearchModal';
import SearcBarData from "../DummyData/Data";
import "./SearchBar.css";
import { FaLinkedin, FaWhatsapp, FaTwitter } from "react-icons/fa";
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
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <>
      <Navbar expand="sm" className="bg-body-tertiary justify-content-between searchbar-fix">
        <Container fluid className='navbarScroll'>
          <Link to="https://reckonsales.in/" title="Navigate Reckon Sales Web App" className="d-block align-items-center ps-2 text-decoration-none">
            <img src="logo.png" alt='Reckon Image' width="40px" className='rounded bg-info' />
          </Link>
          <Navbar.Collapse id="navbarScroll" className='justify-content-center'>
            <Form.Control
              type="text"
              // value={input}
              // onChange={handleSearchChange}
              onClick={handleSearchClick}
              placeholder="Click And Search ..."
              className='search-input border border-primary-subtle'
              style={{ width: "350px" }}
              readOnly
            />
          </Navbar.Collapse>
          <p className='d-inline-flex gap-3'>
            <Navbar.Toggle aria-controls="basic-navbar-nav" className='justify-content-around' style={{ fontSize: '10px' }} />
            <Link to="https://www.linkedin.com/in/vidya-dhar-maurya-435a40222/" className='me-3 fs-4'><FaLinkedin /></Link>
            <Link to="https://x.com/MauryaVidyadhar" className='me-3 fs-4'><FaTwitter /></Link>
            <Link to="https://wa.me/9076944738" className='me-3 fs-4'><FaWhatsapp /></Link>
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

