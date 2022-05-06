<template>
  <section>
    <PageIllustration />
    <about />
    <!-- <teamImages /> -->
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="py-12 md:py-20">
        <div class="max-w-3xl mx-auto text-center pb-12 md:pb-20">
          <h2 class="h2 mb-4">Bringing the world's ideas to life</h2>
          <p class="text-xl text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import about from './about.vue'
import teamImages from './teamImages.vue'
export default {
  components: { about, teamImages },
}
</script>
