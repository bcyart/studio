import React, { useEffect, useRef ,useState} from "react"

// Scroll Animations
import { useInView } from "react-intersection-observer"
import { useAnimation } from "framer-motion"

//Styled Components
import { Container, Flex } from "../styles/globalStyles"
import { FooterNav, FooterContent, FooterSocial } from "../styles/footerStyles"

//Icons
import { Instagram, Vimeo } from "../assets/svg/social-icons"

//Custom Hooks
import useElementPosition from "../hooks/useElementPosition"

//Context
import { useGlobalStateContext } from "../context/globalContext"


const Footer = ({ setHamburgerPosition, onCursor }) => {
  const { currentTheme } = useGlobalStateContext()

  const [hovered, setHovered] = useState(false)


  const instagramRef = useRef(null)
  const instagramPosition = useElementPosition(instagramRef)


  const vimeoRef = useRef(null)
  const vimeoPosition = useElementPosition(vimeoRef)

  const animation = useAnimation()
  const [footerRef, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-100px",
  })
  useEffect(() => {
    if (inView) {
      animation.start("visible")
    }
  }, [animation, inView])

  const menuHover = x => {
    onCursor("locked")
    setHamburgerPosition({ x: x })
  }

  return (
    <FooterNav
      ref={footerRef}
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
        <Flex spaceBetween>
          <FooterContent
  whileHover={{
    color: currentTheme === "dark" ? "#000000" :"#ffffff",
  }}
  onHoverStart={() => setHovered(!hovered)}
  onHoverEnd={() => setHovered(!hovered)}
  onMouseEnter={() => onCursor("hovered")}
  onMouseLeave={onCursor}

          >
            <p>545.450.8578</p>
           
          </FooterContent>
          <FooterContent wider
              whileHover={{
        color: currentTheme === "dark" ? "#000000" :"#ffffff" ,
      }}
      onHoverStart={() => setHovered(!hovered)}
      onHoverEnd={() => setHovered(!hovered)}
      onMouseEnter={() => onCursor("hovered")}
      onMouseLeave={onCursor}

          
          >
             <p>info@bcyart.studio</p>
         
          </FooterContent>
          <FooterSocial
     
          >
                 
            <a
              onMouseEnter={() => menuHover(instagramPosition.x)}
              onMouseLeave={onCursor}
              ref={instagramRef}
              href="https://www.instagram.com/brkcany/?hl=tr"
              target="https://www.instagram.com/brkcany/?hl=tr"
            >
              <Instagram />
            </a>
     
            <a
              onMouseEnter={() => menuHover(vimeoPosition.x)}
              onMouseLeave={onCursor}
              ref={vimeoRef}
              href="https://vimeo.com/burakcanyuksel"
              target="https://vimeo.com/burakcanyuksel"
            >
              <Vimeo />
            </a>
          </FooterSocial>
        </Flex>
      </Container>
    </FooterNav>
  )
}

export default Footer
