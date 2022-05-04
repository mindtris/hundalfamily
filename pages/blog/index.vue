<template>
  <main>
    <section v-if="posts" class="w-full max-w-5xl mx-auto">
      <PageIllustration />
      <div class="relative pt-32 pb-10 md:pt-40 md:pb-16">
        <h4 class="h4 pb-6 mb-10 border-b border-gray-700" data-aos="fade-up">Latest stories</h4>
        <posts post-type="blog" :amount="10" />
      </div>
    </section>
  </main>
</template>

<script>
export default {
  async asyncData({ $content, error }) {
    let posts
    try {
      posts = await $content('blog').fetch()
    } catch (e) {
      error({ message: 'Blog posts not found' })
    }
    return { posts }
  },
}
</script>
