import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

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
      let token = localStorage.getItem('token')

      if(token){
        try {
          let response = await axios.get(process.env.VUE_APP_API + '/api/user', {
            headers: { 'Authorization': 'Bearer ' + token }
          })
          if(response.status === 200) {
            context.commit('setUser', response.data)
          } else {
            context.commit('logout')
          }
        } catch(err) {
          alert('Ошибка 1000: обратитесь к администратору сайта')
        }
      }
    },
    login: async (context, body) => {
      try {
        let response = await axios({
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          url: process.env.VUE_APP_API + '/api/login',
          data: body
        })
        if(response.status === 200){
          localStorage.setItem('token', response.data)
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
        let response = await axios.get(process.env.VUE_APP_API + '/api/logout')
        if(response.status === 200){
          localStorage.removeItem('token')
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
        let response = await axios(process.env.VUE_APP_API + '/api/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          data: body
        })
        if(response.status === 200){
          localStorage.setItem('token', response.data)
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
