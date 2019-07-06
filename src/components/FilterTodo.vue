<template>
  <footer class="footer" v-show="$store.state.todoList.length">
    <!-- This should be `0 items left` by default -->
    <span class="todo-count">
      <strong>{{$store.getters.leftCount}}</strong> item left
    </span>
    <!-- Remove this if you don't implement routing -->
    <ul class="filters">
      <li>
        <!-- <a class="selected" href="#/">All</a> -->
        <router-link to="/" active-class="selected" exact>All</router-link>
      </li>
      <li>
        <!-- <a href="#/active">Active</a> -->

        <router-link to="/active" active-class="selected">Active</router-link>
      </li>
      <li>
        <!-- <a href="#/completed">Completed</a> -->
        <router-link to="/completed" active-class="selected">Completed</router-link>
      </li>
    </ul>

    <button
      class="clear-completed"
      v-show=" $store.getters.leftCount!== $store.state.todoList.length"
      @click="clearTodo"
    >Clear completed</button>
    <!-- 数组 长度
    leftCount 未完成的数量-->
  </footer>
</template>
<script>
export default {
  methods: {
    clearTodo() {
      this.$store.commit("clearTodo");
    }
  }
};
</script>
