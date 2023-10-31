//Дан массив с числами. Сделайте из него массив, состоящий из квадратов этих чисел.
// let arr = [1, 2, 3, 0, 4, 5, 6]
//
// console.log(arr.map(el => el * el))

//Проверьте то, что все элементы в массиве больше нуля.
// let arr = [1, 2, 3, 0, 4, 5, 6]

// console.log(arr.map(el => el > 0))

// function number() {
//     for (let i = 0; i < arr.length; i++) {
//         if ( arr[i] > 0) {
//             return 'true'
//         }  return 'false'
//     }
// }

// console.log(number())

// Проверьте то, что в нем есть отрицательные элементы.
// let arr = [1, 2, -3, 0, 4, -5, 6]

// console.log(arr.map((el => el < 0 )))

// function number() {
//     if (arr.map((el => el < 0))) {
//         return 'true'
//     } else {
//         return 'false'
//     }
//
// }

// console.log(number())
//Оставьте в нем только отрицательные числа.
// let arr = [1, 2, -3, 0, 4, -5, 6]

// console.log(arr.filter(el => el < 0))

//Оставьте в нем только четные числа.
// let arr = [1, 2, -3, 0, 4, -5, 6]

// console.log(arr.filter(el => el % 2 === 0))

//Дан массив со строками. Оставьте в нем только те строки, длина которых больше 5-ти символов.
// let str = ['hello', 'sit', 'ipsum', 'javascript', 'python', 'sun', 'even']
//
// console.log(str.filter(word => word.length > 5))

// //Дан массив с числами. Посчитайте количество отрицательных чисел в этом массиве.
// let arr = [1, 2, -3, 0, -4, 5, -6]
// let negative = 0
// for (let i = 0; i < arr.length; i++) {
//     if ( arr[i] < 0) {
//         negative++
//     }
// }
// console.log(negative)

//=========================

// let a = [1,2,3,4]
// let b = ['a','b','c','d']
//
// console.log(a.concat(b))

//==

// let a = [2, 3, 4, 5]
// let b = 'hello world'
// let arr = b.split( ' ' )
//
// console.log(a.concat(arr))

//==

// let a = [2, 3, 4, 5]
// let b = 'hello world'
// let arr = b.split( '' )
//
// console.log(a.concat(arr))

//==

// let a = [2, 3, 4, 5]
// let b = 'hello world'
// let arr = b.split( '' )
// let c = a.concat(arr)
//
// console.log(c.concat(a))

//=======FizzBuzz======

// !!!!!!!!!!!!!!!
// function number() {
//     for (let i = 1; i <= 100; i++) {
//         if (i % 3 === 0 && i % 5 === 0) {
//              console.log('FizzBuzz')
//         } else if (i % 3 === 0) {
//              console.log('Fizz')
//         } else if (i % 5 === 0) {
//              console.log('Buzz')
//         } else {
//              console.log(i)
//         }
//     }
// }
//
// number()
// !!!!!!!!!!!!!!!!!!