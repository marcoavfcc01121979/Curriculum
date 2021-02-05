import React from "react"
import { Container, Row, Col, Card, Button } from 'react-bootstrap'

import BasicLayout from "../layouts/BasicLayout"

import projetos from '../../utils/projetos'

import './projetos.scss'

export default function Projetos() {
  return(
    <BasicLayout menuColor="#000">
      <Container className="projetos">
        <h1>Projetos</h1>

        <Row>
          {projetos.map((projeto, index) => (
            <Col key={index} xs={12} sm={4} className="projeto">
              <Card>
                <div className="image" style={{ backgroundImage: `url("${projeto.image}")` }} />
                <Card.Body>
                  <Card.Title>{projeto.title}</Card.Title>
                  <Card.Text>
                    {projeto.description}
                  </Card.Text>
                  <a href={projeto.url} target="_blank">
                    <Button variant="primary">Ver projeto</Button>
                  </a>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </BasicLayout>
  )
} 
