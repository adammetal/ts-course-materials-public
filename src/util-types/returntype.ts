import { option } from "../generics/option";
import { SmartPhoneFactory, TabletFactory } from "../oop/factory";
import { OS } from "../oop/phones";

function foo(input: string) {
  return input.toUpperCase();
}

export type TString = ReturnType<typeof foo>;
// type TString = string

export type TOptionalString = ReturnType<typeof option<string>>;
// type TOptionalString = None | Some<string>

const tabletFactory = new TabletFactory("Tablets", OS.iPhone);
export type F1 = ReturnType<typeof tabletFactory.createPhone>;
// type F1 = Tablet

const smartPhoneFactory = new SmartPhoneFactory("SmartPhones", OS.Android);
export type F2 = ReturnType<typeof smartPhoneFactory.createPhone>;
// type F2 = SmartPhone
