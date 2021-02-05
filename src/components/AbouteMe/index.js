import React from 'react'

import { Container, Button } from 'react-bootstrap';
import CV from '../../images/Marco_Ferreira_-_.pdf';

import './styles.scss'

export default function AbouteMe() {
    return(
        <Container className="aboute-me">
            <p>
                Me chamo Marco Antonio Veloso Ferreira formato em ciências da 
                computação pela faculdade CEUT em 2016 moro em Teresina - PI 
                casado, pai de um casal de filhos atualmente sou web design e 
                trabalho no desenvolvimento de sistemas web, sites, landing pages,
                blog, ecommerce etc. utilizo as seguintes ferramentas no 
                desenvolvimento com gatysby, react, nodejs,nextjs, strapi, 
                graphql e etc. Trabalho com intuito na transformação num mundo 
                melhor e mais justo.
            </p>
            <hr />

            <a href={CV} target="_blank">
                <Button primary>Mostrar CV</Button>
            </a>
            
        </Container>
    )
}