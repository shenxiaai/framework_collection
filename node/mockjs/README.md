# mock使用手册

## 安装步骤

```
npm i
npm run dev
```

## mock语法介绍(详见/routes/index.js文件)

### 字符串 属性值

```
属性名   name
生成规则 rule
属性值   value
'name|rule': value
```

```
'name|min-max': String
重复 String 生成一个字符串，重复次数大于等于 min，小于等于 max
```

```
'name|count': String
重复 String 生成一个字符串，重复次数等于 count
```

### 数字 属性值

```
'name|+1': Number
属性值 Number 自动加 1，初始值为 Number
```

```
'name|min-max': Number
生成一个 >=min 、 <=max 的整数，属性值 Number 只是用来确定类型，不作为初始值
```

```
'name|min-max.dmin-dmax': Number
生成一个浮点数，整数部分 >=min 、 <=max，小数部分保留 dmin 到 dmax 位。
```

### 布尔值 属性值

```
'name|1': Boolean
随机生成一个布尔值，值为 true 的概率是 1/2，值为 false 的概率同样是 1/2
```

```
'name|min-max': Boolean
随机生成一个布尔值，值为 Boolean 的概率是 min / (min + max)，值为 !Boolean 的概率是 max / (min + max)
```

### 对象 属性值

```
'name|count': Object
从属性值 Object 中随机选取 count 个属性
```

```
'name|min-max': Object
从属性值 Object 中随机选取 min 到 max 个属性
```

### 数组 属性值

```
'name|1': Array
从属性值 Array 中随机选取 1 个元素，作为最终值
```

```
'name|+1': Array
从属性值 Array 中顺序选取 1 个元素，作为最终值
```

```
'name|min-max': array
通过重复属性值 array 生成一个新数组，重复次数大于等于 min，小于等于 max
```

```
'name|count': Array
通过重复属性值 Array 生成一个新数组，重复次数为 count
```

### 函数 属性值

```
'name': Function
执行函数 Function，取其返回值作为最终的属性值，函数的上下文为属性 'name' 所在的对象
```

### 正则 属性值

```
'name': Regexp
根据正则表达式 Regexp 反向生成可以匹配它的字符串。用于生成自定义格式的字符串
```

### 占位符： 只是在属性值字符串中占个位置，并不出现在最终的属性值中。

```
格式：
@占位符
@占位符(参数 [, 参数])
```