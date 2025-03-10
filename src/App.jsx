import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import NavbarMain from './components/navbar/NavBarMain'
import HeroMain from './components/heroSection/HeroMain'
import HeroGradient from './components/heroSection/HeroGradient'
import SubHeroSection from './components/heroSection/SubHeroSection'
import AboutMeMain from './components/aboutMeSection/AboutMeMain'
import SkillsMain from './components/skillsSection/SkillsMain'
import SubSkills from './components/skillsSection/SubSkills'
import ExperienceMain from './components/experienceSection/ExperienceMain'
import ProjectMain from './components/projectSection/ProjectMain'
import ContactMeMain from './components/contactMeSection/ContactMeMain'
import FooterMain from './components/footer/FooterMain'

function App() {

  return <main> 
    <NavbarMain />
    <HeroMain />
    <HeroGradient />
    <SubHeroSection/>
    <AboutMeMain />
    <SkillsMain />
    <SubSkills />
    <ExperienceMain />
   <ProjectMain/>
   <ContactMeMain/>
   <FooterMain />
    
    </main>
}

export default App
