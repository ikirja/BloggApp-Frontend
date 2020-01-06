<template>
  <div class="blog-bg">
    <div class="blog-bg__content">
      <h6 class="heading__item_size_6">{{ post.date | moment('DD MMMM YYYY') }}</h6>

      <div class="blog-post">
        <h1 class="heading__item_size_1 heading__item_amphesize">{{ post.header }}</h1>
        <p class="paragraph__item"><span v-html="post.description"></span></p>
      </div>

      <div class="blog-post-button">
        <button
          v-if="user.isAdmin"
          @click="postEdit"
          class="blog-post-button__item"
        >
          Редактировать пост
        </button>
      </div>

      <div class="blog-post-button">
        <button
          v-if="user.isAdmin"
          @click="postDelete"
          class="blog-post-button__item blog-post-button__item_delete"
        >
          Удалить пост
        </button>
      </div>

      <div class="comments">
        <h6 v-if="post.comments && post.comments.length > 0" class="heading__item_size_6">Комментарии:</h6>
        <h6 v-else class="heading__item_size_6">Пока комментариев нет, но в Ваших руках это исправить!</h6>
        <hr class="line" />

        <div
          v-for="(comment, index) in post.comments"
          :key="index"
          class="comment"
        >
          <div class="comment__header">
            <div class="comment__author">
              {{ comment.author.name }}
            </div>
            <div class="comment__date">
              {{ comment.date | moment('DD MMMM YYYY') }}
            </div>
            <div
              v-if="authenticated && user.id === comment.author.id"
              @click="commentEdit(comment._id)"
              class="comment-button comment-button__edit"
            >
              Редактировать
            </div>
            <div
              v-if="authenticated && user.id === comment.author.id"
              @click="commentDelete(comment._id)"
              class="comment-button comment-button__delete"
            >
              Удалить
            </div>
          </div>
          <div class="comment__description">
            <span v-html="comment.description"></span>
          </div>
        </div>

        <div class="comments-buttons">
          <button
            v-if="authenticated"
            @click="showModalComment = true"
            class="comments-button comments-button__add-comment"
          >
            Добавить комментарий
          </button>
          <button
            v-if="!authenticated"
            @click="showModalLogin = true"
            class="comments-button comments-button__login"
          >
            Войти
          </button>
          <button
            v-if="!authenticated"
            @click="showModalRegister = true"
            class="comments-button comments-button__register"
          >
            Зарегистрироваться
          </button>
          <button
            v-if="authenticated"
            @click="logout"
            class="comments-button comments-button__login"
          >
            Выйти
          </button>
        </div>

      </div>
      <h6 class="heading__item_size_6">{{ post.date | moment('DD MMMM YYYY') }}</h6>
    </div>
    
    <ModalLogin
      v-if="showModalLogin"
      @close-modal="closeModal"
    />

    <ModalRegister
      v-if="showModalRegister"
      @close-modal="closeModal"
    />

    <ModalComment
      v-if="showModalComment"
      :id="id"
      @close-modal="closeModal"
    />

    <ModalCommentEdit
      v-if="showModalCommentEdit"
      :id="commentId"
      :description="commentDescription"
      @close-modal="closeModal"
    />

    <ModalPostEdit
      v-if="showModalPostEdit"
      :id="postId"
      :header="postHeader"
      :description="postDescription"
      @close-modal="closeModal"
    />
  </div>
</template>

<script>
import ModalLogin from '@/components/ModalLogin.vue'
import ModalRegister from '@/components/ModalRegister.vue'
import ModalComment from '@/components/ModalComment.vue'
import ModalCommentEdit from '@/components/ModalCommentEdit.vue'
import ModalPostEdit from '@/components/ModalPostEdit.vue'

import { mapState, mapActions } from 'vuex'

export default {
  props: [
    'id'
  ],
  name: 'blogpost',
  components: {
    ModalLogin,
    ModalRegister,
    ModalComment,
    ModalCommentEdit,
    ModalPostEdit
  },
  data() {
    return {
      post: {},
      showModalLogin: false,
      showModalRegister: false,
      showModalComment: false,
      showModalCommentEdit: false,
      showModalPostEdit: false,
      commentId: '',
      commentDescription: '',
      postId: '',
      postHeader: '',
      postDescription: ''
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
      'logout'
    ]),
    closeModal: function(value){
      if(value === 'ModalLogin'){
        this.showModalLogin = false
      }
      if(value === 'ModalRegister'){
        this.showModalRegister = false
      }
      if(value === 'ModalComment'){
        this.showModalComment = false
      }
      if(value === 'ModalCommentEdit'){
        this.showModalCommentEdit = false
      }
      if(value === 'ModalPostEdit'){
        this.showModalPostEdit = false
      }
    },
    commentEdit: async function(id){
      try {
        let response = await fetch(`http://beta.kirillmakeev.ru/api/comment/${id}`)
        if(response.status === 200){
          let data = await response.json()
          this.commentId = data._id
          this.commentDescription = data.description
          this.showModalCommentEdit = true
        } else {
          alert('Ошибка при редактировании комментария')
        }
      } catch(err) {
        alert('Ошибка при редактировании комментария')
      }
    },
    commentDelete: async function(id){
      try {
        let response = await fetch(`http://beta.kirillmakeev.ru/api/comment/${id}`, { method: 'DELETE' })
        if(response.status === 200){
          this.$router.go()
        } else {
          alert('Ошибка при удалении комментария')
        }
      } catch(err) {
        alert('Ошибка при удалении комментария')
      }
    },
    postEdit: function(){
      this.postId = this.post._id
      this.postHeader = this.post.header
      this.postDescription = this.post.description
      this.showModalPostEdit = true
    },
    postDelete: async function(){
      try {
        let response = await fetch(`http://beta.kirillmakeev.ru/api/post/${this.post._id}`, {
          method: 'DELETE'
        })
        if(response.status === 200){
          this.$router.push('/blog')
        } else {
          alert('Ошибка при удалении поста')
        }
      } catch(err) {
        alert('Ошибка при удалении поста')
      }
    }
  },
  mounted: async function() {
    let response = await fetch(`http://beta.kirillmakeev.ru/api/post/${this.id}`)
    let post = await response.json()
    post.comments.sort((a, b) => {
      let dateA = new Date(a.date)
      let dateB = new Date(b.date)
      return dateB - dateA
    })
    this.post = post
  }
}
</script>

<style src="@/assets/css/blog-post.css" scoped></style>