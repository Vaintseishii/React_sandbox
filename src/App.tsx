import { AppContainer } from "./styles";

import { Column } from "./components/Column";
import { AddNewItem } from "./components/AddNewItem";
import { useState } from "react";

const App = () => {
  const [columnTexts, setColumnTexts] = useState<string[]>([]);
  return (
    <AppContainer>
      {columnTexts.map((text) => (
        <Column text={text} tasks={[]} />
      ))}
      <AddNewItem
        onAdd={(text) => {
          setColumnTexts((prevTexts) => [...prevTexts, text]);
        }}
        toggleButtonText="+ Add another list"
      />
    </AppContainer>
  );
};

export default App;