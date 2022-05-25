<!--
 * @Author: yuanyelv 287142032@qq.com
 * @Date: 2022-05-25 23:06:41
 * @LastEditors: yuanyelv 287142032@qq.com
 * @LastEditTime: 2022-05-26 03:43:09
 * @FilePath: \vite-vue3-01\src\views\home\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <h1>home</h1>
  <p>{{ $store.state.count }}</p>
  <p>{{ store.state.count }}</p>
  <p>{{ $store.state }}</p>
</template>

<script lang="ts" setup>
import { useStore } from '../../store'
const store = useStore()
console.log(store.state.count)
</script>

<style lang="scss" scoped>

</style>
