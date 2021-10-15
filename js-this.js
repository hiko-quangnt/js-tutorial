// this => this keyword đề cập đến đối tượng nó thuộc về

// this in a method -> Trả về đối tượng sở hữu nó
const student = {
    name: 'Quang',
    age: '26',
    like: 'Play Game',
    content: function() { //method
        console.log(this)
        return this.name + ',' + this.age
    }
  }
  console.log(student.content())

  // this alone -> Object window
  console.log(this)

  // this in a function -> Object window
  function demo() {
      console.log(this)
  }
  demo()

  // this in Event handlers -> Trả ra đối tượng html hiện tại
// DOM 

