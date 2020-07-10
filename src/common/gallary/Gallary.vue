<template>
    <div class="container" @click="handleGallaryClick">
        <div class="wrapper">
            <swiper :options="swiperOptions">
                <swiper-slide
                    v-for="(item, index) in imgList"
                    :key="index"
                >
                    <img 
                        class="gallary-pic" 
                        :src="item"
                    />
                </swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CommonGallary',
    props: {
        imgList: {
            type: Array,
            default () {
                return []
            }
        }
    },
    data() {
        return {
            swiperOptions: {
                pagination: '.swiper-pagination',
                paginationType: 'fraction',
                observeParents:true,
                observer: true
            }
        }
    },
    methods: {
        handleGallaryClick () {
            this.$emit('closeGallary')
        }
    }
}
</script>

<style lang="stylus" scoped>
@import '~stylus/varibles.styl' 
    .container >>> .swiper-container
        overflow inherit
    .container
        display flex
        justify-content center
        flex-direction column
        z-index 1
        position fixed
        left 0
        right 0
        top 0
        bottom 0
        background #000
        .wrapper
            height 0
            width 100%
            padding-bottom 100%
            .gallary-pic
                width 100%
            .swiper-pagination
                color $colorfff
                bottom -1rem
</style>