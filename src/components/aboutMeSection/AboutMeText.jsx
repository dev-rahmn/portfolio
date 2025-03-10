import React from 'react';
import { Link } from 'react-scroll';
const AboutMeText = () => {
  return (
    <div className='flex flex-col md:items-start sm:items-center md:text-left'>
        <h2 className='text-6xl text-cyan mb-10'>About Me</h2>
        <p className='text-white text-xl'>
          I'm <strong>Atiqur Rahman</strong>, a passionate and results-driven <strong>software developer</strong> with over <strong>3 years of experience</strong> in the tech industry. 
          My journey in software development has been fueled by a love for <strong>problem-solving</strong>, creativity, and a desire to build solutions 
          that make a <strong>real impact</strong>. I specialize in blending cutting-edge technology with <strong>intuitive design</strong> to deliver seamless and 
          <strong>user-centric applications</strong>.
          <br /><br />
          With a strong foundation in both <strong>front-end</strong> and <strong>back-end development</strong>, I thrive in dynamic environments where <strong>innovation</strong> and 
          <strong>collaboration</strong> are key. My positive attitude, excellent <strong>interpersonal skills</strong>, and ability to communicate complex ideas clearly 
          have allowed me to work effectively with <strong>cross-functional teams</strong> and stakeholders.
          <br /><br />
          I am deeply committed to <u>continuous learning</u> and staying updated with the latest <strong>industry trends</strong> and <strong>technologies</strong>. Whether 
          it's mastering a new framework, exploring emerging tools, or mentoring aspiring developers, I am always eager to <strong>grow</strong> and 
          contribute to the ever-evolving world of <strong>IT</strong>.
          <br /><br />
          My goal is to leverage my skills and experience to tackle <strong>challenging projects</strong>, drive <strong>innovation</strong>, and create <strong>meaningful 
          solutions</strong> that empower users and businesses alike. Let's build something amazing together!
        </p>

        <Link to='projects' smooth={true} offset={-100} duration={500} className='border border-orange rounded-full px-4 py-2 text-lf flex mt-10 items-center hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center text-white hover:text-cyan'>
          My Projects
        </Link>
    </div>
  );
};

export default AboutMeText;