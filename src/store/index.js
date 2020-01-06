import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    authenticated: false,
    user: {
      id: '',
      name: '',
      isAdmin: false
    }
  },
  mutations: {
    setUser: (state, user) => {
      state.user = user
      state.authenticated = true
    },
    login: (state) => {
      state.authenticated = true
    },
    logout: (state) => {
      state.authenticated = false
      state.user = {
        id: '',
        name: '',
        isAdmin: false
      }
    }
  },
  actions: {
    getUser: async (context) => {
      try {
        let response = await fetch('http://beta.kirillmakeev.ru/api/user')
        if(response.status === 200) {
          let data = await response.json()
          context.commit('setUser', data)
        } 
      } catch(err) {
        alert('Ошибка 1000: обратитесь к администратору сайта')
      }
    },
    login: async (context, body) => {
      try {
        let response = await fetch('http://beta.kirillmakeev.ru/api/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(body)
        })
        let status = response.status;
        if(status === 200){
          context.dispatch('getUser')
        } else {
          alert('Не удалось войти')
        }
      } catch(err) {
        alert('Не удалось войти')
      }
    },
    logout: async (context) => {
      try {
        let response = await fetch('http://beta.kirillmakeev.ru/api/logout')
        if(response.status === 200){
          context.commit('logout')
        } else {
          alert('Произошла ошибка, попробуйте позже')
        }
      } catch(err) {
        alert('Произошла ошибка, попробуйте позже')
      }
    },
    register: async (context, body) => {
      try {
        let response = await fetch('http://beta.kirillmakeev.ru/api/register', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(body)
        })
        if(response.status === 200){
          context.dispatch('getUser')
        } else {
          alert('Ошибка при регистрации')
        }
      } catch(err) {
        alert('Ошибка при регистрации')
      }
    }
  },
  modules: {
  }
})
