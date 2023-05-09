import React from "react";
import "./Resources.css";

const Resources = ({resource}) => {
  return (
    <>
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
          {
            resource.map((ResourceData) => {
              return(
                <div className="single-card" key={ResourceData.id}>
            <img
              src={ResourceData.img}
              alt={ResourceData.alt}
            />
            <span>Content</span>
            &nbsp;&nbsp;&nbsp;
            <span>Guide</span>
            <div className="medicaid-plan">
              <h3>{ResourceData.title}</h3>
              <p>{ResourceData.desc}</p>
            </div>
          </div>
              )
            })
          }
        </div>
      </div>
      <svg aria-hidden="true" viewBox="0 0 1440 64" className="w-full h-[21px] md:h-8 lg:h-12 xl:h-16 block absolute fill-bg top-0 left-0 transform translate-y-[calc(-100%+1px)] overflow-visible" preserveAspectRatio="none"><path d="M0,0S203,64,720,64,1440,0,1440,0V64H0Z" fill="#06083C"></path></svg>
    </aside>
    </>
  );
};

export default Resources;