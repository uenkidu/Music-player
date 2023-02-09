import {trimEnd} from 'lodash'

declare global {
    // interface Array<T>{
    //     /**
    //      * 获取数组第一个元素
    //      */
    //     first<T>(this:T[]):T
    //
    //     last<T>(this:T[]):T
    //     sample<T>(this:T[]):T
    //     /**
    //      * 获得 n 个随机元素
    //      * @param size
    //      */
    //     sampleSize<T>(this:T[],size:number):T[]
    // }
    interface String {
        /**
         *
         */
        trimEnd(this: string, chars?: string): string
    }
}
String.prototype.trimEnd = function (this: string, chars: string = ' '): string {
    return trimEnd(this,chars)
}
