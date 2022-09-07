enum Color {
  black = "black",
  white = "white",
  blue = "blue",
  green = "green",
  red = "red",
  colorLess = "color less",
}

type Cost = [count: number, color: Color][];

abstract class Card {
  public constructor(
    private readonly name: string,
    private readonly ability: string
  ) {}

  public getName(): string {
    return this.name;
  }

  public getAbility(): string {
    return this.ability;
  }

  public play(): void {
    console.log(this.name, this.ability);
  }
}

interface Permanent {
  activate(): void;
}

interface Instant {
  playAnyTime(): void;
}

class Land extends Card {
  public constructor(color: Color) {
    super("Basic Land", `This land produces ${color} mana`);
  }
}

class Spell extends Card {
  public constructor(
    name: string,
    ability: string,
    private readonly cost: Cost
  ) {
    super(name, ability);
  }

  public getCostAsString(): string {
    return this.cost.map((c) => c.join("->")).join(",");
  }

  public play(): void {
    console.log(`Player use this spell for ${this.getCostAsString()}`);
    super.play();
  }
}

class Flash extends Spell implements Instant {
  playAnyTime(): void {
    console.log("using flash card at any moment");
    console.log(this.getAbility());
  }
}

class Creature extends Spell implements Permanent {
  private health: number;

  public constructor(
    name: string,
    ability: string,
    cost: Cost,
    private readonly power: number,
    private readonly toughness: number
  ) {
    super(name, ability, cost);
    this.health = this.toughness;
  }

  public takeDamage(amount: number) {
    this.health -= amount;
  }

  public stillAlive(): boolean {
    return this.health <= 0;
  }

  public heal(): void {
    if (this.stillAlive()) {
      this.health = this.toughness;
    }
  }

  public activate(): void {
    console.log("using the ability, tap that card");
    console.log(this.getAbility());
  }
}

const basicGreen = new Land(Color.green);
const basicRed = new Land(Color.red);

const merfolkTrickster = new Creature(
  "Merforlk Trickster",
  "When this enters the battlefield tap target careate",
  [[2, Color.blue]],
  1,
  1
);
