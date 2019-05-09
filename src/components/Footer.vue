<template>
    <div class="footer">
        <div class="footerItem">
            <router-link to="/">
                <i class="mint-toast-icon mintui mintui-more"></i>
                首页
            </router-link>
        </div>
        <div class="footerItem">
            <router-link to="/">
                书架
            </router-link>
        </div>
        <div class="footerItem">
            <router-link to="/">
                分类
            </router-link>
        </div>
        <div class="footerItem">
            <router-link to="/">
                我的
            </router-link>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'Footer',
    data () {
      return {
        popupVisible: false
      }
    },
    methods: {

    }
  }
</script>
<style scoped lang="scss">
    .footer{
        position: fixed;
        left: 0;
        bottom: 0;
        height: 38px;
        width: 100%;
        .footerItem{
            display: inline-block;
            width: 25%;
        }
    }
</style>