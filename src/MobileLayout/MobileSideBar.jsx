import { useState,useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { TfiMenu } from "react-icons/tfi";
import SideBar from '../components/Sidebar/Sidebar';
const MobileSideBar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
 
  return (
    <>
      <Button onClick={handleShow} variant='light'>
        <TfiMenu  />
      </Button>
      <Offcanvas show={show} onHide={handleClose} backdrop="static" style={{width:"225px"}} >
      <Offcanvas.Header closeButton/>
        <Offcanvas.Body className="" >
          {/*  Import Sidebar Components */}
          <SideBar  />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default MobileSideBar;