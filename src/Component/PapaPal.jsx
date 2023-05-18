import React from "react";

const PapaPal = () => {
  const style = {
    backgroundColor: "#69F1FF",
    color: "#425D4E",
    fontWeight: "bolder",
  };

  const bgColor = {
    backgroundColor : '#1140C0',
    color : '#fff'
  }
  const color = {
    color : '#69F1FF'
  }
  return (
    <>
      <div style={bgColor} className="text-center pt-5">
        <h2 className="display-1 fw-bold mb-5" style={color}>What is a Papa Pal?</h2>
        <p>
          Papa Pals support our members with things like companionship, help
          around the house, shopping, and transportation.
        </p>
        <p>
          Become a Papa Pal and use our mobile app to browse flexible work
          opportunities, book visits with members, and work whenever you want.{" "}
        </p>
        <p>Doing good never felt better.</p>

        <button style={style} className="py-1 px-2 border-0 rounded-5">LEARN MORE ABOUT LIFE AS A PAPA PAL</button>
      <svg aria-hidden="true" viewBox="0 0 1440 64" className="w-full h-[21px] md:h-8 lg:h-12 xl:h-16 block absolute fill-bg top-0 left-0 transform translate-y-[calc(-100%+1px)] overflow-visible" preserveAspectRatio="none"><path d="M0,0S203,64,720,64,1440,0,1440,0V64H0Z" fill='#FFEDCC'></path></svg>
      </div>
    </>
  );
};

export default PapaPal;
