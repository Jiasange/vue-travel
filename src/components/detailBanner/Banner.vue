<template>
    <div>
        <div class="banner" @click="handleBannerClick">
            <img class="banner-pic" :src="bannerImg" alt="">
            <div class="banner-info">
                <div class="info-title">{{ this.sightName }}</div>
                <div class="info-number">
                    <span class="iconfont info-icon">&#xe60a;</span>&nbsp;
                    {{ this.gallaryImgs.length }}
                </div>
            </div>
        </div>
        <common-gallary 
            :imgList="gallaryImgs" 
            v-show="showGallary"
            @closeGallary="handleGallaryClose"
        ></common-gallary>
    </div>
    
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'
export default {
    name: 'DetailBanner',
    props: {
        sightName: String,
        bannerImg: String,
        gallaryImgs: Array
    },
    components: {
        CommonGallary
    },
    data () {
        return {
            showGallary: false
        } 
    },
    methods: {
        handleBannerClick () {
            this.showGallary = true
        },
        handleGallaryClose () {
            this.showGallary = false
        }
    }
}
</script>

<style lang="stylus" scoped>
@import '~stylus/varibles.styl'
    .banner
        position $psrela
        overflow hidden
        height 0
        padding-bottom 55%
        .banner-pic
            width 100%
        .banner-info
            position $psabso
            left 0
            bottom 0
            right 0
            line-height 0.6rem
            display flex
            justify-content space-between
            color $colorfff
            background-image linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.6))
            .info-title
                flex 1
                padding 0 0.2rem
                font-size 0.32rem
            .info-number
                height 0.32rem
                line-height 0.32rem
                font-size 0.24rem
                padding 0 0.4rem
                margin-top 0.14rem
                margin-right 0.14rem
                background rgba(0, 0, 0, 0.8)
                border-radius 0.2rem
                .info-icon
                    font-size 0.24rem

</style>