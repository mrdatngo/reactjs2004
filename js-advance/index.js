let x = true && 5 * 3
let x2 = false && 5 * 3
let x3 = true && 5 * 3 && false && 5
let x4 = true && 5 * 3 && "Hello class"
let x5 = true && 1 && "" && "Hello class"
let x5Str = `>${x5}<`
console.log(x, x2, x3, x4, x5Str);

// example
let isPrime = false;
let message = isPrime && "is prime number"
// condition operator
let message2 = isPrime ? "is prime number" : "is not prime number";
console.log("Message: ", message)
console.log("Message2: ", message2)
// without condition operator
if (isPrime) {
    message = "is prime number"
} else {
    message = "is not prime number"
}

// review map
let students = [
    {
        firstName: "An",
        lastName: "Nguyen truong"
    },
    {
        firstName: "Tung",
        lastName: "Vu Thanh"
    }
]

let newStudents = students.map(item => {
    return { fullName: item.lastName + item.firstName }
})

console.log("newStudents: ", newStudents)