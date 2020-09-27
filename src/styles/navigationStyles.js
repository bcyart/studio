import styled from "styled-components"
import { motion } from "framer-motion"

export const Nav = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 101%;
  display: block;
  background: #ea281e;
  color: #000;
  z-index: 100;
 overflow:hidden;
 
  @media only screen and (max-width: 858px ) {

padding: 16px;


  }
`

export const NavHeader = styled.div`
  top: 72px;
  position: relative;
  h2 {
    color: ${props => props.theme.background};
  }
  @media only screen and (max-width: 376px ) {
    top:0px;
  }
`
export const CloseNav = styled.div`
  button {
    transform-origin: center;
    border: none;
    padding: 20px;
    background: none;
    outline: none;
    span {
      width: 36px;
      height: 8px;
      display: block;
      background: ${props => props.theme.background};
      margin: 8px;
    }
  }
`

export const NavList = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  
  ul {
    padding: 0;
    width:75%;
    li {
      list-style: none;
      font-size: 3rem;
      text-transform: uppercase;
      font-weight: 900;
      height: 96px;
      line-height: 96px;
      overflow: hidden;
      .link {
        color: ${props => props.theme.background};
        position: relative;
        display: flex;
        align-items: center;
        
       
      }
      
    }
  }
  @media only screen and (max-width: 376px ) {
  ul{
    li{
      font-size: 1.5rem;
    }
  }
}
@media only screen and (max-width: 480px ) {
  ul{
    margin-top: -70px;
    li{
      font-size: 2.0rem;
      height: 72px;
    line-height: 56px;
    }
  }
}
`
export const NavFooter = styled.div`
  position: absolute;
  bottom: 0em;
  width: 95%; 
  padding: 56px 0px;
  p {
    color: ${props => props.theme.background};
   
  }
  svg path {
    fill: ${props => props.theme.background};
  }
  p:hover{
    color: ${props => props.theme.text};
  }
  @media only screen and (max-width: 480px ) {
    padding:  0px;
    bottom: 2.5rem;
  
  }
  
`
