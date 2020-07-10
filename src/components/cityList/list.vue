<template>
    <div class="list" ref="wrapper">
        <!--  -->
        <div>
            <div class="area">
                <div class="title border-topbottom">当前城市</div>
                <div class="area-item">
                    <div class="city-warpper">
                        <div class="city-item">{{ this.$store.state.city }}</div>
                    </div>
                </div>
            </div>
            <div class="area">
                <div class="title border-topbottom">热门城市</div>
                <div class="area-item">
                    <div class="city-warpper"
                        v-for="item of hotCities"
                        :key="item.id"
                        @click="handleCityClick(item.name);"
                    >
                        <div class="city-item">{{ item.name }}</div>
                    </div>
                </div>
            </div>
            <div
                class="area"
                v-for="(item, key) of cities"
                :key="key"
                :ref="key"
            >
                <div class="title border-topbottom">{{ key }}</div>
                <ul class="letter-list"
                    v-for="innerItem of item"
                    :key="innerItem.id"
                    @click="handleCityClick(innerItem.name);"
                >
                    <li class="letter border-bottom">{{ innerItem.name }}</li>
                </ul> 
            </div>
        </div>
        
    </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
    name: 'CityList',
    props: {
        hotCities: Array,
        cities: Object,
        letter: String
    },
    data () {
        return {

        }
    },
    methods: {
        handleCityClick (city) {
            // this.$store.dispatch('changeCity', city);
            this.$store.commit('changeCityAction', city);
            this.$router.push('/');
        }
    },
    watch: {
        letter () {
            if (this.letter) {
                const element = this.$refs[this.letter][0];
                this.scroll.scrollToElement(element);
            }
        }
    },
     mounted () {
        this.scroll = new BScroll(this.$refs.wrapper)
    }
}
</script>

<style lang="stylus" scoped>
@import '~stylus/varibles.styl'   
    .border-topbottom
        &:before
            border-color #ccc
        &:after
            border-color #ccc
    .border-bottom
        &:before
            border-color #ccc
    .list
        position $psabso
        top 1.62rem
        left 0
        right 0
        bottom 0
        overflow $ofh
        .title
            line-height 0.54rem
            color $color666
            font-size 0.26rem
            background #eee
            padding-left 0.2rem
        .area-item
            padding 0.1rem 0.6rem 0.1rem 0.1rem
            overflow $ofh
            .city-warpper
                float left
                width 33.33%
                .city-item
                    text-align  $tac
                    padding 0.1rem 0
                    margin  0.1rem
                    border  0.02rem solid #ccc
                    border-radius 0.06rem
        .letter-list
            .letter
                color $color666
                line-height 0.76rem
                padding-left 0.2rem


</style>