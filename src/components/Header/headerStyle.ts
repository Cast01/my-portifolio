import styled from "styled-components";

export const HeaderContainer = styled.header`
    backdrop-filter: blur(5px);
    background: rgba(91, 91, 91, .5);
    width: 100%;
    height: 60px;
    padding: 15px;
    position: fixed;
    top: 0;
    z-index: 99;

    @media (min-width: 1300px) {
        display: flex;
        justify-content: center;
    }

    #center {
        width: 100%;
        max-width: 1300px;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    #logo div {
        font-family: 'Silkscreen', cursive;
        font-size: 20px;
        animation-name: logo;
        animation-duration: 3s;
        animation-iteration-count: infinite;

        &:nth-child(2) {
            margin-left: 10px;
        }

        @keyframes logo {
            0% {
                color: cyan;
            }
            50% {
                color: crimson;
            }
            100% {
                color: cyan;
            }
        }
    }

    #menuDesktop {
        margin-left: auto;
        margin-right: 25px;
        display: flex;
        align-items: center;
        gap: 15px;

        @media (max-width: 725px) {
            display: none;
        }

        a {
            &:nth-child(3) {
                margin-right: 20px;
            }
        }

        .navigationInside {
            font-weight: bold;

            &:hover {
                text-decoration: underline;
            }
        }
    }

    #whatsAppDesktop {
        background: transparent;
        outline: 1px solid white;
        padding: 10px 15px;

        @media (max-width: 725px) {
            display: none;
        }
    }

    #menuList {
        @media (min-width: 725px) {
            display: none;
        }
    }

    #closeMenuList {
        @media (min-width: 725px) {
            display: none;
        }
    }
`;