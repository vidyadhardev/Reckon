import { Bounce } from "react-awesome-reveal";
const Reupdate = () => {
  return (
    <>
      <div className='home-content mt-3 ' style={{ border: "3px double black", borderRadius: '5px', background: 'white' }}>
        <div className="home-heading">
          <div className="container justify-content-around align-items-center w-75 mt-3">
            <h3> ReUpdate </h3>
          </div>
          <hr />
          <div className="home-page container">
            <p className="p-lg-5 justify-content-end ms-5 me-5 fs-5">
              <div className="container-image">
                <Bounce duration={3000} className="text-decoration-underline fw-bold">
                  Why To Use Reckon Only ?
                </Bounce>
                <p>
                  <b>Reckon</b>
                  &nbsp; is your ultimate solution for effortless and efficient accounting. Designed for businesses of all sizes, our software ensures you have everything you need to manage your finances seamlessly.
                </p>
                <div className="text-contain">
                </div>
              </div>
              Dynamism is one of the key visions of our company and that is why we have ventured into providing mobile and cloud-based services for our clients. Our customers, from all over India including International locations, have stayed with us for 15 years; a clear indication of our commitment towards them.
              <hr />
              <Bounce duration={2300}><b className="fw-bold align-items-lg-start">Get Started with Reckon</b></Bounce>
              <ul>
                Join the thousands of businesses that trust Reckon for their accounting needs. Sign up today and take the first step towards streamlined financial management.
              </ul>
            </p>
            <div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
};
export default Reupdate;