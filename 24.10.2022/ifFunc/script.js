// ======== second way ========

let bool = true // boolean

function _if(bool, func1, func2) {
  bool ? func1() : func2()
}

function func1(){
  console.log("true")
}

function func2(){
  console.log("false")
}

