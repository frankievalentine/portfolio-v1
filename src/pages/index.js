import React, { Fragment } from 'react'
import Helmet from 'react-helmet'
import 'normalize.css'
import Loader from '../components/Loader'
import Nav from '../components/Nav'
// import Home from '../components/Home'
// import About from '../components/About'
// import Personal from '../components/Personal'
// import Footer from '../components/Footer'

import GlobalStyle from '../styles/Global'

export default () => (
  <Fragment>
    <Helmet>
      <html lang="en" />
      <title>Frankie Valentine - ValentineDev</title>
      <meta
        name="description"
        content="Founder, Lead Developer, and Designer for V3 Digital Studio based in California."
      />
      <meta name="referrer" content="origin" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://valentinedev.com" />
      <meta
        property="og:title"
        content="Frankie Valentine - ValentineDev"
      />
      <meta
        property="og:description"
        content="Personal portfolio of Frankie Valentine. Founder of V3 Digital Studio."
      />
      <meta property="og:image" content="" />
    </Helmet>
    <GlobalStyle />
    <Loader />
    <Nav />
    {/* <Home />
    <About />
    <Personal />
    <Footer /> */}
  </Fragment>
)