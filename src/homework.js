(() => {

  /* Excercises */

  /* First excercise */
  
  let numbers = [1, 2, 3, 4, 5];
  
  /* Multiplique los numeros del arreglo por 5 */

  /*Resultado esperado: [5, 10, 15, 20, 25] */

  /* First excercise */

// Multiplica cada número por 5 usando map()
let multipliedNumbers = numbers.map(number => number * 5);
console.log(multipliedNumbers); // Imprimirá: [5, 10, 15, 20, 25]


  /* Second excercise */

  let names = ["Jhosep", "Daniel", "Rodrigo", "Veronica"];

  /* Ordernar los nombres alfabeticamente */

  /* Resultado esperado: ["Daniel", "Jhosep", "Rodrigo", "Veronica"] */

  /* Second excercise */

// Ordena los nombres alfabéticamente
names.sort();
console.log(names); // Imprimirá: ["Daniel", "Jhosep", "Rodrigo", "Veronica"]



  /* Thrid excercise */

  const data = ['a', 'b', 'z', 'r', 'a', 'c', 'r', 'a'];

  /* Dado un arreglo, crear otro sin letras repetidas */
  /* Resultado esperado: ['a', 'b', 'z', 'r', 'c'] */

  /* Thrid excercise */

// Crea un nuevo arreglo con letras únicas
const uniqueData = data.filter((letter, index) => data.indexOf(letter) === index);
console.log(uniqueData); // Imprimirá: ['a', 'b', 'z', 'r', 'c']


  /* Fourth excercise */

  const largeWord = "abcdabcdABCD";

  /* Dado un string mostrar cuantas veces se repite cada letra*/
  /* Resultado: 
    {
      a: 2,
      b: 2,
      c: 2,
      d: 2,
      A: 1,
      B: 1,
      C: 1,
      D: 1
    }
  */

  /* Fourth excercise */
  

// Crear objetos separados para almacenar la frecuencia de cada letra (mayúscula y minúscula)
const letterFrequency = {};
const capitalLetterFrequency = {};

// Iterar sobre cada letra en el string
for (let i = 0; i < largeWord.length; i++) {
    const letter = largeWord[i];

    // Verificar si la letra es mayúscula o minúscula y convertirla a minúscula
    if (/[a-z]/.test(letter)) {
        const lowercaseLetter = letter.toLowerCase();
        if (letterFrequency[lowercaseLetter]) {
            letterFrequency[lowercaseLetter]++;
            
        } else {
            letterFrequency[lowercaseLetter] = 1;
        }
    } else if (/[A-Z]/.test(letter)) {
        if (capitalLetterFrequency[letter]) {
            capitalLetterFrequency[letter]++;
        } else {
            capitalLetterFrequency[letter] = 1;
        }
    }
}

// Función para imprimir las letras y la cantidad que se repiten
function printFrequency(frequency) {
  for (let letter in frequency) {
      console.log(`${letter}: ${frequency[letter]}`);
  }
}

printFrequency(letterFrequency);
printFrequency(capitalLetterFrequency);

})();
