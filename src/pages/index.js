import React from "react"

import BasicLayout from "../layouts/BasicLayout"

import Profile from '../components/Profile'
import AbouteMe from "../components/AbouteMe"

export default function IndexPage() {
  return(
    <BasicLayout>
      <Profile />
      <AbouteMe />
    </BasicLayout>
  )
} 
