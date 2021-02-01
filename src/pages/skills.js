import React from "react"

import { Container } from 'react-bootstrap'
import ListSkills from "../components/ListSkills";

import BasicLayout from "../layouts/BasicLayout";
import './skills.scss';

const skills = [
  { type: "Css", level: 70 },
  { type: "Html", level: 85 },
]

export default function IndexPage() {
  return(
    <BasicLayout menuColor="#000">
      <Container className="skills">
        <div className="skills__block">
          <h2>Frontend</h2>
          <ListSkills  skills={skills} />
        </div>
      </Container>
    </BasicLayout>
  )
} 
