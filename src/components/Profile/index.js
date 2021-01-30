import React from 'react'

import { Container, Row, Col, Image } from 'react-bootstrap';
import profileImage from '../../images/marco.jpg'
import Social from './Social';

import style from './styles.scss';

const data = [
    {
        title: 'Idade: ',
        info: '40 anos',
    },
    {
        title: 'Endereço: ',
        info: 'Rua Artur Bernades,1957 - Teresina-PI',
    },
    {
        title: "E-mail: ",
        info: "marcoavfcc@gmail.com"
    },
    {
        title: "Telefone: ",
        info: "+55 086 99547-7980"
    }
]

export default function Profile() {
    return(
        <div className="profile">
            <div className="wallpaper" />
            <div className="dark" />
            <Container className="box">
                <Row className="info">
                    <Col xs={12} md={4}>
                        <Image src={profileImage} fluid />
                    </Col>
                    <Col xs={12} md={8} className="info__data">
                        <span>Olá</span>
                        <p>Marco Ferreira</p>
                        <p>Frontend Developer</p>
                        <hr />
                        <div className="more-info">
                            {data.map((item, index) => (
                                <div key={index} className="item">
                                    <p>{item.title}</p>
                                    <p>{item.info}</p>
                                </div>
                            ))}
                        </div>
                    </Col>
                </Row>
                <Social />
            </Container>
        </div>
    )
}