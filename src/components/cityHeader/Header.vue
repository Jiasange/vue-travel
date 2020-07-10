<template>
    <div class="header">
        <router-link to="/">
            <div class="header-left">
                <div class="iconfont icon-return">&#xe7f9;</div>
            </div>
        </router-link>
        城市选择
    </div>
</template>

<script>
export default {
    name: 'CityHeader',
    data() {
        return {

        }
    }
}
</script>

<style lang="stylus" scoped>
@import '~stylus/varibles.styl'
    .header
        position $psrela
        line-height $headerHeight
        color $colorfff
        text-align $tac
        overflow $ofh
        background $bgColor
        font-size 0.32rem
        .header-left
            position $psabso
            width .64rem
            left 0
            .icon-return 
                font-size .5rem
                text-align $tac
                color $colorfff
</style>