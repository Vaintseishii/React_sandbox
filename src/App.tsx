import { useReducer } from "react";

type GameState = {
  hp: number;
  potions: number;
  isAlive: boolean;
};

type GameAction =
  | { type: "TAKE_DAMAGE" }
  | { type: "DRINK_POTION" }
  | { type: "RESTART" };

const initialState: GameState = {
  hp: 100,
  potions: 3,
  isAlive: true,
};

function gameReducer(state: GameState, action: GameAction): GameState {
  switch (action.type) {
    case "TAKE_DAMAGE": {
      const newHp = state.hp - 10;

      return {
        ...state,
        hp: newHp <= 0 ? 0 : newHp,
        isAlive: newHp <= 0 ? false : true,
      };
    }

    case "DRINK_POTION": {
      if (!state.isAlive || state.potions === 0) {
        return state;
      }

      return {
        ...state,
        hp: Math.min(state.hp + 20, 100),
        potions: state.potions - 1,
      };
    }

    case "RESTART":
      return initialState;

    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(gameReducer, initialState);

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "50px",
        fontFamily: "Arial",
      }}
    >
      <img src="psyopcat.jpeg" alt="Psyop Cat" style={{ width: "200px", borderRadius: "50%" }} />
      <h1>RPG Character HUD</h1>

      <h2>HP: {state.hp}</h2>
      <h2>Potions: {state.potions}</h2>
      <h2>
        Status: {state.isAlive ? "Alive" : "Dead"}
      </h2>

      <button onClick={() => dispatch({ type: "TAKE_DAMAGE" })}>
        Take Damage
      </button>

      <button
        onClick={() => dispatch({ type: "DRINK_POTION" })}
        style={{ marginLeft: "10px" }}
      >
        Drink Potion
      </button>

      <button
        onClick={() => dispatch({ type: "RESTART" })}
        style={{ marginLeft: "10px" }}
      >
        Restart
      </button>
    </div>
  );
}

export default App;