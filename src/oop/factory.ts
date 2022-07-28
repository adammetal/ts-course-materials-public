// https://refactoring.guru/design-patterns/abstract-factory

import { OS, Phone, SmartPhone, Tablet } from "./phones";

export abstract class PhoneFactory {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  abstract createPhone(): Phone;
}

export class RegularPhoneFactory extends PhoneFactory {
  createPhone(): Phone {
    return new Phone(this.name, "000");
  }
}

export class SmartPhoneFactory extends PhoneFactory {
  public os: OS;

  constructor(name: string, os: OS) {
    super(name);
    this.os = os;
  }
  
  createPhone(): SmartPhone {
    return new SmartPhone(this.name, "000", this.os);
  }
}

export class TabletFactory extends SmartPhoneFactory {
  createPhone(): Tablet {
    return new Tablet(this.name, "000", this.os);
  }
}
