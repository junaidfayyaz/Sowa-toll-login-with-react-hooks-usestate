import React from 'react'
import {HiChevronDoubleUp} from 'react-icons/hi'
import './TopBottom.css'
const TopBottom = () => {
  return (
    <div className='top-bottom-main'>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-4">
            <div className="top-bottom-heading">
              <h1>1-800-265-8221</h1>
              <h6>Monday - Friday, 8:00 am - 5:30 pm EST</h6>
            </div>
          </div>
                  <div className="col-lg-4">
                      <div className='top-botto'>
                          <HiChevronDoubleUp className='top-bottom-icon'/>
                      </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopBottom