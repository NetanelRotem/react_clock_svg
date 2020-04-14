export default {
  prime: "#113C8A",
  dot: "#820D29",
  light: "#A9AABC",
  lightDot: "#BFA5A5",
};

const getRandomInt = (min = 0, max = 5) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const calcColor = (color, amount) => {
  return (
    "#" +
    color
      .replace(/^#/, "")
      .replace(/../g, (color) =>
        (
          "0" +
          Math.min(255, Math.max(0, parseInt(color, 16) + amount)).toString(16)
        ).substr(-2)
      )
  );
};

const colors = [
  "#820D29",
  "#820D29",
  "#574142",
  "#BFA5A5",
  "#005152",
  "#008483",
];
export const makeFitColor = () => {
  const color = colors[getRandomInt(0, 5)];
  return calcColor(color, getRandomInt(-99, 99));
};
