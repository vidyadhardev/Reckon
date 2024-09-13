import React from 'react'
import { Bounce } from 'react-awesome-reveal'
const HolidaySetup = () => {
  return (
    <>
      <div className='home-content mt-3 ' style={{ border: "3px double black", borderRadius: '5px', background: 'white' }}>
        <div className="home-heading">
          <div className="container justify-content-around align-items-center w-75 mt-3">
          </div>
          <hr />
          <div className="home-page container">
            <p className=" p-lg-5 justify-content-end ms-5 me-5 fs-5" >
              <div className="Voucher-page container">
                <Bounce duration={2000} className=" fw-bold"> Holiday Setup </Bounce>
                <p>
                  <b className="fw-bold align-items-lg-start text-uppercase"> Holiday Setup </b> <br />
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

            </p>
            <div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HolidaySetup