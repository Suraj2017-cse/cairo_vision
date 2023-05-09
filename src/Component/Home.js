import React from 'react'
import HeaderItems from './HeaderItem';
import Companion from './Companion';
import Customers from './Customers';
import CarouselItems from './CarouselItems';
import Article from './Article';
import Resources from './Resources';
import Footer from './Footer';
import { HomeData, ResourceData, ArticleData, CompanionCare } from '../Data';


const Home = () => {
  return (
    <>
        <HeaderItems home={HomeData} />
        
        <main>
            <Companion companionCare={CompanionCare} title='Companion care' para='Papa Pals provide vital social support and care to strengthen families, help older adults remain connected, and support diverse communities—providing win-win benefits for all.' meetPapa='./Website-Brand-Video-1536x689.webp' />
            <Customers />
            <CarouselItems />
            <Article article={ArticleData} para='Available nationwide, in-person or virtually, Papa Pals offer a hand to help, a shoulder to lean on, and an ear to listen.' img='./Home-HowItWorks-685x1024-1.jpg' />
            <Resources  resource={ResourceData} />
        </main>
        <Footer />
    </>
  )
}

export default Home