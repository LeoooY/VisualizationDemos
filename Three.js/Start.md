### 准备
- three.js库
- 一个简单的html以入门

### 创建
需要三个东西来完成three.js的展示
- scene
- camera
- renderer

example:
```js
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );
```
通过以上代码创建好了scene、camera和renderer（注意需要引入three.js文件）

three.js里面有多种camera，现在我们使用PerspectiveCamera。
基本属性
- fov
  - field of view
  - is the extent of the scene that is seen on the display at any given moment.
  - The value is in degrees. 值是角度
- aspect ratio

- near
- far
- renderer
  - WebGLRenderer
- size
  - updateStyle
  - setSize
