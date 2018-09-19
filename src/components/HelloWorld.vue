<template>
  <div class="hello">
    <div class="left">
      <h1>{{ title }}</h1>

      <form @submit.prevent="addLink">
        <input type="text" class="link-input" placeholder="Add a Link" v-model="newLink">
      </form>

      <ul>
        <li v-for="(link, index) in links" :key="index">
          {{ link }}
          <button @click="removeLinks(index)" class="rm">Remove</button>
        </li>
      </ul>
    </div>
    <div class="right">
      <Stats />
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'
// 這些 helper 可以讓你不用寫 this.$store...
// state 和 getters 通常會灑在 computed，mutations 和 actions 則會灑在 methods
import Stats from '@/components/Stats.vue'

export default {
  name: 'HelloWorld',
  components: {
    Stats
  },
  data(){
    return {
      newLink: ''
    }
  },
  computed: {
    ...mapState([
      'title',
      'links'
    ])
  },
  methods: {
    ...mapMutations([
      'ADD_LINK'
    ]),
    ...mapActions([
      'removeLink'
    ]),
    addLink(){
      this.ADD_LINK(this.newLink)
      // 如果函式內有指定對哪個 state 做事，可以只帶 payload
      this.newLink = ''
    },
    removeLinks(link){
      this.removeLink(link)
    } 
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  html, #app, .home {
    height: 100%;
  }
  body {
    background-color: #F4F4F4;
    margin: 0;
    height: 100%;
  }

  .hello {
    display: grid;
    grid-template-columns: repeat(2, 50%);
    grid-template-rows: 100%;
    grid-template-areas:
      "left right";
    height: 100%;
  }

  .left, .right {
    padding: 30px;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }
  ul li {
    padding: 20px;
    background: white;
    margin-bottom: 8px;
  }

  .right {
    grid-area: right;
    background-color: #E9E9E9;
  }

  input {
    border: none;
    padding: 20px;
    width: calc(100% - 40px);
    box-shadow: 0 5px 5px lightgrey;
    margin-bottom: 50px;
    outline: none;
  }

  .rm {
    float: right;
    text-transform: uppercase;
    font-size: .8em;
    background: #f9d0e3;
    border: none;
    padding: 5px;
    color: #ff0076;
    cursor:pointer;
  }
</style>
