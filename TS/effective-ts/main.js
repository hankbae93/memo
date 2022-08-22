var x = {};
x[[1, 2, 3]] = 2;
console.log(x);
function checkedAccess(xs, i) {
    if (i < xs.length) {
        return xs[i];
    }
    throw new Error("\uBC30\uC5F4\uC758 \uB05D\uC744 \uC9C0\uB098\uC11C ".concat(i, "\uB97C \uC811\uADFC\uD558\uB824\uACE0 \uD588\uC2B5\uB2C8\uB2E4."));
}
