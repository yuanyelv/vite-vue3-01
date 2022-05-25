<!--
 * @Author: yuanyelv 287142032@qq.com
 * @Date: 2022-05-25 14:47:39
 * @LastEditors: yuanyelv 287142032@qq.com
 * @LastEditTime: 2022-05-25 20:58:02
 * @FilePath: \vite-vue3-01\src\components\HelloWorld.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <h1>HelloWorld</h1>
  <abc />
  <Foo msg="hello" />
</template>

<script lang="tsx" setup>
import Foo from './foo'
const abc = <h1>abc</h1>
</script>
