import { LinkedinLogo } from 'phosphor-react';
import { MenuMobileContainer } from './menuMobileStyle';

export interface MenuMobileProps {
    menuMobileOpen: boolean;
}

export function MenuMobile({menuMobileOpen}: MenuMobileProps) {
    return (
        <MenuMobileContainer menuMobileOpen={menuMobileOpen}>
            <a href="#spaceBackground" className="navigationInside">
                HOME
            </a>
            <a href="#tecnologies" className="navigationInside">
                TECNOLOGIAS
            </a>
            <a href="#projects" className="navigationInside">
                PROJETOS
            </a>
            <a href="https://whatsa.me/5515996487302" target={"_blank"}>
                <LinkedinLogo size={30} weight={"bold"} color="#5ff" />
            </a>
            <a href="#linkedIn" id="whatsAppMobile">Contato</a>
        </MenuMobileContainer>
    );
}