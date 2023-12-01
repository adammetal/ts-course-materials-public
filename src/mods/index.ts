import { Screen, Node } from "./mods";

export const drawRectToTerminal = () => {
  const screen = new Screen(30);

  const rect = new Node();
  rect.setX(25);
  rect.setY(5);

  for (let i = 0; i <= 10; i++) {
    rect.addNode(new Node(".", i, 0));
    rect.addNode(new Node(".", i, 5));
  }

  for (let i = 0; i <= 5; i++) {
    rect.addNode(new Node(".", 0, i));
    rect.addNode(new Node(".", 10, i));
  }

  screen.addNode(rect);

  screen.drawToScreen();
};
