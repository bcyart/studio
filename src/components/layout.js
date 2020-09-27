import React, { useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
//Styled Components
import { createGlobalStyle, ThemeProvider } from "styled-components"
import { normalize } from "styled-normalize"
//Custom Cursor
import CustomCursor from "../components/customCursor"
//Components
import Header from "./header"
import Navigation from "./navigation"
import Footer from "./footer"

import HomeAbout from "../components/homePage/HomeAbout"
import HomeBanner from "../components/homePage/HomeBanner"
import HomeContent from "../components/homePage/HomeContent"
import HomeFeatured from "../components/homePage/HomeFeatured"
// Context
import {
  useGlobalStateContext,
  useGlobalDispatchContext,
} from "../context/globalContext"
//SEO
import SEO from "./SEO";

const GlobalStyle = createGlobalStyle`
${normalize}
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@600&display=swap');
* {
  text-decoration: none;
  cursor: none;
 
}
html {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    font-size: 16px;
  
  
} 
body {
  font-size: 16px;
  font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
background:white;
  overscroll-behavior: none;
  overflow-x: hidden;
  
 
}



`

const Layout = ({ children }) => {
  const dispatch = useGlobalDispatchContext();
  const { cursorStyles, currentTheme } = useGlobalStateContext()
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const [hamburgerPosition, setHamburgerPosition] = useState({
    x: 0,
    y: 0,
  })

  const [toggleMenu, setToggleMenu] = useState(false)

  const darkTheme = {
    background: "#000",
    text: "#fff",
    left: `${hamburgerPosition.x}px`,
    top: `${hamburgerPosition.y}px`,
  }

  const lightTheme = {
    background: "#fff",
    text: "#000",
    left: `${hamburgerPosition.x}px`,
    top: `${hamburgerPosition.y}px`,
  }
 

  const onCursor = cursorType => {
    cursorType = (cursorStyles.includes(cursorType) && cursorType) || false
    dispatch({ type: "CURSOR_TYPE", cursorType: cursorType })
  }

  return (
    <ThemeProvider theme={currentTheme === "light" ? lightTheme : darkTheme }>
 <SEO title="Anasayfa" keywords="burakcanyüksel"/>
      <GlobalStyle />
      
      <CustomCursor toggleMenu={toggleMenu} />
      <Header
        onCursor={onCursor}
        toggleMenu={toggleMenu}
        setToggleMenu={setToggleMenu}
        hamburgerPosition={hamburgerPosition}
        setHamburgerPosition={setHamburgerPosition}
        siteTitle={data.site.siteMetadata.title}
      />
      <Navigation
   
        toggleMenu={toggleMenu}
        setToggleMenu={setToggleMenu}
        onCursor={onCursor}
        hamburgerPosition={hamburgerPosition}
        setHamburgerPosition={setHamburgerPosition}
      />
      <main >
  
      <HomeBanner
      onCursor={onCursor}
      toggleMenu={toggleMenu}
      setToggleMenu={setToggleMenu}
      hamburgerPosition={hamburgerPosition}
      setHamburgerPosition={setHamburgerPosition}
      />
      <HomeContent   
    
      onCursor={onCursor}
      toggleMenu={toggleMenu}
      setToggleMenu={setToggleMenu}
      hamburgerPosition={hamburgerPosition}
      setHamburgerPosition={setHamburgerPosition}
      />
      <HomeFeatured
      
      onCursor={onCursor}
      toggleMenu={toggleMenu}
      setToggleMenu={setToggleMenu}
      hamburgerPosition={hamburgerPosition}
      setHamburgerPosition={setHamburgerPosition}
      
      />
            <HomeAbout
            
             onCursor={onCursor}
             toggleMenu={toggleMenu}
             setToggleMenu={setToggleMenu}
             hamburgerPosition={hamburgerPosition}
             setHamburgerPosition={setHamburgerPosition}
        />
      </main>
  
      <Footer
    
        onCursor={onCursor}
        hamburgerPosition={hamburgerPosition}
        setHamburgerPosition={setHamburgerPosition}
      />
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
