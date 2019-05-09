<template>
  <div class="home" >
    <img alt="Vue logo" src="../assets/img/logo.png" />
<!--    <HelloWorld msg="Welcome to Your Vue.js App" />-->
    <div ref="wrapper" class="scroll">
      <ul>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
      </ul>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
// @ is an alias to /src
import Footer from '@/components/Footer.vue'
import Bscroll from 'better-scroll'

export default {
  name: 'home',
  components: {
    Footer
  },
  mounted() {
    this.scroll = new Bscroll(this.$refs.wrapper)
  }
}
</script>
<style lang="scss">
  .home{
    .scroll{
      height: 100px;
      overflow: hidden;
    }
  }
</style>
