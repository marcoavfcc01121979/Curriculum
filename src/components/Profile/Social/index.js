import { func } from 'prop-types';
import React from 'react';

import * as S from './styles';

const SocialMedia = [
    {
        icon: <S.TwitterIcon />,
        link: "https://twitter.com/home"
    },
    {
        icon: <S.GitIcon />,
        link: "https://github.com/marcoavfcc01121979"
    },
    {
        icon: <S.InstagramIcon />,
        link: "https://www.instagram.com/marcoavfcc/"
    },
    {
        icon: <S.LinkedinIcon />,
        link: "https://www.linkedin.com/in/marco-ferreira-8a469a190/"
    }
]

export default function Social() {
    return(
        <S.Wrapper>
            {SocialMedia.map((item, index) => (
                <div key={index}>
                    <a href={item.link} target="_blank" rel="noreferrer noopener">
                        {item.icon}
                    </a>
                </div>
            ))}
        </S.Wrapper>
    )
}