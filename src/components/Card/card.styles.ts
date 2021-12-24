import styled from "styled-components";
import { ICardProps, ICardStyleProps } from "./card.types";


export const Container = styled.button<ICardStyleProps>`
    width: 300px;
    min-height: 250px;
    background-color: white;

    border-radius: 4px;
    
    border-left: 1px solid #f6f6f8;
    border-right: 1px solid #f6f6f8;
    
    border-top: 0px;
    border-bottom: 0px;

    color: #000;
    text-align: left;
    
    padding: 24px;

    &:hover {
        background-color: #f6f6f8;
    };

    & > p {
        text-transform: initial;
    };
    `;

