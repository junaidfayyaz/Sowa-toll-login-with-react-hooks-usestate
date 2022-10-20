import React from "react";
import itemone from "../../Images/product-one.jpg"
import itemtwo from "../../Images/product-two.jpg";
import itemthree from "../../Images/product-three.jpg"
import itemfour from "../../Images/product-four.jpg"
import itemfive from "../../Images/product-five.jpg";
import itemsix from "../../Images/product-six.jpg";
import itemseven from "../../Images/product-seven.jpg";
import "./Product.css";
const Product = () => {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <div className="product-heading">
              <h2>Top Product Catagories</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="products-block">
              <ul>
                <li>
                  <a href="https://www.sowatool.com/">
                    <img src={itemone} alt="" />
                  </a>
                  <a href="https://www.sowatool.com/" className="p-drill">
                    Drilling & Holemaking
                  </a>
                </li>
                <li>
                  <a href="https://www.sowatool.com/">
                    <img src={itemtwo} alt="" />
                  </a>
                  <a href="https://www.sowatool.com/" className="p-index">
                    Indexable Cutting Tolls
                  </a>
                </li>
                <li>
                  <a href="https://www.sowatool.com/">
                    <img src={itemthree} alt="" />
                  </a>
                  <a href="https://www.sowatool.com/" className="p-measure">
                    Measuring & Inspecting
                  </a>
                </li>
                <li>
                  <a href="https://www.sowatool.com/">
                    <img src={itemfour} alt="" />
                  </a>
                  <a href="https://www.sowatool.com/" className="p-milling">
                    Milling
                  </a>
                </li>
                <li>
                  <a href="https://www.sowatool.com/">
                    <img src={itemfive} alt="" />
                  </a>
                  <a href="https://www.sowatool.com/" className="p-thread">
                    Threading & Taping
                  </a>
                </li>
                <li>
                  <a href="https://www.sowatool.com/">
                    <img src={itemsix} alt="" />
                  </a>
                  <a href="https://www.sowatool.com/" className="p-tool">
                    Tool Holding
                  </a>
                </li>
                <li>
                  <a href="https://www.sowatool.com/">
                    <img src={itemseven} alt="" />
                  </a>
                  <a href="https://www.sowatool.com/" className="p-work">
                    Workholding Clamping & <br/> Fixturing
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
