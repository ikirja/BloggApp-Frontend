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
    clicked() {
      this.$emit('close-modal', 'ModalComment')
    },
    addComment: async function() {
      let body = {
        description: this.description,
        post: this.id
      }

      try {
        let response = await fetch('http://beta.kirillmakeev.ru/api/comment', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(body)
        })

        if(response.status === 200){
          this.$emit('close-modal', 'ModalComment')
          this.$router.go()
        } else {
          alert('Ошибка при добавлении комментария')
        }
      } catch(err) {
        alert('Ошибка при добавлении комментария')
      }
    }
  }
}
</script>

<style src="@/assets/css/modal.css" scoped></style>