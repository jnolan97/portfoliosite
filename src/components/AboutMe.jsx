import React from 'react';

const AboutMe = () => {
  return (
    <div className='content'>
      <div class='column-2'>
        <h1>About me</h1>
        <p>
          Hi! My name is Jack Nolan. Welcome to my portfolio site. Here I've highlighted some of my
          professional accomplishments and technical strengths, as well as underline my overall
          interests and future goals.
        </p>
        <p>
          Below I go into greater detail about the languages, frameworks, and tools that I am
          experienced with and provide references to situations where I was able to excersize those
          abilities and go into some of the improvements and gains I have been able to accomplish
          for the companies I have worked for. I also took some time to write about my interests and
          personal hobbies, as well as what I value in myself and the teams I work with.
        </p>
      </div>
      <div class='column-3'>
        <h1>Top Skills</h1>
        <ul>
          <li>Python</li>
          <li>JavaScript / TypeScript</li>
          <li>.NET Framework / .NET Core</li>
          <li>SQL - Relational Database Architecture, Management, Optimization</li>
          <li>
            React - Proficient in up to date best practices with functional components, Context, and
            Redux
          </li>
          <li>Testing Libraries: Jest, NUnit, Pytest</li>
          <li>Cloud Computing and DevOps Integrations (AWS, Azure, Docker)</li>
          <li>Authentication and Authorization architectures (SAML v2 SSO, Oath2, etc...)</li>
          <li>Git version control</li>
        </ul>
      </div>
    </div>
  );
};

export default AboutMe;
