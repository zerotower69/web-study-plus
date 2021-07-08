//自己实现call,apply和bind三个改变this的方法

/**
 * 1.绑定this
 * 2.定义函数
 * 3.处理参数并执行
 * 4.处理返回值
 * 5.解绑
 */

Function.prototype.ztCall=function(context){
    //this绑定
    if(window!=undefined){
        context=context||window;
    }
    context.func=this;
    //参数获取并处理
    let args=[...arguments].slice(1);
    //函数执行
    let result=context.func(...args);
    //解除绑定
    delete context.func;
    //返回值
    return result;
}

//apply只不过参数是数组
Function.prototype.ztApply=function(context){
    if(window!=undefined){
        context=context||window;
    }
    context.func=this;
    //注意这里参数的处理
    let args=[...arguments][1];
    if(!Array.isArray(args)){
        throw new TypeError("输入的参数不是类似数组的形式!");
    }
    let result=context.func(...args);
    delete context.func;
    return result;
}

//bind返回一个函数

Function.prototype.ztBind=function(context){
    let self=this;
    if(window!=undefined){
        context=context||window;
    }
    let args=[...arguments].slice(1);
    //这里还用到了闭包
    return function F(){
        //参数拼接
        let newArgs=[...arguments];
        let allArgs=args.concat(newArgs);
        return self.ztApply(context,allArgs);
    }
}
