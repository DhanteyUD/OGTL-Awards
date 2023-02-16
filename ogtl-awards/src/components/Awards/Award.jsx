/** @format */

import React from 'react';
import './award.css';

function Award() {
  return (
    <>
      <div className="award-div">
        <a href={'https://gbs.world/profile/outsource-global/'}>
          <div className="award-container">
            <div className="award-image-container">
              <img
                src="https://res.cloudinary.com/dhantey/image/upload/v1674758818/OGTL/GBS_jm0vps.png"
                alt="GBS Certified Service Provider"
              />
            </div>
            <p>GBS Certified Service Provider</p>
          </div>
        </a>
        <div className="award-container">
          <div className="award-image-container">
            <img
              src="https://res.cloudinary.com/dhantey/image/upload/v1674758819/OGTL/Export-Excellence-Award-2021_llhpg0.png"
              alt="Export Excellence Award 2021"
            />
          </div>
          <p>Export Excellence Award 2021</p>
        </div>
        <a href={'https://guardian.ng/technology/outsource-global-wins-award/'}>
          <div className="award-container">
            <div className="award-image-container">
              <img
                src="https://res.cloudinary.com/dhantey/image/upload/v1674758819/OGTL/Service-Exporting-Company-of-the-Year-2022_nfns1l.png"
                alt="Service Exporting Company of the Year Award 2019"
              />
            </div>
            <p>Service Exporting Company of the Year Award 2019</p>
          </div>
        </a>

        <a
          href={
            'https://www.undp.org/nigeria/press-releases/nigeria%E2%80%99s-first-international-women%E2%80%99s-day-gala-advocates-increased-women%E2%80%99s-political-and-socio-economic-empowerment'
          }
        >
          <div className="award-container">
            <div className="award-image-container">
              <img
                src="https://res.cloudinary.com/dhantey/image/upload/v1674758819/OGTL/Private-Sector-Excellence_rlzqpu.png"
                alt="UNDP's Private Sector Excellence Award"
              />
            </div>
            <p>UNDP's Private Sector Excellence Award</p>
          </div>
        </a>
        <div className="award-container">
          <div className="award-image-container">
            <img
              src="https://res.cloudinary.com/dhantey/image/upload/v1674758819/OGTL/Best-sectoral-exporter_sicfob.png"
              alt="Best sectoral exporter 2022"
            />
          </div>
          <p>Best sectoral exporter 2022</p>
        </div>
        <div className="award-container">
          <div className="award-image-container">
            <img
              src="https://res.cloudinary.com/dhantey/image/upload/v1674758820/OGTL/Services-Sector-Award_gnn6km.png"
              alt="Outstanding achievement in the services sector 2020"
            />
          </div>
          <p>Outstanding achievement in the services sector 2020</p>
        </div>
        <a
          href={
            'https://medium.com/outsourceglobal/outsource-global-wins-award-for-innovative-contact-centre-and-bpo-operator-of-the-year-355dcf7c29cb'
          }
        >
          <div className="award-container">
            <div className="award-image-container">
              <img
                src="https://res.cloudinary.com/dhantey/image/upload/v1674758819/OGTL/Nigeria-Tech-Awards_sd0tgm.png"
                alt="2018 Innovative Contact Center and BPO Operator"
              />
            </div>
            <p>2018 Innovative Contact Center and BPO Operator</p>
          </div>
        </a>
      </div>
    </>
  );
}

export default Award;
