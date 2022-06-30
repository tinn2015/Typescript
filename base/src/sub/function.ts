// 直接申明函数
export function sum (a: number, b:number): number {
    return a + b
}

// 函数表达式
export const sum2: (x: number, y:number) => number = function (x: number, y: number): number {
    return x + y
}


// 函数重载
// 【函数重载就是使用相同的名称和不同参数数量或参数类型创建多个方法的一种能力】
// sum3 方法可以支持 number类型 参数 或者string类型参数
type arg1 = number | string
function sum3(a: number, b:number):number
function sum3(a: string, b:string):number
function sum3(a: arg1, b: arg1) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}

module.exports = {
    sum, sum2, sum3
}