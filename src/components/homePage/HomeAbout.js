import React, { useState, useEffect } from "react"
// Styled Components
import { Container, Flex } from "../../styles/globalStyles"
//Framer Motion
import { motion, useAnimation } from "framer-motion"
//Home Component
import {
  HomeAboutSection,
  About,
  Services,
  AccordionHeader,
  AccordionContent,
  AccordionIcon,
} from "../../styles/homeStyles"
//Context
import { useGlobalStateContext } from "../../context/globalContext"
//Scroll Observer
import { useInView } from "react-intersection-observer"

// Accordion Data
const accordionIds = [
  {
    id: 0,
    title: "Video Reklam",
    results: [
      "Markanızı en iyi şekilde yansıtacak tasarımsal video reklam.",

    ],
  },
  {
    id: 1,
    title: "Video İçerik",
    results: [
      "Son teknoloji ekipmanlarla çekim ve kurgulama.",
    ],
  },
  {
    id: 2,
    title: "Kurgu - Color Grading",
    results: [
      "Son teknoloji kurgu seti ile görüntüleri mükemmel filme dönüştürme.",

    ],
  },
  {
    id: 3,
    title: "Drone",
    results: [
      "Son teknoloji ekipmanlarla sinematik havadan çekim.",
      
    ],
  },
  {
    id: 4,
    title: "Youtube",
    results: [
      "Son teknoloji ekipmanlarla çekim, kurgu ve kanal yönetimi hizmeti.",
      
    ],
  },
  {
    id: 5,
    title: "Fotoğraf",
    results: [
      "Düğün, Etkinlik, Konser, Sanatsal kişisel portre, moda, ürün çekimleri.",
      
    ],
  },
]

const HomeAbout = ({ onCursor }) => {
  //Default state, using number for our id. Which ever the number/id is in the state. That will be opened.
  const [expanded, setExpanded] = useState(0)
  const animation = useAnimation()
  const [aboutRef, inView] = useInView({
    triggerOnce: true,
    // Giving our scrollwheel additional 300px before executing animation
    rootMargin: "-300px",
  })

  useEffect(() => {
    if (inView) {
      animation.start("visible")
    }
  }, [animation, inView])

  return (
    <HomeAboutSection
      ref={aboutRef}
      animate={animation}
      initial="hidden"
      variants={{
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] },
        },
   /*        hidden: { opacity: 0, y: 72 },   */
      }}
    >
      <Container>
        <Flex alignTop>
          <About>
            <h2>
            Ben Burak Can Yüksel. Sinematik çalışmaların doğduğu toprakların bahçıvanıyım.  Çalışmaları sanatla işler, profesyonellikle sunarım. Kısacası elmadan armut, çamurdan altın üretirim. 
            </h2>
            <p>
              {/*  HAKKINDA KISMI */}
            </p>
          </About>
          <Services>
            <h3>Hizmetler</h3>
            {accordionIds.map((details, index) => (
              <Accordion
                key={index}
                details={details}
                expanded={expanded}
                setExpanded={setExpanded}
                onCursor={onCursor}
              />
            ))}
          </Services>
        </Flex>
      </Container>
    </HomeAboutSection>
  )
}

const Accordion = ({ details, expanded, setExpanded, onCursor }) => {
  const isOpen = details.id === expanded
  const [hovered, setHovered] = useState(false)
  const { currentTheme } = useGlobalStateContext()
  return (
    <>
      <AccordionHeader
        initial={false}
        onClick={() => setExpanded(isOpen ? false : details.id)}
        whileHover={{
          color: !isOpen && currentTheme === "dark" ? "#000000" :  "#ffffff",
        }}
        onHoverStart={() => setHovered(!hovered)}
        onHoverEnd={() => setHovered(!hovered)}
        onMouseEnter={() => onCursor("hovered")}
        onMouseLeave={onCursor}
      >
        <AccordionIcon>
          <motion.span
            animate={{ rotate: isOpen || hovered ? 0 : 45, x: 3 }}
            transition={{ duration: 0.2, ease: [0.6, 0.05, -0.01, 0.9] }}
          ></motion.span>
          <motion.span
            animate={{ rotate: isOpen || hovered ? 0 : -45, x: -3 }}
            transition={{ duration: 0.2, ease: [0.6, 0.05, -0.01, 0.9] }}
          ></motion.span>
        </AccordionIcon>
        {details.title}
      </AccordionHeader>
      <AccordionContent
        key="content"
        animate={{ height: isOpen ? "100%" : "0" }}
        transition={{ duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] }}
      >
        {details.results.map((result, index) => (
          <span key={index}>{result}</span>
        ))}
      </AccordionContent>
    </>
  )
}

export default HomeAbout
