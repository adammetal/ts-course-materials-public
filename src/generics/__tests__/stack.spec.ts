import { expect, test, describe, beforeEach } from "vitest";
import { getVal, isNone, isSome } from "../option";
import { Stack } from "../stack";

describe("stack functions", () => {
  let stack: Stack<number>;

  beforeEach(() => {
    stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);
  });

  test("popping", () => {
    expect(stack.toString()).toBe("3,2,1");
    stack.pop();
    expect(stack.toString()).toBe("2,1");
  });

  test("push new item to the top", () => {
    stack.push(4);
    expect(stack.toString()).toBe("4,3,2,1");
  });

  test("pop optional values", () => {
    const first = stack.optionPop();
    expect(isSome(first)).toBe(true);
    expect(() => getVal(first)).not.toThrowError();

    stack.pop();
    stack.pop();

    const none = stack.optionPop();
    expect(isNone(none)).toBe(true);
  });

  test("iterate through the stack", () => {
    const it = stack.flush();
    const arr = [...it];
    expect(arr).toStrictEqual([3, 2, 1]);
    expect(stack.size()).toBe(0);
  });
});

describe("Stack with strings", () => {
  test("ice cream", () => {
    const stack: Stack<string> = new Stack();

    stack.push("chocklete");
    stack.push("vanilia");
    stack.push("strawberry");

    expect(stack.toString()).toBe("strawberry,vanilia,chocklete");
  });
});

