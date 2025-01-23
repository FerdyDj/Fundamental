const num1: number = 10
const num2: number = 15

console.log(num1 + num2)
console.log(num1 - num2)
console.log(num1 * num2)
console.log(num1 / num2)
console.log(10 % 3)
console.log(num2 % num1)
console.log(2 ** 3)

let n: number = 2

n += 5 // n = n + 5
n *= 2 // n = n * 2
n -= 2 // n = n - 2

//increment & decrement
n++ // n += 1
n-- // n -= 1

//prefix & postfix form
console.log(++n) // jadi 13 (ditambah dulu di awal) 
// klo console.log(n++) >>> hasilnya masih 12, hasilnya baru ditambah 1 dan jadi 13 setelah di console.log selanjutnya
// console.log(n) >>> nah disini baru jadi 13