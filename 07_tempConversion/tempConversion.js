const ftoc = function(fahr) {
  let cels = (fahr - 32) * (5 / 9);
  if (cels > 99 || cels < -99) cels = cels.toPrecision(4);
  else if (cels > 9 || cels < -9) cels = cels.toPrecision(3);
  else cels = cels.toPrecision(2);
  return +cels;
};

const ctof = function(cels) {
  let fahr = (cels * (9 / 5)) + 32;
  if (fahr > 99 || fahr < -99) fahr = fahr.toPrecision(4);
  else if (fahr > 9 || fahr < -9) fahr = fahr.toPrecision(3);
  else fahr = fahr.toPrecision(2);
  return +fahr;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
