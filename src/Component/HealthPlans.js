import React from 'react'
import HeaderItem from './HeaderItem'
import Footer from './Footer'
import Resources from './Resources'
import { HomeHealth, ResourceHealthPlans, ArticleHealthPlans, CompanionCareHealthPlans  } from '../Data'
import Article from './Article';
import Companion from './Companion'

const HealthPlans = () => {
  return (
   <>
   <HeaderItem home={HomeHealth} />
  <main>
  <Companion companionCare={CompanionCareHealthPlans} title='Companion care services' para='We do what technology alone cannot—provide real human connection and support to address loneliness and other social determinants of health.' meetPapa='Website-Health-Plan-Video-1024x459.png' />
  {/* <Companion companionCare={CompanionCareHealthPlans} /> */}
   <Article  article={ArticleHealthPlans} para="Thousands of Papa Pals are working to lighten the load and brighten the day for members nationwide, in person or remotely. They offer companionship, provide encouragement, remove barriers, and help reduce the complexity of navigating technology and care." img='./HealthPlans_howitworks_683x1024.jpg' />
   <Resources resource={ResourceHealthPlans} />
  </main>

   <Footer />
   </>
  )
}

export default HealthPlans