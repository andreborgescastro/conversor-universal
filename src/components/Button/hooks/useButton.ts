import { useState } from "react";

import { IButtonProps } from "../button.types";

const useButton = (props: IButtonProps) => {

    // # lets and consts

    const { button, icon, onClick } = props;
    const message = 'Botão clicado';

    // # end

    // # useEffects
    // # end

    // # methods

    const handleClick = () => {
        alert(message)
    };

    // # end

    // # render methods
    // # end


    // # export methods
    const buttonCustom = {
        icon: icon,
        button: button,
    };

    return { buttonCustom, handleClick };
    // # end

};

export default useButton;
