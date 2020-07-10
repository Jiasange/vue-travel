<template>
    <div>
        <router-link
            tag="div"
             to="/" 
             class="header-abs"
            v-show="showAbs"    
        >
            <div class="iconfont header-abs-back">&#xe7f9;</div>
        </router-link>
        <div 
            class="header-fixed"
            v-show="!showAbs"
            :style="opacityVal"
        >
            <router-link to="/">
                <div class="header-fixed-left">
                    <div class="iconfont icon-return">&#xe7f9;</div>
                </div>
            </router-link>
            景点详情
        </div>
    </div>
    
</template>

<script>
export default {
    name: 'DetailHeader',
    data () {
        return {
            showAbs: true,
            opacityVal: {
                opacity: 0
            }
        } 
    },
    methods: {
       handleScroll () {
           const topVal = document.documentElement.scrollTop;
           if (topVal > 50) {
               this.showAbs = false;
               let opacity = topVal / 140;
               opacity = opacity > 1 ? 1 : opacity;
               this.opacityVal = {
                   opacity
               }
           } else {
               this.showAbs = true;
           }
       }
    },
    activated () {
        window.addEventListener('scroll', this.handleScroll)
    },
    deactivated () {
        window.removeEventListener("scroll", this.handleScroll);
    }
}
</script>

<style lang="stylus" scoped>
@import '~stylus/varibles.styl'
    .header-abs
        position $psabso
        left 0.2rem
        top 0.2rem
        width 0.8rem
        height 0.8rem
        line-height 0.8rem
        text-align $tac
        border-radius 0.4rem
        background rgba(0, 0, 0, 0.8)
        z-index 1
        .header-abs-back
            color $colorfff
            font-size 0.4rem
    .header-fixed
        position fixed
        top 0
        left 0
        right 0
        height $headerHeight
        line-height $headerHeight
        color $colorfff
        text-align $tac
        background $bgColor
        font-size 0.32rem
        z-index 1
        .header-fixed-left
            position $psabso
            width .64rem
            left 0
            .icon-return 
                font-size .5rem
                text-align $tac
                color $colorfff
</style>