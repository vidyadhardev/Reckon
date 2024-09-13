import React from 'react'

const AccGroup = () => {
  return (
    <>
      <div className='fy-content mt-2'>
        <div className="container mt-3" style={{ border: "3px double black", borderRadius: '5px', }}>
          <div className="home-page container">
            <p className=" p-lg-5 justify-content-end ms-5 me-5 fs-5" >
              <div className="Voucher-page container">
                <center>Account Group </center>
                <p>
                  <b className="fw-bold align-items-lg-start text-uppercase">Account Group  </b> <br />
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
          </div>
        </div>
      </div>
    </>
  )
}

export default AccGroup