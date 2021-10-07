let students = ['Dung', 'Lan', 'Duong', 'thien']
let numbers = [1,2,3,4,5,6,7,8]
let studentsCustom = [
    {
        name: 'Dung',
        age: 18,
        like: 'read book'
    },
    {
        name: 'Lan',
        age: 20,
        like: 'watch film'
    }
]

console.log(students[0], students[1])
console.log(studentsCustom[0], studentsCustom[1])

// students[0] = 'Ngoc'
// console.log(students[0])
// console.log(students)

console.log('-----------------')

// Method
// .length
console.log(students.length)
console.log(numbers.length)
console.log(studentsCustom.length)

// .toString()
console.log(students.toString())

// .join()
console.log(students.join(", "))

// pop() // remove last element
console.log(students.pop(), students)

// push() // add last element
console.log(students.push('Quang'), students)

// shift() // remove first element
console.log(students.shift(), students)

// unshift() // add first element
console.log(students.unshift('Luong'), students)

// delete students[0]
// console.log(students)

// splice
// param 1: Vị trí muốn add phần tử
// param 2: Số phần từ muốn xoá
// console.log(students.splice(2, 0, 'Dung'), students)
// console.log(students.splice(2, 2, 'Dung'), students)

console.log('-------------------------')
// Xoá phần từ ở vị trí mong muốn, không nhập ở param thứ 3
console.log(students)
// students.splice(0, 1)
// console.log(students)
// students.splice(0, 5)
// console.log(students)

// concat
// const newArray = students.concat(numbers, studentsCustom)
// console.log(newArray)

// sort() 
console.log(students.sort())
console.log([2,3,1,7,8,5,6,100,200].sort())
const sort = [2,3,1,7,8,5,6,100,200].sort(function(a, b) {
    //asc
    // return a - b
    // desc
    return b - a
})
console.log(sort)

//reverse
console.log(students)
console.log(students.reverse())


