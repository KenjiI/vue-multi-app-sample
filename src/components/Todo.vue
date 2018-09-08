<template>
  <div>
    <div class="todo">
      <h3>This is Todo App</h3>
      <el-input
        placeholder="Please input"
        v-model="mystring"
        style="width: 60%"/>
      <el-button
        type="primary"
        @click="ADD_TODO(mystring)">
        追加
      </el-button>
    </div>
    <ul>
      <Leaf :key="item.id" v-for="item in todos" :item="item" />
    </ul>
  </div>
</template>

<script>
import { ADD_TODO, GET_TODOS, CHANGE_MYSTRING } from '../store/mutation-type'
import { mapGetters, mapActions} from 'vuex'
import Leaf from './Leaf'

export default {
  name: 'todo',
  components: {
    Leaf
  },
  computed: {
    mystring: {
      get () {
        return this.$store.state.todo.mystring
      },
      set (value){
        this.$store.commit('todo/' + CHANGE_MYSTRING, {data: value})
      }
    },
    ...mapGetters('todo', {
      todos: GET_TODOS
    })
  },
  methods: {
    ...mapActions('todo', [
      ADD_TODO
    ])
  }

}
</script>

<style scoped>
</style>