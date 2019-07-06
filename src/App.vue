<template>
  <div id="app">
    <section class="todoapp">
      <!-- 页面中使用 -->
      <addtodo></addtodo>
      <todo></todo>
      <filtertodo></filtertodo>
    </section>
    <footer class="info">
      <p>Double-click to edit a todo</p>
      <!-- Remove the below line ↓ -->
      <p>
        Template by
        <a href="http://sindresorhus.com">Sindre Sorhus</a>
      </p>
      <!-- Change this out with your name and url ↓ -->
      <p>
        Created by
        <a href="http://todomvc.com">you</a>
      </p>
      <p>
        Part of
        <a href="http://todomvc.com">TodoMVC</a>
      </p>
    </footer>
    <!-- <router-view/> -->
  </div>
</template>

<script>
// 导入
import addtodo from "./components/AddTodo.vue";
import todo from "./components/Todo.vue";
import filtertodo from "./components/FilterTodo.vue";
export default {
  // 注册
  components: {
    addtodo,
    todo,
    filtertodo
  }
};
</script>

