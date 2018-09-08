<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" style="width:100px">
    <Todo/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Todo from "@/components/Todo.vue"; 

@Component({
  components: {
    Todo
  }
})
export default class Todos extends Vue {}
</script>
