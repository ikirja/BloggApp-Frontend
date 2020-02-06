<template>
  <div id="app">
    <div class="header">
      <ul class="header-menu">
        <li class="header-menu__item">
          <router-link
            to="/"
            class="header-menu__link"
          >
            Главная
          </router-link>
        </li>
        <li class="header-menu__item">
          <router-link
            to="/portfolio"
            class="header-menu__link"
          >
            Портфолио
          </router-link>
        </li>
        <li class="header-menu__item">
          <router-link
            to="/blog"
            class="header-menu__link"
          >
            Блог
          </router-link>
        </li>
      </ul>
    </div>
    <router-view/>
    <div class="footer">
      Кирилл Макеев &copy; 2019-2020.<br>Работает на: <a class="footer__link" href="https://github.com/ikirja/BloggApp" target="_blank">BloggApp 2.0</a><br><a class="footer__link" href="/confidential">Политика конфиденциальности</a><br>Все права защищены.
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  methods: {
    ...mapActions([
      'getUser'
    ])
  },
  mounted() {
    this.getUser()
  }
}
</script>

<style src="@/assets/css/app.css"></style>
