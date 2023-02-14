/** @format */

import React from 'react';
import './award.css';
import GBSAward from '../../assets/GBS.png';
import EEAAward from '../../assets/Export-Excellence-Award-2021.png';
import SEAward from '../../assets/Service-Exporting-Company-of-the-Year-2022.png';
import UNDPAward from '../../assets/Private-Sector-Excellence.png';
import BSEAward from '../../assets/Best-sectoral-exporter.png';
import OAAward from '../../assets/Services-Sector-Award.png';
import ICCAward from '../../assets/Nigeria-Tech-Awards.png';

function Award() {
  return (
    <>
      <div className="award-div">
        <a href={'https://gbs.world/profile/outsource-global/'}>
          <div className="award-container">
            <div className="award-image-container">
              <img src={GBSAward} alt="GBS Certified Service Provider" />
            </div>
            <p>GBS Certified Service Provider</p>
          </div>
        </a>
        <div className="award-container">
          <div className="award-image-container">
            <img src={EEAAward} alt="Export Excellence Award 2021" />
          </div>
          <p>Export Excellence Award 2021</p>
        </div>
        <a href={'https://guardian.ng/technology/outsource-global-wins-award/'}>
          <div className="award-container">
            <div className="award-image-container">
              <img
                src={SEAward}
                alt="Service Exporting Company of the Year Award 2019"
              />
            </div>
            <p>Service Exporting Company of the Year Award 2019</p>
          </div>
        </a>
        <div className="award-container">
          <div className="award-image-container">
            <img src={UNDPAward} alt="UNDP's Private Sector Excellence Award" />
          </div>
          <p>UNDP's Private Sector Excellence Award</p>
        </div>
        <div className="award-container">
          <div className="award-image-container">
            <img src={BSEAward} alt="Best sectoral exporter 2022" />
          </div>
          <p>Best sectoral exporter 2022</p>
        </div>
        <div className="award-container">
          <div className="award-image-container">
            <img
              src={OAAward}
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
                src={ICCAward}
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
