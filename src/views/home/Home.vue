<template>
    <div>
        <home-header></home-header>
        <home-swiper :list="swiperList"></home-swiper>
        <home-banner :list="bannerList"></home-banner>
        <home-recommend :list="recommendList"></home-recommend>
        <home-weekends :list="weekendsList"></home-weekends>
    </div>
</template>

<script>
import HomeHeader from '../../components/homeHeader/Header'
import HomeSwiper from '../../components/homeSwiper/Swiper'
import HomeBanner from '../../components/homeBanner/Banner'
import HomeRecommend from '../../components/homeRecommend/Recommend'
import HomeWeekends from '../../components/homeWeekends/Weekends'
import axios from 'axios'

export default {
    name: 'Home',
    components: {
        HomeHeader,
        HomeSwiper,
        HomeBanner,
        HomeRecommend,
        HomeWeekends
    },
    data () {
        return {
            swiperList: [],
            bannerList: [],
            recommendList: [],
            weekendsList: []
        }
    },
    mounted () {
        this.getHomeInfo()
    },
    methods: {
        getHomeInfo () {
            axios.get('/api/index.json')
            .then(this.getHomeInfoSucc)
        },
        getHomeInfoSucc(res) {
            res = res.data;
            if (res.ret && res.data) {
                // this.city = res.data.city;
                this.swiperList = res.data.swiperList;
                this.bannerList = res.data.bannerList;
                this.recommendList = res.data.recommendList;
                this.weekendsList = res.data.weekendsList;
            }
        }
    }
}
</script>

<style lang="stylus" scoped>
    
</style>