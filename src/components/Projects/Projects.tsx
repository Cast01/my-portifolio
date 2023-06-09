import { useState } from 'react';
import {ProjectsContainer} from './projectsStyle'

import projectImage1 from '../../assets/project-img1.png'
import projectImage2 from '../../assets/project-img2.png'
import projectImage3 from '../../assets/project-img3.png'

import nlw_i_eSport from '../../assets/nlw-i-eSport.png'
import youtubeColne from '../../assets/youtube-clone.png'
import nlwCopa from '../../assets/nlw-copa.png'
import todo from '../../assets/todo.png'
import ignite_feed from '../../assets/ignite-feed.png'
import pokedex from '../../assets/pokedex.png'
import ignite_timer from '../../assets/ignite-timer.png'

// pegar a imagem dos projeto no guithub dela e usar para exemplos aqui.

export function Projects() {
    const [numeroAba, setNumeroAba] = useState<number>(0);

    const arr = [
        [
            {name: 'NLW e-Sport', image: nlw_i_eSport, link: "https://nlw-ignite-e-sport-vercel.vercel.app/",},
            {name: 'Youtube Clone', image: youtubeColne, link: "https://youtube-clone-xi-opal.vercel.app/"},
            {name: 'NLW COPA', image: nlwCopa, link: "https://nlw-copa-next-js-responsive.vercel.app/"},
            {name: 'ToDo', image: todo, link: "https://vercel.com/cast01/rocketseat-ignite-react-js-desafio-todo-list"},
            {name: 'Ignite Feed', image: ignite_feed, link: "https://ignite-feed-six-pi.vercel.app/"},
            {name: 'Pokedex JS', image: pokedex, link: "https://pokedex-js-chi.vercel.app/"},
        ],
        [
            {name: 'Ignite Timer', image: ignite_timer, link: "https://ignite-timer-five-peach.vercel.app/"},
            {name: 'aba2', image: projectImage2, link: "https://nlw-ignite-e-sport-vercel.vercel.app/"},
            {name: 'aba2', image: projectImage2, link: "https://nlw-ignite-e-sport-vercel.vercel.app/"},
            {name: 'aba2', image: projectImage2, link: "https://nlw-ignite-e-sport-vercel.vercel.app/"},
            {name: 'aba2', image: projectImage2, link: "https://nlw-ignite-e-sport-vercel.vercel.app/"},
            {name: 'aba2', image: projectImage2, link: "https://nlw-ignite-e-sport-vercel.vercel.app/"},
        ],
        [
            {name: 'aba3', image: projectImage3, link: "https://nlw-ignite-e-sport-vercel.vercel.app/"},
            {name: 'aba3', image: projectImage3, link: "https://nlw-ignite-e-sport-vercel.vercel.app/"},
            {name: 'aba3', image: projectImage3, link: "https://nlw-ignite-e-sport-vercel.vercel.app/"},
            {name: 'aba3', image: projectImage3, link: "https://nlw-ignite-e-sport-vercel.vercel.app/"},
            {name: 'aba3', image: projectImage3, link: "https://nlw-ignite-e-sport-vercel.vercel.app/"},
            {name: 'aba3', image: projectImage3, link: "https://nlw-ignite-e-sport-vercel.vercel.app/"},
        ]
    ]

    return (
        <ProjectsContainer>
            <ul>
                <h1 id="projects">Projetos</h1>
                <div id="Aba">
                    {
                        arr.map((_, i) => {
                            return (
                                <div
                                    onClick={() => setNumeroAba(i)}
                                    className={i === numeroAba ? "AbaAtiva" : ""}
                                >
                                    Lista {i+1}
                                </div>
                            );
                        })
                    }
                </div>
                <div id="SubItem">
                    {
                        arr[numeroAba].map((subItem, i) => {
                            return (
                                <div key={i} id="ProjectCarousel">
                                    <img src={subItem.image} alt="" />
                                    <div id="Description">
                                        <a href={subItem.link} target={"_blank"}>
                                            <strong id="SubItemHover">Projeto</strong>
                                        </a>
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
            </ul>
        </ProjectsContainer>
    );
}