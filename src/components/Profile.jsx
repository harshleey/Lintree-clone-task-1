import React from 'react'
import profileimage from "../assets/profile_img.jpeg"
import imagehover from "../assets/img-hover.svg"
import imagefocused from "../assets/img-focused.svg"

export default function Profile() {
  return (
    <div className="profile-container">
      <div id='profile-section'>
          <img src={profileimage} alt="profile_image" id="profile__img"/>
      </div>
      {/* <img src={imagehover} className="image_hover"/>
      <img src={imagefocused} className="image_focused"/> */}

      <div className="profile-content">
        <p id="twitter">Adebola_xo</p>
        <p id="slack">Wonuola</p>
      </div>
    </div>
   
  )
}
