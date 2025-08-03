# wildcard-resolver
import files with any extension as raw strings.


## 🔧 When Is This Plugin Useful?

1. 🎮 WebGL / GLSL Shaders

Import .vert and .frag files directly as raw text:
```js
import vertexShader from './shaders/basic.vert';
import fragmentShader from './shaders/lighting.frag';
gl.shaderSource(vertexShaderProgram, vertexShader);
```
✅ No need for bundling tricks — shader files stay separate and readable.

2. Code Snippets or Examples
Embed snippets in blogs, playgrounds, or editors:
```js
import exampleCode from './snippets/hello-world.asm';
<CodeBlock code={exampleCode} language="asm" />
```
3. Plain Text / Markdown / Config Files 
```js
import helpText from './docs/help.txt';
console.log(helpText);
```
✅ Great for embedding documentation, user guides, or licensing info directly in-app.

4. ...


## Key Features

✅ Import Any File as Raw String
🚀 Compatible with Astro / Vite 
✅ Custom Extension Support
🗂️ Supports Nested File Imports