import React from "react";

import { Container, Icon } from "./button.styles";
import { IButtonProps } from "./button.types";
import useButton from "./hooks/useButton";

const BoilerPlateComponent: React.FC<IButtonProps> = (props) => {
  // # lets and consts
  const { handleClick, buttonCustom } = useButton(props);
  // # end

  // # useEffects
  // # end

  // # methods
  // # end

  // # render methods
  // # end

  return (
    <Container
      backgroundColor={buttonCustom.button.backgroundColor}
      hoverColor={buttonCustom.button.hoverColor}
      onClick={() => handleClick}
      iconColor="tste"
      iconColorHover="teste"
      label={buttonCustom.button.label}
    >
      <Icon
        iconName={"teste"}
        iconColor={buttonCustom.icon.iconColor}
        iconColorHover={buttonCustom.icon.iconColorHover}
      />

      {buttonCustom.button.label}
    </Container>
  );
};

export default BoilerPlateComponent;
