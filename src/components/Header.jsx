import React from 'react'
import shareicon from "../assets/share_icon.svg"
import moreicon from "../assets/more-icon.svg"
import { useState, useEffect } from 'react'


export default function Header() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)


    useEffect(() => {
        function watchWidth() {
            setWindowWidth(window.innerWidth)
        }
        
        window.addEventListener("resize", watchWidth)
        
        return function() {
            window.removeEventListener("resize", watchWidth)
        }
    }, [])

  return (
    <header id='header'>
        <a href="" id='share-icon'><img src={windowWidth > 700 ? shareicon : moreicon} alt="share-icon" /></a>
        
    </header>
  )
}


