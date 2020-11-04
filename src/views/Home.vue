<!--
 * @Description:
 * @Autor: ZY
 * @Date: 2020-11-03 11:16:12
 * @LastEditors: ZY
 * @LastEditTime: 2020-11-03 17:25:16
-->
<template>
  <div class="home">
    <img
      alt="Vue logo"
      src="../assets/logo.png"
    >
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src
import host from '@/config/server/index.ts'

@Options({
  components: {
    HelloWorld
  }
})

export default class Home extends Vue {
  created() {
    console.log(host)
  }
}
</script>
