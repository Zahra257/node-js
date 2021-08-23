const reducer = (a, b) => Number(a) + Number(b);
console.log(process.argv.splice(2).reduce(reducer))
