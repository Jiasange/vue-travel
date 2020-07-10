<template>
    <div class="wrapper">
        <swiper :options="swiperOptions" v-if="showSwiper">
            <swiper-slide
                v-for="item of list"
                :key="item.id"
            >
                <img 
                    class="swiper-pic" 
                    :src="item.src"
                />
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
export default {
    name: 'HomeSwiper',
    props: {
        list: Array
    },
    data () {
        return {
            swiperOptions: {
                pagination:  '.swiper-pagination',
                loop: true
                // Some Swiper option/callback...
            }
        }
    },
    computed: {
        showSwiper() {
            return this.list.length
        }
    },
    mounted () {
    }
}
</script>

<style lang="stylus" scoped>
@import '~stylus/varibles.styl'
.warpper >>> .swiper-pagination-bullet-active
    background var(--swiper-pagination-color, var(--swiper-theme-color))
.warpper
    width 100%
    height 0
    overflow $ofh
    padding-bottom 31.25%
    background #333333
.swiper-pic
    width 100%
</style>