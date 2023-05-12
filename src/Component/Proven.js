import React from "react";

const Proven = ({ provenItem }) => {
  const background = {
    backgroundColor: "#E3FF96",
  };

  const textColor = {
    color: "#06083C",
  };

  const numColor = {
    color : '#00AD20',
    fontFamily: ['Braah One', 'sans-serif']
  }

  return (
    <>
    <section style={background}>
      <div className='container'>
        <div className='content row'>
          <div className='col-md-6'>
            <h2 className='mb-4 fw-bolder' style={textColor}>
              Proven results
            </h2>
            <p className='fs-5'>
              We work with clients to measure performance—capturing member-level
              insights from their own homes, and delivering detailed reporting
              on utilization, outcomes, satisfaction, and beyond.
            </p>
          </div>

          <div className='col-md-6'>
            <div className='row'>
              {provenItem.map((item) => {
                const { id, title, desc, num } = item;
                return (
                  <div className='col-md-6' key={id}>
                    <h4 className='fs-4 mb-4'>{title}</h4>
                    <h2 className='fw-bolder m-0' style={numColor}>{num} &#37;</h2>
                    <p>{desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    <svg aria-hidden="true" viewBox="0 0 1440 64" className="w-full h-[21px] md:h-8 lg:h-12 xl:h-16 block absolute fill-bg top-0 left-0 transform translate-y-[calc(-100%+1px)] overflow-visible" preserveAspectRatio="none"><path d="M0,0S203,64,720,64,1440,0,1440,0V64H0Z" fill="#06083C"></path></svg>
    </section>
    </>
  );
};

export default Proven;
