<template>
  <!-- Home content -->
  <div v-if="landingContent" class="relative pt-32 pb-10 md:pt-40 md:pb-16">
    <!-- Section header -->
    <div class="max-w-3xl mx-auto text-center pb-12 md:pb-16">
      <h1 class="h1 mb-4" data-aos="fade-up">{{ landingContent.title }}</h1>
      <p class="text-xl text-gray-400 mb-8" data-aos="fade-up" data-aos-delay="200">
        {{ landingContent.description }}
      </p>
      <!-- <nuxt-content :document="landingContent" /> -->
    </div>
    <div class="relative flex justify-center items-center" data-aos="fade-up" data-aos-delay="200">
      <img class="mx-auto" src="../../assets/images/hero-image-01.jpg" width="1024" height="504" alt="Hero" />
      <a class="absolute group" @click.prevent.stop="videoModalOpen = true" href="#0" aria-controls="modal">
        <svg
          class="w-16 h-16 sm:w-20 sm:h-20 hover:opacity-75 transition duration-150 ease-in-out"
          viewBox="0 0 88 88"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient x1="78.169%" y1="9.507%" x2="24.434%" y2="90.469%" id="a">
              <stop stop-color="#EBF1F5" stop-opacity=".8" offset="0%" />
              <stop stop-color="#EBF1F5" offset="100%" />
            </linearGradient>
          </defs>
          <circle fill="url(#a)" cx="44" cy="44" r="44" />
          <path
            class="fill-current text-purple-600"
            d="M52 44a.999.999 0 00-.427-.82l-10-7A1 1 0 0040 37V51a.999.999 0 001.573.82l10-7A.995.995 0 0052 44V44c0 .001 0 .001 0 0z"
          />
        </svg>
      </a>
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
