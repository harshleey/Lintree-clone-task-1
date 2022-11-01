import React from 'react'

export default function Link({link}) {
  return (
     
        <li className='link'
        >
        <a id={link.idName} href={`https://${link.link}`} 
        target="_blank" className='button'>{link.webName}</a></li>
      
  )
}
