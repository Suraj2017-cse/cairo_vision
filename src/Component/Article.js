import React from "react";
import "./Article.css";
import { Link } from "react-router-dom";

const Article = ({ article, para, img }) => {
  const style = {
    backgroundColor : '#1140C0',
    color : '#67F1FF',
    fontWeight : 'bolder'
  }
  return (
    <article>
      <div className="article">
        <div className="how-it-works">
          <div className="how-work">
            <h2>How it works</h2>
            <p>{para}</p>
          </div>

          {article.map((element) => {
            return (
              <div className="participating-plan" key={element.id}>
                <h2>
                  {element.icon}
                  {element.title}
                </h2>
                <p>{element.desc}</p>
                {img === "./Pals_howitworks_683x1024.jpg" ? (
                  <>
                    <p>
                      Work from anywhere, anytime, and set your own schedule.
                    </p>
                    <p>
                      Enter your phone number to start your application. Mobile
                      number
                    </p>
                  </>
                ) : (
                  ""
                )}
              </div>
            );
          })}

          {img === "./Pals_howitworks_683x1024.jpg" ? (
            <>
              <input
                type="tel"
                placeholder="Mobile number"
                className="p-4 text-center form-control rounded-5"
              />
              <div className="mt-3">
                <input type="checkbox" className="me-2" />I have read and agree
                to the terms of Papa’s<Link>EULA</Link> and
                New Window<Link>Privacy Policy</Link>.
              </div>
              <button className="text-uppercase px-3 py-2 rounded-5 border-0 mt-3" style={style}>apply now</button>
            </>
          ) : (
            ""
          )}
        </div>

        <div className="dad-daughter">
          <img src={img} alt="Dad-Daughter-duo" />
        </div>
      </div>
      <svg
        aria-hidden="true"
        viewBox="0 0 1440 64"
        className="w-full h-[21px] md:h-8 lg:h-12 xl:h-16 block absolute fill-bg top-0 left-0 transform translate-y-[calc(-100%+1px)] overflow-visible"
        preserveAspectRatio="none"
      >
        <path
          d="M0,0S203,64,720,64,1440,0,1440,0V64H0Z"
          fill={
            img === "./Home-HowItWorks-685x1024-1.jpg" ? "#69F1FF" : "#FFFFFF"
          }
        ></path>
      </svg>
    </article>
  );
};

export default Article;
