# 深拷贝与浅拷贝

- 值类型 undefined,null,Number,String,Symbol,boolean
- 引用类型 Date,Regex,Array 等都是对象

# ## 简单的赋值不同

值类型直接拷贝一份"副本"，改变新值不影响旧值。

引用类型拷贝的是内存地址（可以理解为 C 中的指针），改变新值旧值跟随改变。
