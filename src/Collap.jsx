import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';

const Collap=()=> {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        click Here To show Your Toggle
      </Button>
      <Collapse in={open}>
        <div id="example-collapse-text">

        </div>
      </Collapse>
    </>
  );
}

export default Collap;