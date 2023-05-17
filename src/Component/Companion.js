import React from "react";
import "./Companion.css";
import RxHuman from "./RxHuman";

const Companion = ({ companionCare, title, para, meetPapa, rxHumanData }) => {
  return (
    <section className="hero-content">
      <div className="container">
        <div className="content row">
          <div className="col-md-6">
            <h2 className="mb-4 fw-bolder">{title}</h2>
            <span className="fs-5">{para}</span>
          </div>

          <div className="col-md-6">
            <div className="row">
              {companionCare.map((item) => {
                const { id, title, desc, icon } = item;
                return (
                  <div className="col-md-6" key={id}>
                    <h2 className="android-icon">{icon}</h2>
                    <h4 className="fs-4">{title}</h4>
                    <p>{desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        {title === "What Papa Pals do" ? (
          ""
        ) : (
          <RxHuman rxHumanData={rxHumanData} />
        )}
      </div>
      {title === "What Papa Pals do" ? (
        ""
      ) : (
        <>
          <a href="/" className="meet-papa position-relative">
            <img src={meetPapa} alt="Meet papa" className="w-100" />
            <i className="fa-solid fa-play p-4 position-absolute"></i>
          </a>
        </>
      )}
    </section>
  );
};

export default Companion;
