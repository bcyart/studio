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
body::-webkit-scrollbar {
  width: 0.25rem;
}

body::-webkit-scrollbar-track {
  background: #1e1e24;
}

body::-webkit-scrollbar-thumb {
  background: red;
}

.part2{
 
    width: 100%;
    height: 100%;
    margin: 0;
    border: 0;
    outline: 0;

    position: absolute;
    top: 0px;
    right: 0;
    left: 0;
    z-index: 100;
  
    animation: kill 6s ease forwards 3s; 
}
.svg-part{
    top: 0;
    left: 0;
    position: absolute;
    height: 100vh;
    width:100vw;
    overflow: hidden;
   

  }
.eyo{

  height: 100vh;
  background: ${props => props.theme.text};
  display: flex;
  align-items: center;
  justify-content: center;
  animation: shot 6s ease forwards 3s;
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
@keyframes kill{
 
 100%{
  position: static;
  overflow: auto; 
 }

  
}
@keyframes shot{
to{
   opacity: 0%;
    width:0px;  
    height: 0px;
    display:none;
  }
  
}

@keyframes dissappear{
  to{
     height: 0px;

  }
  
}


@media screen and (min-width: 992px) {
 .svg-part{
  animation: dissappear 6s ease forwards 3s; 
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

 },4000)

  },[])


  return (
    <ThemeProvider theme={currentTheme === "dark" ? darkTheme : lightTheme}>
 <SEO title="Anasayfa" keywords="burakcanyüksel"/>
      <GlobalStyle />
       <div className="hideTMS" >
        
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
  <div className="loadTMS" >

  <div class="svg-part">
<div class="part2">
  <div class="eyo">
    <svg id="logo" xmlns="http://www.w3.org/2000/svg" width="824.166" height="187.125" viewBox="0 0 824.166 187.125">
      <g id="svgbcy" transform="translate(-45 519.039)">
        <path id="Path_1" data-name="Path 1" d="M438.8-516.1c-4.8,1.6-15.8,7.5-15.8,8.6,0,.2,4,7,8.8,15.3l8.8,15,11.2-19.4C458-507.2,463-516.4,463-517,463-518.8,445.1-518.1,438.8-516.1Z" fill="none" stroke="#fff" stroke-width="2"/>
        <path id="Path_2" data-name="Path 2" d="M461.7-500.2l-8.5,14.7,11.4.3c6.3.1,16.6.1,22.9,0l11.5-.3-2.4-5c-4.7-10.1-13.8-19.2-23-23l-3.5-1.5Z" fill="none" stroke="#fff" stroke-width="2"/>
        <path id="Path_3" data-name="Path 3" d="M171.5-505.7c-9.9,3.3-18,9.9-22.4,18.1-6.5,12.4-4.5,30.1,4.5,40.9,13.3,16,41.8,17,56.5,2.1,2.3-2.4,4.1-4.5,3.8-4.7-.2-.2-2-1.6-4-3l-3.5-2.7-3.4,3.5c-4.8,4.9-12.1,7.8-20,7.8-15.8,0-27.2-10.9-27.2-26.2-.1-11.4,4.5-19.1,14.3-24,11.1-5.5,23.9-3.8,32.3,4.3l4.4,4.3,3.8-3.2,3.8-3.2-4.8-4.7c-7-7.1-14.1-9.9-25.1-10.3C178.9-506.9,174-506.5,171.5-505.7Z" fill="none" stroke="#fff" stroke-width="2"/>
        <path id="Path_4" data-name="Path 4" d="M46-470.1V-435H58.3c14.2,0,18.4-1,23.3-5.2,10-8.8,9.8-23.1-.4-30.6l-3.7-2.7,2.3-2.4c5.3-5.7,5-16.5-.6-22.4-4.8-5.1-7.7-6-20.9-6.5L46-505.2Zm24.9-22.5c2.3,2.1,2.8,7.4,1,10.8-1.4,2.6-6.8,4.8-11.9,4.8H56v-18.2l6.4.4C66.9-494.5,69.5-493.8,70.9-492.6Zm-.7,26.8C79.9-462.9,82-452,73.8-447c-2.5,1.5-5.1,2-10.5,2H56v-22h5.1A35.814,35.814,0,0,1,70.2-465.8Z" fill="none" stroke="#fff" stroke-width="2"/>
        <path id="Path_5" data-name="Path 5" d="M270-504.6c0,.3,5,8.6,11,18.3l11,17.8V-435h10v-32.6L312.6-485c5.9-9.6,10.8-18,11.1-18.7.4-1-.9-1.3-5-1.3h-5.4l-8.1,13.1-8,13.1-8-12.9-7.9-12.8-5.7-.3C272.5-505,270-504.9,270-504.6Z" fill="none" stroke="#fff" stroke-width="2"/>
        <path id="Path_6" data-name="Path 6" d="M611.6-496.8c-4.7,10.3-28.7,61.1-29.3,62-.2.5,2.1.8,5.2.8h5.7l5.1-11,5.2-11h26.6l5.2,11,5.2,10.9,5.3.1c2.8,0,5.2-.2,5.2-.5s-7.2-16-16-34.8c-12.6-27-16.3-34.3-18-34.5C615.4-504.1,614.4-502.8,611.6-496.8Zm9.5,21.2c2.1,4.6,3.9,8.7,3.9,9s-3.8.6-8.5.6h-8.4l4.2-9c2.3-4.9,4.3-8.9,4.5-9C617-484,618.9-480.2,621.1-475.6Z" fill="none" stroke="#fff" stroke-width="2"/>
        <path id="Path_7" data-name="Path 7" d="M710-469.1V-434h10v-15.5c0-8.5.3-15.5.8-15.5.4,0,6.1,7,12.6,15.5L745.3-434h5.9c3.2,0,5.8-.3,5.8-.6,0-.5-18.2-24.5-21.8-28.6-1.3-1.5-1-1.8,2.4-3.3,10.2-4.2,15-15.4,10.9-25.2-3.8-9.1-9-11.5-25.7-12.1l-12.8-.4ZM735.1-493c5.1,2.8,6,11.1,1.7,15.7-1.9,2-3.1,2.3-9.5,2.3H720v-19h6.6C730.2-494,734-493.5,735.1-493Z" fill="none" stroke="#fff" stroke-width="2"/>
        <path id="Path_8" data-name="Path 8" d="M817.2-499.3l.3,4.8,10.3.3,10.2.3V-434h10v-59.9l9.8-.3,9.7-.3.3-4.8.3-4.7H816.9Z" fill="none" stroke="#fff" stroke-width="2"/>
        <path id="Path_9" data-name="Path 9" d="M414.7-499.3c-6.8,9.9-10.7,24-9.3,33.6l.7,4.7h35.7l-11.9-20.7c-6.6-11.3-12.1-20.8-12.3-21C417.5-502.9,416.1-501.3,414.7-499.3Z" fill="none" stroke="#fff" stroke-width="2"/>
        <path id="Path_10" data-name="Path 10" d="M476.3-459c6.7,11.5,12.4,21,12.7,21s2.3-2.6,4.3-5.7c5.5-8.2,7.9-17,7.5-27.4l-.3-8.4-18.2-.3-18.1-.2Z" fill="none" stroke="#fff" stroke-width="2"/>
        <path id="Path_11" data-name="Path 11" d="M454.2-443.3c-6.2,10.8-11,19.9-10.6,20.2.3.3,4.9.6,10.2.5,8,0,10.8-.5,16-2.6,6.7-2.8,13.2-6.8,13.2-8.2,0-.9-14.8-26.5-16.4-28.3C465.8-462.6,462.7-458.1,454.2-443.3Z" fill="none" stroke="#fff" stroke-width="2"/>
        <path id="Path_12" data-name="Path 12" d="M408-455c0,2.9,6.8,13.9,11.4,18.6,4.6,4.6,13.8,10.4,16.4,10.4.7,0,13.7-21.3,17.9-29.3.2-.4-10-.7-22.6-.7C415.9-456,408-455.6,408-455Z" fill="none" stroke="#fff" stroke-width="2"/>
        <path id="Path_13" data-name="Path 13" d="M308.6-399c-2.5,5.4-2.9,5.8-6.9,6.4-2.3.3-7.7,1.4-11.9,2.3-6.2,1.2-7.8,2-7.8,3.4,0,2.6,1.5,2.7,11.2.9,8.1-1.6,8.8-1.6,8.2-.1-.4.9-1.9,4.8-3.3,8.8-1.5,4-3.8,8.4-5.1,9.9-2.9,3.1-9.9,8.4-11.2,8.4-1.8,0-.6-4.4,2.9-10.9,3.2-5.8,3.6-7.1,2.5-8.4-1.2-1.4-1.8-1.4-5.3-.2-2.2.8-4.6,1.2-5.3.9-2.2-.8-5.6,1.4-4.9,3.2S261.1-361,258.6-361c-1.5,0-1.7-.6-1.3-3.8a62.4,62.4,0,0,1,1.2-6.2c.5-2.2.1-2.7-3.4-4.4l-4-1.9-4.5,2.7c-9.4,5.5-13.9,12-11.1,16.2,2.1,3.3,6,3.1,11.6-.5l4.5-2.8,2.1,2.3c3.5,3.9,6.9,3.2,12.7-2.9a106.406,106.406,0,0,0,7.5-8.5c1.3-1.8,3.2-3.2,4.3-3.2a11.241,11.241,0,0,0,3.9-1c2.6-1.5,2.4-.7-1.7,6-7.5,12.2-.5,17.7,10.1,7.9l4.3-4v3.6c0,7.2,5.6,9.9,13,6.3,6.3-3,17.2-13.6,17.2-16.8,0-2.2-.2-2-2.8,1.4-4,5.3-15.8,12.8-19.7,12.4-2.9-.3-3-.5-3.1-5.3-.1-4.9,2.6-14.3,6.1-21.7,1.5-3,2.5-3.8,5.4-4.2,7.5-1.1,27.2-2.5,42.6-3.1,20.6-.7,43.1-1.6,52-2,3.9-.2,10.3-.4,14.3-.4,4.3-.1,7.2-.5,7.2-1.2,0-.5-.4-.7-1-.4-.5.3-1,.2-1-.3,0-1.5-76.6-.4-96.4,1.3-9.3.8-17.1,1.4-17.2,1.2-.2-.2.5-2.1,1.6-4.2,2.2-4.4,2.2-5.7-.2-6.1C311.8-404.7,310.3-402.8,308.6-399ZM253-371.2c0,2.8-2.9,6.2-7.8,9.3-5.4,3.4-6.2,3.5-6.2.9,0-3.6,10.8-13.8,13.2-12.4A3.2,3.2,0,0,1,253-371.2Z" fill="none" stroke="#fff" stroke-width="2"/>
        <path id="Path_14" data-name="Path 14" d="M606.2-399.3l-2.8,5.7L592-391.3c-12.3,2.5-14.3,3.4-12,5.7,1.3,1.3,2.7,1.2,10.3-.4,10.1-2,9.6-3,5.3,8.4a27.108,27.108,0,0,1-7.6,11.8c-7.4,7.1-10.4,6-7.4-2.8.8-2.5,1.4-4.7,1.2-4.8-6.2-3.7-7.3-3.9-11.9-1.6a46.239,46.239,0,0,0-10.1,8.1c-5.4,5.7-5.8,6-9.9,5.7-5-.4-6.1-2.2-2.1-3.6,4.1-1.4,9.4-7,9-9.6-.7-5.1-9.4-1.8-14.1,5.3-2.2,3.4-10.3,10.1-12.1,10.1-1.6,0-.3-6,1.9-9.2,5.5-8.2,5.3-12.7-.5-10.6a30.937,30.937,0,0,1-6.2,1.2c-1.8.2-3.9.4-4.6.5-.8,0-1.1.8-.8,1.9.9,2.7-5.9,10.1-11.8,12.8-5.7,2.7-11.4,3.1-12.2,1-.8-2,1.8-6.5,6-10.5,3.3-3.2,3.6-3.3,3.6-1.3,0,3.2,3.8,3,4.6-.3s-.1-5.5-2.4-5.5c-2.4,0-8.8,4.6-12.9,9.4-6,6.7-3.4,13.6,5,13.6,7.7-.1,15.9-5.4,22.4-14.5a10.866,10.866,0,0,1,6.2-4.1l4.2-1.1-1.8,2.6c-4.7,7.1-6.5,11.3-5.9,13.6,1.2,4.5,8.8,4.2,13.2-.6,1.6-1.8,1.7-1.8,4.6.6,3.2,2.7,7,3.1,11.4,1.5,2.2-.9,2.9-.8,3.6.5,1.4,2.5,7,1.8,11.8-1.4l4.4-2.9,1.9,2.4c2.8,3.6,6.8,3.2,11.7-1.2l4-3.6v2.9c0,6.5,6.1,9.8,12.2,6.7a72.306,72.306,0,0,0,7.9-4.9l4.7-3.3.6,2.8c1.3,6.9,9.2,7.6,16.4,1.4,2.3-2,4.2-3.3,4.2-2.9s-.9,4.3-2,8.7c-3.4,13.2-1.6,22.5,3.8,19.2,2.5-1.6,6.9-10.9,9-19.4l1.9-7.5,4.6-.5c2.5-.3,5.6-1.5,6.7-2.5,2.3-2.1,6.5-9.5,5.4-9.5-.4,0-2.6,1.8-5,4-6.1,5.6-9.5,5.3-10.7-.8-.6-2.9-.2-3.7,2.7-6.3,3.6-3.1,8.6-11.9,8.6-15.1,0-1.6,1-1.8,8.3-1.9a85.62,85.62,0,0,0,9.8-.4c.9-.1,9.9-.6,20-.9,20.4-.7,21.5-.8,22.6-2.1.4-.4.2-.5-.4-.1-.7.4-1.3.3-1.3-.3,0-.7-13.1-.8-38.7-.6-39.3.5-47.6.8-63.8,2.5-4.9.5-9.6,1-10.3,1-.9,0-.6-1.2.8-4.1,2.1-4,2.1-6.9.1-6.9C609.5-405,607.8-402.4,606.2-399.3Zm46,8.7c-1.1,1.1-3.7,5.2-5.7,9.1-4.9,8.9-5.5,9.9-10.7,15.3-4.8,5.1-9.4,8.2-12,8.2-2.4,0-2.4-6.6-.1-11.5,1.3-2.7,1.4-3.8.5-4.7-1-1-1.6-.7-2.9,1.2-3.4,4.9-6.9,8-12.7,11.5-12.2,7.2-15,3.5-9.9-13,2.9-9.1,6-14.3,9-14.9,3.3-.6,27.2-2.6,35.8-2.9,3.3-.1,7-.3,8.3-.3C654.1-392.7,654.1-392.7,652.2-390.6Zm6.4,3c-.6,2.3-9.6,11.9-10.4,11.1-.5-.5,3.2-6.5,7.6-12.4C658.4-392.4,659.7-391.8,658.6-387.6ZM552-371.5a13.075,13.075,0,0,1-3.4,2.7c-2,1.1-2,1-.6-.8,1.9-2.4,4.4-4.4,4.9-3.8C553.1-373.2,552.7-372.3,552-371.5Zm24,.4c0,2.2-7.6,9.7-11.2,11-2.5,1-2.8.8-2.8-1.2.1-2.7,4.4-7.9,8.9-10.6C574.6-374.1,576-373.9,576-371.1Zm71,8.6c0,3.3-3.9,16.4-6.2,20.9-1.9,3.5-2.3,3.8-2.6,1.9-.4-2.7,2.3-16.7,4.5-23.6,1.4-4.4,1.6-4.7,2.9-3A8.031,8.031,0,0,1,647-362.5Z" fill="none" stroke="#fff" stroke-width="2"/>
        <path id="Path_15" data-name="Path 15" d="M628.2-387.9c-5.3,3-6.3,5.1-2.6,5.7,2.3.3,10.4-5.4,10.4-7.4C636-391.7,634.1-391.3,628.2-387.9Z" fill="none" stroke="#fff" stroke-width="2"/>
        <path id="Path_16" data-name="Path 16" d="M449-393.8c-3.3,10.7-9,25-10.9,27.2-2.1,2.5-9.1,7.6-10.4,7.6-1.7,0,.2-6.1,3.3-11,3.2-4.9,3.8-8.5,1.8-9.3-.7-.2-3,.2-5.1.9-2,.7-4.4,1.1-5.1.8-2.1-.8-5.6,1.4-5,3,.5,1.2-6.3,7.6-6.9,6.5-.1-.2-.9-1.8-1.8-3.4-1.4-2.8-1.9-3-6.7-3-3.7.1-5.7.6-7.4,2.2-2.1,1.8-7.8,4.3-9.9,4.3-.5,0-.9-1.6-.9-3.5s-.4-3.5-.8-3.5c-1.3,0-4.2,3.5-4.2,5,0,1.9-6.3,9.2-9.8,11.2-2.7,1.6-3.1,1.6-4.3.2-1-1.2-1-2.2-.1-4.8,2.8-7.5.8-7.4-6.6.4-3.2,3.3-6.5,6-7.5,6-2.7,0-2.1-4.7,1.3-10.9a54.665,54.665,0,0,0,3-5.8c0-.3-1-.3-2.2-.1-2.4.3-4.9,4-7.3,11.1-1.6,4.4-1.6,5-.1,7.2,2.4,3.6,6.6,3.3,10.9-.8l3.5-3.2,1.5,2.7c1.3,2.2,2.3,2.8,5.2,2.8s4.5-.9,8.9-5.3c4.5-4.3,6-5.1,8.5-4.9a9.431,9.431,0,0,0,4.9-.7c1.7-.9,2-.6,2.5,1.8,1.2,6,7.2,8.7,11.5,5.2,1.5-1.1,5-3.7,7.8-5.6a82.828,82.828,0,0,0,8.7-7c2-1.9,4.3-3.5,5.2-3.5a10.9,10.9,0,0,0,3.6-1c2.7-1.5,2.4-.3-1.6,6-3.6,5.6-4.4,9.7-2.3,11.8,1.9,1.9,5.9,1.4,9.5-1.4,3.6-2.7,3.7-2.7,2.3,1-.6,1.7-.6,2.7.1,3.2,1.6.9,3.3-1.1,5.4-6.5,1.1-2.8,2.2-5.1,2.5-5.1s1.5,1.6,2.8,3.6c2.9,4.5,7.5,6.5,11.4,5.2,3.5-1.3,11.7-8.6,14.1-12.7,2.9-5,.1-3.8-6.9,2.9-8,7.7-10.9,8-15.4,1.8l-3.1-4.2,2.8-1.4c6.3-3.2,12.3-7.5,12.3-8.8,0-2.3-3.3-1.6-7,1.4-3.4,2.8-7.3,5.2-8.4,5.2-.3,0,1.5-5.7,4-12.7,4.4-12.5,4.8-15.3,2-15.3C451.7-401,450.4-398.4,449-393.8Zm-43.1,23.2c1.3,1.6-.1,5.6-1.9,5.6-1.3,0-4-3-4-4.4C400-372.3,403.9-373,405.9-370.6ZM397-367c0,.6,1.1,2,2.5,3.2,1.3,1.1,2.2,2.5,1.9,3-.9,1.4-5.2.9-5.8-.8-.9-2.5-.7-6.4.4-6.4A1,1,0,0,1,397-367Z" fill="none" stroke="#fff" stroke-width="2"/>
        <path id="Path_17" data-name="Path 17" d="M435.5-397c-3,.8-3,.8.8.9,2,0,3.7-.4,3.7-.9C440-398.1,439.8-398.1,435.5-397Z" fill="none" stroke="#fff" stroke-width="2"/>
        <path id="Path_18" data-name="Path 18" d="M441-396.9c0,.5.5.7,1,.4.6-.3,1-.8,1-1.1,0-.2-.4-.4-1-.4A1.1,1.1,0,0,0,441-396.9Z" fill="none" stroke="#fff" stroke-width="2"/>
        <path id="Path_19" data-name="Path 19" d="M733-397c-2.4.8-2.3.8.8.9,1.7.1,3.2-.4,3.2-.9C737-398.1,736.5-398.1,733-397Z" fill="none" stroke="#fff" stroke-width="2"/>
        <path id="Path_20" data-name="Path 20" d="M428.5-396c.3.5.8,1,1.1,1,.2,0,.4-.5.4-1a1.028,1.028,0,0,0-1.1-1C428.4-397,428.2-396.6,428.5-396Z" fill="none" stroke="#fff" stroke-width="2"/>
      </g>
    </svg>
  </div>
</div>

</div>
  </div>
     
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
