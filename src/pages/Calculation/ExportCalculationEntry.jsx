import React  from "react";
import {  Ratio } from "react-bootstrap";
import { Bounce } from "react-awesome-reveal";
// import './ExportCalculationEntry.css'
const ExportCalculationEntry = () => {
    
  return (
    <div className='module-content mt-2 voucher-content ' style={{ border: "3px double black", borderRadius: '5px', }}>
     <div className="container mt-2">
        <Bounce duration={2000} className="fw-bold fs-4"><center> Export Calculation Entry</center></Bounce>
        <div className="container p-2" >
          <Ratio aspectRatio={('1x1', '4x3', '16x9', '21x9')}>
            <iframe container src="https://www.youtube.com/embed/L-Xlhfz5fKc?si=MKVnNylgWhdHA-0d"  title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" className="d-inline xs" allowFullScreen style={{ border: "3px double rgb(123, 123, 241)", borderRadius: '5px', }}></iframe>
          </Ratio>
        </div>
        <hr />
        <div className="Voucher-page container">
          <p className=" p-lg-5 justify-content-end ms-5 me-5 fs-5" >
            In Reckon Software "calculation" refers to the automated processes that perform mathematical operations to manage and report financial data. These calculations are essential for various accounting functions, including:-
            <hr />
            <Bounce duration={2000}><b className="fw-bold align-items-lg-start text-uppercase">Export Calculation Option :- </b> </Bounce>
            <ol>
              <li><b>Bookkeeping :</b>Calculating balances for accounts by recording debits and credits.
              </li>
              <li><b>Invoicing: </b>Computing totals, taxes, and discounts for invoices.
              </li>
              <li><b>Payroll : </b>Calculating employee wages, taxes, deductions, and net pay.
              </li>
              <li><b>Financial Reporting: </b> Summarizing data into financial statements like balance sheets, income statements, and cash flow statements.
              </li>
              <li><b>Reconciliation:</b>Comparing internal records with external statements to ensure accuracy.
              </li>
            </ol>
          </p>
        </div>
        {/* <hr />
        <div className="main-company-images  text-center ">
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

export default ExportCalculationEntry;
