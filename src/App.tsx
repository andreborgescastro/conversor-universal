import React from "react";
import { Home } from '@styled-icons/material'
import Button from "./components/Button/Button";
import Card from "./components/Card/Card";


const App: React.FC = () => (
  <>
    <Card
      onClick={() => alert("Click de dentro do pai que chamou o hook do filho")}
      label="Formatar texto"
      // description="Estilizar textos em maísculo, minusculo, camelCase, snake_case, PascalCase,  skewer-case, SCREAMING_SNAKE_CASE, nocase, fUcKtHeCaSe"
      description="Estilizar textos em sentececase, maísculo, minusculo, camelcase, snake_case, pascalcase,  skewer-case, screaming_snake_case, nocase, fuckthecase"
      icon={<Home height={48} width={48} style={{ marginRight: 8 }} />}
    >
    </Card>


    {/* <Button
      onClick={() => alert("Click de dentro do pai que chamou o hook do filho")}
      label={"teste"}
      backgroundColor={"#2525e2"}
      hoverColor={"#7159c1"}
      icon={<Home height={16} width={16} style={{ marginRight: 8 }} />}
    >
    </Button> */}

  </>
);
export default App;
