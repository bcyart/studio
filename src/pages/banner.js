  
import React, { useEffect, useRef } from "react";
import {ProjectsContainer,ProjectsHeader} from "../styles/projectStyles";
import { ThemeProvider } from "styled-components"
import {Link} from "gatsby";
import SEO from "../components/SEO";

import useWindowSize from "../hooks/useWindowSize";



//Custom Cursor
import CustomCursor from "../components/customCursor"

// Context
import {
  useGlobalStateContext,
  useGlobalDispatchContext,
} from "../context/globalContext"

function BannerPage() {
  
  const bannerList = [
    {
      id: 0,
      title: "banner1",
      path: "/banner2",
      image:"https://live.staticflickr.com/65535/50343188162_002d088e9b_z.jpg"
    },
    {
      id: 1,
      title: "banner2",
      path: "/banner2",
      image: "https://live.staticflickr.com/65535/50343188417_00c2cf8788_z.jpg"
     
    },
    {
      id: 2,
      title: "banner3",
      path: "/banner3",
      image:"https://live.staticflickr.com/65535/50343028526_87549dbcf3_z.jpg"
   
    },
    {
      id: 3,
      title: "banner4",
      path: "/banner4",
      image: "https://live.staticflickr.com/65535/50343030806_b312fd25a1_z.jpg"
 
    },

    
    {
      id: 4,
      title: "banner5",
      path: "/banner5",
      image:"https://live.staticflickr.com/65535/50343188247_3f6a42cb73_z.jpg"
 
    }
  ];


  const darkTheme = {
    background: "#000",
    text: "#fff",

  }

  const lightTheme = {
    background: "#fff",
    text: "#000",
   
  }
 
  
  //Hook to grab window size
  const size = useWindowSize();

  // Ref for parent div and scrolling div
  const app = useRef();
  const scrollContainer = useRef();

  // Configs
  const data = {
    ease: 0.1,
    current: 0,
    previous: 0,
    rounded: 0
  };

  // Run scrollrender once page is loaded.
  useEffect(() => {
    requestAnimationFrame(() => skewScrolling());
  }, []);

  //set the height of the body.
  useEffect(() => {
    setBodyHeight();
  }, [size.height]);

  //Set the height of the body to the height of the scrolling div
  const setBodyHeight = () => {
    document.body.style.height = `${
      scrollContainer.current.getBoundingClientRect().height
    }px`;
  };

  // Scrolling
  const skewScrolling = () => {
    //Set Current to the scroll position amount
    data.current = window.scrollY;
    // Set Previous to the scroll previous position
    data.previous += (data.current - data.previous) * data.ease;
    // Set rounded to
    data.rounded = Math.round(data.previous * 100) / 100;

    // Difference between
    const difference = data.current - data.rounded;
    const acceleration = difference / size.width;
    const velocity = +acceleration;
    const skew = velocity * 7.5;

    //Assign skew and smooth scrolling to the scroll container
    if(scrollContainer.current){
      scrollContainer.current.style.transform = `translate3d(0, -${data.rounded}px, 0) skewY(${skew}deg)`;
    }

    //loop vai raf
    requestAnimationFrame(() => skewScrolling());
  };

//CURSOR
const onCursor = cursorType => {
  cursorType = (cursorStyles.includes(cursorType) && cursorType) || false
  dispatch({ type: "CURSOR_TYPE", cursorType: cursorType })
}
const dispatch = useGlobalDispatchContext()
const { cursorStyles, currentTheme } = useGlobalStateContext()
console.log(currentTheme);
  return (
    <ThemeProvider theme={currentTheme === "dark" ? darkTheme : lightTheme}>
 <SEO title="Banner" keywords="grafiktasarım,banner,slider,website,poster,afiş,tasarım,reklam,reklamajansı,photoshop,baskı,tasarım,eticaret,reklamcı,bcyart,burakcanyüksel,mockup" />
     <CustomCursor />
  
     <ProjectsContainer current={currentTheme} >
     <h1  onMouseEnter={() => onCursor("hovered")}
            onMouseLeave={onCursor}> <Link to={`/`}>  <span className="arrow">
               <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 101 57"
            >
            <path
              d="M33 34H0V24h81.429L66 7.884 73.548 0l19.877 20.763.027-.029L101 28.618 73.829 57l-7.548-7.884L80.753 34H33z"
              fill="black"
              fillRule="evenodd"
            ></path>
            </svg> 
              
              </span> </Link></h1>
      <div ref={app} className="scroll">
      <section ref={scrollContainer} >
     
        {bannerList.map(({ id,title,image}) => (
    
            <div    onMouseEnter={() => onCursor("pointer")}
            onMouseLeave={onCursor} className="item-container" key={id} id={`a${id}`}>
         <img  width="786px"  src={image}></img>

             
            
            </div>
      
        ))}
         
         </section>
      </div>

    </ProjectsContainer>
    </ThemeProvider>
  );
}

export default BannerPage;

