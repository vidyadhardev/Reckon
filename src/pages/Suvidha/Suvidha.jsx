import React from 'react'
import './Suvidha.css'
import cloude from '../../assets/Pharmacy/FORPPT/AccountsModule.png'
import Ordering from "../../assets/Pharmacy/FORPPT/PatientPrescription.png"
import { IoIosColorPalette } from "react-icons/io";
import { LiaHandPointerSolid } from "react-icons/lia";
const Suvidha = () => {
  return (
    <>
      <div className=''>
        <div className=''>
          <div className='row custom-row' style={{ backgroundColor: "#fae5e0" }}>
            <div className='col-7' >
              <p className='para mt-5 ms-5'>
                <b style={{ color: "#e4342c", fontSize: '95px', fontFamily: 'Segoe UI Black' }}>Suvidha</b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <span style={{ fontSize: '50px', }} className='fw-bolder text-dark-emphasis'>
                  Your Bridge to
                  Seamless B2B Retailing, Where
                  Retailers Meets Distributors.
                </span>
              </p>
            </div>
            <div className='col-5'>
              <div className='header custome-style'>
                <img src={cloude} alt='header-log' className='bg img-fluid' />
              </div>
            </div>
          </div>
          <div className='row custom-row' >
            <div className=''>
              <p className='para justify-content-center align-content-center text-center mt-5 ' style={{ fontSize: "25px" }}>
                <IoIosColorPalette className='me-4 icons fs-2' />  The Suvidha Retailer B2B App is a powerful and innovative platform designed <LiaHandPointerSolid style={{ translate: ('200px'), backgroundColor: '#e4342c', color: 'white' }} className='rounded m-2' /> <br />
                to simplify and enhance the business to business (B2B) interactions for  <br />
                retailers
              </p>

              <p className='para justify-content-center align-content-center text-center mt-5 ' style={{ fontSize: "25px" }}>
                <IoIosColorPalette className='me-4 icons fs-2' /> It serves as a bridge between retailers and distributors, offering a seamless <br />
                workflow to maximize profits
              </p>
              <p className='para justify-content-center align-content-center text-center mt-5 ' style={{ fontSize: "35px" }}>
                - - - - - - - - - - -  - - - - - - - - - - - - - - - - - -
              </p>
              <br />
              <p style={{ fontSize: '55px', fontWeight: '500', textAlign: 'center' }}>

                How
                <b style={{ color: "#e4342c", fontSize: '55px', fontFamily: 'Segoe UI Black' }}> Suvidha  </b>
                Hepls
                <span style={{ color: "#e4342c", }}> Retailers</span>
              </p>
            </div>
          </div>
          <div className='suvidha-helps' style={{ backgroundColor: '#fae5e0' }}>
            <div className='' >
              <div className='sub-header' >
                <p className='help-para text-center fs-1 container mt-5' style={{ fontFamily: "sans-serif", }} >
                  By offering a platform that streamlines the interaction between retailers and
                  distributors, you are playing a crucial role in driving growth and success for
                  businesses in the retail and distribution sectors
                </p>
              </div>
            </div>
            <div className='help-rows container'>
              <div className='row custom-row'>
                <div className='col-sm-3' style={{ marginTop: "150px" }}>
                  <img src={Ordering} alt=' Ordering-svg' className='img-fluid' />
                </div>
                <div className='col-sm-9 ' style={{ marginTop: "150px", fontSize: '30px' }}>
                  <p className='ms-5 fw-bold'>Efficient Ordering with <span style={{ color: "#e4342c" }}>Suvidh</span></p>
                  <p>
                    Suvidha streamlines the ordering process for <br />
                    retailers, making it quick and easy. Retailers can place<br />
                    orders with just a few taps on the app, reducing<br />
                    the time spent on administrative tasks
                  </p>
                </div>
              </div>
              <div className='row'>

              </div>
              <div className='row'></div>
              <div className='row'></div>
              <div className='row'></div>
              <div className='row'></div>
              <div className='row'></div>
              <div className='row'></div>
              <div className='row'></div>
              <div className='row'></div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Suvidha;