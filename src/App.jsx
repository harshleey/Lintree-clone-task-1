import { useState } from 'react'
import Profile from './components/Profile'
import Header from './components/Header'
import Links from './components/Links'
import Social from './components/Social'
import Footer from './components/Footer'

function App() {

  return (
    <div className="container">
      <Header/>
      <Profile/>
      <Links/>
      <Social/>
      <Footer/>
    </div>
  )
}

export default App
