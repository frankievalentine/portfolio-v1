import React from 'react'
import { ContactSection, SectionH1, SectionLink } from '../styles'

const Contact = () => (
  <ContactSection id='contact'>
    <SectionH1>Contact</SectionH1>
    <span>
      I am always open to talk. Please feel free to reach out to<SectionLink href="mailto:frankievalentine9@gmail.com">my email </SectionLink>if you
      want to discuss tech, need advice or direction with your projects, or just
      want to chat.
    </span>
  </ContactSection>
)

export default Contact
