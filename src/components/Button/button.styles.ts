import styled from "styled-components";

import { IButtonPropsStyles, IIconPropsStyles } from "./button.types";

export const Container = styled.button<IButtonPropsStyles>`
    width: 200px;
    height: 50px;
    background-color: ${(props) => props.backgroundColor};
    border-style: none;
    border-radius: 10px;
    color: #fff;

    &:hover {
        background-color: ${(props) => props.hoverColor};
    }
`;

export const Icon = styled.i<IIconPropsStyles>`
    color: ${(props) => props.iconColor};

    &:hover {
        color: ${(props) => props.iconColorHover};
    }
`;






