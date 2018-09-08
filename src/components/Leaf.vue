<template>
  <li >
    <div
      class="fl lhand"
      :class="{done: item.is_done}"
      @click="DONE_TODO(item)">
      {{item.todo}}
    </div>
    <div class="fl rhand">
      <el-button
        type="danger"
        @click="REMOVE_TODO(item)">
        削除
      </el-button>
    </div>
    <div class="cls" />
  </li>
</template>

<script>
import { DONE_TODO, REMOVE_TODO} from '../store/mutation-type'
import { mapActions } from 'vuex'

export default {
  name : "Leaf",
  props: ['item'],
  methods: {
    ...mapActions('todo',[
      DONE_TODO,
      REMOVE_TODO
    ])
  }
}

</script>

<style scoped>
li {
  padding: 8px
}
div.done {
  text-decoration: line-through;
}

div.fl {
  float: left;
}
div.cls {
  clear: both;
}

div.lhand {
   width: 40%;
}

div.rhand {
  width: 15%;
}

</style>