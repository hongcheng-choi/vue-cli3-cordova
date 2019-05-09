<template>
    <div class="footer">
        <div class="footerItem">
            <router-link to="/">
                <div class="navBox">
                    <span style="display: block;margin-bottom: 3px">
                        <img src="../assets/img/index@2x.png" width="20" height="20" alt="">
                    </span>
                    <span>首页</span>
                </div>
            </router-link>
        </div>
        <div class="footerItem">
            <router-link to="/">
                <div class="navBox">
                    <span style="display: block;margin-bottom: 3px">
                        <img src="../assets/img/bookjia@2x.png" width="20" height="20" alt="">
                    </span>
                    <span>书架</span>
                </div>
            </router-link>
        </div>
        <div class="footerItem">
            <router-link to="/">
                <div class="navBox">
                    <span style="display: block;margin-bottom: 3px">
                        <img src="../assets/img/step@2x.png" width="20" height="20" alt="">
                    </span>
                    <span>分类</span>
                </div>
            </router-link>
        </div>
        <div class="footerItem">
            <router-link to="/">
                <div class="navBox">
                    <span style="display: block;margin-bottom: 3px">
                        <img src="../assets/img/mine@2x.png" width="20" height="20" alt="">
                    </span>
                    <span>我的</span>
                </div>
            </router-link>
        </div>
    </div>
</template>
<script>
 export default {
   name: 'Footer'
 }
</script>
<style scoped lang="scss">
    .footer{
        position: fixed;
        left: 0;
        bottom: 0;
        height: 55px;
        width: 100%;
        border: 1px solid #cccccc;
        .footerItem{
            display: inline-block;
            width: 25%;
            height: 100%;
            .navBox{
                height: 55px;
                display: table-cell;
                vertical-align: middle;
                text-align: center;
            }
            a{
                display: inline-block;
                font-size: 14px;
                color: #999999;
            }
        }
    }
</style>