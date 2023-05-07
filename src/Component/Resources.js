import React from "react";
import "./Resources.css";

const Resources = () => {
  return (
    <>
    {/* <svg aria-hidden="true" viewBox="0 0 1440 64" class="w-full h-[21px] md:h-8 lg:h-12 xl:h-16 block absolute fill-bg top-0 left-0 transform translate-y-[calc(-100%+1px)] overflow-visible" preserveAspectRatio="none"><path d="M0,0S203,64,720,64,1440,0,1440,0V64H0Z" fill="#06083C"></path></svg> */}
    <aside>
      <div id="resource">
        <div className="resource">
          <h2>Resources</h2>
          <button>
            SEE
            <br /> MORE
          </button>
        </div>
        <div className="cards">
          <div className="single-card">
            <img
              src="./Resource-Thumbnails-Medicaid-1.webp"
              alt="Brothers-duo"
            />
            <span>Content</span>
            &nbsp;&nbsp;&nbsp;
            <span>Guide</span>
            <div className="medicaid-plan">
              <h3>SDoH Data Decoded: Insights for Medicaid Plans</h3>
              <p>
                SDoH play an outsized role in overall health. Learn the real,
                human impacts, and how Medicaid plans can make a difference in
                members’ lives.
              </p>
            </div>
          </div>

          <div className="single-card">
            <img
              src="./real-world-health-perspectives.webp"
              alt="Brothers-duo"
            />
            <span>Content</span>
            &nbsp;&nbsp;&nbsp;
            <span>Video</span>
            <div className="medicaid-plan">
              <h3>Real World Health Perspectives</h3>
              <p>
                Listen in as two health care professionals share their
                perspectives on how to best care for our aging population
                through nuanced health care solutions.
              </p>
            </div>
          </div>

          <div className="single-card">
            <img
              src="./2022_Graphic_Website-Resource-Center_Why-Health-Plans-Need-to-Invest-In-Companion-Care.webp"
              alt="Brothers-duo"
            />
            <span>Content</span>
            &nbsp;&nbsp;&nbsp;
            <span>Guide</span>
            <div className="medicaid-plan">
              <h3>Why Health Plans Need to Invest in Companion Care</h3>
              <p>
                Explore the challenges older adults experience when
                aging-in-place, and how health plans can address them while
                improving outcomes and ROI.
              </p>
            </div>
          </div>
        </div>
      </div>
      <svg aria-hidden="true" viewBox="0 0 1440 64" class="w-full h-[21px] md:h-8 lg:h-12 xl:h-16 block absolute fill-bg top-0 left-0 transform translate-y-[calc(-100%+1px)] overflow-visible" preserveAspectRatio="none"><path d="M0,0S203,64,720,64,1440,0,1440,0V64H0Z" fill="#06083C"></path></svg>
    </aside>
    </>
  );
};

export default Resources;