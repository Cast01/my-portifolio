import { CarouselItemContainer } from "./carouselItemStyle";

interface CaouselItemProps {
    name: string;
    name2: string;
    image: string;
}

export function CarouselItem({name, name2, image}: CaouselItemProps) {
    return (
        <CarouselItemContainer>
            <div id="ImageContainer">
                <img src={image} alt="" />
            </div>
            <div id="NameContainer">
                <p id="Name">{name}</p><br />
                <p id="Name2">{name2}</p>
            </div>
        </CarouselItemContainer>
    );
}