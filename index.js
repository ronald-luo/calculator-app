let current_operation = [];
let num1 = 0;
let num2 = 0;

(function addListeners () {
    let nodeList = document.querySelectorAll('.btn')
    nodeList.forEach(node => {
        node.addEventListener('click', (e) => {
            let item = e.target.id
            current_operation.push(item)
            console.log(item)
            

            switch (item) {
                case "clear":
                    window.location.reload()

                    break;
                case "delete":

                    break;
                case "add":
                    if (num1 === 0) {
                        num1 = parser()
                    } else {
                        num2 = parser() 
                        num1[1] = "add"
                    }
                    display("+")
                    break;
                case "subtract":
                    if (num1 === 0) {
                        num1 = parser()
                    } else {
                        num2 = parser() 
                        num1[1] = "subtract"
                    }
                    display("-")
                    break;
                case "multiply":
                    if (num1 === 0) {
                        num1 = parser()
                    } else {
                        num2 = parser()
                        num1[1] = "multiply"
                    }
                    display("*")
                    break;
                case "divide":
                    if (num1 === 0) {
                        num1 = parser()
                    } else {
                        num2 = parser()
                        num1[1] = "divide"
                    }
                    display("/")
                    break;
                case "equals":
                    display("=")
                    num2 = parser()
            
                    // console.log(num1, num2, num1[1])

                    let op = operators[num1[1]]
                    console.log(op(num1[0], num2[0])) // result
                    display(op(num1[0], num2[0]))

                    num1[0] = op(num1[0], num2[0])
                    // console.log(num1, num2, num1[1])
                    break;
                default:
                    display(item)

                    break;
            }
            
        })
    })
})()

let operators = {
    add: function (numA, numB) {
        return Number(numA) + Number(numB)
    },
    subtract: function(numA, numB) {
        return numA - numB
    },
    multiply: function multiply (numA, numB) {
        return numA * numB
    },
    divide: function  (numA, numB) {
        return numA / numB
    },
}

function clear () {
    current_operation = []
}

function parser () {
    result = ""
    temp = [...current_operation]
    for (let i = 0; i < temp.length - 1; i++) {
        result += temp[i]
    }
    clear()
    return [result, temp[temp.length - 1]]
}

function display (item) {
    let container = document.getElementById('display')
    let div = document.createElement('div')
    div.classList.add("disp")
    div.textContent = item
    container.appendChild(div)
}
