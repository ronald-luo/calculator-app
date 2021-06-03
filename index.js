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
                case "add":
                    num1 = parser()
                    break;
                case "subtract":
                    num1 = parser()
                    break;
                case "multiply":
                    num1 = parser()
                    break;
                case "divide":
                    num1 = parser()
                    break;
                case "equals":
                    num2 = parser()
                    console.log(num1, num2, num1[1])
                    let a = operators[num1[1]](num1, num2)

                    let b = add(Number(num1[0]), Number(num2[0]))
                    console.log(a)
            }
            
        })
    })
})()

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

let operators = {
    add (numA, numB) {
        return numA + numB
    },

    subtract (numA, numB) {
        return numA - numB
    },

    multiply (numA, numB) {
        return numA * numB
    },

    divide (numA, numB) {
        return numA / numB
    }
}