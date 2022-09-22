// ======================================= 通过extends 判断子集 =======================================
type TestUnknown<T> = T extends unknown ? 'yse' : 'no'
type TestNever<T> = T extends never ? 'yse' : 'no'

type res1  = TestUnknown<boolean> // yes
type res2  = TestNever<boolean> // no

// ======================================= 任何集合与空集的交集都是空集 =======================================
type Test1 = string & never // nerver

// ======================================= 任何集合与全集的交集都是自己 =======================================
type Test2 = string & unknown // string

// ======================================= 联合类型巧用 =======================================
type MapType<T> = {name: T}
type T = MapType<'tinn' | 123> // name 属性为 string | number

// =============================================== 递归 ==============================================
interface Pet {
    id: string
    name: string
    children: Pet[]
}

const pet: Pet = {id: '11', name: '22', children: [{}]}

// ======================================= 动态根据入参，推导出参数类型 =======================================
function getProps<O extends object, K extends keyof O>(obj: O, key: K): O[K] {
    return obj[key]
}

const res = getProps({name: 'tinn'}, 'name') // string

// ======================================= 使用infer进行推导 (infer X 可以理解为设一个未知数X)=======================================

// 获取Promise的返回值类型
type ObtainPromiseResolveType<T> = T extends Promise<infer P> ? P : never

type TT = ObtainPromiseResolveType<Promise<string>> // string

// 取出Array 泛型
type ObtinArrayType<T> = T extends Array<infer P> ? P : never
type TTT = ObtinArrayType<Array<string>> // string

// ======================================= 利用keyof获取所有类型 =======================================
interface Obj {
    a: string
    b: number
    c: boolean
}

type AA = Obj[keyof Obj] // string | number | boolean

const aa: AA = 'a'

