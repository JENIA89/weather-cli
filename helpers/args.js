export const getArgs = (args) => {
  const res = {};
  const rest = args.slice(2);
  rest.forEach((value, index, array) => {
    if (value.charAt(0) === '-') {
      if (index === array.length - 1) {
      }
    }
  });
};
