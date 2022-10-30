import React from 'react'
import image from "../assets/profile_img.jpeg"

export default function Profile() {
  return (
    <section id='profile-section'>
        <img src={image} alt="profile_image" id="profile_id"/>
        <p id="twitter">Adebola_xo</p>
        <p id="slack">Wonuola</p>
    </section>
  )
}
