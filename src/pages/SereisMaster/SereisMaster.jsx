import React from "react";
import SereisHerose from "../../assets/SeriesMasterHome.png";
const SereisMaster = () => {
  return (
    <div className='module-content mt-2 voucher-content ' style={{ border: "3px double black", borderRadius: '5px', }}>
      <div className="container mt-3">
        <div className="container justify-content-center align-content-center ">
          <img src={SereisHerose} alt="series_MasterLogo" className="w-100 border border-danger-subtle rounded" />
        </div>
        <hr />
        <div className="Voucher-page container">
          <p className=" p-lg-5 justify-content-end ms-5 me-5 fs-5" >
            <b>Sereis Master -:</b> <br/>
            In accounting software, the Series Master is a feature used to manage serial numbers for transactions or documents. This is particularly useful when you have different types of transactions and want to assign unique serial numbers for each type.
          
            <hr />
            <b className="fw-bold align-items-lg-start text-uppercase">Key benefits of the Series Master:- </b> <br />
            <ul>
              <li><b>Organization: </b>It helps in organizing various types of documents and transactions efficiently.
              </li>
              <li>
                <b>Tracking:</b>It facilitates better tracking and management of transactions by providing unique identifiers.
              </li>
              <li><b>Customization:</b> It allows for the customization of serial number formats according to business needs.
              </li>
              <li><b>Compliance :</b> Ensures that all transactions follow a sequential order, which can be important for auditing and compliance purposes.
              </li>
              <br/>
              <span>Overall, the Series Master ensures systematic and error-free management of transaction sequences within the accounting software.
              </span>
            </ul>
          </p>
        </div>
        <hr/>
        {/* <div className="main-company-images  text-center ">
          <div className="image-contain mb-3 m-auto">
            <p>If you want to see image then <b>click</b> on press button</p>
            <Button
              onClick={() => setOpen(!open)}
              aria-controls="example-collapse-text"
              aria-expanded={open}
            >
              click
            </Button>
            <div style={{ minHeight: '250px' }} className="m-auto">
              <Collapse in={open} dimension="width" direction="">
                <img src="../Images/Capture1.PNG" alt="FimrMaster" className="img-fluid" style={{ border: "3px double black", borderRadius: '5px', }} />
              </Collapse>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default SereisMaster;

