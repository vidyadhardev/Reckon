import React from 'react'

const PharmaStockistSoftware = () => {
  return (
    <>
      <div className='home-content mt-3 ' style={{ border: "3px double black", borderRadius: '5px', background: 'white' }}>
        <div className="home-heading">
          <div className="container justify-content-around align-items-center w-75 mt-3">
            <div className="container justify-content-between align-items-center">
              <h3> <center className='  mb-4'> Pharma Stockist  </center></h3>
              <div className=" ratio ratio-16x9">

                <iframe
                  src="https://www.youtube.com/embed/rGQ79MrZUQw?si=S3ND5LNBEkN8nJ-Q"
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
          <hr />

        </div>
      </div>
    </>
  )
}

export default PharmaStockistSoftware