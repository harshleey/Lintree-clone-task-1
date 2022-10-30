import React from 'react'

export default function Link({link}) {
  return (
     <ul>
        <li className='link' 
        id={link.idName}>
          <a href={`https://${link.link}`} 
          target="_blank">{link.webName}</a></li>
      </ul>
  )
}
