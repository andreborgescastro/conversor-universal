import React from "react";
import { Home } from '@styled-icons/material'
import Button from "./components/Button/Button";


const App: React.FC = () => (
  <>

    <Button
      onClick={() => alert("Click de dentro do pai que chamou o hook do filho")}
      label={"teste"}
      backgroundColor={"#2525e2"}
      hoverColor={"#7159c1"}
      icon={<Home height={16} width={16} style={{marginRight: 8}}/>}
    >
    </Button>

  </>
);
export default App;
