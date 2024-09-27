import React from 'react'
import { Bounce } from 'react-awesome-reveal';
import { FaWhatsapp } from "react-icons/fa";
const massage = "Thanks For Contact me .You Are Reached Good Place ."
const WtMassage = encodeURIComponent(massage)

const Foot = () => {
  return (
    <>
      <div className="footer">
        <Bounce>
          <center>
            <h9><span style={{ color: "rgb(77, 216, 238)" }}>Contact me For &nbsp; : ❤️&nbsp;</span> <a href={`https://www.linkedin.com/in/vidya-dhar-maurya-435a40222/`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none"> <span className='fs-5 rounded justify-content-center align-content-center'></span>Freelancing / Development</a></h9>

            <pre><span style={{ color: "rgb(77, 216, 238)" }}>Contact :</span> <a href={`https://wa.me/9076944738?text=${WtMassage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none"> <span className='fs-5 rounded justify-content-center align-content-center'><FaWhatsapp /></span> Chat On WhatsApp</a></pre>
          </center>
        </Bounce>
      </div>
    </>
  )
}

export default Foot;