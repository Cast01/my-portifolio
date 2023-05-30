import styled from 'styled-components';

export const ProjectsContainer = styled.section`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding: 45px 15px 35px;
    background: #121212;

    ul {
        width: 100%;
        max-width: 1300px;

        h1 {
            font-size: clamp(12px, 12vw, 62px);
            margin-bottom: 40px;
            display: flex;
            justify-content: flex-end;
            font-family: 'Silkscreen',cursive;
            color: #92f5ff;
            text-shadow: 0 0 5px #00e7ff, 0 0 10px #00e7ff, 0 0 20px #00e7ff, 0 0 40px #00e7ff;
        }
    }

    #Aba {
        display: flex;
        border-radius: 25px;
        overflow: hidden;
        outline: 1px solid #c1c1c1;
        background: #3e3e3e;
        
        div {
            cursor: pointer;
            width: calc(100% / 3);
            height: 55px;
            display: flex;
            justify-content: center;
            align-items: center;
            
            &:nth-child(2) {
                border-left: 1px solid #c1c1c1;
                border-right: 1px solid #c1c1c1;
            }
        }

        .AbaAtiva {
            background: linear-gradient(to right, #ff6bf2, #8830c2);
        }
    }

    #SubItem {
        display: flex;
        padding-top: 40px;
        justify-content: center;
        flex-wrap: wrap;
        gap: 15px;
    }
    
    #ProjectCarousel {
        position: relative;
        width: 300px;
        overflow: hidden;
        cursor: pointer;
        border-radius: 17px;
        
        &:hover {
            #Description {
                a {
                    transition: 1s;
                    top: 0;
                }
            }
        }

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        #Description {
            a {
                border-radius: 17px;
                font-size: clamp(21px, 2.5vw, 26px);
                cursor: pointer;
                width: 100%;
                height: 100%;
                background: rgba(255, 155, 84, .4);
                backdrop-filter: blur(5px);
                position: absolute;
                top: -100%;
                z-index: 10;
                display: flex;
                justify-content: center;
                align-items: center;
                
                strong {
                    padding: 5px 15px;
                    border-radius: 5px;
                    background: #4a00ff;
                    letter-spacing: 2px;

                    &:hover {
                        transition: .5s;
                        background: #6f35ff;
                    }
                }
            }
        }

        #SubItemHover {
            
        }
    }
`;