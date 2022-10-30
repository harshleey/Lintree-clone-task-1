import React from 'react'
import slacklogo from "../assets/slack.svg"
import githublogo from "../assets/github.svg"


export default function Social() {
  return (
    <section id='social-section'>
        <a href=""><img src={slacklogo}/></a> 
        <a href="https://github.com/harshleey"><img src={githublogo}/></a> 
    </section>
  )
}
