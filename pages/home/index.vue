<template>
  <main>
    <section class="w-full max-w-5xl mx-auto">
      <PageIllustration />
      <home />
      <blog-list />
    </section>
  </main>
</template>

<script>
import blogList from '~/components/home/blog-list.vue'
export default {
  components: { blogList },
  // async asyncData({ $content, error }) {
  //   let posts
  //   try {
  //     console.log('Home Test Before', posts)
  //     posts = await $content('home', 'landing-content').fetch()
  //     console.log('Home Test', posts)
  //   } catch (e) {
  //     error({ message: 'Blog posts not found' })
  //   }
  //   return { posts }
  // },
}
</script> 
