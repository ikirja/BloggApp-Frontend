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
          <textarea v-model="newDescription" id="description" class="form-group__textarea"></textarea>
        </div>

        <button
          @click="editComment"
          class="form-group__submit"
        >
          Сохранить
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
    'id',
    'description'
  ],
  name: 'modalcomment',
  data() {
    return {
      newDescription: this.description
    }
  },
  methods: {
    ...mapActions([
      'logout'
    ]),
    clicked() {
      this.$emit('close-modal', 'ModalCommentEdit')
    },
    editComment: async function() {
      let token = localStorage.getItem('token')

      if(token){
        let body = {
          description: this.newDescription
        }

        try {
          let response = await axios(`${process.env.VUE_APP_API}/api/comment/${this.id}`, { 
            method: 'PUT',
            headers: { 
              'Authorization': 'Bearer ' + token,
              'Content-Type': 'application/json'
            },
            data: body
          })
          if(response.status === 200){
            this.$emit('close-modal', 'ModalCommentEdit')
            this.$router.go()
          } else if(response.status === 401){
            this.logout()
            alert('Вы не авторизованы. Пожалуйста, авторизуйтесь!')
          } else {
            alert('Ошибка при редактировании комментария')
          }
        } catch(err) {
          alert('Ошибка при редактировании комментария')
        }
      } else {
        this.logout()
      }
    }
  }
}
</script>

<style src="@/assets/css/modal.css" scoped></style>