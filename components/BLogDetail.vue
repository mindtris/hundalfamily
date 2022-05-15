<template>
  <section>
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="py-12 md:py-20">
        <!-- Section header -->
        <div v-if="showBlogDetail" class="max-w-3xl mx-auto pb-12 md:pb-20">
          <div
            class="relative flex justify-center items-center"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <img
              class="mx-auto"
              :src="blogDetails.blogimage"
              width="1024"
              height="504"
              alt="Hero"
            />
          </div>
          <div class="flex px-8 py-8">
            <article
              class="
                flex flex-row
                xs:flex-col
                sm:flex-col
                lg:flex-row
                justify-center
                h-full
                xs:w-full
                sm:w-auto
              "
            >
              <div class="sm:pr-5 mx-auto">
                <img
                  class="rounded-full flex-shrink-0 mr-4"
                  :src="blogDetails.authorImage"
                  width="100"
                  height="100"
                  alt="Author"
                />
              </div>

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
                      >{{ blogDetails.title }}</nuxt-link
                    >
                  </h3>
                </header>
                <footer class="flex items-center mt-4">
                  <span
                    class="
                      font-medium
                      text-gray-400
                      hover:text-gray-400
                      transition
                      duration-150
                      ease-in-out
                    "
                    href="#0"
                    >{{ blogDetails.authorName }}</span
                  >
                  <span class="text-gray-700"> - </span>
                  <span class="text-gray-500">{{
                    blogDetails.createdAt | formatDate
                  }}</span>
                </footer>
              </div>
            </article>
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
      fileName: "",
      showBlogDetail: false,
    };
  },
  async mounted() {
    this.fileName = this.$route.params.fileName;
    if (this.fileName) {
      this.fetchBlogDetails(this.fileName).then((blogDetail) => {
        this.blogDetails = blogDetail;
        this.getAuthorName(blogDetail.author).then((author) => {
          this.blogDetails.authorName = author.name;
          this.blogDetails.authorImage = author.authorimage;
          this.showBlogDetail = true;
        });
      });
    }
  },
  methods: {
    async fetchBlogDetails(fileName) {
      return this.$content("blog", fileName)
        .fetch()
        .catch((err) => console.error(err) || []);
    },
    async fetchAuthors(slug) {
      return this.$content("author", slug)
        .fetch()
        .catch((err) => console.error(err) || []);
    },
    async getAuthorName(slug) {
      return await this.fetchAuthors(slug);
    },
  },
};
</script>