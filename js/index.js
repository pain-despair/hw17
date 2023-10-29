function createSum() {
    let total = 0;
    return function (x) {
    total += x;
    return total;
    };
}
const sum = createSum();

    console.log(sum(3));  
    onsole.log(sum(5));  
    console.log(sum(20)); 