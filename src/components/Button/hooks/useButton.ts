import { IButtonProps } from "../button.types";

const useButton = (props: IButtonProps) => {

    // # start lets and consts
    const { backgroundColor, hoverColor, label, onClick, icon } = props;
    const message = 'Botão clicado';
    // # end

    // # useEffects
    // # end

    // # methods
    const handleClick = () => {
        onClick();
        console.log(message);
    };
    // # end


    // # export methods
    const buttonHook = {
        backgroundColor : backgroundColor, 
        hoverColor : hoverColor, 
        label : label,
        icon : icon,
    };

    return { buttonHook, handleClick };
    // # end

};

export default useButton;
