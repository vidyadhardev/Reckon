import React from "react";
import { Bounce } from "react-awesome-reveal";

const VoucherType = () => {

  return (
    <div className='home-content mt-3 ' style={{ border: "3px double black", borderRadius: '5px', background: 'white' }}>
      <div className="home-heading">
        <div className="container justify-content-around align-items-center w-75 mt-3">
          <div className="container justify-content-between align-items-center">
            <div className=" ratio ratio-16x9">
              <iframe container src="https://www.youtube.com/embed/TwHItJegntI?si=Xrl10ZJ6prcJx1_d" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" className="d-inline xs" allowFullScreen style={{ border: "3px double rgb(123, 123, 241)", borderRadius: '5px', }}></iframe>

            </div>
          </div>
        </div>
        <hr />
        <div className="home-page container">
          <p className=" p-lg-5 justify-content-end ms-5 me-5 fs-5 " >
            <Bounce duration={2000} > <b> Voucher Types :- </b></Bounce>
            <p className="">  <b> "Voucher type"</b>refers to different categories of transactions or documents that record financial transactions. Vouchers are used to document various types of business transactions, <br />  and different types of vouchers are used for different types of transactions. Here are some common types of vouchers and their purposes.</p>
            <br />
            <hr />
            <Bounce duration={2000}><b className="fw-bold align-items-lg-start text-uppercase">Vouchers Type :- </b> </Bounce>
            <ul>

              <li>
                <b>Payment Voucher: </b>Used to record payments made to suppliers or creditors. This includes cash payments, bank transfers, and cheque payments.
              </li>
              <li> <b>Receipt Voucher:</b> Used to record the receipt of money from customers or other sources. This includes cash receipts, bank deposits, and other forms of payment received.</li>

              <li><b>Journal Voucher:</b> Used to record non-cash transactions or adjustments that do not fall under the categories of payments or receipts. Examples include adjusting entries, depreciation entries, and corrections of errors.</li>

              <li> <b> Sales Voucher: </b>Used to record sales transactions. This includes both cash sales and credit sales.</li>

              <li><b>Purchase Voucher: </b>Used to record purchase transactions. This includes both cash purchases and credit purchases.</li>

              <li><b> Contra Voucher:</b> Used to record transactions that involve transfers between cash and bank accounts, such as depositing cash into a bank account or withdrawing cash from a bank account.</li>
            </ul>
          </p>
          <div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VoucherType;


