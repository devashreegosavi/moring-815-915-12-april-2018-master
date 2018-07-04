function myFn() {
    console.log(`In myFn`)
}

let fn = function () { // assigning function to variable
    console.log(`In fn`)
}
fn()

fn = myFn
fn()

function fnPrm(fnVr) { // passing function as parameter
    fnVr()
}

// fnPrm(12)
// fnPrm(true)
fnPrm(function () {

})

fnPrm(fn)

function fnRtn() {
    return function () {
        return {
            nm: 'android'
        }
    }
}

let fnOut = fnRtn()
let fnIn = fnOut()
console.log('Traditional', fnIn.nm)
console.log('Secular', fnOut()().nm)

let ar = () => console.log('Lambda')
ar()
let arMlt = () => {
    console.log('multiline')
    console.log('multiline')
}
arMlt()
let arPrm = (num1, num2) => num1 * num2
arPrm(10, 10)

fnPrm(() => {

})

setTimeout(
    () => console.log('TimeOut'), 
    1500
)

