export interface IButtonProps {
    /* Props */
    button: IButtonPropsStyles;
    icon: IIconPropsStyles;

    /* Function Props */
    onClick: Function;
}

export interface IButtonPropsStyles {
    label: string;
    backgroundColor: string;
    hoverColor: string;
    iconColor: string;
    iconColorHover: string;
}

export interface IIconPropsStyles {
    iconName: string;
    iconColor: string;
    iconColorHover: string;
}

