import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    title: 'My Custom Title',
    links: [
      'http://google.com',
      'http://coursetro.com',
      'http://youtube.com'
    ]
  },
  getters: {
    // state 的延伸，隨 state 變動
    countLinks: state => {
      return state.links.length
    }
  },
  mutations: {
    // 同步行為
    // 習慣上要大寫
    ADD_LINK(state, link){
      state.links.push(link)
    },
    REMOVE_LINK(state, link){
      state.links.splice(link, 1)
    },
    REMOVE_ALL(state){
      state.links = []
    }
  },
  actions: {
    // 異步行為
    removeLink(context, link){
      context.commit('REMOVE_LINK', link)
    },
    removeAll({commit}){
      // {commit} 只是為了讓之後的 context.commit 可以簡寫成 commit
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          commit('REMOVE_ALL')
          resolve()
        }, 1500)
      })
    }
  }
})
