import React  from "react";
import {  Ratio } from "react-bootstrap";
import { Bounce } from "react-awesome-reveal";
const GlobalUpdateRightsEntry = () => {
 
  return (
    <>
       <div className='home-content mt-3 ' style={{ border: "3px double black", borderRadius: '5px', background: 'white' }}>
      <div className="home-heading">                          
        <div className="container justify-content-around align-items-center w-75 mt-3">
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
        </div>
        <hr />
        <div className="home-page container">
        <p className=" p-lg-5 justify-content-end ms-5 me-5 fs-5" >
            <b>Global Update Rights</b> <br/>
            We are <b>Reckon Sales Pvt. Ltd.</b> and we make ERP software to make your business more efficient and adaptable. Based out of Lucknow, India we have industry experience of more than 20 years, with a team of dedicated veterans of the industry we want to empower your business and make it as seamless as possible.

            Our services include ERP solutions for <i> Retail, Distribution & Multi-Location businesses in various sectors like Pharmaceutical, Super Market, FMCG, Auto Parts, Textile, Footwear, Restaurants.</i> Dynamism is one of the key visions of our company and that is why we have ventured into providing mobile and cloud-based services for our clients. Our customers, from all over India including International locations, have stayed with us for 15 years; a clear indication of our commitment towards them.

            Through our own software development center, we have developed software for different trades that are marketed under <b>“Reckon Sales Pvt. Ltd. Pan-India.”</b>  We believe in adding value to the businesses by way of providing GST, Desktop, Cloud and Mobile based solutions. We also specialize in providing training to the clients to enable them to access digital solutions for their businesses.<br />
            <hr />
            <Bounce duration={2000}><b className="fw-bold align-items-lg-start text-uppercase">Access User Management-:  </b></Bounce>
            <ul>
              <li><b>Login:</b>  Use administrative credentials to log in to the accounting software.
              </li>
              <li><b>Navigate:</b> Go to the "User Management" or "Administration" section.
              </li>
              <ul>Assign Global Roles and Permissions<br />
                <li><b>Role Selection:</b> <br />
                  Choose a global role that aligns with the user's responsibilities (e.g., Global Admin, Regional Manager, Accountant).
                </li>
                <li><b>Permission Levels: </b> <br />Customize permissions to specify the areas the user can access, edit, or manage across different regions or departments.
                  <li className="list-unstyled"><b>Set Password and Security Options : </b>
                  </li>
                  <li><b> Temporary Password: </b> <br />
                    Generate a temporary password or allow the user to create their own through an email invitation.
                  </li>
                  <li><b> Security Requirements: </b> <br />
                    Ensure the password meets the software’s security standards (e.g., complexity, length).<br />
                    Multi-Factor Authentication (MFA): Enable MFA for added security.</li>
                </li>
              </ul>
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

export default GlobalUpdateRightsEntry;
