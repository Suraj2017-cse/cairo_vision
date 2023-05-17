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
      <div style={bgColor} className="text-center py-5">
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
      </div>
    </>
  );
};

export default PapaPal;
