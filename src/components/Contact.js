import React from 'react'
import { ContactSection, SectionH1, SectionLink } from '../styles'

const Contact = () => (
  <ContactSection id="contact">
    <SectionH1>Contact</SectionH1>
    <div>
      I am always open to talk. Please feel free to reach out to
      <SectionLink href="mailto:frankievalentine9@gmail.com">
        my email{' '}
      </SectionLink>
      if you want to discuss tech, need advice or direction with your projects,
      or just want to chat.
    </div>
    <br />
    <div>
      Check out my social feeds.{' '} &#8618;{' '}
      <SectionLink
        href="https://www.instagram.com/v3frankie/"
        alt="Instagram"
        rel="noopener noreferrer"
        target="_blank"
      >
        Instagram
      </SectionLink>{' '}
      &#47;
      <SectionLink
        href="https://twitter.com/v3frankie"
        alt="Twitter"
        rel="noopener noreferrer"
        target="_blank"
      >
        Twitter
      </SectionLink>{' '}
      &#47;
      <SectionLink
        href="https://www.linkedin.com/in/frankievalentine/"
        alt="Twitter"
        rel="noopener noreferrer"
        target="_blank"
      >
        LinkedIn
      </SectionLink>
    </div>
  </ContactSection>
)

export default Contact
