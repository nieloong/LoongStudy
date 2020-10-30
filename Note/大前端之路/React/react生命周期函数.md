# react 生命周期函数

## · 初始化

### 1. getDefaultProps()

注：getDefaultProps这种定义方式是用在你定义组件用的是React.createClass方式的
如果使用的是es6的语法，例如用的是class 组件名 extends React.Component的话，就不要用
getDefaultProps这种方式去定义props了，而是应该用 static propTypes ＝｛｝来定义，这样就不会有警了

```shell
  设置默认的props，也可以用dufaultProps设置组件的默认属性. ---》设置
```

### 2. getInitialState()

注：与getDefaultProps的区别在于前者设置默认的 props，后者设置初始的state在使用es6的class语法时是没有这个钩子函数的，可以直接在constructor中定义 this.state。此时可以访问this.props

### 3. componentWillMount()

注：组件初始化时只调用，以后组件更新不调用，整个生命周期只调用一次，此时可以修改state。

### 4. render()

注：react最重要的步骤，创建虚拟dom，进行diff算法，更新dom树都在此进行。此时就不能更改state了。

### 5. componentDidMount()

注：组件渲染之后调用，只调用一次。可以在此请求数据

## · 更新

### 1. componentWillReceiveProps(nextProps)

注：组件初始化时不调用，组件接受新的props时调用。

### 2. shouldComponentUpdate(nextProps, nextState)

注：react性能优化非常重要的一环。组件接受新的state或者props时调用，我们可以设置在此对比前后两个props和state是否相同，如果相同则返回false阻止更新，因为相同的属性状态一定会生成相同的dom树，这样就不需要创造新的dom树和旧的dom树进行diff算法对比，节省大量性能，尤其是在dom结构复杂的时候

### 3. componentWillUpdata(nextProps, nextState)

注：组件初始化时不调用，只有在组件将要更新时才调用，此时可以修改state

### 4. render()

注：组件渲染

### 5. componentDidUpdate()

注：组件初始化时不调用，组件更新完成后调用，此时可以获取dom节点。

## · 卸载

### componentWillUnmount()

注：组件将要卸载时调用，一些事件监听和定时器需要在此时清除。

![原理图](http://image.nie-long.com/WX20201026-141345-20201026.png)
