<template>
  <div class="wrapper">
    <div v-for="post in posts">
      <post :post="post"></post>
    </div>
  </div>
</template>

<script>
import Views from '../../ViewController'
var Post = Views('post/PostSummary')
export default {
    props: ['posts'],
    components: {
        'post': Post
    }
}

</script>
