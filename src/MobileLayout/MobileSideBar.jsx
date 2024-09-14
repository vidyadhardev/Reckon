import { useState } from 'react';
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
      <Offcanvas show={show} onHide={handleClose} backdrop="static" style={{width:"225px"}} scroll='true' >
      <Offcanvas.Header closeButton/>
        <Offcanvas.Body className="" >
          {/*  Import Sidebar Components */}
          <SideBar handleClose={handleClose} />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
// const MobileSideBar = () => {
//   return (
//     <>

//       <button
//         class="btn btn-primary"
//         type="button"
//         data-bs-toggle="offcanvas"
//         data-bs-target="#offcanvasWithBothOptions"
//         aria-controls="offcanvasWithBothOptions"
//       >
//         Enable both scrolling & backdrop
//       </button>


//       <div class="offcanvas offcanvas-start" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
//         <div class="offcanvas-header">
//           <h5 class="offcanvas-title" id="offcanvasWithBothOptionsLabel">Backdroped with scrolling</h5>
//           <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
//         </div>
//         <div class="offcanvas-body">
//           <p>Try scrolling the rest of the page to see this option in action.</p>
//         </div>
//       </div>
//     </>
//   )
// }

export default MobileSideBar;