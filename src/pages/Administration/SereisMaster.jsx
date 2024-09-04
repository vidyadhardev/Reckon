import React from "react";
import SeriesM from "../../assets/SeriesMasterHome.png"
import { Bounce } from "react-awesome-reveal";
const SereisMaster = () => {
  return (
    <div className='home-content mt-3 ' style={{ border: "3px double black", borderRadius: '5px', background: 'white' }}>
    <div className="home-heading">                          
      <div className="container justify-content-around align-items-center w-75 mt-3">
        <div className="container justify-content-between align-items-center">
          <div className=" ratio ratio-16x9">
          <img src={SeriesM} alt="home" className="img-fluid w-100 h-100" style={{ border: "3px double #8266e7", borderRadius: '5px' }} />
          </div>
        </div>
      </div>
      <hr />
      <div className="home-page container">
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
        <div>
        </div>
      </div>
       </div>
  </div>
  );
};

export default SereisMaster;

