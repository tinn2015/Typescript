/**
 * 为了方便， ts 内置了一些工具类型
 */

// ================================================= typeof ================================================

// typeof 获取变量或者属性的类型
interface Person {
    name: string,
    age: number
}
const ben: Person = {
    name: 'ben',
    age: 12
}

type Ben = typeof ben

//typeof 还可以获取函数的类型
function say (n: number): string {
    return `say:${n}`
}

type Func = typeof say

// ======================================== extends ==================================================
// 通常用于泛型约束

interface Size {
    length: number
}

function getSize<T extends Size>(arg: T): T{
    console.log(arg)
    return arg
}

// ============================================== keyof ==================================================

// 用于获取某个类型的所有键的类型， 其返回是联合类型

interface Person2 {
    name: string
    age: number
}

type K1 = keyof Person2  // K1是联合类型 'name' | 'age'
type K2 = keyof Person2[] // 数据的属性， 'length', 'push'.....
type K3 = keyof {[x: string]: Person2} // string | number

// ts中的字符串索引与数字索引

interface Array1 {
    [index: string]: string
}

interface Array2 {
    [index: number]: string
}

type K4 = keyof Array1 // 因为数字索引js执行的时候会转为字符串索引，所以为了支持这两种类型，在获取字符串类型的索引时结果为 string | number
const k: K4 = 11

type K5 = keyof Array2
const kk: K5 = 'aa'

// keyof 的使用示例， 通过ts 实现如下逻辑
function prop(obj, key) {
    return obj[key];
}

function props<T extends object, K extends keyof T>(obj: T, key: K){
    return obj[key]
}

props({name: 'tinn'}, "name")
props({name: 'tinn'}, "age") // 无法读取不存在的属性

// ================================================= in =====================================================================

// 用于遍历枚举类型

type Key = 'a' | 'b' | 'c'
type obj = {
    [k in Key]: any
}

// ================================================= infer =====================================================================
// 在 extends 条件语句中待推断的类型变量

type ParamType<T> = T extends (param: infer P) => any ? P : T // 如果 T 能赋值给 (param: infer P) => any，则结果是 (param: infer P) => any 类型中的参数 P，否则返回为 T