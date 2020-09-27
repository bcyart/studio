import React from "react"
import { Link } from "gatsby"
//Styled Components
import { Container, Flex } from "../styles/globalStyles"
import {
  Nav,
  NavHeader,
  NavList,
  NavFooter,
  CloseNav
} from "../styles/navigationStyles"
import { FooterContent, FooterSocial } from "../styles/footerStyles"
//Icons
import { Instagram, Facebook, Vimeo } from "../assets/svg/social-icons"
//Framer Motion
import { motion, AnimatePresence } from "framer-motion"

const navRoutes = [
  {
    id: 0,
    title: "video-İÇERİK",
    path: "/video-content",
    video: "featured-video.mp4",
  },
  {
    id: 1,
    title: "video-reklam",
    path: "/video-reklam",
    video: "easy.mp4",
  },
  {
    id: 2,
    title: "drone",
    path: "/drone",
    video: "50-beaches.mp4",
  },
  {
    id: 3,
    title: "fotoğraf",
    path: "/fotoğraf",
    video: "it-takes-an-island.mp4",
  },
  {
    id: 4,
    title: "banner",
    path: "/banner",
    video: "50-beaches.mp4",
  },
]

const Navigation = ({ toggleMenu, setToggleMenu, onCursor }) => {
 
  const overScroll2=()=>{
    document.getElementsByTagName("body")[0].style.overflowY="auto";
  }
  const clickHandler=()=>{
   overScroll2();
  onCursor("hovered");
  }
  
  return (
    <>
      <AnimatePresence>
        {toggleMenu && (
          <Nav
            initial={{ x: "-100%" }}
            exit={{ x: "-100%" }}
            animate={{ x: toggleMenu ? 0 : "-100%" }}
            transition={{ duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] }}
          >
            <Container>
              <NavHeader>
                <Flex spaceBetween noHeight>
                  <h2 to="/">Projeler</h2>
                  <CloseNav
                    onClick={() => setToggleMenu(!toggleMenu)}
                    onMouseEnter={() => onCursor("pointer")}
                    onMouseLeave={onCursor}
                  >
                    <button aria-label="menu" onClick={()=> overScroll2()} >
                      <span></span>
                      <span></span>
                    </button>
                  </CloseNav>
                </Flex>
              </NavHeader>
              <NavList>
                <ul >
                  {navRoutes.map(route => (
                    <motion.li
                      key={route.id}
                      onClick={()=>clickHandler()}
                      onMouseEnter={() => onCursor(`image-hovered-${route.id}`)}
                      onMouseLeave={onCursor}
                  

                    >
                      <Link to={`${route.path}`}>
                        <motion.div
                          
                       
                      id={route.id+"a"}
                          className="link"
                          whileHover={{
                           color:"#232323",
                    textShadow:"1px 1px 1px white",
                
                x:"+2%",
                            transition: {
                              duration: 0.4,
                              ease: [0.6, 0.05, -0.01, 0.9],
                            },
                          }}
                        >
                    
                          {route.title}
                        </motion.div>
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </NavList>
              <NavFooter>
                <Flex spaceBetween>
                  <FooterContent
                  
                  onMouseEnter={() => onCursor("pointer")}
                      onMouseLeave={onCursor}>
                         <p>902.315.12 79</p>
                  </FooterContent>
                  <FooterContent
                  onMouseEnter={() => onCursor("pointer")}
                  onMouseLeave={onCursor} wider>
                       <p>info@bcyart.studio</p>
                  </FooterContent>
                  <FooterSocial>
                    <a
                      onMouseEnter={() => onCursor("pointer")}
                      onMouseLeave={onCursor}
                      href="https://www.instagram.com/brkcany/?hl=tr"
                      target="https://www.instagram.com/brkcany/?hl=tr"
                    >
                      <Instagram />
                    </a>
                  
                    <a
                      onMouseEnter={() => onCursor("pointer")}
                      onMouseLeave={onCursor}
                      href="https://vimeo.com/burakcanyuksel"
                      target="https://vimeo.com/burakcanyuksel"
                    >
                      <Vimeo />
                    </a>
                  </FooterSocial>
                </Flex>
              </NavFooter>
        
            </Container>
          </Nav>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navigation
