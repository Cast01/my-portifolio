import { ApresentationContainer } from "./apresentationStyle";
import spaceBg from '../../assets/banner-bg.png';
import astronaut from '../../assets/astronaut-img.svg';
import { Typewriter } from "react-simple-typewriter";

export function Apresentation() {
    return (
        <ApresentationContainer>
            <img src={spaceBg} alt="" id="spaceBackground" />
            <div id="MaxWidth">
                <div id="DescriptionBox">
                    <div id="Description">
                        <strong>Bem vindo ao meu portifólio</strong>
                        <h1>
                            Olá, sou Gabriel.&nbsp;
                            <Typewriter words={['Desenvolvedor Front-End.']} />
                            <span id="FlashingStraightBar">|</span>
                        </h1>
                        <p>Um resumo de mim pra vocês. Sou uma pessoa reservada, adoro gatos e sou um pouco alérgico a eles :c, gosto de jogar Dota2, amo achocolatado e café e estou a procura de um emprego na área de desenvovimento Front-End. Um resuminho ai, fuii.</p>
                        <a href="https://whatsa.me/5515996487302" target={"_blank"}>Contato</a>
                    </div>
                </div>
                <div id="AstronautBox">
                    <img src={astronaut} alt="" id="Astronaut" />
                </div>
            </div>
        </ApresentationContainer>
    );
}