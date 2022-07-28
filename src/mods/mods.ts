export class Node {
  private children: Array<Node> = [];
  private sign: string = "";
  private x: number = 0;
  private y: number = 0;

  public constructor(sign: string = "", x: number = 0, y: number = 0) {
    this.sign = sign;
    this.x = x;
    this.y = y;
  }

  public setSign(sign: string): void {
    this.sign = sign;
  }

  public getSign(): string {
    return this.sign;
  }

  public addNode(n: Node): void {
    this.children.push(n);
  }

  public setX(x: number): void {
    this.x = x;
  }

  public setY(y: number): void {
    this.y = y;
  }

  public getX(): number {
    return this.x;
  }

  public getY(): number {
    return this.y;
  }

  public draw(plain: string[][], parentX: number, parentY: number): void {
    if (this.children.length === 0) {
      plain[parentY + this.y][parentX + this.x] = this.sign;
      return;
    }

    for (const node of this.children) {
      node.draw(plain, parentX + this.x, parentY + this.y);
    }
  }
}

export class Screen {
  private readonly size: number;
  private readonly nodes: Array<Node> = [];

  public constructor(size: number) {
    this.size = size;
  }

  public addNode(n: Node): void {
    this.nodes.push(n);
  }

  private drawMap(): string[][] {
    const arr = (n: number) => Array.from(Array(n));
    const plain = arr(this.size).map(() => arr(this.size));

    for (const node of this.nodes) {
      node.draw(plain, 0, 0);
    }

    return plain;
  }

  public drawToScreen(): void {
    const map = this.drawMap();
    map.forEach((row) => {
      row.forEach((sign) => {
        if (!sign || !sign.length) {
          process.stdout.write(' ');
        } else {
          process.stdout.write(sign);
        }
      });
      process.stdout.write('\n');
    });
  }

  public drawToArr(): string[][] {
    return this.drawMap();
  }
}
