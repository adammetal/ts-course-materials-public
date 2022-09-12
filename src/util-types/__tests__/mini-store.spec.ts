import { expect, test } from "vitest";
import { store, dispatch, actions } from "../mini-store";

test("reset to default state with init action", () => {
  dispatch(actions.init());
  expect(store.getState()).toStrictEqual({ count: 0, step: 1 });
});

test("Increment the state with inc action", () => {
  dispatch(actions.init());
  dispatch(actions.inc());
  expect(store.getState()).toStrictEqual({ count: 1, step: 1 });
});

test("Decrement the state with dec action", () => {
  dispatch(actions.init());
  dispatch(actions.dec());
  expect(store.getState()).toStrictEqual({ count: -1, step: 1 });
});

test("Set the count to a specific value with set action", () => {
  dispatch(actions.init());
  dispatch(actions.set(10));
  expect(store.getState()).toStrictEqual({ count: 10, step: 1 });
});
