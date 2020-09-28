import React, { useState, useEffect } from "react"

//Framer Motion
import { motion, useAnimation } from "framer-motion"
// Styled Components
import { Container } from "../../styles/globalStyles"
import {
  HomeFeaturedSection,
  FeaturedVideo,
  FeaturedContent,
  AllProjects,
} from "../../styles/homeStyles"
// Scroll Animations
import { useInView } from "react-intersection-observer"


const HomeFeatured = ({ onCursor,
  setHamburgerPosition,
  setToggleMenu,
  toggleMenu}) => {
  const [hovered, setHovered] = useState(false)
  const animation = useAnimation()
  const [featured, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-300px",
  })

  useEffect(() => {
    if (inView) {
      animation.start("visible")
    }
  }, [animation, inView])

  return (
    <HomeFeaturedSection
      ref={featured}
      animate={animation}
      initial="hidden"
      variants={{
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] },
        },
    
      }}
    >
      <Container>

          <FeaturedContent
       
          >
      
            
          </FeaturedContent>
          <FeaturedVideo >
              <video
    loading="lazy"
    poster="https://images.pexels.com/photos/5385032/pexels-photo-5385032.jpeg?auto=compress&cs=tinysrgb&dpr=2"
          muted
              loop
              autoPlay
              src="https://vod-progressive.akamaized.net/exp=1601252626~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F2167%2F15%2F385836865%2F1624487146.mp4~hmac=3f45555eccfc3a89d30a682d53982fd18903cd8470914f812da5a733ee531b3b/vimeo-prod-skyfire-std-us/01/2167/15/385836865/1624487146.mp4"
            >    <track default
            kind="captions" 
            srcLang="en"
           /></video>
          </FeaturedVideo>
        
      </Container>
      <Container>

        {/*  ref={hamburger}*/}
        <AllProjects
       onClick={() => setToggleMenu(!toggleMenu)}
        onHoverStart={() => setHovered(!hovered)}
        onHoverEnd={() => setHovered(!hovered)}
        onMouseEnter={() => onCursor("hovered")}
        onMouseLeave={onCursor}
        >
        

        <h2 className="featured-title"
        >
              TÜM <br /> PROJELER
              <span className="arrow">
                <motion.svg
                  animate={{ x: hovered ? 48 : 0 }}
                  transition={{ duration: 0.6, ease: [0.6, 0.05, -0.01, 0.9] }}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 101 57"
                >
                  <path
                    d="M33 34H0V24h81.429L66 7.884 73.548 0l19.877 20.763.027-.029L101 28.618 73.829 57l-7.548-7.884L80.753 34H33z"
                    fill="#FFF"
                    fillRule="evenodd"
                  ></path>
                </motion.svg>
              </span>
            </h2>
        </AllProjects>
      </Container>
    </HomeFeaturedSection>
  )
}

export default HomeFeatured
