import React from "react";
import {Ratio } from "react-bootstrap";
// import { Bounce } from "react-awesome-reveal";
const UserSeriesRightsEntry = () => {

  return (
    <div className='module-content mt-2 user-series-content ' style={{ border: "3px double black", borderRadius: '5px', }}>
      <div className="container mt-2">
      {/* <Bounce duration={2000} className="fs-3"><center>User Series Rights Entry </center></Bounce> */}
        <div className="container p-2" >
          <Ratio aspectRatio={('1x1', '4x3', '16x9', '21x9')}>
            <iframe container src="https://www.youtube.com/embed/CElszsLCbuY?si=D5xUZyOjDwAUiaf8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" className="d-inline xs" allowFullScreen style={{ border: "3px double rgb(123, 123, 241)", borderRadius: '5px', }}></iframe>
          </Ratio>
        </div>
        <hr />
        <div className="Voucher-page container">
          <p className=" p-lg-5 justify-content-end ms-5 me-5 fs-5" >
            <b>User Series Rights Entry -:</b> <br/>
            We are <b>Reckon Sales Pvt. Ltd.</b> and we make ERP software to make your business more efficient and adaptable. Based out of Lucknow, India we have industry experience of more than 20 years, with a team of dedicated veterans of the industry we want to empower your business and make it as seamless as possible.

            Our services include ERP solutions for <i> Retail, Distribution & Multi-Location businesses in various sectors like Pharmaceutical, Super Market, FMCG, Auto Parts, Textile, Footwear, Restaurants.</i> Dynamism is one of the key visions of our company and that is why we have ventured into providing mobile and cloud-based services for our clients. Our customers, from all over India including International locations, have stayed with us for 15 years; a clear indication of our commitment towards them.

            Through our own software development center, we have developed software for different trades that are marketed under <b>“Reckon Sales Pvt. Ltd. Pan-India.”</b>  We believe in adding value to the businesses by way of providing GST, Desktop, Cloud and Mobile based solutions. We also specialize in providing training to the clients to enable them to access digital solutions for their businesses.<br />
            <hr />
            <b className="fw-bold align-items-lg-start text-uppercase">Vouchers Type </b> <br />
            <ul>
              <li>Credit Voucher
              </li>
              <li>Debit Voucher
              </li>
              <li>Contra Voucher
              </li>
              <li>Jouneral Voucher
              </li>
              <li>Payment & Receipt Voucher etc.
              </li>
            </ul>
          </p>
        </div>
        {/* <hr />
        <div className="main-company-images  text-center ">
          <div className="image-contain mb-3 m-auto">
            <p>If you want to see  image then <b>click</b> on press button</p>
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

export default UserSeriesRightsEntry;
