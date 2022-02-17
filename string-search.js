const products = [
    "laptop Dell hardcore i29 200GB laptop",
    " i phont 1TB camera flashlight Phone",
    "yellow laptop with blck camera",
    "1X59 Levovo ommercial Yoga laptop",
    "LG supernova laptop",
    "Laptop HTC low price phone",
    "purple color phone with Laptop"
];
const searching = "laptop";

const output = [];
for (const product of products) {
    if (product.toLowerCase().indexOf(searching.toLowerCase()) != -1) {
        //output.push(product);
    }
}
//console.log(output);

// using includes
for (const product of products) {
    if (product.toLowerCase().includes(searching.toLowerCase())) {
        //output.push(product)
    }
}
for (const product of products) {
    if (product.toLowerCase().startsWith(searching.toLowerCase())) {
        //output.push(product);
    }
}

for (const product of products) {
    if (product.toLowerCase().endsWith(searching.toLowerCase())) {
        output.push(product);
    }
}
console.log(output);