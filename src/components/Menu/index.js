import React from 'react'
import { Link } from 'gatsby'
import { Container } from 'react-bootstrap'

import style from './styles.scss';

export default function Menu({ menuColor }) {
    return(
        <header className="menu" style={{ backgroundColor: menuColor || "transparent" }}>
            <Container>
                <ul>
                    <li><Link to="/">Inicio</Link></li>
                    <li><Link to="/skills">Habilidades</Link></li>
                    <li><Link to="/projetos">Projetos</Link></li>
                </ul>
            </Container>
        </header>
    )
}