import { ICardProps } from "../card.types";

const useCard = (props: ICardProps) => {

    // # start lets and consts
    const { label, description, onClick, icon } = props;
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
    const cardHook = {
        label : label,
        description : description, 
        icon : icon,
    };

    return { cardHook, handleClick };
    // # end

};

export default useCard;
