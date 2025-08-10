import ContactOptions from '@/components/ContactOptions'
import EmailRequestForm from '@/components/EmailRequestForm'
import HeroBanner from '@/components/HeroBanner'
import HowItWorks from '@/components/HowItWorks'
import LearningFocus from '@/components/LearningFocus'
import Navbar from '@/components/NavBar'
import PricingSection from '@/components/PricingSection'
import ProgressAndEvaluation from '@/components/ProgressAndEvaluation'
import SubjectsGrid from '@/components/SubjectsGrid'
import SubjectsSection from '@/components/SubjectsSection'
import WhyKiddyLearno from '@/components/WhyKiddyLearno'
import React from 'react'

function Home() {
  return (
    <div className='flex  flex-col'>
      
      <HeroBanner/>
     <SubjectsGrid/>
      
      <HowItWorks/>
      <PricingSection/>
      <ContactOptions/>
      <EmailRequestForm/>
      <WhyKiddyLearno/>
      
    </div>
  )
}

export default Home
