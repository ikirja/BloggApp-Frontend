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
        <h3 class="heading__item_size_3 heading__item_dark modal__heading">Редактирование</h3>

        <div class="form-group">
          <label for="header" class="form-group__label">Заголовок</label>
          <input v-model="newHeader" id="header" type="text" class="form-group__input">
        </div>
        
        <div class="form-group">
          <label for="description" class="form-group__label">Описание</label>
          <textarea v-model="newDescription" id="description" class="form-group__textarea"></textarea>
        </div>

        <button
          @click="editPost(id)"
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
    'header',
    'description'
  ],
  name: 'modalpost',
  data() {
    return {
      newHeader: this.header,
      newDescription: this.description
    }
  },
  methods: {
    ...mapActions([
      'logout'
    ]),
    clicked() {
      this.$emit('close-modal', 'ModalPostEdit')
    },
    editPost: async function(id) {
      let token = localStorage.getItem('token')

      if(token){
        let body = {
          header: this.newHeader,
          description: this.newDescription
        }

        try {
          let response = await axios(`${process.env.VUE_APP_API}/api/post/${id}`, {
            method: 'PUT',
            headers: { 
              'Authorization': 'Bearer ' + token,
              'Content-Type': 'application/json'
            },
            data: body
          })
          if(response.status === 200){
            this.$emit('close-modal', 'ModalPostEdit')
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