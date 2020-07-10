<template>
    <div>   
        <div class="search">
            <input 
                class="search-ipt" 
                type="text" 
                placeholder="请输入城市名称或拼音" 
                v-model="keyWord"
            />
        </div>
        <div 
            class="search-content"
            ref="search"
            v-show="keyWord"
        >
            <ul>
                <li
                    class="search-item border-bottom"
                    v-for="item of list"
                    :key="item.id"
                    @click="handleCityClick(item.name);"
                >
                    {{ item.name }}
                </li>
                <li 
                    class="search-item item-none border-bottom"
                    v-show="hasNoData"
                >没有相关城市信息</li>
            </ul>
        </div>
    </div>
    
</template>

<script>
import BScroll from 'better-scroll'
export default {
    name: 'CitySearch',
    props: {
        cities: Object
    },
    data () {
        return {
            keyWord: '',
            list: [],
            timer: null
        }
    },
    computed: {
        hasNoData () {
            return !this.list.length
        }
    },
    methods: {
        handleCityClick (city) {
            this.$store.commit('changeCityAction', city);
            this.$router.push('/');
        }
    },
    watch: {
        keyWord () {
            if (this.timer) {
                clearTimeout(this.timer)
            }
            if (!this.keyWord) {
                this.list = [];
                return;
            }

            this.timer = setTimeout(() => {
                let result = [];
                for (let i in this.cities) {
                    this.cities[i].forEach((value) => {
                        if (value.spell.indexOf(this.keyWord) > -1 || value.name.indexOf(this.keyWord) > -1) {
                            result.push(value);
                        }
                    });
                }
                this.list = result;
            }, 100)
        }
    },
    mounted () {
        this.scroll = new BScroll(this.$refs.search)
    }
}
</script>

<style lang="stylus" scoped>
@import '~stylus/varibles.styl'
    .search
        height 0.76rem
        line-height 0.76rem
        background $bgColor
        text-align $tac
        padding 0 0.1rem
        .search-ipt
            width 100%
            height 0.6rem
            line-height 0.6rem
            color $color666
            text-align $tac
            border-radius 0.06rem
            padding 0 0.1rem
            box-sizing border-box
    .search-content
        overflow $ofh
        position $psabso
        top 1.62rem
        left 0
        right 0
        bottom 0
        z-index 1
        background #eee
        .search-item
            line-height 0.62rem
            padding-left 0.2rem
            color $color666
            background #fff
        .search-item.item-none
            text-align $tac
</style>