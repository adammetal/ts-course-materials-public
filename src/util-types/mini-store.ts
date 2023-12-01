type State = {
  count: number;
  step: number;
};

export const store: { state: State; getState: () => State } = {
  state: {
    count: 0,
    step: 1,
  },

  getState() {
    return this.state;
  },
};

type PayloadAction<P, T> = (p: P) => { type: T; payload: P };

type SimpleAction<T> = () => { type: T };

function createAction<Payload, Type>(type: Type): PayloadAction<Payload, Type> {
  return (p: Payload) => ({ type, payload: p });
}

function createSimpleAction<Type>(type: Type): SimpleAction<Type> {
  return () => ({ type });
}

export const actions = {
  inc: createSimpleAction<"inc">("inc"), // { type: "inc" }
  dec: createSimpleAction<"dec">("dec"),
  init: createSimpleAction<"init">("init"),
  set: createAction<number, "set">("set"), // { type: "set", payload: 5 }
};

type Action =
  | ReturnType<typeof actions.inc>
  | ReturnType<typeof actions.dec>
  | ReturnType<typeof actions.set>
  | ReturnType<typeof actions.init>;

const reduce = (action: Action, state: State): State => {
  switch (action.type) {
    case "inc":
      return { ...state, count: state.count + state.step };
    case "set":
      return { ...state, count: action.payload };
    case "dec":
      return { ...state, count: state.count - 1 };
    case "init":
      return { count: 0, step: 1 };
    default:
      return state;
  }
};

export const dispatch = (action: Action): void => {
  const nextState = reduce(action, store.state);
  store.state = nextState;
};
