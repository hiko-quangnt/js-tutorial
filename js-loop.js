// Loop: Vòng lặp
const numbers = [1,2,3,4,5,6]

// for (statement1; statement2; statement3) {
//   Excute code
// }
// let i = 0
for (let i = 0; i < numbers.length; i++) {
  console.log('number: ' + numbers[i])
}

// b1: statement1 -> khai báo những cái cần thiết trước khi thực thi code
// b2: statement2 -> Kiểm tra điều kiện, nếu đk đúng (true) -> Thực thi code (excute code), ngược lại nếu sai (false) không excute code (exit)
// b3: statement3 -> Khai báo code sẽ chạy sau mỗi lần lặp => Quay lại bước 2.

console.log('--------------------')
console.log('For In')

const students = {
  name: 'Quang',
  age: '26',
  like: 'Play Game'
}
// for in
for (key in students) {
  console.log(key + ': ' + students[key])
}

// Do not use for in to loop Array
// for (index in numbers) {
//   console.log(index + ': ' + numbers[key])
// }

// Use forEach method to loop Array
numbers.forEach(function(value, key) {
  console.log('Index: ' + key + ' là ' + value)
})

console.log('--------------------')
console.log('For Of')

// for of
for (value of numbers) {
  console.log(value)
}
for(value of 'Javascript') {
  console.log(value)
}

// Use while for loop
// while (condition) {
  // excute code
// }
console.log('--------------------')
console.log('while')
let j = 0
while (j < numbers.length) {
  console.log(numbers[j])
  j++
}

let k = 11;
// do while
// do {
  // excute code
// } while (condiotion)
do {
  console.log('Chạy vòng lặp', k)
} while (k <= 10)

// break and continue
// break -> exit loop
// continue -> Tiếp tục vòng lặp tiếp theo
console.log('--------------------')
console.log('break')
// for (let i = 0; i <= numbers.length; i++) {
//   if (i === 3) {break;}
//   console.log(numbers[i])
// }
console.log('--------------------')
console.log('continue')
for (let i = 0; i < numbers.length; i++) {
  if (i === 3) {continue;}
  console.log(numbers[i])
}