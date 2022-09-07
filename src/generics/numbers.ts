class Stack {
  private readonly list: number[] = [];

  public push(item: number): void {
    this.list.push(item);
  }

  public pop(): number | null {
    const num = this.list.pop();
    if (num !== undefined) {
      return num;
    }
    return null;
  }

  get length(): number {
    return this.list.length;
  }
}

const s = new Stack();

