for (let i = 1; i <= 100; i++) {
  stringa = "";
  if (i % 3 === 0) {
    stringa = "Fizz";
  }
  if (i % 5 === 0) {
    stringa = `${stringa}Buzz`;
  }
  if (!stringa) {
    stringa = i;
  }
  console.log(stringa);
}
