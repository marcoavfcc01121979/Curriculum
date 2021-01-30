import styled from 'styled-components'
import Icons from '../../Icons'

export const Wrapper = styled.div`
    background-color: #0098d3;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 25px 0;
`;

export const GitIcon = styled(Icons.Git)`
    color: #fff;
    cursor: pointer;
    margin-right: 20px;
    width: 35px;
    &:hover {
        color: gray;
    }
`
export const TwitterIcon = styled(Icons.Twitter)`
    color: #fff;
    cursor: pointer;
    margin-right: 20px;
    width: 35px;
    &:hover {
        color: gray;
    }
`

export const InstagramIcon = styled(Icons.Instagram)`
    color: #fff;
    cursor: pointer;
    margin-right: 20px;
    width: 35px;
    &:hover {
        color: gray;
    }
`

export const LinkedinIcon = styled(Icons.Linkedin)`
    color: #fff;
    cursor: pointer;
    margin-right: 20px;
    width: 35px;
    &:hover {
        color: gray;
    }
`