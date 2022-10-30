import React from 'react'
import slacklogo from "../assets/slack.svg"
import githublogo from "../assets/github.svg"
// import {FaSlack} from "react-icons/fa"
// import {FaGithub} from "react-icons/fa"

export default function Social() {
  return (
    <section id='social-section'>
        <img src={slacklogo}/>
        <img src={githublogo}/>
    </section>
  )
}
