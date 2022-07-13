function add(a, b) {
    if (typeof b === "number") {
        return "".concat(a + b);
    }
    if (typeof b === "string") {
        return Number(a + b);
    }
}
console.log(add(1, 2));
console.log(add(1, "2"));
