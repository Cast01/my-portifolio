import styled from 'styled-components';

export const TecnologiesContainer = styled.div`
    width: 100%;
    padding: 15px;
    padding-bottom: 70px;
    background: #2c2c2c;

    h1 {
        font-family: 'Silkscreen',cursive;
        color: #92f5ff;
        text-shadow: 0 0 5px #00e7ff, 0 0 10px #00e7ff, 0 0 20px #00e7ff, 0 0 40px #00e7ff;
        margin-bottom: 30px;
        max-width: 1300px;
        margin: 0px auto 30px;
        font-size: clamp(12px, 12vw, 62px);
        animation: tecnologies infinite 4s linear;
        position: relative;

        @keyframes tecnologies {

            0% {
                top: 0;
            }
            50% {
                top: -20px;
            }
            100% {
                top: 0;
            }
        }
    }

    .alice-carousel__stage {
        li {
            &:nth-child(1) {
                div {
                    #NameContainer {
                        #Name {
                            color: #ffbc9f;
                            text-shadow: 0 0 5px #ff996d, 0 0 10px #ff996d, 0 0 20px #ff996d, 0 0 40px #ff996d;
                        }
                    }
                }
            }
            &:nth-child(2) {
                div {
                    #NameContainer {
                        #Name {
                            color: #82b3cb;
                            text-shadow: 0 0 5px #039ae4, 0 0 10px #039ae4, 0 0 20px #039ae4, 0 0 40px #039ae4;
                        }
                    }
                }
            }
            &:nth-child(3) {
                div {
                    #NameContainer {
                        #Name {
                            color: #fff6b9;
                            text-shadow: 0 0 5px #ffef83, 0 0 10px #ffef83, 0 0 20px #ffef83, 0 0 40px #ffef83;
                        }
                    }
                }
            }
            &:nth-child(4) {
                div {
                    #NameContainer {
                        #Name {
                            color: #0091bb;
                            text-shadow: 0 0 5px #0084a7, 0 0 10px #0084a7, 0 0 20px #0084a7, 0 0 40px #0084a7;
                        }
                    }
                }
            }
            &:nth-child(5) {
                div {
                    #ImageContainer {
                        img {
                            animation: reactjs infinite linear 35s;

                            @keyframes reactjs {
                                0% {
                                    transform: rotate(0deg);
                                }
                                100% {
                                    transform: rotate(360deg);
                                }
                            }
                        }
                    }
                    #NameContainer {

                        #Name {
                            color: #78a3af;
                            text-shadow: 0 0 5px #05a5d1, 0 0 10px #05a5d1, 0 0 20px #05a5d1, 0 0 40px #05a5d1;
                        }
                    }
                }
            }
            &:nth-child(6) {
                div {
                    #NameContainer {
                        flex-direction: column;

                        #Name {
                            color: #e89e71;
                            text-shadow: 0 0 5px #e89e71, 0 0 10px #e89e71, 0 0 20px #e89e71, 0 0 40px #e89e71;
                        }
                        #Name2 {
                            color: #e89e71;
                            text-shadow: 0 0 5px #e89e71, 0 0 10px #e89e71, 0 0 20px #e89e71, 0 0 40px #e89e71;
                        }
                    }
                }
            }
            &:nth-child(7) {
                div {
                    #NameContainer {
                        #Name {
                            color: #d18073;
                            text-shadow: 0 0 5px #dd4b34, 0 0 10px #dd4b34, 0 0 20px #dd4b34, 0 0 40px #dd4b34;
                        }
                    }
                }
            }
        }
    }
`;