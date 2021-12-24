import styled from "styled-components";
import { IButtonProps } from "./button.types";


export const Container = styled.button<IButtonProps>`
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

