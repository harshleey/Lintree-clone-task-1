import React from 'react'

export default function Link({link}) {
  return (
     
        <li
        id={link.idName}>
        <a href={`https://${link.link}`} 
        target="_blank">{link.webName}</a></li>
      
  )
}
