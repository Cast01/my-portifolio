import { TecnologiesContainer } from "./tecnologiesStyle";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import './aliceCarouselStyleCSS/style.css'
import { CarouselItem } from "./CarouselItem/CarouselItem";

import html from '../../assets/html-image-300.png';
import css from '../../assets/css-image-300.png';
import js from '../../assets/js-image-300.png';
import reactjs from '../../assets/reactjs-image-2.png';
import typescript from '../../assets/typescript.jpg';
import styledComponent from '../../assets/styled-component.jpg';
import git from '../../assets/git-2.png';

export function Tecnologies() {
    const responsive = {
    0: { items: 1 },
    580: { items: 2 }
    };

    const staticItems = [
        {
            name: 'HTML',
            name2: '',
            image: html,
        },
        {
            name: 'CSS',
            name2: '',
            image: css,
        },
        {
            name: 'JS',
            name2: '',
            image: js,
        },
        {
            name: 'TypeScript',
            name2: '',
            image: typescript,
        },
        {
            name: 'ReactJS',
            name2: '',
            image: reactjs,
        },
        {
            name: 'Styled',
            name2: 'Component',
            image: styledComponent,
        },
        {
            name: 'GIT',
            name2: '',
            image: git,
        },
    ]

    const items = staticItems.map((language, index) => {
        return (
            <CarouselItem key={index} name={language.name} name2={language.name2} image={language.image} />
        );
    });

    return (
        <TecnologiesContainer>
                <h1 id="tecnologies">TECNOLOGIAS</h1>
                <AliceCarousel mouseTracking items={items} responsive={responsive} />
        </TecnologiesContainer>
    );
}