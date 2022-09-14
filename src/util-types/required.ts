export type MtgCard = {
  id?: string;
  name: string;
  cost: number;
  ability: string;
}

const postCard = (card: MtgCard): Required<MtgCard> => {
  return {
    ...card,
    id: '123'
  };
}

// PUT
const updateCard = (card: Required<MtgCard>) => {
  // valami
}

postCard({
  name: "Blade of oni",
  ability: "Artifact....",
  cost: 2,
});

updateCard({
  id: "123",
  name: "Blade of oni",
  ability: "Artifact....",
  cost: 2,
});
