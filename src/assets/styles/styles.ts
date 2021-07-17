import styled from 'styled-components';
import { variables } from './variables';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 90rem;
    width: 100%;
    margin: 0 auto 0 auto;
`
export const Brand = styled.a`
    font-style: normal;
    font-weight: normal;
    font-size: 32px;
    line-height: 40px;
    text-align: center;
    color: ${variables.colors.white};
    margin: 0 auto 0 auto;
`

export const Main = styled.main`
    h1 {
        font-size: 2.25rem;
        line-height: 3rem;
        color: ${variables.colors.white};
    }

    h2 {
        font-size: 1rem;
        line-height: 1.5rem;
        color: ${variables.colors.darkBrown};
    }
`

export const Header = styled.header`
    height: 2.5625rem;
    width: 100%;
    display: flex;
`

export const MainContent = styled.section`
    display: flex;
    place-content: center;
    position: relative;

    min-height: 600px;

    h1 {
        position: absolute;
        top: 40px;
        left: 15%;
        z-index: 2;
        max-width: 23.4375rem;
    }

    h2 {
        z-index: 2;
        position: absolute;
        bottom: 25%;
        right: 20%;
        max-width: 9.6875rem;
    }

    .main-img {
        margin: auto;
        height: 26.1875rem;
        z-index: 1;
    }

    .second-img {
        position: absolute;
        border-radius: 50%;
        height: 15.1875rem;
        width: 15.1875rem;
        z-index: 2;
        right: 26%;
        top: 16%;
    }

    .svg1 {
        position: absolute;
        bottom: 0;
        left: 30%;
    }

    .svg2 {
        position: absolute;
        right: 30%;
    }

    .svg3 {
        position: absolute;
        right: 30%;
        bottom: -10%;
    }
`

export const SecondContent = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    margin-top: 3.25rem;
    transform: translate(0, 60px);

    position: relative;

    .img1 {
        width: 19.5rem;
        height: fit-content;
    }

    .img2 {
        width: 22.8125rem;
        height: fit-content;

        margin-top: 10rem;
    }

    div {
        margin: 5rem;

        h2 {
            margin-top: 1.25rem;
        }
    }

`

export const ThirdContent = styled.section`
    background-color: ${variables.colors.green};
    min-height: 37.5rem;
    padding: 5rem 0 0 0;
    
`

export const Slider = styled.section``

export const Content = styled.section``

export const Photos = styled.section``

export const Videos = styled.section``

export const MoreInfo = styled.section``

export const Details = styled.section``

export const Social = styled.section``

export const Footer = styled.footer``