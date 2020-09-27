  
import React, { useEffect, useRef } from "react";
import {ProjectsContainer,ProjectsHeader} from "../styles/projectStyles";
import { ThemeProvider } from "styled-components"
import {Link} from "gatsby"
import SEO from "../components/SEO";
import useWindowSize from "../hooks/useWindowSize";



//Custom Cursor
import CustomCursor from "../components/customCursor"

// Context
import {
  useGlobalStateContext,
  useGlobalDispatchContext,
} from "../context/globalContext"

function VideoReklam() {
  
  const videoAdList = [
    {
      id: 0,
      title: "Unicef Dünya Çocuk Günü",
      path: "/Unicef Dünya Çocuk Günü",
      video:"https://player.vimeo.com/video/374770649?title=0&byline=0&portrait=0"

    },
    {
      id: 1,
      title: "Türkiye İş Kurumu Açık İş İlanı",
      path: "/Türkiye İş Kurumu Açık İş İlanı",
      video: "https://player.vimeo.com/video/422947968?title=0&byline=0&portrait=0"
     
    },
    {
      id: 2,
      title: "Veysel Tiryaki Seçim Kampanyası",
      path: "/Veysel Tiryaki Seçim Kampanyası",
      video:"https://player.vimeo.com/video/367871468?title=0&byline=0&portrait=0"
   
    },
    {
      id: 3,
      title: "Enformasyonline.com App Tanıtım",
      path: "/Enformasyonline.com App Tanıtım",
      video: "https://player.vimeo.com/video/390574981?title=0&byline=0&portrait=0"
 
    },

    
    {
      id: 4,
      title: "İŞKUR İş ve Meslek Danışmanlığı",
      path: "/İŞKUR İş ve Meslek Danışmanlığı",
      video:"https://player.vimeo.com/video/388952216?title=0&byline=0&portrait=0"
 
    },
    {
      id: 5,
      title: "Forev Yapı Eyüp",
      path: "/Forev Yapı Eyüp",
      video:"https://player.vimeo.com/video/368119635?title=0&byline=0&portrait=0"
 
    },
    {
      id: 7,
      title: "Türkiye İş Kurumu Burada İş Var",
      path: "/Türkiye İş Kurumu Burada İş Var",
      video:"https://player.vimeo.com/video/422947292?title=0&byline=0&portrait=0"
 
    },
    {
      id: 8,
      title: "Enformasyonline.com Tanıtım",
      path: "/Enformasyonline.com Tanıtım",
      video:"https://player.vimeo.com/video/422947292?title=0&byline=0&portrait=0"
 
    },
    {
      id: 9,
      title: "Türkiye İş Kurumu Burada İş Var",
      path: "/Türkiye İş Kurumu Burada İş Var",
      video:"https://player.vimeo.com/video/372719600?title=0&byline=0&portrait=0"
 
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
  <SEO title="Video Reklam"  keywords="aplikasyon,apptanıtım,aplikasyontanıtım,applicationtanıtım,uyguluamatanıtım,veyseltiryaki,seçim,siyasiparti,siyasiaday,seçimkampanyas,türkiyeişkurumu,işkur,videoreklam,reklam,film,videotasarım,montaj,kurgu,sosyalmedya,instagramreklam,videoçekimi,motiongraphic,animasyon,tanıtımfilmi,prodüksiyon,videoreklam,reklamfilmi,videotasarımı,videographer,bcyart,prodüksiyon,burakcanyüksel,unicef,dünyaçocukgünü,çocuk,videoreklam,animasyon,videoiçerik,prodüksiyon,kurgu,montaj,videographer,videoproducer,aftereffects,içerik,sosyalmedya,youtube,tanıtımfilmli,çekim,kamera,reklammfilmi,reklam,videographer,freelancer,videoeditor,prodüksiyon,bcyart,burakcanyüksel" />
   
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
     
        {videoAdList.map(({ id,title,video}) => (
    
            <div   
            onMouseLeave={onCursor} className="item-container" key={id} id={`a${id}`}>
          
              <iframe src={video} width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>


              <ProjectsHeader>
             { title}
            </ProjectsHeader>
            
            </div>
      
        ))}
         
         </section>
      </div>

    </ProjectsContainer>
    </ThemeProvider>
  );
}

export default VideoReklam;

