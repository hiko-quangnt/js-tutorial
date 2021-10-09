// Object {key: value}
const student = {
    firstName: 'Quang',
    lastName: 'Tran',
    age: 26,
    special: '123123',
    fullName: function() {
        //"this" is student object
        return this.firstName + ' ' + this.lastName
    }
}

//map, filter, reduce

console.log(student.firstName)
console.log(student['lastName'])
console.log(student.fullName())

// lodash
// 3.2 x = 6, y = 10. Tính: ++y - y++ + x++ + x-- - --x - --y
                            // 11 - 11 + 6 + 7 - 5 - 11
let x = 10, y = 12, z = 16
// console.log(x++ + z-- - --x + --y - y-- + ++y + ++z + --z + x--)
console.log(10 + 16 - 10 + 11 - 11 + 11 + 16 + 15 + 10);
console.log(10 - 10 + 15 + 12 - 12  )
