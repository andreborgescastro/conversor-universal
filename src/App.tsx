import React from "react";
import Button from "./components/Button/Button";

const App: React.FC = () => (
  <Button
    onClick={() => alert("Click de dentro do pai que chamou o filho")}
    button={{
      label: "teste",
      backgroundColor: "#0000ff",
      hoverColor: "#7159c1",
      iconColor: "teste",
      iconColorHover: "teste",
    }}
    icon={{
      iconColor: "#fff",
      iconColorHover: "#d8d8d8",
      iconName: "teste",
    }}
  />
);
export default App;
