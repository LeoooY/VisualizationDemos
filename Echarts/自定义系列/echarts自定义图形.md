自定义系列（custom series），是一种系列的类型。它把绘制图形元素这一步留给开发者去做，从而开发者能在坐标系中自由绘制出自己需要的图表。
- [官网入门级教程](http://echarts.baidu.com/tutorial.html#%E8%87%AA%E5%AE%9A%E4%B9%89%E7%B3%BB%E5%88%97)
- [配置项](http://echarts.baidu.com/option.html#series-custom)
- [example-官网](http://echarts.baidu.com/examples/index.html)

### 开发者自定义渲染逻辑（renderItem 函数）

custom 系列需要开发者自己提供图形渲染的逻辑。这个渲染逻辑一般命名为 renderItem。例如






api.coord() 通过值与设置的X轴Y轴的值计算这个点渲染的坐标

```
//渲染函数

function renderItem(param, api){

}

```

- param 包含当前数据信息和坐标系的信息
- api echart提供的可以调用的一些方法 如api.Style() api.coord()
  - api.value(...)，意思是取出 dataItem 中的数值。例如 api.value(0) 表示取出当前 dataItem 中第一个维度的数值。
  - api.coord(...)，意思是进行坐标转换计算。例如 var point = api.coord([api.value(0), api.value(1)]) 表示 dataItem 中的数值转换成坐标系上的点。
  - api.size(...) 函数，表示得到坐标系上一段数值范围对应的长度。
  - api.style(...) 函数，他能得到 series.itemStyle 中定义的样式信息，以及视觉映射的样式信息。也可以用这种方式覆盖这些样式信息：api.style({fill: 'green', stroke: 'yellow'})。