<template>
  <div id="app" class="container">
    <img src="./assets/logo.png" alt="vue-press">
    <h3 class="site-title">WordPress with a Vue</h3>
    <nav class="navbar navbar-default">
        <div class="container">
            <ul class="nav navbar-nav">
                <li><router-link to="/">Home</router-link></li>
                <li><router-link to="/about">About</router-link></li>
                <li><router-link to="/blog">Blog</router-link></li>
                <li><router-link to="/contact">Contact</router-link></li>
            </ul>
        </div>
    </nav>
    <router-view :posts="posts"></router-view>
  </div>
</template>

<script>
var posts = require('./TempData.js');
posts = posts.default;

export default {
  name: 'app',
  data () {
    return {
      posts: posts
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
html { margin-left: calc(100vw - 100%); }
</style>
