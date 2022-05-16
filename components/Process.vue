<template>
  <section>
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="pt-10 pb-12 md:pt-16 md:pb-20">
        <!-- Section header -->
        <div class="max-w-3xl mx-auto text-center pb-12 md:pb-20">
          <h2 class="h2 mb-4" data-aos="fade-up">
            {{ sectionTwoDetail.header }}
          </h2>
          <p
            class="text-xl text-gray-400"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {{ sectionTwoDetail.paragraph }}
          </p>
        </div>

        <!-- Items -->
        <div
          class="
            max-w-sm
            mx-auto
            grid
            gap-8
            md:grid-cols-3
            lg:gap-16
            items-start
            md:max-w-none
          "
        >
          <!-- 1st item -->
          <div class="relative flex flex-col items-center" data-aos="fade-up">
            <div
              aria-hidden="true"
              class="
                absolute
                h-1
                border-t border-dashed border-gray-700
                hidden
                md:block
              "
              style="
                width: calc(100% - 32px);
                left: calc(50% + 48px);
                top: 32px;
              "
              data-aos="fade-in"
              data-aos-delay="200"
            ></div>
            <!-- <svg
              class="w-16 h-16 mb-4"
              viewBox="0 0 64 64"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                class="fill-current text-amber-400"
                width="64"
                height="64"
                rx="32"
              />
              <path
                class="stroke-current text-purple-300"
                stroke-width="2"
                stroke-linecap="square"
                d="M21 23h22v18H21z"
                fill="none"
                fill-rule="evenodd"
              />
              <path
                class="stroke-current text-purple-100"
                d="M26 28h12M26 32h12M26 36h5"
                stroke-width="2"
                stroke-linecap="square"
              />
            </svg> -->
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-history"
              width="64"
              height="64"
              viewBox="0 0 24 24"
              stroke-width="2.5"
              stroke="#2c3e50"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <polyline points="12 8 12 12 14 14" />
              <path d="M3.05 11a9 9 0 1 1 .5 4m-.5 5v-5h5" />
            </svg>
            <h4 class="h4 mb-2">1. Family History</h4>
            <p class="text-lg text-gray-400 text-center">
              {{ sectionTwoDetail.familyHistory }}
            </p>
          </div>

          <!-- 2nd item -->
          <div
            class="relative flex flex-col items-center"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div
              aria-hidden="true"
              class="
                absolute
                h-1
                border-t border-dashed border-gray-700
                hidden
                md:block
              "
              style="
                width: calc(100% - 32px);
                left: calc(50% + 48px);
                top: 32px;
              "
              data-aos="fade-in"
              data-aos-delay="400"
            ></div>
            <!-- <svg
              class="w-16 h-16 mb-4"
              viewBox="0 0 64 64"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                class="fill-current text-amber-400"
                width="64"
                height="64"
                rx="32"
              />
              <g fill="none" fill-rule="evenodd">
                <path
                  class="stroke-current text-purple-300"
                  d="M40 22a2 2 0 012 2v16a2 2 0 01-2 2H24a2 2 0 01-2-2V24a2 2 0 012-2"
                  stroke-width="2"
                  stroke-linecap="square"
                />
                <path
                  class="stroke-current text-purple-100"
                  stroke-width="2"
                  stroke-linecap="square"
                  d="M36 32l-4-3-4 3V22h8z"
                />
              </g>
            </svg> -->
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-users"
              width="64"
              height="64"
              viewBox="0 0 24 24"
              stroke-width="2.5"
              stroke="#2c3e50"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <circle cx="9" cy="7" r="4" />
              <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              <path d="M21 21v-2a4 4 0 0 0 -3 -3.85" />
            </svg>
            <h4 class="h4 mb-2">2. Family Members</h4>
            <p class="text-lg text-gray-400 text-center">
              {{ sectionTwoDetail.familyMembers }}
            </p>
          </div>

          <!-- 3rd item -->
          <div
            class="relative flex flex-col items-center"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <!-- <svg
              class="w-16 h-16 mb-4"
              viewBox="0 0 64 64"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                class="fill-current text-amber-400"
                width="64"
                height="64"
                rx="32"
              />
              <path
                class="stroke-current text-purple-300"
                stroke-width="2"
                stroke-linecap="square"
                d="M21 35l4 4 12-15"
                fill="none"
                fill-rule="evenodd"
              />
              <path
                class="stroke-current text-purple-100"
                d="M42 29h-3M42 34h-7M42 39H31"
                stroke-width="2"
                stroke-linecap="square"
              />
            </svg> -->
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-notes"
              width="64"
              height="64"
              viewBox="0 0 24 24"
              stroke-width="2.5"
              stroke="#2c3e50"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <rect x="5" y="3" width="14" height="18" rx="2" />
              <line x1="9" y1="7" x2="15" y2="7" />
              <line x1="9" y1="11" x2="15" y2="11" />
              <line x1="9" y1="15" x2="13" y2="15" />
            </svg>
            <h4 class="h4 mb-2">3. Family Blogs</h4>
            <p class="text-lg text-gray-400 text-center">
              {{ sectionTwoDetail.familyBlogs }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Process",
  data: function () {
    return {
      sectionTwoDetail: {},
    };
  },
  async mounted() {
    this.sectionTwoDetail = await this.fetchSectionTwoDetail();
  },
  methods: {
    async fetchSectionTwoDetail() {
      return this.$content("home", "section-2")
        .fetch()
        .catch((err) => console.error(err) || []);
    },
  },
};
</script>