import React from "react";

const UserOtherEntry = () => {
  return (
    <>
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

            <p className=" p-lg-5 justify-content-end ms-5 me-5 fs-5" >
              <b>User Other Entry -:</b><br />
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
            <div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserOtherEntry;


