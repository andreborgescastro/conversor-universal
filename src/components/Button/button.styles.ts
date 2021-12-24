import styled from "styled-components";
import { IButtonProps } from "./button.types";


export const Container = styled.button<IButtonProps>`
    width: 96px;
    height: 32px;
    background-color: ${(props) => props.backgroundColor};
    border-style: none;
    border-radius: 4px;
    color: #fff;

    &:hover {
        background-color: ${(props) => props.hoverColor};
    }
    `;

