import styled from "styled-components"
import { motion } from "framer-motion"

export const HeaderNav = styled(motion.div)`
  height: 0px;
  width: 100%;
  position: absolute;
  top: 72px;
  right: 0;
  left: 0;
  z-index: 99;
  @media only screen and (max-width: 858px ) {
display:flex;

  }
 
`

export const ThemeSpan = styled.span`

background-color: red;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 4px solid ${props => props.theme.background};
  /* I set 2 shadows where the first one doesn't have blur and spread for firefox fix. */
  box-shadow: inset 16px 0px ${props => props.theme.text}, inset 16px 0px 1px 1px red;
  -moz-box-shadow: inset 0px 16px #999, inset 0px 16px 1px 1px #999;
  transform: scale(0.7);
  @media only screen and (min-width: 1025px ) {

margin-left:-53rem;
  }
  @media only screen and (min-width: 1026px ) {

margin-left:-47rem;
  }
/*
height: 32px;
    width: 32px;
    background: #ea291e;
    margin: 0 4px;
    border-radius: 100%;
    display: inline-block;
    position: relative;
    top:0px;
    bottom: 2px;
    fill:
    flex: 1 1 150px;


 */
`

export const Logo = styled.div`
  a {
    font-size: 1.8rem;
    text-decoration: none;
    font-weight: 800;
    color: #000;
    color: ${props => props.theme.text};
    fill:${props => props.theme.text};
  }

  @media only screen and (max-width: 858px ) {

padding-left: 3rem;
   
}

  }
 
  
`

export const Menu = styled.div`
  button {
    transform-origin: center;
    border: none;
 
    background: none;
    outline: none;
    span {
      width: 36px;
      height: 8px;
      display: block;
      background: ${props => props.theme.text};
      margin: 8px auto ;
    }
  }
  @media only screen and (max-width: 858px ) {
padding-right:12px;
padding-bottom:25px;
  }
  @media only screen and (max-width: 376px ) {
    padding-right:12px;
padding-bottom:0px;
  }
 
`
