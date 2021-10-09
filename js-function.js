// Hoisting 
// Là hành vi mặc định của JS, nó sẽ tự động đưa các khai báo lên trên
// var x, var y;
// let x, y;
// console.log(x = 5, y = 10)


// var x;
// var y;

// let a = 10
// let b = 20
// console.log(a * b)

// console.log(sum(10, 20))

function sum(a, b) {
    // alert('Đang tính tổng')
    // return a * b;
    console.log(a * b)
    return a * b
}
const x = sum(10, 20)
// Tiep tuc xu ly x trar ra ket qua khac
// console.log(sum(a, b))

function textDemo(text) {
    // console.log(text)
    alert(text)
}

// textDemo('Chaò mừng đến với JS')

// Hàm ẩn danh
const myFunc = function() {
    alert('Hàm ẩn danh')
}

myFunc()

// Arrow function
const arrowSum = (a, b) => {
    return a * b
    // binding this
}