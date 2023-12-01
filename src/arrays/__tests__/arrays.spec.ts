import { test, expect } from "vitest";
import { map, filter, reduce, mapNumbers } from "../arrays";

test("map", () => {
  const arr = ["a", "b", "c"];
  const result = map(arr, (item) => item.toUpperCase());
  expect(result).toStrictEqual(["A", "B", "C"]);
});

test("filter", () => {
  const arr = [1, 2, 3];
  const result = filter(arr, (item) => item % 2 === 0);
  expect(result).toStrictEqual([2]);
});

test("reduce", () => {
  const arr = [1, 2, 3];
  const result = reduce(arr, (acc, item) => acc + item, 0);
  expect(result).toBe(6);
});
