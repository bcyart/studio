  
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

function Fotoğraf() {
  const picList = [
    {
      id: 0,
      title: "ürün çekimi",
      path: "/ürün çekimi",
      image:"//live.staticflickr.com/65535/50343196827_e4eff180d5_k.jpg"

    },
    {
      id: 1,
      title: "düğün çekimi",
      path: "/düğün çekimi",
      image:"//live.staticflickr.com/65535/50343195882_44c8fea6fb_k.jpg"
     
    },
    {
      id: 2,
      title: "konser-etkinlik",
      path: "/konser-etkinlik",
      image:"https://live.staticflickr.com/65535/50343195687_28185c5b8f_z.jpg"
   
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
 <SEO title="Fotoğraf" keywords=" gelin,damat,düğünçekimi,gelinçekim,damatçekim,düğünalbümü,albümtasarımı,photshop,albümbaskı,wedding,düğün,ürünçekimi,ürünler,eticaret,grafiktasarım,photshop,fotoğrafçı,grafiktasarım,bcyart,burakcanyüksel,konser,konserçekimi,etkinlik,sanatçı,eventçekim" />
     <CustomCursor />
  
     <ProjectsContainer current={currentTheme} >
     <h1  onMouseEnter={() => onCursor("pointer")}
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
     
        {picList.map(({ id,title,image}) => (
    
            <div    
            onMouseLeave={onCursor} className="item-container" key={id} id={`a${id}`}>
          <img  width="698 " src={image}></img>

           
            
            </div>
      
        ))}
         
         </section>
      </div>

    </ProjectsContainer>
    </ThemeProvider>
  );
}

export default Fotoğraf;

