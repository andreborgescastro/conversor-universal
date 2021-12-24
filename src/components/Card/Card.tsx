import React from "react";

import { Container } from "./card.styles";
import { ICardProps } from "./card.types";
import useCard from "./hooks/useCard";

const Card: React.FC<ICardProps> = (props) => {

    const { cardHook, handleClick } = useCard(props);

    return (
        <Container>
            <p>
                {cardHook.icon}
            </p>
            <h2>
                {cardHook.label}
            </h2>
            <p>
                {cardHook.description}
            </p>
        </Container >
    );
};

export default Card;
