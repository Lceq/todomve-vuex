import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex)
const store = new Vuex.Store({
  strict: true,
  state: {
    todoList: [
      { id: 1, todo: "今天天气不错", isCompleted: false },
      { id: 2, todo: "明天休息出去玩", isCompleted: false },
      { id: 3, todo: "后天加班", isCompleted: false }
    ]
  },
  mutations: {
    // 样式是切换
    toggleTodo(state, id) {
      state.todoList.forEach(v => {
        if (v.id === id) {
          v.isCompleted = !v.isCompleted
        }
      })
    },
    delTodo(state, id) {
      state.todoList = state.todoList.filter(v => v.id !== id)
    },
    updateTodo(state, { id, value }) {
      state.todoList.find(v => v.id === id).todo = value
    },
    // 添加功能
    addTodo(state, todo) {
      let newTodo = {
        id: state.todoList.length
          ? state.todoList[state.todoList.length - 1].id + 1
          : 1,
        todo: todo,
        isCompleted: false
      }
      if (todo !== "") state.todoList.push(newTodo)
    },
    // 清空功能
    clearTodo(state) {
      state.todoList = state.todoList.filter(v => !v.isCompleted)
    },
    toggleAll(state) {
      let flag = store.getters.allCompleted
      state.todoList.forEach(v => {
        v.isCompleted = !flag
      })
    }
  },
  getters: {
    leftCount(state) {
      return state.todoList.filter(v => !v.isCompleted).length
    },
    todoToShow(state) {
      return function(status) {
        switch (status) {
          case "active":
            return state.todoList.filter(v => !v.isCompleted)
          case "completed":
            return state.todoList.filter(v => v.isCompleted)
          default:
            return state.todoList
        }
      }
    },
    allCompleted(state) {
      return state.todoList.every(v => v.isCompleted)
    }
  }
})
export default store
