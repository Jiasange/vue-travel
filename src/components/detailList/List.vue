<template>
    <div>
        <div 
            class="item"
            v-for="(item, index) of list"
            :Key="index"
        >
            <div class="item-title border-bottom">
                <span class="item-title-icon"></span>
                {{ item.title }}
            </div>
            <div class="item-children" v-if="item.children">
                <detail-list :list="item.children"></detail-list>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'DetailList',
    props: {
        list: Array
    },
    data () {
        return {}
    },
    methods: {

    }
}
</script>

<style lang="stylus" scoped>
    .item-title
        line-height 0.8rem
        font-size 0.32rem
        padding 0 0.2rem
        // position relative
        .item-title-icon
            display inline-block
            position relative
            width .36rem
            height .36rem
            top .06rem
            left .06rem
            background url("../../assets/images/detail.png") 0 -.9rem no-repeat
            margin-right .1rem
            background-size .4rem 3rem
    .item-children
        padding 0 0.2rem
</style>