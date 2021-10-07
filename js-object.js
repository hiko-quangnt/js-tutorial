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