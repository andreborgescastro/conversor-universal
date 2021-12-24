import React, { Children } from "react";

import { Container } from "./button.styles";
import { IButtonProps } from "./button.types";
import useButton from "./hooks/useButton";

const Button: React.FC<IButtonProps> = (props) => {

    const { handleClick, buttonHook } = useButton(props);

    return (

        <Container
            backgroundColor={buttonHook.backgroundColor}
            hoverColor={buttonHook.hoverColor}
            onClick={handleClick}
            label={buttonHook.label}
        >
            {buttonHook.icon}
            {buttonHook.label}
        </Container>

    );
};

export default Button;
