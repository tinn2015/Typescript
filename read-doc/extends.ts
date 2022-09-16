/**
 * 接口继承
 */

// interface 接口继承
interface PointX {
    x: number
}

interface Point extends PointX {
    y: number
}

const point: Point = {
    x: 1,
    y: 33
}

//type 类型的拓展
type PointX1 = {
    x: number
}

type Point1 = PointX1 & {
    y: number
}

const point1: Point1 = {
    x: 11,
    y: 22
}