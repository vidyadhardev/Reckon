import React from "react";

import { BiPhone, BiMobileVibration } from "react-icons/bi";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <>
      <div className="row Footer-header p-3 rounded mt-3 mb-3 bg-body-secondary">
        <div className="col-sm-4 "> <dt>Reckon Sales Pvt. Ltd.</dt>
          <div className="address">
            <ul className="list-unstyled">
              <li className="text-decoration-none">SF-2, New Medicine Market,<br /> Meer Jaan Lane,
                Nayagaon (East),
                <br />Lucknow,
                UP, India - 226018</li><br />
              <li>GSTIN&nbsp;&nbsp; : &nbsp;09AAACF9572H1ZA</li>
              <li>CIN No :&nbsp;U74120UP2006PTC031351 </li>
            </ul>
          </div>
          {/* <div>
            <ul className="list-unstyled">
              
            </ul>
          </div> */}
        </div>
        <div className="col-sm-4"><dt> Suport</dt>
          <div>
            <ul className="list-unstyled">
              <li>
                <BiPhone className="me-3" />0522-4972500 (Land-Line)
              </li>
              <li>
                <BiMobileVibration className="me-3" />6389590600 <br />  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;6389590700 <br />
                &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; 6389590800 <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;6389590900
              </li>
              <li>
                <MdEmail className="me-3" />support@reckonsales.com
              </li>
            </ul>
          </div>
        </div>
        <div className="col-sm-4"><dt> Sales</dt>
          <div>
            <ul className="list-unstyled">
              <li>
                <BiMobileVibration className="me-2" />  7510000636  - Central India <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;9891185959  - North India<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;9324387120  - West India <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;9330182702 - East India  <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;8700247593 - North East<br />
                <MdEmail className="me-2" /> sales@reckonsales.com
              </li>
            </ul>
          </div>
        </div>
      </div>
      
    </>
  )
}
export default Footer