import styled, { css } from "styled-components"
import { motion } from "framer-motion"

export const FooterNav = styled(motion.div)`
  height: 300px;
  margin-top: 296px;
  padding:0 16px;
  @media only screen and (max-width: 858px ) {
    margin-top: 200px;
  }
  
`

export const FooterContent =  styled(motion.div)`
  color: #ea281e;
  font-size: 22px;
  font-weight: 600;
  line-height: 8px;
  flex: 1;
  ${props =>
    props.wider &&
    css`
    
      flex: 2;
    `} 
     @media only screen and (max-width: 858px ) {
    p{
      font-size:1.2rem;
    
    }
    @media only screen and (max-width: 376px ) {
    p{
      font-size:1.15rem;
    
    }

  
  }
  
  }
`

export const FooterSocial = styled.div`
  display: flex;
  position: relative;

  a {
    position: relative;
    display: block;
    width: 24px;  
    height: 24px;
    padding: 8px;
    svg {
      width: 100%;
      height: 100%;
    }
  }

`
