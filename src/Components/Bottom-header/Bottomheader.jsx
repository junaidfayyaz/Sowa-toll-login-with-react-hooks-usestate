import React from 'react'
import './Bottomheader.css'
const Bottomheader = () => {
  return (
    <div className="b-header-main">
      <div className="container-fluid">
        <div className="row bottom-header">
          <div className="col">
            <ul className="b-header-products">
              <li>
                <a href="https://www.sowatool.com/">Shop All Products</a>
              </li>
              <li>
                <a href="https://www.sowatool.com/">Shop By Brand</a>
              </li>
              <li>
                <a href="https://www.sowatool.com/">Promotions</a>
              </li>
              <li>
                <a href="https://www.sowatool.com/">Download Center</a>
              </li>
              <li>
                <a href="https://www.sowatool.com/">Contact Us</a>
              </li>
              <li>
                <a href="https://www.sowatool.com/">About Us</a>
              </li>
              <li>
                <a href="https://www.sowatool.com/">Careers</a>
              </li>
              <li>
                <a href="https://www.sowatool.com/">Support</a>
              </li>
            </ul>
          </div>
          <div className="col">
            <div>
              <a href="https://www.sowatool.com/" className='quick-order'>Quick Order</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bottomheader