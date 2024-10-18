var isEmpty = function(obj) {
    if(Object.keys(obj) === 0)
        return true
    else
        return false
}

const tc1 = JSON.parse('{"x": 5, "y": 42}')
const tc2 = JSON.parse('{}')
const tc3 = [null, false, 0]

console.log(isEmpty(tc2))
