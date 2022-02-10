export type GetRandomNumberOptions = {
  max: number;
  min: number;
};

export const getRandomNumber = ({
  max = 20,
  min = 10,
}: GetRandomNumberOptions): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
