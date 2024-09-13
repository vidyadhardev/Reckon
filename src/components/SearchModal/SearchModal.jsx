import React, { useState, useEffect, useRef } from 'react';
import { Modal, Form } from 'react-bootstrap';
import { encodePath } from '../../utilities/Utils';
import "./Searchmodal.css";
const SearchModal = ({ show, handleClose, searchTerm, handleSearchChange, filteredItems, setReDirect }) => {
  const [activeIndex, setActiveIndex] = useState(-1);
  const itemRefs = useRef([]);

  const handlectRedirect = (path) => {
    setReDirect({
      path: `/${encodePath(path)}`,
      status: true
    });
  };

  useEffect(() => {
    if (show) {
      handleSearchChange({ target: { value: '' } });
      setActiveIndex(-1);
    }
  }, [show]);

  useEffect(() => {
    if (activeIndex >= 0 && itemRefs.current[activeIndex]) {
      itemRefs.current[activeIndex].scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
      });
    }
  }, [activeIndex]);

  const handleKeyDown = (event) => {
    if (event.key === 'ArrowDown') {
      setActiveIndex(prevIndex => (prevIndex + 1) % filteredItems.length);
    } else if (event.key === 'ArrowUp') {
      setActiveIndex(prevIndex => (prevIndex > 0 ? prevIndex - 1 : filteredItems.length - 1));
    } else if (event.key === 'Enter' && activeIndex >= 0) {
      event.preventDefault();
      handlectRedirect(filteredItems[activeIndex].path);
      handleClose();
    }
  };


  return (
    <div>
      <Modal className='small mt-5' show={show} onHide={handleClose} style={{ maxHeight: "500px", borderRadius: "5px" }}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <Form role='search'>
            <Form.Control
              type="text"
              value={searchTerm}
              onChange={handleSearchChange}
              placeholder="Search..."
              autoFocus
              onKeyDown={handleKeyDown}
              className='border-2 border-info'
            />
          </Form>
          <ul className="results mt-4">
            {searchTerm && filteredItems.map((item, index) => (
              <li
                key={index}
                ref={el => itemRefs.current[index] = el}
                className={`list-unstyled m-2 ${index === activeIndex ? 'active' : ''}`}
                onClick={() => {

                  handlectRedirect(item.path); handleClose();
                }}
                style={{ cursor: 'pointer', }}
              >
                <p className='FetchDataLocal text-primary-emphasis text-capitalize'>
                  {item.name}
                  <li className='list-unstyled border-bottom border-dark' />
                </p>
              </li>
            ))}
          </ul>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default SearchModal;
