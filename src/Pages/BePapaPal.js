import React from "react";
import {
  BePapaPalData,
  ArticleBePapa,
  BePapaCompanionCare,
  RxHumanHealth,
} from "../Data";
import HeaderItem from "../Component/HeaderItem";
import Article from "../Component/Article";
import Companion from "../Component/Companion";
import PapaPal from "../Component/PapaPal";
import Footer from "../Component/Footer";
import CarouselItems from '../Component/CarouselItems'
import LovePapa from "../Component/LovePapa";
import Easy from "../Component/Easy";

const BePapaPal = () => {
  return (
    <>
      <HeaderItem home={BePapaPalData} />
      <main>
        <PapaPal />
        <LovePapa />
      <Article
        article={ArticleBePapa}
        para='Papa Pals do everything through the Papa Pal app. If you’ve used a smartphone, you’ll find it easier than ordering lunch.'
        img='./Pals_howitworks_683x1024.jpg'
      />
      <Easy />
      <CarouselItems />
      <Companion
        companionCare={BePapaCompanionCare}
        title='What Papa Pals do'
        para='Papa Pals support members in a variety of ways. The Papa Pal app allows you to browse visits and book the ones that work best for you.'
          rxHumanData={RxHumanHealth}
      />
     
      </main>
      <Footer />
    </>
  );
};

export default BePapaPal;
