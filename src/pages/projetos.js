import React from "react"
import { Container, Row, Col, Card, Button } from 'react-bootstrap'

import BasicLayout from "../layouts/BasicLayout"
import './projetos.scss'

export default function Projetos() {
  return(
    <BasicLayout menuColor="#000">
      <Container className="projetos">
        <h1>Projetos</h1>

        <Row>
          <Col xs={12} sm={4} className="projeto">
            <Card>
              <div className="image" />
              <Card.Body>
                <Card.Title>Google</Card.Title>
                <Card.Text>
                  marco ferreira
                </Card.Text>
                <a href="#" target="_blank">
                  <Button variant="primary">Ver projeto</Button>
                </a>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </BasicLayout>
  )
} 
