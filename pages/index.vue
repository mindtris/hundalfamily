<!-- <template>
  <main>
    <section class="self-center flex flex-col flex-1 items-center justify-center">
      <h1 class="title text-center">Hundal Family</h1>
      <h2 class="subtitle text-center">It's time to fill up our memories</h2>
    </section>

    <section class="mt-8">
      <h3 class="text-primary-600 dark:text-primary-400 max-w-5xl mx-auto">Latest blog post</h3>
      <posts post-type="blog" :amount="1" />
    </section>
  </main>
</template> -->


<template>
  <main class="flex-grow"></main>
</template>

<script>
export default {
  mounted() {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 600,
      easing: 'ease-out-sine',
    })
    if (this.$router) {
      this.$watch('$route', () => {
        this.$nextTick(() => {
          focusHandling('outline')
        })
      })
    }
  },
  created() {
    this.$router.push('/home')
  },
}
</script>



