import React, { useState,useEffect } from "react"
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
import Loading from  "./loading"
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
  background: ${props => props.theme.background};
  overscroll-behavior: none;
  overflow-x: hidden;
  
 
}


.part2{

  top: 0;
    left: 0;
    position: absolute;
    height: 100vh;
    width:100vw;
    overflow: hidden;
  
    animation: dissappear 6s ease forwards 3s;

}
.svg-part{
  
    top: 0;
    left: 0;
    position: absolute;
    height: 100vh;
    width:100vw;
    overflow: hidden;
    animation: shot 6s ease forwards 3s;
  }
.eyo{

  height: 100vh;
  background: ${props => props.theme.text};
  display: flex;
  align-items: center;
  justify-content: center;
  animation: shot 4s ease forwards 3s;
  }

#logo {
  transform:matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 5, 45, 0, 1);
  animation: fill 6s ease forwards 3s;
  transform: scale(0.9);
}

  #logo path:nth-child(1){
    stroke-dasharray: 123px; 
    stroke-dashoffset: 123px;
    animation: line-anim 2s ease forwards;
    
  }
  #logo path:nth-child(2){
    stroke-dasharray: 122px; 
    stroke-dashoffset: 122px; 
    animation: line-anim 2s ease forwards;
}
#logo path:nth-child(3){
  stroke-dasharray: 348px; 
  stroke-dashoffset: 348px; 
  animation: line-anim 2s ease forwards;
}
#logo path:nth-child(4){
  stroke-dasharray: 351px; 
  stroke-dashoffset: 351px;
  animation: line-anim 2s ease forwards 0.3s;
}
#logo path:nth-child(5){
  stroke-dasharray: 244px; 
  stroke-dashoffset: 244px; 
  animation: line-anim 2s ease forwards 0.6s;
}
#logo path:nth-child(6){
  stroke-dasharray: 308px;
  stroke-dashoffset: 308px; 
  animation: line-anim 2s ease forwards 1.3s;
}
#logo path:nth-child(7){
  stroke-dasharray: 347px; 
  stroke-dashoffset: 347px; 
  animation: line-anim 2s ease forwards 0.5s;
}
#logo path:nth-child(8){
  stroke-dasharray: 240px; 
  stroke-dashoffset: 240px; 
  animation: line-anim 2s ease forwards 1.0s;
}
#logo path:nth-child(9){
  stroke-dasharray: 128px; 
  stroke-dashoffset: 128px; 
  animation: line-anim 2s ease forwards 1.3s;
}
#logo path:nth-child(10){
  stroke-dasharray: 129px; 
  stroke-dashoffset: 129px; 
  animation: line-anim 2s ease forwards 1.2s;
}
#logo path:nth-child(11){
  stroke-dasharray: 120px; 
  stroke-dashoffset: 120px; 
  animation: line-anim 2s ease forwards 0.4s;
}
#logo path:nth-child(12){
  stroke-dasharray: 121px; 
  stroke-dashoffset: 121px; 
  animation: line-anim 2s ease forwards 0.6s;
}
#logo path:nth-child(13){
  stroke-dasharray: 701px; 
  stroke-dashoffset: 701px; 
  animation: line-anim 2s ease forwards 0.9s;
}
#logo path:nth-child(14){
  stroke-dasharray: 1194px; 
  stroke-dashoffset: 1194px; 
  animation: line-anim 2s ease forwards 0.5s;
}
#logo path:nth-child(15){
  stroke-dasharray: 32px; 
  stroke-dashoffset: 32px; 
  animation: line-anim 2s ease forwards 0.1s;
}
#logo path:nth-child(16){
  stroke-dasharray: 584px; 
  stroke-dashoffset: 584px; 
  animation: line-anim 2s ease forwards 0.6s;
}
#logo path:nth-child(17){
  stroke-dasharray: 13px; 
  stroke-dashoffset: 13px; 
  animation: line-anim 2s ease forwards 0.3s;
}
#logo path:nth-child(18){
  stroke-dasharray: 5px; 
  stroke-dashoffset: 5px; 
  animation: line-anim 2s ease forwards 1.3s;
}
#logo path:nth-child(19){
  stroke-dasharray: 12px; 
  stroke-dashoffset: 12px; 
  animation: line-anim 2s ease forwards 0.4s;
}
#logo path:nth-child(20){
  stroke-dasharray: 5px; 
  stroke-dashoffset: 5px;
  animation: line-anim 2s ease forwards 1.0s; 
}

  
@keyframes line-anim {
  to{
    stroke-dashoffset: 0;
  }
}

@keyframes dissappear{
to{

    display:none;
  }
  
}
  

@keyframes shot{
to{
   opacity: 0%;
    width:0px;   height: 0px;
    
  }
  
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

  const lightTheme = {
    background: "#000",
    text: "#fff",
    left: `${hamburgerPosition.x}px`,
    top: `${hamburgerPosition.y}px`,
  }

  const darkTheme = {
    background: "#fff",
    text: "#000",
    left: `${hamburgerPosition.x}px`,
    top: `${hamburgerPosition.y}px`,
  }
 

  const onCursor = cursorType => {
    cursorType = (cursorStyles.includes(cursorType) && cursorType) || false
    dispatch({ type: "CURSOR_TYPE", cursorType: cursorType })
  }

  useEffect(() => {
    
 
  
    document.getElementsByTagName("body")[0].style.overflowY="hidden";
 setTimeout(()=>{


  document.getElementsByTagName("body")[0].style.overflowY="auto";

 },6000)
  },[])


  return (
    <ThemeProvider theme={currentTheme === "dark" ? darkTheme : lightTheme}>
 <SEO title="Anasayfa" keywords="burakcanyüksel"/>
      <GlobalStyle />
  <div className="loadTMS">
<Loading/>
  </div>
      <div className="hideTMS">
        
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
      </div>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
