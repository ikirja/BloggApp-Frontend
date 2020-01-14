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
        <h3 class="heading__item_size_3 heading__item_dark modal__heading">Вход</h3>
        
        <div class="form-group">
          <label for="username" class="form-group__label">Имя пользователя</label>
          <input v-model="loginBody.username" id="username" type="text" class="form-group__input">
        </div>

        <div class="form-group">
          <label for="password" class="form-group__label">Пароль</label>
          <input v-model="loginBody.password" id="password" type="password" class="form-group__input">
        </div>

        <button
          @click="sendLogin"
          class="form-group__submit"
        >
          Войти
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'modallogin',
  data() {
    return {
      loginBody: {
        username: '',
        password: ''
      }
    }
  },
  computed: {
    ...mapState([
      'authenticated',
      'user'
    ])
  },
  methods: {
    ...mapActions([
      'login'
    ]),
    clicked() {
      this.$emit('close-modal', 'ModalLogin')
    },
    sendLogin() {
      this.login(this.loginBody)
      this.$emit('close-modal', 'ModalLogin')
    }
  }
}
</script>

<style src="@/assets/css/modal.css" scoped></style>