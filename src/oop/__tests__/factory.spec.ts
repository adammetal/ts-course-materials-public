import { expect, test } from "vitest";
import { PhoneFactory, RegularPhoneFactory, TabletFactory } from "../factory";
import { Phone, OS, SmartPhone, Tablet } from "../phones";

class Company {
  phoneFactory: PhoneFactory;

  constructor(phoneFactory: PhoneFactory) {
    this.phoneFactory = phoneFactory;
  }

  createPhones(
    n: number
  ): Array<Phone> {
    return Array.from(Array(n)).map(() => this.phoneFactory.createPhone());
  }
}

test("Create simple phones", () => {
  const bell = new Company(new RegularPhoneFactory("bell"));
  const phones = bell.createPhones(10);

  expect(phones.length).toBe(10);
  expect(phones[0]).instanceOf(Phone);
  expect(phones[0].getId()).toBe("bell - (000)");
});

const useTablet = (t: Phone) => {
  if (t instanceof Tablet) {
    return t.netflix();
  }
}

test("Create tablets", () => {
  const google = new Company(new TabletFactory("google", OS.Android));
  const phones = google.createPhones(10);

  expect(phones.length).toBe(10);
  expect(phones[0]).instanceOf(Phone);
  expect(phones[0]).instanceOf(SmartPhone);
  expect(phones[0]).instanceOf(Tablet);
  expect(phones[0].getId()).toBe("(Android) - google - (000)");
  expect(useTablet(phones[0])).toBe("(Android) - google - (000) using the internet for watching netflix");
});
