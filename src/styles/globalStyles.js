import styled, { css } from "styled-components"

export const Container = styled.div`
  flex-grow: 1;
  margin: 0 auto;
  padding: 0 32px;
  position: relative;
  width: auto;
  height: 100%;
  @media (min-width: 1024px) {
    max-width: 960px;
  }
  @media (min-width: 1216px) {
    max-width: 1152px;
  }
  @media (min-width: 1408px) {
    max-width: 1244px;
  }

  ${props =>
    props.fluid &&
    css`
      padding: 0;
      margin: 0;
      background: red;
      max-width: 100% !important;
    `}

    @media only screen and (max-width: 858px ) {

padding:0px;

  }

`

export const Flex = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  ${props =>
    props.spaceBetween &&
    css`
      justify-content: space-between;
    `};
  ${props =>
    props.flexEnd &&
    css`
      justify-content: flex-end;
    `};
  ${props =>
    props.alignTop &&
    css`
      align-items: flex-start;
    `};
  ${props =>
    props.noHeight &&
    css`
      height: 0;
    `};
    @media only screen and (max-width: 858px ) {
    p{
      font-size:1.2rem;
    }
    div:nth-child(2) {
  padding-left:20px;
}
    }
    @media only screen and (max-width: 376px ) {
      flex-wrap: wrap;
      div:nth-child(2) {
  padding-left:0.43em;
}

    }
`

export const Cursor = styled.div`
  position: fixed;
  top: 400px;
  left: 400px;
  width: 32px;
  height: 32px;
  background: #ea281e;
  border-radius: 100%;
  transform: translate(-50%, -50%);
  transition: all 0.1s ease-out;
  transition-property: width, height, border;
  will-change: width, height, transform, border;
  pointer-events: none;
  z-index: 999;
  
  &.pointer {
    border: 4px solid ${props => props.theme.text} !important;
  }
  &.hovered {
    background: transparent !important;
    width: 56px;
    height: 56px;
    border: 4px solid #ea281e;
    border: 4px solid #ea281e;
  }
  &.locked {
    background: transparent !important;
    width: 56px;
    height: 56px;
    border: 4px solid ${props => props.theme.text} !important;
    top: ${props => props.theme.top} !important;
    left: ${props => props.theme.left} !important;
  }
  &.nav-open {
    background: ${props => props.theme.text};
  }
  &.image-hovered-0{
    background:url("https://media3.giphy.com/media/SL8STZCvNld4m0VY6A/giphy.gif?cid=ecf05e4760309ae9c9d661e6207012854d7c3903c42092da&rid=giphy.gif")no-repeat !important;
    width:360px;
    height:360px;
    border-radius: 0%;
border:none;
z-index:101;

  }
  &.image-hovered-1{
    background:url("http://www.reactiongifs.com/wp-content/uploads/2013/07/running.gif")no-repeat !important;
    width:300px;
    height:400px;
    border-radius: 0%;
border:none;
z-index:101;

  }
  
  &.image-hovered-2{
    background:url("https://i.giphy.com/media/l2JJtAJB0h6Nu8PMk/giphy.webp")no-repeat !important;
    width:380px;
    height:215px;
    border-radius: 0%;
border:none;
z-index:101;

  }
  &.image-hovered-3{
    background:url("https://media1.giphy.com/media/ztqsj058Zbp3G/giphy.gif")no-repeat !important;
    width:360px;
    height:360px;
    border-radius: 0%;
border:none;
z-index:101;

  }
  &.image-hovered-4{
    background:url("https://media2.giphy.com/media/l4JyScrtqxqbG8lDW/giphy.gif?cid=ecf05e47681a2b521f85a420b75eae07a90711e29c5b250d&rid=giphy.gif")no-repeat !important;
    width:380px;
    height:215px;
    border-radius: 0%;
border:none;
z-index:101;  

  }
  &.image-hovered-5{
    background:url("https://media0.giphy.com/media/5zgVnlKAijw22ZScnh/giphy.gif")no-repeat fixed center!important;
    width:300px;
    height:400px;
    border-radius: 0%;
border:none;      
z-index:101;

  }


`
