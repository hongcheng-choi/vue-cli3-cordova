<template>
  <div class="home">
    <!-- 头部-->
    <div class="home-top">
      <div>
        <input type="search" placeholder="搜索你感兴趣的作品" class="home-search">
        <van-swipe :autoplay="3000" indicator-color="white">
          <van-swipe-item>1</van-swipe-item>
          <van-swipe-item>2</van-swipe-item>
          <van-swipe-item>3</van-swipe-item>
          <van-swipe-item>4</van-swipe-item>
        </van-swipe>
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
// import { Swiper } from 'vux'

export default {
  name: 'home',
  components: {
    Footer
  },
  data(){
    return{
      images: [
        'https://img.yzcdn.cn/1.jpg',
        'https://img.yzcdn.cn/2.jpg'
      ]
    }
  },
  methods: {
    get(){
      console.log(this.axios)
    }
  },
  mounted() {
    this.$nextTick(()=>{
      this.scroll = new Bscroll(this.$refs.wrapper)
    })
    this.get()
  }
}
</script>
<style scoped lang="scss">
  .home{
    .home-top{
      width: 100%;
      height: 200px;
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
  .van-swipe{
    width: 90%;
    height: 150px;
    line-height: 150px;
    margin: 25px auto;
    border-radius: 10px;
    background: #39a9ed;
  }
</style>
