<template>
    <div class="banner">
        <swiper :options="swiperOptions" v-if="showPage">
            <swiper-slide
                v-for="(page, index) of bannerPages"
                :key="index"
            >
                <div class="icon"
                    v-for="item of page"
                    :key="item.id"
                >
                    <div class="icon_pic">
                        <img class="pic_content" :src="item.iconSrc" alt="">
                    </div>
                    <p class="icon_text">{{ item.desc }}</p>
                </div>
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
export default {
    name: 'HomeBanner',
    props: {
        list: Array
    },
    data() {
        return {
            swiperOptions: {
                pagination:  '.swiper-pagination',
                loop: false,
                autoplay: false
                // Some Swiper option/callback...
            },
        
        }
    },
    computed: {
        bannerPages () {
            let pages = [];
            this.list.forEach((v, i) => {
                let page = Math.floor(i / 8)
                if(!pages[page]) {
                    pages[page] = [];
                }
                pages[page].push(v);
            });
            return pages;
        },
        showPage() {
            return this.list.length
        }
    }
}


</script>

<style lang="stylus" scoped>
@import '~stylus/varibles.styl'
@import '~stylus/mixins.styl'
    .banner
        margin-top 0.2rem
    .banner >>> .swiper-container
        // width 100%
        height 0
        // overflow hidden
        padding-bottom 50%
        .icon
            position $psrela
            float left
            width 25%
            height 0
            padding-bottom 25%
            color $colorfff
            overflow $ofh
            .icon_pic
                // color #fff
                position $psabso
                top 0
                left 0
                right 0
                bottom 0.44rem
                // background #fe7039
                // border-radius 50%
                box-sizing border-box
                // display flex
                // justify-content center
                // align-items center
                padding 0.1rem
                // .iconfont_content
                //     font-size 0.6rem
                .pic_content
                    height 100%
                    display block
                    margin 0 auto
            .icon_text
                position $psabso
                left 0
                right 0
                bottom 0
                height 0.44rem
                line-height 0.44rem
                color $color
                text-align center
                ellipsis()
</style>