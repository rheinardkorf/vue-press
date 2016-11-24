<template>
  <div class="wrapper">
      <post-listing :posts="posts"></post-listing>
  </div>
</template>

<script>
import Views from '../ViewController'
var PostListing = Views('post/PostListing')
export default {
    props: ['posts'],
    components: {
        'post-listing': PostListing
    }
}

</script>
