import { LinkedinLogo, List, X } from "phosphor-react";
import { useContext, useEffect, useState } from "react";
import { MenuMobileContext } from "../../contexts/MenuMobileContext";
import { HeaderContainer } from "./headerStyle";
import { MenuMobile } from './MenuMobile/MenuMobile';

export function Header() {

    const {menuMobileOpen, setMenuMobileOpen} = useContext(MenuMobileContext);

    return (
        <HeaderContainer>
            <div id="center">
                <div id="logo">
                    <div>Meu</div>
                    <div>Portifólio</div>
                </div>
                <ul id="menuDesktop">
                    <a href="#spaceBackground" className="navigationInside">
                        HOME
                    </a>
                    <a href="#tecnologies" className="navigationInside">
                        TECNOLOGIAS
                    </a>
                    <a href="#projects" className="navigationInside">
                        PROJETOS
                    </a>
                    <a href="#">
                        <LinkedinLogo size={30} weight={"bold"} color="#5ff" />
                    </a>
                </ul>
                <a href="https://whatsa.me/5515996487302" target={"_blank"} id="whatsAppDesktop">Contato</a>
                {
                    menuMobileOpen ? (
                        <X size={30} id="closeMenuList" onClick={() => setMenuMobileOpen(false)} />
                    ) : (
                        <List size={30} id="menuList" onClick={() => setMenuMobileOpen(true)} />
                    )
                }
                <MenuMobile menuMobileOpen={menuMobileOpen} />
            </div>
        </HeaderContainer>
    );
}