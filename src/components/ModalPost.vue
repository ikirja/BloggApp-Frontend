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
    clicked() {
      this.$emit('close-modal', 'ModalPost')
    },
    addPost: async function() {
      try {
        let response = await fetch('http://beta.kirillmakeev.ru/api/post', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(this.postBody)
        })
        if(response.status === 200){
          this.$emit('close-modal', 'ModalPost')
          this.$router.go()
        } else {
          alert('Ошибка при добавлении нового поста')
        }
      } catch(err) {
        alert('Ошибка при добавлении нового поста')
      }
    }
  }
}
</script>

<style src="@/assets/css/modal.css" scoped></style>