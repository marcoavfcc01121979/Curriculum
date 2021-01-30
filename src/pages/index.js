import React from "react"

import BasicLayout from "../layouts/BasicLayout"

import Profile from '../components/Profile'

export default function IndexPage() {
  return(
    <BasicLayout>
      <Profile />
      <h1 className="title">A pagina home</h1>
    </BasicLayout>
  )
} 
