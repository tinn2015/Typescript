// 直接申明函数
function sum(a, b) {
    return a + b;
}
// 函数表达式
const sum2 = function (x, y) {
    return x + y;
};
module.exports = {
    sum, sum2
};
