<template>
  <div>
    <div class="modal">
      <div class="modal__card">
        <span
          @click="clicked"
          class="modal__close"
        >
          X
        </span>
        <h3 class="heading__item_size_3 heading__item_dark modal__heading">Новый пост</h3>

        <div class="form-group">
          <label for="header" class="form-group__label">Заголовок</label>
          <input v-model="postBody.header" id="header" type="text" class="form-group__input">
        </div>
        
        <div class="form-group">
          <label for="description" class="form-group__label">Описание</label>
          <textarea v-model="postBody.description" id="description" class="form-group__textarea"></textarea>
        </div>

        <button
          @click="addPost"
          class="form-group__submit"
        >
          Создать
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

import { mapActions } from 'vuex'

export default {
  name: 'modalpost',
  data() {
    return {
      postBody: {
        header: '',
        description: ''
      }
    }
  },
  methods: {
    ...mapActions([
      'logout'
    ]),
    clicked() {
      this.$emit('close-modal', 'ModalPost')
    },
    addPost: async function() {
      let token = localStorage.getItem('token')

      if(token){
        try {
          let response = await axios(process.env.VUE_APP_API + '/api/post', {
            method: 'POST',
            headers: { 
              'Authorization': 'Bearer ' + token,
              'Content-Type': 'application/json'
            },
            data: this.postBody
          })
          if(response.status === 200){
            this.$emit('close-modal', 'ModalPost')
            this.$router.go()
          } else if(response.status === 401){
            this.logout()
            alert('Вы не авторизованы. Пожалуйста, авторизуйтесь!')
          } else {
            alert('Ошибка при добавлении нового поста')
          }
        } catch(err) {
          alert('Ошибка при добавлении нового поста')
        }
      } else {
        this.logout()
      }
    }
  }
}
</script>

<style src="@/assets/css/modal.css" scoped></style>