import React from 'react'
import './ReckonDemoPage.css';
const ChemistShopSoftware = () => {
  return (
    <>
      <div className='home-content mt-3 ' style={{ border: "3px double black", borderRadius: '5px', background: 'white' }}>
        <div className="home-heading">
          <div className="container justify-content-around align-items-center w-75 mt-2 width-adjust">
            <div className="justify-content-between align-items-center">
              <h3> <center className='mb-2'> Chemist Shop </center></h3>
              <div className=" ratio ratio-16x9">
                <iframe
                  src="https://www.youtube.com/embed/rAAu-OyHX1E?si=4_gkiceeRatUKZlp"
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
          <br />
        

        </div>
      </div>
    </>
  )
}

export default ChemistShopSoftware