/**
 * 泛型是根据传入的类型进行推导
 */

// 基础用法
// T是一个抽象类型，只有再调用的时候才能确定他的值
function indentity<T>(arg: T): T {
    return arg
}

// 可以申明多个抽象类型
function indentity2<T, U>(arg1: T, arg2: U): U {
    console.log(arg1)
    return arg2
}
indentity2(62, 'aaa')

// =========== 泛型约束 ==========

// 没有约束的抽象类型， 在实际使用中很可能会报错
function trace<T>(arg: T): T {
    console.log(arg.size); // Error: Property 'size doesn't exist on type 'T'
    return arg;
}

// 通过对抽象类型的拓展，实现类型约束
interface Size {
    size: number
}
function trace2<T extends Size>(arg: T): T {
    console.log(arg.size)
    return arg
}