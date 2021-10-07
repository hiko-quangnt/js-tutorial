let text = 'Learn Javascript is easy and easy' //String
let text2 = "ABCXYZ"

// Nôí chuỗi
console.log(text + ' ' + text2)
console.log(text.concat(text2))
console.log(text.concat(' ', text2))


console.log("Learn Javascript is \"easy\"")
console.log('Learn Javascript is \'easy\'')

//Method
// .length
console.log(text.length)
// .slice
console.log(text.slice(0, 5))
console.log(text.slice(6, 16))
// console.log(text.slice(-5, -1)) //

// .substring
console.log(text.substring(0, 5))


// .replace
console.log(text.replace('easy', 'hard'))
console.log(text.replace(/easy/g, 'hard'))

// .toUpperCase and .toLowerCase
console.log(text.toUpperCase())
console.log(text.toLowerCase())

// .trim
let textTrim = '     learn js too easy          '
console.log(textTrim.trim())

// .indexOf
console.log(text.indexOf('Javascript'))

// Xử lý các trường hợp đặc biệt của string: dùng regex