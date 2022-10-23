/**
 * 装饰器是一个语法糖， 分为类装饰器， 方法装饰器， 属性装饰器
 */

// nest.js @get实现
import axios from 'axios'

function Get (url: string):any {
  return (target: any, key: string, descriptor: PropertyDescriptor) => {
    console.log('====target====', target)
    console.log('====key====', key)
    console.log('====descriptor====', descriptor)
    const fn = descriptor.value
    axios.get(url).then((res:any) => {
      fn(res)
    }).catch((err: any) => {
      fn(err)
    })
  }
}

class controller {
  constructor () {}
  @Get('https://mbd.baidu.com/newspage/api/videorec?nid=sv_4529446187666542483')
  getList (res: any) {
    console.log('res', res)
  }
}