<template>
  <section class="main">
    <input
      id="toggle-all"
      class="toggle-all"
      type="checkbox"
      :checked="$store.getters.allCompleted"
      @change="toggleAll"
    />
    <label for="toggle-all">Mark all as complete</label>
    <ul class="todo-list">
      <li
        v-for="item in $store.getters.todoToShow($route.path.slice(1))"
        :key="item.id"
        :class="{completed: item.isCompleted ,editing: currentEdited==item.id }"
      >
        <div class="view">
          <input
            class="toggle"
            type="checkbox"
            :checked="item.isCompleted"
            @change="toggleTodo(item.id)"
          />
          <label @dblclick="dblTodo(item.id)">{{item.todo}}</label>
          <button class="destroy" @click="delTodo(item.id)"></button>
        </div>
        <input
          class="edit"
          :value="item.todo"
          @input="updateTodo(item.id,$event)"
          @keyup.enter="changeNum"
        />
      </li>
    </ul>
  </section>
</template>
<script>
export default {
  data() {
    return {
      currentEdited: -1
    };
  },
  methods: {
    // 样式的切换
    toggleTodo(id) {
      this.$store.commit("toggleTodo", id);
    },
    // 删除功能
    delTodo(id) {
      this.$store.commit("delTodo", id);
    },
    // 双击
    dblTodo(id) {
      this.currentEdited = id;
    },
    // 数据的修改
    updateTodo(id, e) {
      this.$store.commit("updateTodo", { id, value: e.target.value });
    },
    // 修改状态的恢复
    changeNum() {
      this.currentEdited = -1;
    },
    // 反选
    toggleAll() {
      this.$store.commit("toggleAll");
    }
  }
};
</script>
