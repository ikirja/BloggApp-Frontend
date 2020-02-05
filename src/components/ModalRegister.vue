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
        <h3 class="heading__item_size_3 heading__item_dark modal__heading">Регистрация</h3>
        
        <div class="form-group">
          <label for="name" class="form-group__label">Как Вас зовут?</label>
          <input v-model="bodyRegister.name" id="name" type="text" class="form-group__input">
        </div>

        <div class="form-group">
          <label for="username" class="form-group__label">Имя пользователя</label>
          <input v-model="bodyRegister.username" id="username" type="text" class="form-group__input">
        </div>

        <div class="form-group">
          <label for="password" class="form-group__label">Пароль</label>
          <input v-model="bodyRegister.password" id="password" type="password" class="form-group__input">
        </div>

        <div class="form-group">
          <label for="email" class="form-group__label">E-mail</label>
          <input v-model="bodyRegister.email" id="email" type="email" class="form-group__input">
        </div>

        <button
          @click="sendRegister"
          class="form-group__submit"
        >
          Зарегистрироваться
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'modalregister',
  data() {
    return {
      bodyRegister: {
        name: '',
        username: '',
        password: '',
        email: ''
      }
    }
  },
  methods: {
    ...mapActions([
      'register'
    ]),
    clicked() {
      this.$emit('close-modal', 'ModalRegister')
    },
    sendRegister() {
      this.$emit('close-modal', 'ModalRegister')
      this.register(this.bodyRegister)
    }
  }
}
</script>

<style src="@/assets/css/modal.css" scoped></style>