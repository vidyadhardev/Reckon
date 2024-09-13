import React from 'react';
import { Link } from 'react-router-dom';
import './ReckonDemo.css';
import { encodePath } from '../../../utilities/Utils';
const ReckonDemo = () => {

  return (
    <>
      <div className="admin-home sidebar mt-1">
        <div className="administration-module">
          <div>
            <Link to={`/${encodePath('departmental-store')}`} className="media text-decoration-none ">
              <span className={`btn btn-outline-info w-100 mb-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button text-dark`}
              >
                Departmental Store
              </span>
            </Link>
          </div>
          <div>
            <Link to={`/${encodePath('chemist-shop-software')}`} className="media text-decoration-none ">
              <span className={`btn btn-outline-info w-100 mb-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button text-dark`}
              >
                Chemist Shop
              </span>
            </Link>
          </div>
          <div>
            <Link to={`/${encodePath('pharm-stockist-software')}`} className="media text-decoration-none ">
              <span className={`btn btn-outline-info w-100 mb-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button text-dark`}
              >
                Pharma Stockist
              </span>
            </Link>
          </div>
          <div>
            <Link to={`/${encodePath('garment-sootwear-software')}`} className="media text-decoration-none ">
              <span className={`btn btn-outline-info w-100 mb-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button text-dark`}
              >
                Garments & Footwear
              </span>
            </Link>
          </div>
          <div>
            <Link to={`/${encodePath('mobile-electronics-software')}`} className="media text-decoration-none ">
              <span className={`btn btn-outline-info w-100 mb-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button text-dark`}
              >
                Mobile & Electronics
              </span>
            </Link>
          </div>
          <div>
            <Link to={`/${encodePath('pharma-distributor-software')}`} className="media text-decoration-none ">
              <span className={`btn btn-outline-info w-100 mb-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button text-dark`}
              >
                Pharma Distributor
              </span>
            </Link>
          </div>
          <div>
            <Link to={`/${encodePath('restaurant-bar-software')}`} className="media text-decoration-none ">
              <span className={`btn btn-outline-info w-100 mb-2 d-inline-flex align-items-center rounded border-2 admin-Sub-button text-dark`}
              >
                Restaurant & Bar
              </span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};


export default ReckonDemo;
