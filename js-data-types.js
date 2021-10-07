let x = 1 // Number
console.log(x, typeof x)

let string = 'haha javascript' // String
console.log(string, typeof string)

let boolean = true //Boolean: true or false 
console.log(boolean, typeof boolean)

// {key: value, key2: value2}
let object = {firstName: 'Quang', lastName: 'Tran'} // Object
console.log(object, typeof object)

// Trong Javascript: Array là 1 dạng dữ liệu đặc biệt của Object, nhưng bản thân nó, được mô tả tốt nhất vẫn là Array
let array = [1,2,3,4,5] // Array ['string', 'text'] [{text: '123}]
console.log(array, typeof array) //object (Array)

array[0] = 6
console.log(array)


object.firstName = 'Hao'
object['lastName'] = 'Nguyen'
console.log(object)

let dataUndefined // undefined
console.log(dataUndefined, typeof dataUndefined)

let test = dataUndefined + ' hehe'
console.log(test)