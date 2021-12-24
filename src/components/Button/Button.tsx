import React, { Children } from "react";

import { Container } from "./button.styles";
import { IButtonProps } from "./button.types";
import useButton from "./hooks/useButton";

const Button: React.FC<IButtonProps> = (props) => {

    const { handleClick, buttonCustom } = useButton(props);

    return (

        <Container
            backgroundColor={buttonCustom.backgroundColor}
            hoverColor={buttonCustom.hoverColor}
            onClick={handleClick}
            label={buttonCustom.label}
        >
            {buttonCustom.icon}
            {buttonCustom.label}
        </Container>

    );
};

export default Button;
