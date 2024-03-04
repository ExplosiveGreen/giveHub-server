const filter = (array, qs1) => {
  array = array.filter((cell) =>
    Object.entries(qs1).reduce(
      (accu, [key, value]) => accu && cell[key] == value,
      true
    )
  );

  return array;
};
module.exports = filter;
