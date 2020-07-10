<template>
    <div class="header">
        <div class="header-left">
            <div class="iconfont icon-return">&#xe7f9;</div>
        </div>
        <div class="header-ipt">
            <span class="iconfont icon-search">&#xe751;</span>
            请输入城市/景点/游玩主题</div>
        <!-- <input class="header-ipt" type="text" placeholder="请输入..." /> -->
        <router-link to="/city">
            <div class="header-right">
                {{ this.$store.state.city }}
                <span class="iconfont icon-arrow">&#xe642;</span>
            </div>
        </router-link>
    </div>
</template>

<script>
export default {
    name: 'HomeHeader'
    
}
</script>

<style lang="stylus" scoped>
@import '~stylus/varibles.styl'
    // 1rem = html font-size = 50px
    .header
        display flex
        line-height $headerHeight
        color $colorfff
        background $bgColor
        .header-left
            width .64rem
            float left
            .icon-return 
                font-size .5rem
                text-align $tac
        .header-ipt
            display flex
            align-items center
            flex 1
            height .64rem
            color #cccccc
            font-size .26rem
            background #ffffff
            margin-top .1rem
            margin-left .2rem
            padding-left .1rem
            border-radius .1rem
            .icon-search
                font-size .4rem
        .header-right
            width 1.24rem
            color $colorfff
            text-align $tac
            float right
            .icon-arrow
                font-size .24rem
                margin-left -0.04rem


</style>