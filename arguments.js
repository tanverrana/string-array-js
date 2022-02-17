function addNumbers(num1, num2) {
    console.log(arguments[2]);
    let result = 0;
    for (const num of arguments) {
        result = result + num;

    }
    // const result = num1 + num2;
    return result;
}
const sum = addNumbers(23, 13, 32, 14, 33);
console.log(sum);
function getFullName(firstName, lastName) {
    let fullName = "";
    for (const part of arguments) {
        fullName = fullName + part + " ";
    }
    return fullName;
}
const name = getFullName("Md.", "Tanver", "Rana", "Sobur");
console.log(name);