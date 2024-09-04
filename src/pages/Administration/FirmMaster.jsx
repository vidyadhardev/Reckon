import React from "react";
import FirmLogo from "../../assets/FirmMaster.png"

const FirmMaster = () => {

  return (
    <>
      <div className='home-content mt-3 ' style={{ border: "3px double black", borderRadius: '5px', background: 'white' }}>
        <div className="home-heading">
          <center>  Favourite Menu Entry </center>
          <div className="main-company-images text-center">
          <div className="image-contain mb-3 m-auto">
            <div style={{ minHeight: '250px' }} className="m-auto">
              <img src={FirmLogo} alt="home" className="img-fluid w-75 h-50" style={{ border: "3px double #8266e7", borderRadius: '5px' }} />
            </div>
          </div>
        </div>
          <hr />
          <div className="home-page container">
            <p className=" p-lg-5 justify-content-end ms-5 me-5 fs-5" >
              <b className="fw-bold align-items-lg-start text-uppercase"> Favourite Menu Entry </b> <br />
              <ul>

                <li><b>Risk Management:</b> Backing up data is a key component of risk management. It mitigates the impact of data loss incidents and provides a safety net for critical business information.
                </li>
                <li><b>Data Encryption:</b> Encrypt backup data to protect it from unauthorized access. This is particularly important for cloud backups, where data is transmitted over the internet.
                </li>
                <li><b>Access Control:</b>Limit access to backup data to authorized personnel only. Implement strong access control measures and regularly review permissions.
                </li>

                <li><b>Choosing Backup Solutions:</b> Select reliable backup solutions that are compatible with your SQL database. Consider factors such as ease of use, security features, and customer support.
                </li>
              </ul>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default FirmMaster;


