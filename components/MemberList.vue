<template>
  <section class="relative">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="pt-32 pb-12 md:pt-40 md:pb-20">
        <!-- <div
          class="
            grid
            md:grid-cols-4
            justify-center
            md:gap-x-6 md:gap-y-8
            items-start
          "
        >
          <div
            v-for="(member, index) in pageOfItems"
            :key="index"
            class="
              max-w-sm
              bg-white
              rounded-lg
              border border-gray-200
              shadow-md
              bg-gray-100
              w-60
              mt-3
              mb-3
            "
          >
            <nuxt-link
              :to="{
                name: 'family-member-detail',
                params: { fileName: member.slug },
              }"
            >
              <img class="rounded-t-lg" :src="member.image" alt="" />
            </nuxt-link>
            <div class="p-5">
              <h4 class="font-medium text-xl text-center">{{ member.name }}</h4>
              <p class="mb-1 text-center">
                {{ member.birthdate | formatDateGetYear }}
              </p>
            </div>
          </div>
          <div
            class="
              max-w-sm
              bg-white
              rounded-lg
              border border-gray-200
              shadow-md
              bg-gray-100
              w-60
              mt-3
              mb-3
            "
          >
            <a href="#">
              <img
                class="rounded-t-lg"
                src="../static/images/team-member-02.jpg"
                alt=""
              />
            </a>
            <div class="p-5">
              <h4 class="font-medium text-xl text-center">Marie Koniuszek</h4>
              <p class="mb-1 text-center">(1990)</p>
            </div>
          </div>

          <div
            class="
              max-w-sm
              bg-white
              rounded-lg
              border border-gray-200
              shadow-md
              bg-gray-100
              w-60
              mt-3
              mb-3
            "
          >
            <a href="#">
              <img
                class="rounded-t-lg"
                src="../static/images/team-member-03.jpg"
                alt=""
              />
            </a>
            <div class="p-5">
              <h4 class="font-medium text-xl text-center">Greg Sebastian</h4>
              <p class="mb-1 text-center">(1980)</p>
            </div>
          </div>

          <div
            class="
              max-w-sm
              bg-white
              rounded-lg
              border border-gray-200
              shadow-md
              bg-gray-100
              w-60
              mt-3
              mb-3
            "
          >
            <a href="#">
              <img
                class="rounded-t-lg"
                src="../static/images/team-member-04.jpg"
                alt=""
              />
            </a>
            <div class="p-5">
              <h4 class="font-medium text-xl text-center">Timothy Chandran</h4>
              <p class="mb-1 text-center">(1982)</p>
            </div>
          </div>

          <div
            class="
              max-w-sm
              bg-white
              rounded-lg
              border border-gray-200
              shadow-md
              bg-gray-100
              w-60
              mt-3
              mb-3
            "
          >
            <a href="#">
              <img
                class="rounded-t-lg"
                src="../static/images/team-member-05.jpg"
                alt=""
              />
            </a>
            <div class="p-5">
              <h4 class="font-medium text-xl text-center">Dominik Prasad</h4>
              <p class="mb-1 text-center">(1985)</p>
            </div>
          </div>

          <div
            class="
              max-w-sm
              bg-white
              rounded-lg
              border border-gray-200
              shadow-md
              bg-gray-100
              w-60
              mt-3
              mb-3
            "
          >
            <a href="#">
              <img
                class="rounded-t-lg"
                src="../static/images/team-member-06.jpg"
                alt=""
              />
            </a>
            <div class="p-5">
              <h4 class="font-medium text-xl text-center">Darya Semenova</h4>
              <p class="mb-1 text-center">(1995)</p>
            </div>
          </div>

          <div
            class="
              max-w-sm
              bg-white
              rounded-lg
              border border-gray-200
              shadow-md
              bg-gray-100
              w-60
              mt-3
              mb-3
            "
          >
            <a href="#">
              <img
                class="rounded-t-lg"
                src="../static/images/team-member-07.jpg"
                alt=""
              />
            </a>
            <div class="p-5">
              <h4 class="font-medium text-xl text-center">Quentin Renvoye</h4>
              <p class="mb-1 text-center">(1987)</p>
            </div>
          </div>

          <div
            class="
              max-w-sm
              bg-white
              rounded-lg
              border border-gray-200
              shadow-md
              bg-gray-100
              w-60
              mt-3
              mb-3
            "
          >
            <a href="#">
              <img
                class="rounded-t-lg"
                src="../static/images/team-member-08.jpg"
                alt=""
              />
            </a>
            <div class="p-5">
              <h4 class="font-medium text-xl text-center">Alyssa Chuzeville</h4>
              <p class="mb-1 text-center">(1993)</p>
            </div>
          </div>
        </div> -->
        <div
          class="sm:flex sm:flex-wrap sm:justify-center -my-4 sm:-my-8 sm:-mx-3"
        >
          <div
            v-for="(member, index) in pageOfItems"
            :key="index"
            class="sm:w-1/2 md:w-1/3 lg:w-1/4 py-4 sm:py-8 sm:px-3"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-anchor="[data-aos-id-team]"
          >
            <div class="flex flex-col items-center">
              <nuxt-link
                :to="{
                  name: 'family-member-detail',
                  params: { fileName: member.slug },
                }"
              >
                <img
                  class="rounded-full mb-4"
                  :src="member.image"
                  width="120"
                  height="120"
                  alt="Team member 02"
                />
              </nuxt-link>
              <h4 class="text-xl font-medium mb-1">{{ member.name }}</h4>
              <div class="text-gray-500 mb-1">
                ({{ member.birthdate | formatDateGetYear }})
              </div>
              <a
                class="
                  block
                  text-amber-400
                  hover:text-gray-200
                  transition
                  duration-150
                  ease-in-out
                "
                href="#0"
                >@{{ member.nickname }}</a
              >
            </div>
          </div>
        </div>

        <div class="flex justify-center pt-16 paginationContainer">
          <jw-pagination
            :items="members"
            @changePage="onChangePage"
            :labels="customLabels"
            :disableDefaultStyles="true"
            :pageSize="8"
            :maxPages="10"
          ></jw-pagination>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
const customLabels = {
  first: "First",
  last: "Last",
  previous: "Prev",
  next: "Next",
};

export default {
  name: "MemberList",
  data() {
    return {
      members: [],
      pageOfItems: [],
      customLabels,
    };
  },
  async mounted() {
    this.pageOfItems = this.members = await this.fetchMembers();
  },
  methods: {
    async fetchMembers() {
      return this.$content("family-member")
        .fetch()
        .catch((err) => console.error(err) || []);
    },
    onChangePage(pageOfItems) {
      // update page of items
      this.pageOfItems = pageOfItems;
    },
  },
};
</script>