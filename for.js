// for loops
// while loop

// var a = +prompt('Enter any table number')
// var b = +prompt('Enter any table number')

// for( i=1; i<=b; i++){
//     document.write(` ${a} x ${i} = ${a * i} <br>`)
// }


// var a = 'hello world'

// for( i=1; i<=5; i++){
//     document.write(`${a} <br>`)
// }

// for( i=1; i<=10; i++){
//     document.write(`${i} <br>`)
// }

// var a = ['Nokia', 'Samsung', 'Apple', 'Sony', 'Huawei']
// for( i=0; i<=a.length; i++){
//     document.write(`${a[i]} <br>`)
// }

// var fruits = ['apple', 'banana', 'mango', 'orange', 'strawberry']
// for( i=0; i<=fruits.length; i++){
//     document.write(`${fruits[i]} <br>`)
// }

// var n = +prompt("Enter the number of items:")
// var items = []

// for( i=0; i<n; i++){
//     var user = prompt(`Enter items ${i + 1}`)
//     items.push(user)
//     document.write(`
//      Number of items:${n}  
//      Items: <br>
//     ${items[i]}  <br>
//         `)
// }


// var Counting = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11,]
// for( i=0; i<10; i++){
//     document.write(i)
// }

// for( i=0; i<=20; i = i+2){
//     document.write(i)
// }

// var n = prompt("Enter the number of elements:")
// for( i=n; i>=1; i--){
//     document.write(i)
// }

// var user = prompt("Enter the item")
// var store  = ['cake', 'apple pie', 'cookie', 'chips', 'patties']
// var match = false
// for(var i=0; i<store.length; i++){
//     if(user == store[i]){
//         match = true
//         alert( user + 'available')
//         break
//     }
// }
// if(match == false){
//     alert('not avalaible')
// }

// var user = prompt('Enter any value')
// var check = ' '

// for( i = user.length - 1; i>=0; i--){
//     check += user[i]
// }
// if( check == user){
//     document.write(user + ' word is palindroma')
// }
// else{
//     document.write(user + ' word is not palindroma')
// }

// var A = [24, 53, 78, 91, 12];
// var max = A[0]; 
// for (var i=0; i<A.length; i++){
//     if (max < A[i]){
//         max = A[i]
//     }
// }
// document.write(`The largest number in the array is: ${max}`)

// var A = [24, 53, 78, 91, 12];
// var min = A[0]; 
// for (var i=0; i<A.length; i++){
//     if (min > A[i]){
//         min = A[i]
//     }
// }
// document.write(`The smallest number in the array is: ${min}`)

// var A = [24, 53, 78, 91, 12];
// var min = A[0]; 
// for (var i=0; i<A.length; i++){
//         if (max < A[i]){
//             max = A[i]
//         }
//         else if(min > A[i]){
//             min = A[i]
//         }
// }
// document.write(`The largest number in the array is: ${max}`)
// document.write(`The smallest number in the array is: ${min}`)


// var user = prompt('Enter any value ')
// let fct = 1
// for( i=1; i<=user; i++){
//     fct *= i
// }
// document.write

// var user = prompt('Enter any value')
// var arra = ['mehran', 'audi', 'h2r', 'civic']
// var copyFirst = user.slice(0,1).toUpperCase()
// var copyall = user.slice(1).toLowerCase()
// var conca = copyFirst + copyall
// var match = false
// for( i=0; i<arra.length; i++){
//     if( conca == arra[i]){
//         match = true
//         document.write(conca + ' Car is avalaible')
//         break
//     }
// }
// if(match == false){
//     document.write(conca + ' Car is not avalaible')
// }

// for( i=1; i<=100; i = i +10){
//     for( j=i; j< i +10; j++){
//     document.write(j)
// }
//     document.write(`<br>`)
// }

// for( i=1; i<=5; i++){
//     for( j=1; j<= i; j++){
//     document.write(j)
// }
//     document.write(`<br>`)
// }

// var per = 72.2
// document.write(Math.round(per))

// var per = 72.2
// document.write(Math.floor(per))

// var per = 72.2
// document.write(Math.ceil(per))

// var per = 72.2
// document.write(Math.random() * 1)

var player1 = prompt('Enter haid name')
var player2 = prompt('Enter tail name')
var toss = Math.random() * 2
var ch = Math.floor(toss)
if(ch == 0 ){
    document.write(player1 + ' haid wins')
}
else{
    document.write(player2 + ' tail wins')
}