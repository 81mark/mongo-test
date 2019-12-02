<template>
  <div class="hello">
    <h1>Latest Posts</h1>

    <div class="create-post">
      <label for="create-post" />
      <input
        class="placeholder"
        type="text"
        id="create-post"
        v-model="text"
        placeholder="Create a post"
      />
      <button v-on:click="createPost">Post!</button>
    </div>

    <p>If you double click a row it will delete it!</p>

    <hr />
    <p class="error" v-if="error">{{ error }}</p>
    <div class="posts-container">
      <div
        class="post"
        v-for="(post, index) in posts"
        v-bind:item="post"
        v-bind:index="index"
        v-bind:key="post.id"
        v-on:dblclick="deletePost(post._id)"
      >
        <p class="text">
          <span class="dt">
            {{
              `${post.createdAt.getDate()}/${post.createdAt.getMonth() +
                1}/${post.createdAt.getFullYear()}`
            }}
          </span>
          {{ post.text }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import PostService from "../PostService";

export default {
  name: "PostComponent",
  data() {
    return {
      posts: [],
      error: "",
      text: ""
    };
  },
  async created() {
    try {
      this.posts = await PostService.getPosts();
    } catch (err) {
      this.error = err.message;
    }
  },
  methods: {
    async createPost() {
      await PostService.insertPost(this.text);
      this.posts = await PostService.getPosts();
    },
    async deletePost(id) {
      await PostService.deletePost(id);
      this.posts = await PostService.getPosts();
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
input {
  font-size: 16px;
  background-color: #008cba;
  color: white;
  padding: 15px 32px;
  border: none;
  margin-right: 10px;
}
button {
  background-color: #008cba;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
}
input::-webkit-input-placeholder {
  color: white;
}
input:-moz-placeholder {
  color: white;
}

.text {
  background-color: #cdcdcd;
  margin: 5px 0;
  padding: 20px 5px;
  display: inline-block;
  width: 100%;
}

.dt {
  color: rgb(22, 22, 22);
  margin-left: 10px;
  text-align: left;
  float: left;
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
