import styled from 'styled-components';

export const CarouselItemContainer = styled.div`
    width: 100%;
    height: 300px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    #ImageContainer {
        width: 100%;
        height: 70%;
        display: flex;
        justify-content: center;
        align-items: center;

        img {
            width: 90%;
            height: 90%;
            object-fit: contain;
        }
    }

    #NameContainer {
        width: 100%;
        height: 30%;
        display: flex;
        justify-content: center;
        align-items: center;

        #Name {
            //JS color: #fff6b9; text-shadow: #ffef83;
            //HTML color: #ffbc9f; text-shadow: #ff996d;
            //CSS color: #82b3cb; text-shadow: #039ae4;

            letter-spacing: 7px;
            position: relative;
            font-weight: bold;
            left: 8px;
            font-size: clamp(27px, 6vw, 35px);
        }
        #Name2 {
            //JS color: #fff6b9; text-shadow: #ffef83;
            //HTML color: #ffbc9f; text-shadow: #ff996d;
            //CSS color: #82b3cb; text-shadow: #039ae4;

            letter-spacing: 7px;
            position: relative;
            font-weight: bold;
            left: 8px;
            font-size: clamp(27px, 6vw, 35px);
        }
    }
`;