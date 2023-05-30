import styled from "styled-components";

export const ApresentationContainer = styled.main`
    width: 100%;
    height: 100vh;
    position: relative;
    padding-top: 60px;
    display: flex;
    justify-content: center;

    #spaceBackground {
        z-index: -1;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    #MaxWidth {
        width: 100%;
        max-width: 1300px;
        height: 100%;
        display: flex;
    }

    #DescriptionBox {
        height: 100%;
        width: 55%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0 15px;

        @media (max-width: 1000px) {
            backdrop-filter: blur(5px);
            background: rgba(0, 0, 0, .4);
        }

        @media (max-width: 1000px) {
            width: 100%;
            height: calc(100% - 60px);
            position: absolute;
            z-index: 20;
        }
    }

    #Description {
        width: 100%;
        max-width: 700px;
        padding: 15px;

        strong {
            background: linear-gradient(to right, #ff5efa, #5c0098);
            width: fit-content;
            padding: 0 15px;
            height: 45px;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-bottom: 15px;
            font-size: clamp(12px, 4.3vw, 16px);
        }

        h1 {
            margin-bottom: 55px;
            font-size: clamp(15px, 6vw, 34px);
            
            span {
                font-family: 'Silkscreen',cursive;
                color: #33ff00;
            }

            #FlashingStraightBar {
                animation: flashing 1s linear infinite;

                @keyframes flashing {
                    0% {
                        color: transparent;
                    }
                    50% {
                        color: #33ff00;
                    }
                    100% {
                        color: transparent;
                    }
                }
            }
        }

        p {
            font-size: clamp(12px, 5vw, 20px);
        }

        a {
            height: 45px;
            padding: 0 15px;
            display: flex;
            justify-content: center;
            align-items: center;
            outline: 1px solid white;
            margin-top: 15px;
            font-weight: bold;
            letter-spacing: 5px;

            @media (min-width: 725px) {
                display: none;
            }
        }
    }

    #AstronautBox {
        width: 45%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;

        @media (max-width: 1000px) {
            width: 100%;
        }

        #Astronaut {
            width: 100%;
            max-width: 450px;
            position: relative;

            animation: astronaut 10s infinite linear;

            @keyframes astronaut {
                0% {
                    top: 0px;
                }

                25% {
                    top: 20px;
                }

                50% {
                    top: 0px;
                }

                75% {
                    top: -20px;
                }

                100% {
                    top: 0;
                }
            }
        }
    }
`;