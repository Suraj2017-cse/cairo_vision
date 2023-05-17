import React from "react";
import HeaderItems from "../Component/HeaderItem";
import Companion from "../Component/Companion";
import Customers from "../Component/Customers";
import CarouselItems from "../Component/CarouselItems";
import Article from "../Component/Article";
import Resources from "../Component/Resources";
import Footer from "../Component/Footer";
import { HomeData, ResourceData, ArticleData, CompanionCare, RxHumanHome } from "../Data";
import StartEasy from "../Component/StartEasy";

const Home = () => {
  return (
    <>
      <HeaderItems home={HomeData} />

      <main>
        <Companion
          companionCare={CompanionCare}
          title='Companion care'
          para='Papa Pals provide vital social support and care to strengthen families, help older adults remain connected, and support diverse communities—providing win-win benefits for all.'
          meetPapa='./Website-Brand-Video-1536x689.webp'
          rxHumanData={RxHumanHome}
        />
        <Customers />
        <CarouselItems />
        <Article
          article={ArticleData}
          para='Available nationwide, in-person or virtually, Papa Pals offer a hand to help, a shoulder to lean on, and an ear to listen.'
          img='./Home-HowItWorks-685x1024-1.jpg'
        />
        <Resources resource={ResourceData} />
      </main>
      <Footer />
      <StartEasy />
    </>
  );
};

export default Home;
