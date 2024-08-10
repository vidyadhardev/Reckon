import React from "react";
import "./Footer.css";
import { BiPhone } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
const Footer = () => {
  return (
    <>
      <div className="row Footer-header p-3 rounded mt-3 mb-3">
        <div className="col-sm-4 "> <dt>About</dt>
          <div className="address">
            <ul className="list-unstyled">
              <li className="text-decoration-none">SF-2, New Medicine Market,<br /> Meer Jaan Lane,
                Nayagaon (East),
                <br />Lucknow,
                UP, India-226 018</li>
            </ul>
          </div>
          <div>
            <ul className="list-unstyled">
              <li><BiPhone />  0522-4972500 (Land-Line)</li>
            </ul>
          </div>
          <div>
            <ul className="list-unstyled">
              <li>
                <MdEmail />  admin@reckonsales.com
              </li>
            </ul>
          </div>
        </div>
        <div className="col-sm-4"><dt>Servises</dt>
          <div>GST</div>
          <div>Multi Users</div>
          <div>Grocery</div>
          <div>Mobile App</div>
        </div>
        <div className="col-sm-4"><dt>Subscribe E-mail</dt>
          <div className="E-mail contain ">
            <form className="col-md-12  d-flex mb-lg-0 ">
              <input type="email" className="form-control w-100" placeholder=" Enter Your Emaiml .." />
              <button type="submit" className="btn btn-outline-primary" title="Send">Send</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
export default Footer