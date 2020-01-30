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
        <h3 class="heading__item_size_3 heading__item_dark modal__heading">Комментарий</h3>
        
        <div class="form-group">
          <label for="description" class="form-group__label">Ваш комментарий</label>
          <textarea v-model="description" id="description" class="form-group__textarea"></textarea>
        </div>

        <button
          @click="addComment"
          class="form-group__submit"
        >
          Отправить
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

import { mapActions } from 'vuex'

export default {
  props: [
    'id'
  ],
  name: 'modalcomment',
  data() {
    return {
      description: ''
    }
  },
  methods: {
    ...mapActions([
      'logout'
    ]),
    clicked() {
      this.$emit('close-modal', 'ModalComment')
    },
    addComment: async function() {
      let token = localStorage.getItem('token')

      if(token){
        let body = {
          description: this.description,
          post: this.id
        }

        try {
          let response = await axios(process.env.VUE_APP_API + '/api/comment', {
            method: 'POST',
            headers: {
              'Authorization': 'Bearer ' + token,
              'Content-Type': 'application/json'
            },
            data: body
          })

          if(response.status === 200){
            this.$emit('close-modal', 'ModalComment')
            this.$router.go()
          } else if(response.status === 401){
            this.logout()
            alert('Вы не авторизованы. Пожалуйста, авторизуйтесь!')
          } else {
            alert('Ошибка при добавлении комментария')
          }
        } catch(err) {
          alert('Ошибка при добавлении комментария')
        }
      } else {
        this.logout()
      }
    }
  }
}
</script>

<style src="@/assets/css/modal.css" scoped></style>