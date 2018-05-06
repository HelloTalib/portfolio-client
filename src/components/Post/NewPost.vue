<template lang="html">
<div class="posts">
  <h1>Add Posts</h1>
  <div class="form">
    <div>
    <input type="text" name="title" placeholder="title" v-model="title">
  </div>
  <div>
    <textarea name="name" rows="15" cols="15" v-model="description"></textarea>
  </div>
  <div class="">
    <button type="button" name="button" class="app_post_btn" @click="addPost">Add</button>
  </div>
</div>
</div>
</template>

<script>
import PostsService from '@/services/PostsService'
export default {
  name: 'new-post',
  data() {
    return {
      title: '',
      description: ''
    }
  },
  methods: {
    async addPost() {
      await PostsService.addPost({
        title: this.title,
        description: this.description
      })
    }
  
  }
}
</script>

<style lang="css">

.form input, .form textarea {
  width: 500px;
  padding: 10px;
  border: 1px solid #e0dede;
  outline: none;
  font-size: 13px
}

.form div {
  margin: 20px;
}

.app_post_btn{
  background:#4d7ef7;
  color: #fff;
  padding: 10px 80px;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: bold;
}
</style>
