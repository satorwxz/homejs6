//Задание 1
//Описание задачи: Напишите функцию, которая разворачивает массив в обратном порядке.
//
// Ожидаемый результат: [1, 2, 3] => [3, 2, 1]
// const num=[1,2,3]
// function foo(){
//     const newNum=num.reverse()
//     return newNum
// }
//
// console.log(foo())




//Задание 2
//Описание задачи: Напишите функцию, которая очищает массив от нежелательных значений, таких как false, undefined, пустые строки, ноль, null. *
// Ожидаемый результат: [0, 1, false, 2, undefined, '', 3, null] => [1, 2, 3]
// const arr=[0, 1, false, 2, undefined, '', 3, null]
// function handleCheck  () {
//     const newArr=arr.filter(el => el)
//     return newArr
//
// }
//
// console.log(handleCheck())



//Задание 3
//* Описание задачи: Напишите функцию, которая убирает повторяющиеся значения.
// Ожидаемый результат: [1, 2, 3, 1, 2] => [1, 2, 3]
// const arr=[1, 2, 3, 1, 2]
// function handleCheck(){
//     const newArr=arr.filter((el)=>{return el.checked})
//     return newArr
// }
//
// console.log(handleCheck())




//Задание 4
//Задача. Даны два массива: ['a', 'b', 'c'] и [1, 2, 3]. Объедините их вместе.
// const arr=['a', 'b', 'c']
// const arr1=[1,2,3]
// const arr2=arr.concat(arr1)
// console.log(arr2)



//Задание 5
//Дан массив [1, 2, 3]. Добавьте ему в конец элементы 4, 5, 6.
// const arr=[1,2,3]
// arr.push(4,5,6)
// console.log(arr)

//Задание 6
//Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6.
// const arr=[1,2,3]
// arr.unshift(4,5,6)
// console.log(arr)



//Задание 7
//Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте массив в [1, 4, 5].
// const arr=[1,2,3,4,5]
// arr.splice(1,2)
// console.log(arr)



//Задание 8
// Дан объект {js:'test', jq: 'hello', css: 'world'}. Получите массив его ключей.
// const obj={
//     js:'test',
//     jq:'hello',
//     css:'world',
// }
// console.log(Object.keys(obj))

//Задание 9
//Напишите код, который преобразовывает и объединяет все элементы массива в одно строковое значение. Элементы массива будут разделены запятой.
// ['Капуста', 'Репа', 'Редиска', 'Морковка']
// const arr=['Капуста', 'Репа', 'Редиска', 'Морковка']
// function foo(){
//     let arr2=arr.join(',')
//     return arr2
// }
//
// console.log(foo())


//Задание 10
//Пользователь вводит строку кириллицей разного регистра. Напишите функцию, которая принимает строку в качестве аргумента и заменяет регистр каждого символа на противоположный. Например, если вводится «КаЖдЫй ОхОтНиК», то на выходе должен быть массив [кАжДыЙ оХоТнИк]
// const str='КаЖдЫй ОхОтНиК'
//
// function foo(swap){
//     let newstr=swap.split('')
//     let arr=newstr.map(el => {
//         if(el === el.toUpperCase()){
//             return el.toLowerCase()
//         }else{
//             return el.toUpperCase()
//         }
//
//     })
//     return arr.join('').split(',')
// }
// let result=foo(str)
// console.log(result)


//Задание 11
//1 фильтровать по цене. от 40000 до 60000 и год до 2019
// 2 марка
// const cars = [
//     {
//         make: "Ford",
//         model: "Mustang",
//         year: 1969,
//         color: "red",
//         price: 25000
//     },
//     {
//         make: "Ford",
//         model: "F-150",
//         year: 2017,
//         color: "blue",
//         price: 30000
//     },
//     {
//         make: "Tesla",
//         model: "Model S",
//         year: 2018,
//         color: "black",
//         price: 120000
//     },
//     {
//         make: "Chevrolet",
//         model: "Camaro",
//         year: 1970,
//         color: "orange",
//         price: 60000
//     },
//     {
//         make: "Dodge",
//         model: "Challenger",
//         year: 2019,
//         color: "red",
//         price: 35000
//     },
//     {
//         make: "Chevrolet",
//         model: "Corvette",
//         year: 2019,
//         color: "blue",
//         price: 90000
//     },
//     {
//         make: "Tesla",
//         model: "Model 3",
//         year: 2019,
//         color: "white",
//         price: 40000
//     },
//     {
//         make: "Mercedes",
//         model: "C-Class",
//         year: 2019,
//         color: "black",
//         price: 60000
//     }
// ]
//
// const handleChecklist = () => {
//     let list = cars.filter((el) => {
//         if (el.price >= 40000 && el.price <= 60000 && el.year <= 2019){
//             return el
//         }
//     })
//     return list
// }
//
// const handleChecklistmakeTesla = () => {
//     let list = cars.filter((el) => {
//         if (el.make === 'Tesla'){
//             return el
//         }
//     })
//     return list
// }
//
//
// const handleChecklistmakeChevrolet = () => {
//     let list = cars.filter((el) => {
//         if (el.make === 'Chevrolet'){
//             return el
//         }
//     })
//     return list
// }
//
//
// const handleChecklistmakeMercedes = () => {
//     let list = cars.filter((el) => {
//         if (el.make === 'Mercedes'){
//             return el
//         }
//     })
//     return list
// }
//
// const handleChecklistmakeDodge = () => {
//     let list = cars.filter((el) => {
//         if (el.make === 'Dodge'){
//             return el
//         }
//     })
//     return list
// }
// console.log(handleChecklistmakeDodge())
//console.log(handleChecklistmakeMercedes())
//console.log(handleChecklistmakeChevrolet())
// console.log(handleChecklistmakeTesla())
// console.log(handleChecklist())
