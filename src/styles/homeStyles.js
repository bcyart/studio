import styled from "styled-components"
import { motion } from "framer-motion"

//Banner
export const Banner = styled.div`
background: url("https://www.incos.com.tr/wp-content/uploads/revslider/slider-dot-img-2-red.png") no-repeat fixed center   ;
background: url("/banner-back.png") no-repeat fixed center;
background-size: cover;

  height: 70vh;
  width: 75%;
text-align:center;
  margin-top: 155px;
  margin-left:auto;
  margin-right:auto;

  img{
    height:100vh;
    width:100vw;
    object-fit:cover;
  }

  @media only screen and (max-width: 858px ) {

width:100%;
padding: 0 16px;
height: 40vh;
margin-top: 230px;

  }
  @media only screen and (max-width: 376px ) {

  padding:0px;
overflow:none;
  }

  @media only screen and (max-width: 322px ) {
    padding-left: 32px;
   
    margin-top: 230px;
  }

  
 

`



export const Headline = styled(motion.span)`
  display: block;
  font-size: 23rem;
  font-weight: 900;
  line-height: 0.76;
`

//Content Section
export const HomeContentSection = styled(motion.div)`
  margin-bottom: 200px;
`
export const Content = styled(motion.h2)`
  margin-top:150px;
  width: 53%;
  font-size:2.23em;
  font-weight: 400;
  margin-left: 124px;
  color: ${props => props.theme.text};
  @media only screen and (max-width: 858px ) {
    padding-right: 32px;
    padding-left: 16px;
    width:95%;
    margin-left: 0px;
    margin-top:200px;
    font-size:1.7em;
    margin-top:100px;
  }
  @media only screen and (max-width: 376px ) {
    padding-right: 0px;
    width:90%;
    
  }
  @media only screen and (max-width: 322px ) {
    width:110%;
  }

`

//Featured Section
export const HomeFeaturedSection = styled(motion.div)`
  margin-bottom: 200px;
  position: relative;
  a {
    margin-bottom: 200px;
    position: relative;
    display: block;
  }
  @media only screen and (max-width: 858px ) {
    margin-bottom: 0px;

  }
`

export const FeaturedContent = styled(motion.div)`
  height: 480px;
  width: 100%;
  padding: 56px 124px;

  box-sizing: border-box;
  color: ${props => props.theme.text};
  h3 {
    font-size: 1.4rem;
  }
  .meta {
    display: flex;
    h4 {
      &:last-child {
        margin-left: 1rem;
      }
    }
  }
  @media only screen and (max-width: 858px ) {
  padding:0px;
 
overflow: hidden;
}


`


export const FeaturedVideo = styled.div`

  position: absolute;
  z-index: -1;
  width: 94%;
  height: 737px;

  top: 0;
  display: block;
  overflow: hidden;
  transform: scale(0.9);
  video{
    width: 100%    !important;
  height: auto   !important;
  }
  @media only screen and (min-width: 413px ) and (max-width: 858px ) {
    width: 100%;
    padding-left:16px;
    transform: scale(1);
  }
  @media only screen and (max-width: 460px ) {
    width: 100%;


  }
  @media only screen and (max-width: 322px ) {
    width:118%;
  }

 
 
`






export const AllProjects = styled(motion.div)`
  height: 480px;
  width: 60%;
  padding: 56px 124px;
  box-sizing: border-box;
  color: ${props => props.theme.text};

  .featured-title {
    position: static;
    font-size: 7rem;
    font-weight: 900;
    line-height: 90px;
    margin: 400px auto;
    
    .arrow {
      width: 120px;
      height: 80px;
      display: block;
      position: relative;
      overflow: hidden;
      svg {
        position: absolute;
        top: 16px;
        left: -48px;
        width: 108px;
        path {
          fill: ${props => props.theme.text};
        }
      }
    }
  }

  @media only screen and (max-width: 858px ) {
 padding: 0 16px;
width:100%;
 .featured-title {

    font-size: 5rem;
margin:0px;
 
.arrow {
margin-left:12px;

}
 }

  }
  @media only screen and (max-width: 376px ) {
  
 .featured-title {

    font-size: 3.6rem;
margin:0px;
 
.arrow {
margin-left:12px;

}
 }

  }
  
`



//ABOUT SECTION

export const HomeAboutSection = styled(motion.div)`
  padding-top: 230px;
  @media only screen and (max-width: 858px ) {
    padding-top: 0px;

  }
  
`
export const About = styled.div`
  width: 100%;
  margin-left: 59px;
  h2 {
    width: 80%;
    font-size: 2.3rem;
    font-weight: 400;
    
    color: ${props => props.theme.text};
    margin-top:0px;
  }
  p {
    max-width: 550px;
    font-size: 1rem;
    line-height: 1.6rem;
    
    color: ${props => props.theme.text};
  }
  @media only screen and (max-width: 858px ) {
    margin-left: 0px;
    padding:0 16px;
    h2 {
  
    font-size: 1.4rem;
    width: 100%;
  }

  }
`
export const Services = styled.div`

h3{
  margin:0;
  
  color: ${props => props.theme.text};
}
@media only screen and (max-width: 501px ) {
  

  padding-top: 120px;
   
  }
@media only screen and (max-width: 376px ) {
  
padding-left:16px !important;

 
}

`

//Accordion

export const AccordionHeader = styled(motion.div)`
  width: 100%;
  color: #ea281e;
  height: 32px;
  display: flex;
  align-items: center;
  font-weight: 600;
  font-size: 1.15rem;
  margin: 8px 0;
  padding-left:0px !important;

 
  
`
export const AccordionIcon = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  margin-right: 8px;
  span {
    width: 16px;
    height: 4px;
    background: #ea281e;
    transition: all 0.1s ease-in-out;
  }
`

export const AccordionContent = styled(motion.div)`
  overflow: hidden;

  span {
    width: 100%;
    margin: 8px 0;
    font-size: 1rem;
      color: ${props => props.theme.text};
    display: block;
    font-weight: 600;
    
  }
`
