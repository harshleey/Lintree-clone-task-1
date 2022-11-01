import React from 'react'

export default function Link({link}) {
  return (
        <a id={link.idName} href={`https://${link.link}`} title={link.title}
        target="_blank" className='button'>{link.webName}</a>
      
  )
}
