<template>
  <div class="blog-bg">
    <h1 class="heading__item_size_6">Блог Кирилла Макеева</h1>

    <div class="blog-post-button">
      <button
        v-if="user.isAdmin"
        @click="showModalPost = true"
        class="blog-post-button__item"
      >
        Добавить пост
      </button>
    </div>

    <div class="blog">
      <div
        v-for="(post, index) in posts"
        :key="index"
        @click="toPost(post._id)"
        class="blog-post"
      >
        <div class="blog-post__header">
          <div class="blog-post__date">
            <div class="blog-post__date-box"></div>
            <span class="blog-post__date_day">{{ post.date | moment('DD') }}</span><span class="blog-post__date_month">{{ post.date | moment('MMM') }}</span>
          </div>
          <h1 class="blog-post__heading">{{ post.header }}</h1>
        </div>
        <p class="blog-post__preview"><span v-html="post.description.substr(0, 200) + '...'"></span></p>
        <hr class="line" />
      </div>

    </div>

    <ModalPost
      v-if="showModalPost"
      @close-modal="closeModal"
    />
  </div>
</template>

<script>
import ModalPost from '@/components/ModalPost.vue'
import router from '@/router'
import axios from 'axios'
import { mapState } from 'vuex'

export default {
  name: 'blog',
  data() {
    return {
      posts: [],
      showModalPost: false
    }
  },
  computed: {
    ...mapState([
      'user'
    ])
  },
  components: {
    ModalPost
  },
  methods: {
    getPosts: async function(){
      try {
        let response = await axios.get(process.env.VUE_APP_API + '/api/posts')
        let posts = await response.data
        posts.sort((a, b) => {
          let dateA = new Date(a.date)
          let dateB = new Date(b.date)
          return dateB - dateA
        })
        this.posts = posts
      } catch(err) {
        alert('Ошибка получения данных о постах')
      }
    },
    toPost: function(id){
      router.push(`/blog/post/${id}`)
    },
    addPost: function(){
      this.showModalPost = true
    },
    closeModal: function(value){
      if(value === 'ModalPost'){
        this.showModalPost = false
      }
    },
  },
  mounted: function(){
    this.getPosts();
  }
}
</script>

<style src="@/assets/css/blog.css" scoped></style>