import React from 'react'
import {
  PersonalSection,
  PersonalGrid,
  SectionH1,
  SectionH2,
} from '../styles'

const Personal = () => (
  <PersonalSection id='work'>
    <SectionH1>Personal</SectionH1>
    <PersonalGrid>
      <div>
        <SectionH2>Design</SectionH2>
        <span>
          My personal design projects are on Dribbble. Sometimes I post client
          work there too, if permitted.
        </span>
      </div>
      <div>
        <SectionH2>Code</SectionH2>
        <span>
          Active personal code projects are always on Github. I love open
          source!
        </span>
      </div>
      <div>
        <SectionH2>Photography</SectionH2>
        <span>
          I am an active Unsplash contributor and I passed 1 million views!
          Mainly, my photography consists of product, overlay, and landscape. I
          am by no means a professional though.
        </span>
      </div>
      <div>
        <SectionH2>Writings</SectionH2>
        <span>
          You can find most of my writings on Medium. I enjoy contributing
          personal pieces containing my own opinions and tutorials that help
          other developers.
        </span>
      </div>
    </PersonalGrid>
  </PersonalSection>
)

export default Personal
