<template>
    <div>
        <div class="title">热门推荐</div>
        <ul>
            <router-link 
                tag="li"
                class="list_item border-bottom"
                v-for="item of list"
                :key="item.id"
                :to="'/detail/' + item.id"
            >
                <div class="item_wrapper">
                    <img class="item_pic" :src="item.imgSrc" alt="" />
                </div>
                <div class="item_info">
                    <p class="item_title"> {{ item.title }} </p>
                    <p class="item_desc"> {{ item.desc }} </p>
                    <button class="item_btn">查看详情</button>
                </div>
            </router-link>
        </ul>
    </div>
    
</template>

<script>
export default {
    name: 'Recommend',
    props: {
        list: Array
    },
    data () {
        return {

        }
    }
}

</script>

<style lang="stylus" scoped>
@import '~stylus/varibles.styl'
@import '~stylus/mixins.styl'
    .title
        line-height 0.8rem
        background #eee
        text-indent 0.2rem
        margin-top 0.2rem
    .list_item
        display flex
        height 1.8rem
        overflow $ofh
        .item_pic
            width 1.6rem  
            height 1.6rem
            padding 0.1rem
        .item_info
            flex-grow 1
            padding 0.1rem
            min-width 0
            .item_title
                line-height 0.54rem
                font-size 0.32rem
                ellipsis()
            .item_desc
                line-height 0.4rem
                color $color666
                ellipsis()
            .item_btn
                line-height 0.44rem
                margin-top 0.16rem
                background #ff9300
                padding 0 0.1rem
                border-radius 0.06rem
                color $colorfff
</style>
