/*
 * @Creater: douqiting
 * @Date: 2021-05-28 15:40:11
 * @LastEditTime: 2021-05-28 16:28:09
 * @FilePath: /Typescript/装饰器.js
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    debugger
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") 
        r = Reflect.decorate(decorators, target, key, desc);
    else 
        for (var i = decorators.length - 1; i >= 0; i--) 
            debugger
            if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function Greeter(target) {
    debugger
    target.prototype.greet = function () {
        console.log("Hello Semlinker!");
    };
}
var Greeting = /** @class */ (function () {
    function Greeting() {
        // 内部实现
    }
    Greeting = __decorate([
        Greeter
    ], Greeting);
    return Greeting;
}());
var myGreeting = new Greeting();
myGreeting.greet(); // console output: 'Hello Semlinker!';

