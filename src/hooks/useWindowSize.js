import { useState, useEffect } from "react"

export default function useWindowSize() {

  function getSize() {
    if (typeof window !== `undefined`) { 
    return {
     
      width: window.innerWidth,
      height: window.innerHeight,
    }
  }
  else{
    return{
      width:"1920",
      height:"1080"
    }

  }
  }
  

  const [windowSize, setWindowSize] = useState(getSize)

  useEffect(() => {
    function handleResize() {
      
      setWindowSize(getSize())
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return windowSize
}
