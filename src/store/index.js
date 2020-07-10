import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        city: '北京'
    },
    // actions: {
    //     changeCity (ctx, city) {
    //         ctx.commit('changeCityAction', city);
    //     }
    // },
    mutations: {
        changeCityAction (state, city) {
            state.city = city;
        }
    }
})