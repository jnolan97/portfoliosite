import React from 'react';
import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
const AboutMe = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <h1>About me</h1>
          <p>
            Hi! My name is Jack Nolan. Welcome to my portfolio site. Here I've highlighted some of
            my professional accomplishments and technical strengths, as well as underline my overall
            interests and future goals.
          </p>
          <p>
            Below I go into greater detail about the languages, frameworks, and tools that I am
            experienced with and provide references to situations where I was able to excersize
            those abilities and go into some of the improvements and gains I have been able to
            accomplish for the companies I have worked for. I also took some time to write about my
            interests and personal hobbies, as well as what I value in myself and the teams I work
            with.
          </p>
        </Grid>

        <Grid item xs={6}>
          <div className='text-center'>
            <h1>Top Skills</h1>
            <ul>
              <li>Python</li>
              <li>JavaScript / TypeScript</li>
              <li>.NET Framework / .NET Core</li>
              <li>SQL - Relational Database Architecture, Management, Optimization</li>
              <li>
                React - Proficient in up to date best practices with functional components, Context,
                and Redux
              </li>
              <li>Testing Libraries: Jest, NUnit, Pytest</li>
              <li>Cloud Computing and DevOps Integrations (AWS, Azure, Docker)</li>
              <li>Authentication and Authorization architectures (SAML v2 SSO, Oath2, etc...)</li>
              <li>Git version control</li>
            </ul>
          </div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutMe;
