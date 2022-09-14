import { MtgCard } from "./required";

type GameState = {
  turn: number;
  active: number;
  life1: number;
  life2: number;
};

let currentState: GameState = { turn: 1, active: 1, life1: 20, life2: 20 };

const updateState = (state: Partial<GameState>) => {
  currentState = { ...currentState, ...state };
};

updateState({ turn: 2 });

// HTTP PATCH
const patchCard = (id: string, card: Partial<MtgCard>) => {};

patchCard("123", { cost: 10 });
