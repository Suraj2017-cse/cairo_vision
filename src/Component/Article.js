import React from "react";
import {
  TbCircleNumber1,
  TbCircleNumber2,
  TbCircleNumber3,
} from "react-icons/tb";
import "./Article.css";

const Article = () => {
  return (
    <article>
      <div className="article">
        <div className="how-it-works">
          <div className="how-work">
            <h2>How it works</h2>
            <p>
              Available nationwide, in-person or virtually, Papa Pals offer a
              hand to help, a shoulder to lean on, and an ear to listen.
            </p>
          </div>

          <div className="participating-plan">
            <h2>
              <TbCircleNumber1 classname="circle-number" /> Sign up through your
              participating plan.
            </h2>
            <p>
              Flexible enrollment processes help members take advantage of their
              Medicare Advantage, Medicaid, or employer-provided benefit.
            </p>
          </div>

          <div className="participating-plan">
            <h2>
              <TbCircleNumber2 classname="circle-number" /> Schedule a live or
              online visit with a Papa Pal.
            </h2>
            <p>
              Health plan members can schedule appointments by phone. Employees
              have the flexibility of using our mobile app for iPhone and
              Android.
            </p>
          </div>

          <div className="participating-plan">
            <h2>
              <TbCircleNumber3 classname="circle-number" /> Enjoy your time and
              tell us how we did.
            </h2>
            <p>
              Members and loved ones are matched with Papa Pals for
              companionship, help with children and pets, transportation,
              errands, and more. Post-visit surveys help us make sure it’s the
              perfect pal every time!
            </p>
          </div>
        </div>

        <div className="dad-daughter">
          <img src="./Home-HowItWorks-685x1024-1.jpg" alt="Dad-Daughter-duo" />
        </div>
      </div>
    </article>
  );
};

export default Article;