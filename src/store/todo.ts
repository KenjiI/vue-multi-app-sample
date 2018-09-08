import { ADD_TODO, DONE_TODO, REMOVE_TODO, CHANGE_MYSTRING, GET_TODOS } from './mutation-type'
import Vuex, { StoreOptions, GetterTree, MutationTree, ActionTree } from 'vuex';

export class Todo {
  public text: string = '';
  public done: boolean = false;
}

export interface TodoState {
  items: Todo[];
  mystring: string;
}

const state: TodoState = {
  items: [],
  mystring: ''
}

export interface TodoActions {
  addTodo: {
    text: string
  },

}

// const actions: ActionTree<TodoState, CounterState> = {}


const todo = {
  namespaced: true,
  state,
  actions: {
    [ADD_TODO] ({commit, state, rootState}, newValue) {
      let newItem = {
        todo: newValue,
        is_done: false
      }
      commit(ADD_TODO, {data: newItem})
      commit(CHANGE_MYSTRING, {data: ''})
    },
    [DONE_TODO] ({commit, state: State, rootState}, selItem) {
      commit(DONE_TODO, {data: selItem})
    },
    [REMOVE_TODO] ({commit, state, rootState}, selItem) {
      commit(REMOVE_TODO, {data: selItem})
    }
  },
  mutations: {
    [ADD_TODO] (state, payload) {
      state.items.push(payload.data)
    },
    [DONE_TODO] (state, payload) {
      state.items.map(it => {
        if (it.todo == payload.data.todo){
          it.is_done = !it.is_done
        }
      })
    },
    [REMOVE_TODO] (state, payload) {
      for (let i = 0; i < state.items.length; i++){
        if (state.items[i].todo == payload.data.todo){
          state.items.splice(i, 1)
          break
        }
      }
    },
    [CHANGE_MYSTRING] (state, payload) {
      state.mystring = payload.data
    }
  },
  getters: {
    [GET_TODOS] (state, getters, rootState) {
      return state.items
    }
  }
}

export default todo