import React from "react";
import "./ImageSection.css";
import imgsecone from "../../Images/Website-Launch-Post.jpg";
import imgsectwo from "../../Images/Were-Hiring-Blog.jpg";
const ImageSection = () => {
  return (
    <div>
      <div className="container-fluid">
        <div className="row justify-content-center img-sec-main">
          <div className="col-lg-5">
            <div className="img-sec-b-1">
              <a href="https://www.sowatool.com/">
                <img src={imgsecone} alt="secone" />
              </a>
              <br />
              <br />
              <br />
              <a href="https://www.sowatool.com/">
                <strong>Welcome to the New SowaTool.com!</strong>
              </a>
              <br />
              <p>
                Before you can get online there are a couple of steps you need
                to take.
                <br /> <br /> Click on the link below to setup your account now.
              </p>
              <button className="img-sec-btn">Setup Account</button>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="img-sec-b-2">
              <a href="https://www.sowatool.com/">
                <img src={imgsectwo} alt="sectwo" />
              </a>
              <br />
              <br />
              <br />
              <a href="https://www.sowatool.com/">
                <strong>Join the Sowa Tool Team!</strong>
              </a>
              <br />
              <p>
                We're always looking for new individuals with unique
                perspectives and experiences to help us achieve our goals. Here
                at Sowa we want our employees to succeed just as much as our
                business, so setting them up for success is paramount.
                <br /> <br /> Check out our current opportunities and learn more
                about how you can fit in the Sowa Tool Family below.
              </p>
              <button className="img-sec-btn">Apply Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageSection;
