import styled from "styled-components"

export const ProjectsContainer = styled.div`
position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  overflow: hidden;
  background: ${props => props.theme.text};
  color: ${props => props.theme.background};
cursor:none;
p{
  width:3%;
}
.arrow {
      width: 60px;
      height: 80px;
      display: block;
      position: relative;
      overflow: hidden;
      transform: rotate(180deg) scale(0.6);
      
}
      svg {
        position: absolute;
        top: 16px;
        left: -48px;
        width: 108px;
        path {
          fill: ${props => props.theme.background};
        }
      }
    }
.item-container{
    width: 700px;
    height: 420px;
    margin: 300px auto;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    &:nth-child(1) {
      margin-top: 100px;
    }
    &:last-child {
      margin-bottom: 200px;
    }
}

.scroll{
position: relative;
margin-bottom: 400px;
display: flex;
justify-content: center;
align-items: center;

}   
section{
width:70%;

}


#a15{
  margin-left:34rem;
}
#a14{
  margin-right:24rem;
}
#a13{
  margin-left:34rem;
}
#a12{
  margin-right:24rem;
}
#a11{
  margin-left:34rem;
}
#a10{
  margin-right:24rem;
}
#a9{
  margin-left:34rem;
}
#a8{
  margin-right:24rem;
}
#a7{
  margin-left:34rem;
}
#a6{
  margin-right:24rem;

}
#a5{
  margin-left:34rem;
}
#a4{
  margin-right:24rem;
}
#a3{
margin-left:34rem;
}
#a2{
margin-right:24rem;
}
#a1{
  margin-left:34rem;
}
#a0{
  margin-right:24rem;

}

section img {  
width: 100%;

/*position: absolute;*/
}
@media only screen and (max-width: 858px ) {

    .item-container{
        width:auto;
        margin: 100px auto;
    }
    .arrow{
      transform: rotate(180deg) scale(0.5);
    z-index:999;
    }
h2{
font-size: 1.7em;

}    



 
#a15{
  margin-left:0;
}
#a14{
  margin-right:0;
}
#a13{
  margin-left:0;
}
#a12{
  margin-right:0;
}
#a11{
  margin-left:0;
}
#a10{
  margin-right:0;
}
#a9{
  margin-left:0;
}
#a8{
  margin-right:0;
}
#a7{
  margin-left:0;
}
#a6{
  margin-right:0;

}
#a5{
  margin-left:0;
}
#a4{
  margin-right:0;
}
#a3{
margin-left:0;
}
#a2{
margin-right:0;
}
#a1{
  margin-left:0;
}
#a0{
  margin-right:0;

}


`

 
export const ProjectsHeader = styled.h2 `
font-family: 'Montserrat', sans-serif;
position: absolute;
top:86%;
left:0.7em;
font-size: 2.456em;
font-weight: bold;
margin-bottom: 10px;

mix-blend-mode: difference;
  @media only screen and (max-width: 858px ) {
position:absolute;
top:73%;
left:0em;


  } 
`



