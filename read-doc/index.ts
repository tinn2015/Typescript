//  ======= ts 中的基础类型 ==========

/**
 * boolean
 */
let flag: boolean = false

/**
 * number
 */
let total: number = 8

/**
 * string
 */
let s: string = 'aaa'

/**
 * 
 * array
 */
let arr: number[] = [1,2,3] 
let arr2: Array<number> = [1,2,3]

/**
 * 
 * Tuple 元组， 元组是已知长度、已知类型的数组
 */
let x: [string, number] = ['aaa', 111]

/**
 * 
 * enum 枚举
 */
enum Color {Red, Green, Blue}
let c: Color = Color.Red
// 枚举编号默认是从0开始， 也可以手动修改
let cc: string = Color[0]

/**
 * 
 * Any 不指定类型， 直接跳过检测
 */
let anyValue: any = 4
anyValue = 'aa'

/**
 * 
 * Void 与Any相反表示没有任何类型，通常函数没有返回值的时候使用void
 */
function log():void {
    console.log('aa')
}

/**
 * 
 * Null/Undefined, 通常无需申明，直接赋值就行
 */
let u: undefined = undefined
let n: null = null

/**
 * 
 * Never 表示用不存在值的类型， never是任何类型得子类型
 */

// 返回never的函数必须存在无法达到的终点
function error(message: string): never {
    throw new Error(message);
}
// 推断的返回值类型为never
function fail() {
    return error("Something failed");
}
// 返回never的函数必须存在无法达到的终点
function infiniteLoop(): never {
    while (true) {
    }
}

/**
 * Object表示非原始类型，也就是除number，string，boolean，symbol，null或undefined之外的类型
 * @param o 
 */
function say(o: object):void {
    console.log(o)
}

say({name: 'aa'})

/**
 * 
 * 类型断言
 */

// 尖括号断言
let someValue: any = 'ssss'
let sl: number = (<string>someValue).length

// as 断言
let someValue2: any = 'ssss'
let sl2: number = (someValue as string).length

