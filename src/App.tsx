import { AppContainer } from "./styles";

import { Column } from "./components/Column";
import { AddNewItem } from "./components/AddNewItem";
import { useState } from "react";
import { useAppState } from "./state/AppStateContext";

const App = () => {
  const { lists } = useAppState();
  return (
    <AppContainer>
      {
        lists.map((list) => (
          <Column id={list.id} text={list.text} />
        ))
      }
      <AddNewItem 
        onAdd={console.log}
        toggleButtonText="+ Add another list"
      />
    </AppContainer>
  );
};

export default App;