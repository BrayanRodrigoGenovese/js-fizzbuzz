// Creo un ciclo "for" di 100 numeri

// Controllo: (la "scaletta" di controllo è importante per evitare sovrapposizioni tra "Fizz", "Buzz" e "FizzBuzz")
//     se "i" è divisibile per 3 e 5 (15), nel log metto FizzBuzz
//     altrimenti se "i" è divisibile per 3, nel log metto Fizz
//     altrimenti se "i" è divisibile per 5, nel log metto Buzz
//     altrimenti nel log metto solo "i"

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}
