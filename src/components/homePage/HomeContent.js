import React, { useEffect } from "react"
//Scroll Observer
import { useInView } from "react-intersection-observer"
import { useAnimation } from "framer-motion"
//Styled Components
import { Container } from "../../styles/globalStyles"
import { Content, HomeContentSection } from "../../styles/homeStyles"

const HomeContent = () => {
  const animation = useAnimation()
  const [contentRef, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-300px",
  })

  useEffect(() => {
    if (inView) {
      animation.start("visible")
    }
  }, [animation, inView])

  return (
    <HomeContentSection
      ref={contentRef}
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
        <Content>
        BCY ART’ a hoş geldiniz. Burası isteklerin ve fikirlerin sanatla harmanlanıp, filme dönüştüğü yer. Kısaca burası sinematik çalışmaların doğduğu topraklar.  
        </Content>
      </Container>
    </HomeContentSection>
  )
}

export default HomeContent
