import styled from 'styled-components';

import { MenuMobileProps } from './MenuMobile';

export const MenuMobileContainer = styled.ul`
    position: absolute;
    top: 60px;
    width: 85vw;
    height: calc(100vh - 60px);
    right: 0;
    backdrop-filter: blur(5px);
    background: rgba(0, 0, 0, .6);
    display: ${({menuMobileOpen}: MenuMobileProps) => menuMobileOpen ? "flex" : "none"};
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 25px;

    a {
        &:nth-child(3) {
            margin-bottom: 15px;
        }
        &:nth-child(4) {
            margin-bottom: 25px;
        }
    }

    #whatsAppMobile {
        background: transparent;
        outline: 1px solid white;
        padding: 10px 15px;
    }
`;