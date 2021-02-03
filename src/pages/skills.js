import React from "react"

import { Container } from 'react-bootstrap'
import ListSkills from "../components/ListSkills";

import { frontendSkills, frontendSkillsCollors, backendSkillsCollors, backendSkills } from '../../utils/skills'
import BasicLayout from "../layouts/BasicLayout";
import './skills.scss';

export default function IndexPage() {
  return(
    <BasicLayout menuColor="#000">
      <Container className="skills">
        <div className="skills__block">
          <h2>Frontend</h2>
          <ListSkills  skills={frontendSkills} colors={frontendSkillsCollors} />
        </div>
        <div className="skills__block">
          <h2>Backend</h2>
          <ListSkills  skills={backendSkills} colors={backendSkillsCollors} />
        </div>
      </Container>
      <Container className="skills">
      </Container>
    </BasicLayout>
  )
} 
