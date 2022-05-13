// Задание 1
function getNumber() {
      let num = prompt('Введите число больше 100:');
       for (let i = 0; i < 10; i++) {
           if (num < 100) {
               num = prompt('Нужно ввести число больше 100, попробуйте еще раз:');
           }
           if (num > 100) {
               return num;
           }
       }
   }
const result = console.log(getNumber())


// Задание 2
function checkAge(age) {
    return (age >=18 && age <=100) ? "Ура" : false;
}
const value = console.log(checkAge(42));
