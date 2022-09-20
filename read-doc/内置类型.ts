/**
 * ts 内置的一些工具类型
 */

// ======================= Partial ============================
// 将类型的属性全都变为可选， 但是只支持对第一层属性进行可选处理

type Partial1<T> = {
    [P in keyof T]?: T[P]
}

interface User {
    name: string
    age: number
}

type NewUser = Partial<User> // 属性name/age 都变为可选

// 自己实现多层Partial
type DeepPartial<T> = {
    [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P] 
}

interface User1 {
    name: string,
    msg: {
        address: string
    }
}

type NewUser1 = DeepPartial<User1>

// ================================================ Required ========================================================
// 与Partial相对， Required是把类型的属性变为必选

type Required1<T> = {
    [P in keyof T]-?: T[P] // -?代表移除？
}

// ================================================ Readonly ========================================================
// 将某个类型的所有属性变为只读属性

type Readonly1<T> = {
    readonly [P in keyof T]: T[P]
}

// ================================================ Pick ========================================================
// 从某个类型中挑选一些属性

type Pick1<T, K extends keyof T> = {
    [P in K]: T[P]
}

interface List {
    title: string
    id: number
    msg: string
}

type NewList = Pick<List, 'title' | 'msg'>

// ================================================ Record ========================================================
// 将目标属性转为目标类型， 并返回新的类型

// 源码
type Reocrd1<K extends keyof any, T> = { // K 可以是联合类型/对象/枚举
    [P in K]: T
}

type Pets = 'dog' | 'cat'
interface IPet {
    name: string
    age: number
}

type MyPet = Record<Pets, IPet> // 这里就返回新的类型， 属性为Pets, 类型为IPet

// ================================================ ReturnType ========================================================
// 获取一个函数的返回值类型

function Say (name: string): string {
    return name
}

type sayValue = ReturnType<typeof Say> // 得到Say返回值的类型

// ================================================ Exclude ========================================================
// 将某个类型中属于另一个的类型移除掉

type Exclude1<T, U> = T extends U ? never : T; // 将 T 中某些属于 U 的类型移除掉

type A = Exclude<'a' | 'b', 'a'> // b

// ================================================ Extract ========================================================
// Extract<T, U> 的作用是从 T 中提取出 U

type B = Extract<'a' | 'b', 'b'> // 'b'

// ================================================ Omit ========================================================
//Omit<T, K extends keyof any> 的作用是使用 T 类型中除了 K 类型的所有属性，来构造一个新的类型。

interface List2 {
    title: string,
    author: string
    completed: boolean
}

type NewList2 = Omit<List2, 'author'>
const newlist2: NewList2 = {
    title: 'aa',
    completed: true
}

// ================================================ NonNullable ========================================================
// 用于过滤类型中的null 和 undefined

type C = NonNullable<string | number | undefined> // 删除了undefined 类型

// ================================================ NonNullable ========================================================
//  Parameters<T> 的作用是用于获得函数的参数类型组成的元组类型

type Func1 = (string, number) => void

type D = Parameters<Func1>

const dd: D = ['aa', 12]