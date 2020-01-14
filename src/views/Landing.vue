<template>
  <div>
    <div class="main-section">
      <div class="main-section__section main-section__section_justify_around">
        <div class="main-section__logo">
          <transition name="main-section__letter-k">
            <span v-if="show">К</span>
          </transition>
          <transition name="main-section__letter-i">
            <span v-if="show">И</span>
          </transition>
          <transition name="main-section__letter-r">
            <span v-if="show">Р</span>
          </transition>
          <transition name="main-section__letter-i">
            <span v-if="show">И</span>
          </transition>
          <transition name="main-section__letter-l">
            <span v-if="show">Л</span>
          </transition>
          <transition name="main-section__letter-l">
            <span v-if="show">Л</span>
          </transition>

          <span class="line-break"><br /></span>

          <transition name="main-section__letter-m">
            <span v-if="show">М</span>
          </transition>
          <transition name="main-section__letter-a">
            <span v-if="show">А</span>
          </transition>
          <transition name="main-section__letter-k">
            <span v-if="show">К</span>
          </transition>
          <transition name="main-section__letter-e">
            <span v-if="show">Е</span>
          </transition>
          <transition name="main-section__letter-e">
            <span v-if="show">Е</span>
          </transition>
          <transition name="main-section__letter-v">
            <span v-if="show">В</span>
          </transition>
        </div>
        <transition name="main-section__under-logo">
          <div v-if="show" class="main-section__under-logo">
            <h3 class="heading__item_size_3">Веб-разработчик</h3>
          </div>
        </transition>
      </div>
      <div class="main-section__section">
        <div class="main-section__devices">
          <transition name="main-section__laptop">
            <img v-if="show" class="main-section__laptop" src="@/assets/laptop.png" alt="проект easyoneweb маркетплейс" />
          </transition>
          <transition name="main-section__smartphone">
            <img v-if="show" class="main-section__smartphone" src="@/assets/smartphone.png" alt="проект город знаний" />
          </transition>
        </div>
        <div class="main-section__equal-sign">
          <transition name="main-section__equal-sign">
            <span v-if="show">=</span>
          </transition>
        </div>
        <transition name="main-section__skills">
        <div v-if="show" class="main-section__skills">
          <div class="main-section__skills_curly_bracers">{</div>
          <div>
            <ul class="skills-list">
              <li class="skills-list__item">NodeJS</li>
              <li class="skills-list__item">ExpressJS</li>
              <li class="skills-list__item">MongoDB</li>
              <li class="skills-list__item">VueJS</li>
              <li class="skills-list__item">EJS</li>
              <li class="skills-list__item">Ionic</li>
            </ul>
          </div>
          <div class="main-section__skills_curly_bracers">}</div>
        </div>
        </transition>
      </div>
      <transition name="call-to-action">
        <div
          v-if="show"
          @click="showModal = true"
          class="main-section__section main-section__call-to-action_first"
        >
          <button class="call-to-action call-to-action__item call-to-action__item_hot_pink_gradient">Связаться со мной</button>
        </div>
      </transition>
      <div class="main-section__section">
        <div class="main-section__landings main-section__section_langings_height">
          <img v-in-viewport.once class="main-section__langings-item main-section__langings-item_first" src="@/assets/landing-1.png" alt="проект криптобанк" />
          <img v-in-viewport.once class="main-section__langings-item main-section__langings-item_second" src="@/assets/landing-2.png" alt="проект easyoneweb маркетплейс" />
          <img v-in-viewport.once class="main-section__langings-item main-section__langings-item_third" src="@/assets/landing-3.png" alt="проект город знаний" />
        </div>
        <div v-in-viewport.once class="main-section__info main-section__front-end">
          <h1 class="heading__item_size_1 heading__item_amphesize">Front end разработка</h1>
          <p class="paragraph__item">Разработка дизайн-макетов и вёрстка на современных технологиях. Разработка публичной части веб ресурса на VueJS для клиентского рендеринга или EJS для серверного рендеринга. Разработка взаимодействия с требуемым REST API. Разработка ведётся по принципу mobile first: разрабатывается макет для мобильных устройств, адаптация для desktop.</p>
        </div>
      </div>
      <div class="main-section__section">
        <div v-in-viewport.once class="main-section__landings main-section__section_langings_height main-section__section-landings_icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="90%" height="300px" class="hovered-paths"><g><g id="Server"><path d="m15 36a3 3 0 1 0 3 3 3 3 0 0 0 -3-3zm0 4a1 1 0 1 1 1-1 1 1 0 0 1 -1 1z" data-original="#000000" class="hovered-path active-path" data-old_color="#000000" fill="#F81894"/><path d="m23 36a3 3 0 1 0 3 3 3 3 0 0 0 -3-3zm0 4a1 1 0 1 1 1-1 1 1 0 0 1 -1 1z" data-original="#000000" class="hovered-path active-path" data-old_color="#000000" fill="#F81894"/><path d="m31 36a3 3 0 1 0 3 3 3 3 0 0 0 -3-3zm0 4a1 1 0 1 1 1-1 1 1 0 0 1 -1 1z" data-original="#000000" class="hovered-path active-path" data-old_color="#000000" fill="#F81894"/><path d="m55 32h-1.7a10.981 10.981 0 0 0 -3.016-19.487 8.981 8.981 0 0 0 -11.584-4.881 12.98 12.98 0 0 0 -23.364 4.5 10.985 10.985 0 0 0 -4.636 19.868h-1.7a1 1 0 0 0 -1 1v12a1 1 0 0 0 1 1h4v2h-4a1 1 0 0 0 -1 1v12a1 1 0 0 0 1 1h46a1 1 0 0 0 1-1v-12a1 1 0 0 0 -1-1h-4v-2h4a1 1 0 0 0 1-1v-12a1 1 0 0 0 -1-1zm-47-9a9.04 9.04 0 0 1 8.256-8.961 1 1 0 0 0 .9-.835 10.982 10.982 0 0 1 20.3-3.794 1 1 0 0 0 1.321.378 6.911 6.911 0 0 1 3.223-.788 7.007 7.007 0 0 1 6.593 4.67 1.006 1.006 0 0 0 .689.635 8.994 8.994 0 0 1 -2.282 17.695h-30a9.01 9.01 0 0 1 -9-9zm46 37h-44v-10h44zm-5-12h-34v-2h34zm5-4h-44v-10h44z" data-original="#000000" class="hovered-path active-path" data-old_color="#000000" fill="#F81894"/><path d="m38 36h2v2h-2z" data-original="#000000" class="hovered-path active-path" data-old_color="#000000" fill="#F81894"/><path d="m38 40h2v2h-2z" data-original="#000000" class="hovered-path active-path" data-old_color="#000000" fill="#F81894"/><path d="m44 36h2v2h-2z" data-original="#000000" class="hovered-path active-path" data-old_color="#000000" fill="#F81894"/><path d="m44 40h2v2h-2z" data-original="#000000" class="hovered-path active-path" data-old_color="#000000" fill="#F81894"/><path d="m50 36h2v2h-2z" data-original="#000000" class="hovered-path active-path" data-old_color="#000000" fill="#F81894"/><path d="m50 40h2v2h-2z" data-original="#000000" class="hovered-path active-path" data-old_color="#000000" fill="#F81894"/><path d="m15 58a3 3 0 1 0 -3-3 3 3 0 0 0 3 3zm0-4a1 1 0 1 1 -1 1 1 1 0 0 1 1-1z" data-original="#000000" class="hovered-path active-path" data-old_color="#000000" fill="#F81894"/><path d="m23 58a3 3 0 1 0 -3-3 3 3 0 0 0 3 3zm0-4a1 1 0 1 1 -1 1 1 1 0 0 1 1-1z" data-original="#000000" class="hovered-path active-path" data-old_color="#000000" fill="#F81894"/><path d="m31 58a3 3 0 1 0 -3-3 3 3 0 0 0 3 3zm0-4a1 1 0 1 1 -1 1 1 1 0 0 1 1-1z" data-original="#000000" class="hovered-path active-path" data-old_color="#000000" fill="#F81894"/><path d="m38 52h2v2h-2z" data-original="#000000" class="hovered-path active-path" data-old_color="#000000" fill="#F81894"/><path d="m38 56h2v2h-2z" data-original="#000000" class="hovered-path active-path" data-old_color="#000000" fill="#F81894"/><path d="m44 52h2v2h-2z" data-original="#000000" class="hovered-path active-path" data-old_color="#000000" fill="#F81894"/><path d="m44 56h2v2h-2z" data-original="#000000" class="hovered-path active-path" data-old_color="#000000" fill="#F81894"/><path d="m50 52h2v2h-2z" data-original="#000000" class="hovered-path active-path" data-old_color="#000000" fill="#F81894"/><path d="m50 56h2v2h-2z" data-original="#000000" class="hovered-path active-path" data-old_color="#000000" fill="#F81894"/><path d="m26.293 13.293-6 6a1 1 0 0 0 0 1.414l6 6 1.414-1.414-5.293-5.293 5.293-5.293z" data-original="#000000" class="hovered-path active-path" data-old_color="#000000" fill="#F81894"/><path d="m35.707 13.293-1.414 1.414 5.293 5.293-5.293 5.293 1.414 1.414 6-6a1 1 0 0 0 0-1.414z" data-original="#000000" class="hovered-path active-path" data-old_color="#000000" fill="#F81894"/><path d="m22.754 19h16.492v1.999h-16.492z" transform="matrix(.242 -.97 .97 .242 4.085 45.23)" data-original="#000000" class="hovered-path active-path" data-old_color="#000000" fill="#F81894"/></g></g>
          </svg>
        </div>
        <div v-in-viewport.once class="main-section__info main-section__back-end">
          <h1 class="heading__item_size_1 heading__item_amphesize">Back end разработка</h1>
          <p class="paragraph__item">Разработка back end веб приложений на NodeJS/ExpressJS/MongoDB. REST API. Комплесная full stack разработка веб-системы с back end и front end приложениями.</p>
        </div>
      </div>
      <div class="main-section__section">
        <div class="main-section__landings main-section__section_langings_height">
          <img v-in-viewport.once class="main-section__langings-item main-section__langings-item_first" src="@/assets/mobile-1.png" alt="проект криптобанк" />
          <img v-in-viewport.once class="main-section__langings-item main-section__langings-item_second" src="@/assets/mobile-2.png" alt="проект криптобанк" />
          <img v-in-viewport.once class="main-section__langings-item main-section__langings-item_third" src="@/assets/mobile-3.png" alt="проект криптобанк" />
        </div>
        <div v-in-viewport.once class="main-section__info main-section__mobile-apps">
          <h1 class="heading__item_size_1 heading__item_amphesize">Мобильные приложения</h1>
          <p class="paragraph__item">Разработка мобильных приложений для операционных систем iOS и Android на платформе Ionic.</p>
        </div>
      </div>
      <div
        @click="showModal = true"
        class="main-section__section"
      >
        <button class="call-to-action call-to-action__item call-to-action__item_hot_pink_gradient">Связаться со мной</button>
      </div>
    </div>

    <transition name="modal-card-call-to-action">
      <div v-if="showModal" class="modal">
        <div class="modal__card">
          <span @click="showModal = false" class="modal__card_close">X</span>
          <div class="modal__card-inner">
            <h1 class="heading__item_size_1">Оставьте Ваш телефон</h1>
            <p>Я свяжусь с Вами для обсуждения деталей разработки сайта, веб-системы или мобильного приложения.</p>
            <div class="form-landing-group">
              <label for="lead" class="form-landing-group__caption">Ваш номер телефона или e-mail:</label>
              <input v-model="lead" id="lead" type="text" class="form-landing-group__item" placeholder="Укажите телефон или e-mail">
              <small v-if="leadError" class="form-landing-group__error">Проверьте указанные Вами данные</small>
            </div>
            <button
              @click="sendLead"
              class="form-landing-group__submit"
            >
              Отправить
            </button>
          </div>
        </div>
      </div>
    </transition>
    
  </div>
</template>

<script>
import inViewportDirective from "vue-in-viewport-directive"
import axios from 'axios'

export default {
  name: 'landing',
  directives: {
    'in-viewport': inViewportDirective
  },
  data() {
    return {
      show: false,
      showModal: false,
      lead: '',
      leadError: false
    }
  },
  methods: {
    sendLead: async function(){
      if(this.lead.length > 4){
        let body = {
          text: this.lead
        }

        try {
          let response = await axios('https://beta.kirillmakeev.ru/api/sendmail', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            data: body
          })
          if(response.status === 200){
            this.showModal = false
            this.lead = ''
            this.leadError = false
          } else {
            alert('Ошибка отправки сообщения')
          }
        } catch(err) {
          alert('Ошибка отправки сообщения')
        }
      } else {
        this.leadError = true
      }
    }
  },
  mounted: function() {
    this.show = true;
  }
}
</script>

<style src="@/assets/css/landing.css" scoped></style>
