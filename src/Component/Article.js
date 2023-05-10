import React from "react";
import "./Article.css";

const Article = ({article, para, img}) => {
  return (
    <article>
      <div className="article">
        <div className="how-it-works">
          <div className="how-work">
            <h2>How it works</h2>
            <p>{para}</p>
          </div>

         {
          article.map((element) =>{
            return(
              <div className="participating-plan" key={element.id}>
            <h2>{element.icon}{element.title}</h2>
            <p>{element.desc}</p>
          </div>
            )
          })
         }

        </div>

        <div className="dad-daughter">
          <img src={img} alt="Dad-Daughter-duo" />
        </div>
      </div>
      <svg aria-hidden="true" viewBox="0 0 1440 64" className="w-full h-[21px] md:h-8 lg:h-12 xl:h-16 block absolute fill-bg top-0 left-0 transform translate-y-[calc(-100%+1px)] overflow-visible" preserveAspectRatio="none"><path d="M0,0S203,64,720,64,1440,0,1440,0V64H0Z" fill={img === './Home-HowItWorks-685x1024-1.jpg' ? '#69F1FF' :"#FFFFFF"}></path></svg>
    </article>
  );
};

export default Article;