import React from "react";
import { Bounce } from "react-awesome-reveal";
const BackupPathEntry = () => {

  return (
    <>
      <div className='home-content mt-3 ' style={{ border: "3px double black", borderRadius: '5px', background: 'white' }}>
        <div className="home-heading">
          <center> BackupPathEntry</center>
          {/* <div className="container justify-content-around align-items-center w-75 mt-3">
          <div className="container justify-content-between align-items-center">
            <div className=" ratio ratio-16x9">
              <iframe
                src="https://www.youtube.com/embed/rGQ79MrZUQw?autoplay="
                title="YouTube video player"
                frameborder="1"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                class="d-inline xs"
                allowfullscreen
                style={{ border: "3px double rgb(123, 123, 241)", borderRadius: "5px" }}>
              </iframe>
            </div>
          </div>
        </div> */}
          <hr />
          <div className="home-page container">
            <p className=" p-lg-5 justify-content-end ms-5 me-5 fs-5" >
              <b>Backup Path Entry-:</b><br />
              In Reckon Software "calculation" refers to the automated processes that perform mathematical operations to manage and report financial data. These calculations are essential for various accounting functions, including:-
              <hr />
              <Bounce duration={2000}><b className="fw-bold align-items-lg-start text-uppercase">Load Default Option :- </b> </Bounce>
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
        </div>
      </div>
    </>
  )
}
export default BackupPathEntry