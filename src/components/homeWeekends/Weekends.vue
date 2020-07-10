<template>
    <div>
        <div class="title">周末去哪儿</div>
        <ul>
            <li class="list_item border-bottom"
                v-for="item of list"
                :key="item.id"
            >
                <div class="item_wrapper">
                    <img class="item_pic" :src="item.imgSrc" alt="" />
                </div>
                <div class="item_info">
                    <p class="item_title"> {{ item.title }} </p>
                    <p class="item_desc"> {{ item.desc }} </p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'HomeWeekends',
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
    .item_wrapper
        overflow $ofh
        height 0
        padding-bottom 37.1%
        .item_pic
            width 100%
    .item_info
        padding 0.1rem
        margin-bottom 0.2rem
        .item_title
            line-height 0.54rem
            font-size 0.32rem
            ellipsis()
        .item_desc
            line-height 0.4rem
            color $color666
            ellipsis()
</style>