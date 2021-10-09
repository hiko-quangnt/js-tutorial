// Comparison Operator
// == : So sánh giá trị. Ex: '12' == 12 return true // Không dùng
// === : So sánh giá trị và cả kiểu dữ liệu. Ex: '12' === 12 return false
// != : So sánh khác giá trị. Ex: '12' != 12 return false // Không dùng
// !== : So sánh khác giá trị và cả kiểu dữ liệu. Ex: '12' !== 12 return true
// > < >= <= : So sánh lớn hơn nhỏ hơn

// Logical Operator
// && : AND ==> true and true => true. Ex: x = 10, y = 5 if (x === 10 && y <= 5) is true
// || : OR  ==> true and false => true. Ex: x = 10, y = 5 if (x > 10 || y <= 5) is true
// ! : NOT  ==> true => false, false => true. Ex: x = 10, y = 5 if !(x === y) is true

let x = 10, y = 5
// AND &&
if (x === 10 && y <= 5 && y > 6) {
    console.log('Đúng rồi: true')
} else {
    console.log('Sai rồi: false')
}
console.log('------------------')

// OR ||
if (x > 10 || y > 5) {
    console.log('Đúng rồi: true')
} else {
    console.log('Sai rồi: false')
}
console.log('------------------')

// NOT ! // 10 !== 5 nếu x nó !== y
if (!(x === y)) { 
    console.log('x !== y là đúng, true')
}

if (true) {
    // do code
} else {
    // do code else
}

if (true) {
    // do code
} else if (12 === 12) {
    // do code else if
} else if (12 === 12) {
    // do code else if
} else {
    // do code else
}

let number = 10

switch (number) {
    case 0:
        console.log('= 0')
        break;
    case 1:
        console.log('= 1')
        break; 
    case 2:
        console.log('= 2')
        break;
    case 3:
        console.log('= 3')
        break;
    default:
        console.log('Ko co so')
}

const checkCondition = 0
if (checkCondition ) {
    console.log('true')
} else {
    console.log('false')
}
// Một số case false: 0 || false || undefined || null
// Data type Boolean true or false
console.log(12 && true)
if (true && 12) {
    console.log('Đúng')
} else {
    console.log('sai')
}
