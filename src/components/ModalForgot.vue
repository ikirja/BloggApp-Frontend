<template>
  <div>
    <div v-if="show" class="modal">
      <div class="modal__card">
        <span
          @click="clicked"
          class="modal__close"
        >
          X
        </span>
        <h3 class="heading__item_size_3 heading__item_dark modal__heading">Сброс пароля</h3>
        
        <div class="form-group">
          <label for="name" class="form-group__label">Введите Ваш логин</label>
          <input v-model="form.username" type="text" class="form-group__input">
        </div>

        <button
          @click="forgotPassword"
          class="form-group__submit"
        >
          Сбросить пароль
        </button>
      </div>
    </div>

    <div v-if="!show" class="modal">
      <div class="modal__card">
        <span
          @click="clicked"
          class="modal__close"
        >
          X
        </span>
        <h3 class="heading__item_size_3 heading__item_dark modal__heading">Новый пароль</h3>
        
        <div class="form-group">
          <label for="name" class="form-group__label">Введите новый пароль</label>
          <input v-model="form.password" type="password" class="form-group__input">
        </div>

        <div class="form-group">
          <label for="name" class="form-group__label">Подтвердите новый пароль</label>
          <input v-model="form.confirm" type="password" class="form-group__input">
        </div>

        <div class="form-group">
          <label for="password" class="form-group__label">Код подтверждения</label>
          <input v-model="form.token" class="form-group__input">
        </div>

        <button
          @click="setPassword"
          class="form-group__submit"
        >
          Сохранить новый пароль
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'modalforgot',
  data() {
    return {
      show: true,
      form: {
        username: '',
        password: '',
        confirm: '',
        token: ''
      }
    }
  },
  methods: {
    clicked() {
      this.$emit('close-modal', 'ModalReset')
    },
    async forgotPassword() {
      try {
        let body = {
          username: this.form.username
        };
        let response = await axios(process.env.VUE_APP_API + '/api/forgot', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          data: body
        });
        if(response.status === 200){
          this.show = !this.show;
          alert('Код для сброса пароля отправлен на Ваш адрес электронной почты');
        }
      } catch(err) {
        alert('Произошла ошибка при сбросе пароля. Пожалуйста, повторите чуть позднее');
      }
    },
    async setPassword() {
      try {
        let body = {
          password: this.form.password,
          confirm: this.form.confirm,
          token: this.form.token
        };
        let response = await axios(process.env.VUE_APP_API + '/api/forgot/reset', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          data: body
        });
        if(response.status === 200){
          alert('Ваш пароль успешно изменён! Авторизуйтесь');
          this.$emit('close-modal', 'ModalForgot')
        }
      } catch(err) {
        alert('Произошла ошибка при сбросе пароля. Пожалуйста, повторите чуть позднее');
      }
    }
  }
}
</script>

<style src="@/assets/css/modal.css" scoped></style>