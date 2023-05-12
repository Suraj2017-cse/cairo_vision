import React from "react";
import { ArticleEmployers, EmployersCompanionCare, EmployersData, OurTechEmployersData, ResourceEmployers, RxHumanEmployers } from "../Data";
import HeaderItem from "../Component/HeaderItem";
import Companion from "../Component/Companion";
import OurTech from "../Component/OurTech";
import Article from "../Component/Article";
import Member from '../Component/Member'
import Resources from "../Component/Resources";
import Footer from "../Component/Footer";

const Employers = () => {
  return (
    <>
      <HeaderItem home={EmployersData} />
      <main>
        <Companion
          companionCare={EmployersCompanionCare}
          title='Flexible family care'
          para='We’re not another digital-only solution—we’re care and companionship at your front door with a unique kind of employee health, well-being, and wellness program. Our Papa Pals help lighten the second (or third) shift load, improving work/life balance, reducing stress, and fostering well-being for employees, children, and parents.'
          meetPapa='./Website-Employer-Video.png'
          rxHumanData={RxHumanEmployers}
        />
        <OurTech ourTechItem={OurTechEmployersData} />
        <Article article={ArticleEmployers} para='Our Papa Pals make thousands of new friends, young and not-so-young, across the country every day. They provide companionship, encouragement, and assistance when, where, and how your people need it. And it all starts with a “hello.”' img='./Employers_howitworks_683x1024.jpg' />
        <Member />
        <Resources resource={ResourceEmployers} />
      </main>
      <Footer />
    </>
  );
};

export default Employers;
