<template>
    <div>
        <!-- <keep-alive> -->
        <detail-header></detail-header>
        <!-- </keep-alive> -->
        <detail-banner
            :sightName="sightName"
            :bannerImg="bannerImg"
            :gallaryImgs="gallaryImgs"
        ></detail-banner>
        <div class="content">
            <detail-list :list="list"></detail-list>
        </div>
    </div>
</template>

<script>
import DetailHeader from '../../components/detailHeader/Header'
import DetailBanner from '../../components/detailBanner/Banner'
import DetailList from '../../components/detailList/List'
import axios from 'axios'
export default {
    name: 'Detail',
    components: {
        DetailHeader,
        DetailBanner,
        DetailList
    },
    data () {
        return {
            sightName: '',
            bannerImg: '',
            gallaryImgs: [],
            list: []
        }
    },
    mounted () {
        this.getDetailInfo();
    },
    methods: {
        getDetailInfo () {
            axios.get('/api/detail.json', {
                params: {
                    id: this.$route.params.id
                }
            }).then(this.handleGetInfoSucc)
        },
        handleGetInfoSucc (res) {
            res = res.data;
            if(res.ret && res.data) {
                const data = res.data;
                this.sightName = data.sightName;
                this.bannerImg = data.bannerImg;
                this.gallaryImgs = data.gallaryImgs;
                this.list = data.categoryList;
            }
            
        }
    }
}
</script>

<style lang="stylus" scoped>
    .content
        height 50rem
</style>