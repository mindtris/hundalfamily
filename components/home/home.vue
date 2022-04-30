<template>
  <!-- Home content -->
  <div v-if="landingContent" class="relative pt-32 pb-10 md:pt-40 md:pb-16">
    <!-- Section header -->
    <div class="max-w-3xl mx-auto text-center pb-12 md:pb-16">
      <h1 class="h1 mb-4" data-aos="fade-up">{{ landingContent.title }}</h1>
      <p class="text-xl text-gray-400 mb-8" data-aos="fade-up" data-aos-delay="200">
        {{ landingContent.description }}
      </p>
      <nuxt-content :document="landingContent" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Landing Page',
  props: {
    //   postType: {
    //     type: String,
    //     default: 'blog',
    //     validator: (val) => ['blog', 'projects'].includes(val),
    //   },
    //   amount: { // ? https://content.nuxtjs.org/fetching#limitn
    //     type: Number,
    //     default: 10,
    //     validator: (val) => val >= 0 && val < 100,
    //   },
    //   sortBy: { // ? https://content.nuxtjs.org/fetching#sortbykey-direction
    //     type: Object,
    //     default: () => ({
    //       key: 'slug',
    //       direction: 'desc' // you probably want 'asc' here
    //     }),
    //     validator: (obj) => typeof obj.key === 'string' && typeof obj.direction === 'string',
    //   }
  },
  data() {
    return {
      landingContent: {},
      loading: true,
    }
  },
  computed: {
    placeholderClasses() {
      const classes = ['w-full', 'w-2/3', 'w-5/6']
      return [...Array.from({ length: this.amount }, (v, i) => classes[i % classes.length])] // repeats classes after one another
    },
  },
  async mounted() {
    this.loading = true
    this.landingContent = await this.fetchLandingContent()
    this.loading = false
  },
  methods: {
    //   formatDate(dateString) {
    //     const date = new Date(dateString)
    //     return date.toLocaleDateString(process.env.lang) || ''
    //   },
    async fetchLandingContent() {
      return this.$content('home', 'landing-content')
        .fetch()
        .catch((err) => console.error(err) || {})
    },
  },
}
</script>
