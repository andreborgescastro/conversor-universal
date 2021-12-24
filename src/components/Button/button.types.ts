import { ReactChildren } from "react";
import { JsxChild, JsxElement } from "typescript";

export interface IButtonProps {
    /* Props */
    label: string;
    backgroundColor: string;
    hoverColor: string;
    // icon: React.ReactNode;
    icon?: JSX.Element;

    /* Function Props */
    onClick: Function;
}





