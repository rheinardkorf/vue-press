<template>
  <div class="wrapper text-left">
      <h2>{{ post.title }}</h2>
      <div v-html="post.content"></div>
  </div>
</template>

<script>
export default {
    props: ['post']
}

</script>
