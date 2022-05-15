<template>
  <section>
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="py-12 md:py-20">
        <!-- Section header -->
        <div class="max-w-3xl mx-auto pb-12 md:pb-20">
          <div
            class="relative flex justify-center items-center"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <img
              class="mx-auto"
              src="../assets/images/hero-image-01.jpg"
              width="1024"
              height="504"
              alt="Hero"
            />
          </div>
          <div class="flex px-8 py-8">
            <!-- <div>
              <img
                class="rounded-full flex-shrink-0 mr-4"
                src="../assets/images/news-author-01.jpg"
                width="100"
                height="100"
                alt="Author 01"
              />
            </div> -->
            <div>
              <article
                class="
                  flex flex-row
                  sm:flex-col
                  lg:flex-row
                  justify-center
                  h-full
                "
              >
                <img
                  class="rounded-full flex-shrink-0 mr-4"
                  src="../assets/images/news-author-01.jpg"
                  width="100"
                  height="100"
                  alt="Author"
                />
                <div class="">
                  <header>
                    <h3 class="h3 text-2xl lg:text-3xl mb-2 text-start">
                      <nuxt-link
                        to="/blog-post"
                        class="
                          hover:text-gray-400
                          transition
                          duration-150
                          ease-in-out
                        "
                        >Designing a functional workflow at home.</nuxt-link
                      >
                    </h3>
                  </header>
                  <footer class="flex items-center mt-4">
                    <a
                      class="
                        font-medium
                        text-gray-400
                        hover:text-gray-400
                        transition
                        duration-150
                        ease-in-out
                      "
                      href="#0"
                      >Chris Solerieu</a
                    >
                    <span class="text-gray-700"> - </span>
                    <span class="text-gray-500">Jan 19, 2020</span>
                  </footer>
                </div>
              </article>
            </div>
            <!-- <div class="px-8">
              <h3 class="h3 mb-2">My First Blog</h3>
              <div class="font-medium">
                <a
                  class="
                    text-state-700
                    transition
                    duration-150
                    ease-in-out
                  "
                  href="#0"
                  >Brooklyn
                </a>
                <span class="text-gray-700"> - </span>
                <span class="text-gray-500">May 9, 2022</span>
              </div>
            </div> -->
          </div>
          <div class="prose">
            <nuxt-content class="w-198" :document="blogDetails" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Timeline",
  data() {
    return {
      blogDetails: {},
    };
  },
  async mounted() {
    this.blogDetails = await this.fetchBlogDetails();
  },
  methods: {
    async fetchBlogDetails() {
      return this.$content("blog", "2022-05-03t16-16-38-333z-my-first-blog")
        .fetch()
        .catch((err) => console.error(err) || []);
    },
  },
};
</script>