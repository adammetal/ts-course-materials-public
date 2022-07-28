class Phone {
  owner: string = "";
  number: string = "";

  constructor(owner: string, number: string) {
    this.number = number;
    this.owner = owner;
  }

  getId(): string {
    return `${this.owner} - (${this.number})`;
  };

  call(number: string): string {
    return `${this.getId()} calling... ${number}`;
  };

  text(number: string, message: string): string {
    return `${this.getId()} texting... ${number} with ${message}`;
  };
}

enum OS {
  Android = "Android",
  iPhone = "iPhone",
}

class SmartPhone extends Phone {
  os: OS;

  constructor(owner: string, number: string, os: OS) {
    super(owner, number);
    this.os = os;
  }

  getId(): string {
    return `(${this.os}) - ${super.getId()}`;
  };

  internet(): string {
    return `${this.getId()} using the internet`;
  };
}

class Tablet extends SmartPhone {
  netflix(): string {
    return `${this.internet()} for watching netflix`;
  };
}

export { Phone, SmartPhone, Tablet, OS };
