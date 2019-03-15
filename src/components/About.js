import React from 'react'
import { AboutSection, SectionH1, SectionLink, AboutItem } from '../styles'

const About = () => (
  <AboutSection id="about">
    <SectionH1>About</SectionH1>
    <span>
      I'm Frankie - a web designer and developer from California. I run
      <SectionLink
        href="https://v3digital.studio"
        alt="V3 Digital Studio"
        rel="noopener noreferrer"
        target="_blank"
      >
        V3 Digital Studio
      </SectionLink>
      , write tutorials, stories, and share actively on Instagram. I specialize
      in web based projects from scratch that are minimal, easy to use, performant, and
      built with efficiency in mind.
    </span>
    <AboutItem
      href="https://v3digital.studio/"
      alt="V3 Digital Studio Work"
      rel="noopener noreferrer"
      target="_blank"
    >
      Check out my professional work on my studio's website.
    </AboutItem>
  </AboutSection>
)

export default About
