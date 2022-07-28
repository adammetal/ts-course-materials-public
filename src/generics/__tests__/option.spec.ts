import { expect, test } from "vitest";
import { option, isSome, isNone, getVal } from "../option";

const getMeSome = () => "Some value";

const getMeNone = () => null;

test("create optional values with some value", () => {
  const some = option(getMeSome());
  expect(isSome(some)).toBe(true);
  expect(() => getVal(some)).not.toThrowError();
});

test("create optional values with none", () => {
  const none = option(getMeNone());
  expect(isNone(none)).toBe(true);
  expect(() => getVal(none)).toThrowError();
});
