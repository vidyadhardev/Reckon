import React, { useEffect } from 'react';
import { Modal, Form } from 'react-bootstrap';
import { encodePath } from '../../utilities/Utils';
import "./SearchModal.css";

const SearchModal = ({ show, handleClose, searchTerm, handleSearchChange, filteredItems, setReDirect }) => {
  const handlectRedirect = (path) => {
    setReDirect({
      path: `/${encodePath(path)}`,
      status: true
    })
  }
  useEffect(() => {
    if (show == '') {
      handleSearchChange({ target: { value: '' } })  // update Input Box In searchBar Empty Data Set If Search Reopn Then Empty
    }
  });
  return (
    <div>
      <Modal className='small mt-5' show={show} onHide={handleClose} style={{ maxHeight: "500px", borderRadius: "5px" }}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body >
          <Form role='search'>
          <Form.Control
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Search..."
            autoFocus
          />
         </Form>
          <ul className="results mt-4">
            {searchTerm && (filteredItems.map((item, index) => (
              <ul className="list-unstyled" key={index}>
                <p className='FetchDataLocal text-primary-emphasis text-capitalize'
                  onClick={() => { handlectRedirect(item.path); handleClose() }}
                  style={{ cursor: 'pointer' }}>{item.name}
                  <li className='list-unstyled border-bottom border-dark'></li>
                </p>
              </ul>
            )))}
          </ul>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default SearchModal;

