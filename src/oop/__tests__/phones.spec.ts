import { expect, test } from "vitest";
import { Phone, SmartPhone, OS, Tablet } from "../phones";

test("Instantiate basic Phone class", () => {
  const homePhone = new Phone("Adam", "123");
  expect(homePhone.getId()).toBe("Adam - (123)");
  expect(homePhone.call("123")).toBe("Adam - (123) calling... 123");
  expect(homePhone.text("123", "hello")).toBe(
    "Adam - (123) texting... 123 with hello"
  );
});

test("Instantiate new android smart phone", () => {
  const workPhone = new SmartPhone("Adam", "123", OS.Android);
  expect(workPhone).instanceOf(Phone);
  expect(workPhone).instanceOf(SmartPhone);

  expect(workPhone.getId()).toBe("(Android) - Adam - (123)");
  expect(workPhone.call("123")).toBe("(Android) - Adam - (123) calling... 123");
  expect(workPhone.text("123", "hello")).toBe(
    "(Android) - Adam - (123) texting... 123 with hello"
  );
});

test("Instantiate new tablet", () => {
  const kidsTablet = new Tablet("Adam", "123", OS.iPhone);
  expect(kidsTablet).instanceOf(Phone);
  expect(kidsTablet).instanceOf(SmartPhone);
  expect(kidsTablet).instanceOf(Tablet);

  expect(kidsTablet.netflix()).toBe(
    "(iPhone) - Adam - (123) using the internet for watching netflix"
  );
});
