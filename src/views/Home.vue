<template>
  <div class="home">
    <!-- 头部-->
    <div class="home-top">
      <div>
        <input type="search" placeholder="搜索你感兴趣的作品" class="home-search">
        <mt-swipe :auto="4000">
          <mt-swipe-item>1</mt-swipe-item>
          <mt-swipe-item>2</mt-swipe-item>
          <mt-swipe-item>3</mt-swipe-item>
        </mt-swipe>
      </div>
    </div>
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
    .home-top{
      width: 100%;
      height: 270px;
      background: -webkit-linear-gradient(to left,#FFCF1C, #FFE174); /* Safari 5.1 - 6.0 */
      background: -o-linear-gradient(to left,#FFCF1C, #FFE174);     /* Opera 11.1 - 12.0 */
      background: -moz-linear-gradient(to left,#FFCF1C, #FFE174);   /* Firefox 3.6 - 15 */
      background: linear-gradient(to left,#FFCF1C, #FFE174);        /* 标准的语法 */
      .home-search{
        padding: 5px;
        width: 280px;
        border: none;
        border-radius: 50px;
        margin-top: 40px;
      }
    }
    .scroll{
      height: 100px;
      overflow: hidden;
    }
  }
</style>
