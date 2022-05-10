<template>
  <section>
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="py-12 md:py-20 border-gray-800">
        <!-- Section header -->
        <div class="max-w-3xl mx-auto text-center pb-12 md:pb-20">
          <h2 class="h2 mb-4">Our passionate team</h2>
          <p class="text-xl text-gray-400">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum consequat.
          </p>
        </div>

        <!-- Team members -->
        <div
          class="sm:flex sm:flex-wrap sm:justify-center -my-4 sm:-my-8 sm:-mx-3"
          data-aos-id-team
        >
          <!-- 1st member -->
          <div
            v-for="(member, index) in members"
            :key="index"
            class="sm:w-1/2 md:w-1/3 lg:w-1/4 py-4 sm:py-8 sm:px-3"
            data-aos="fade-up"
            data-aos-anchor="[data-aos-id-team]"
          >
            <div class="flex flex-col items-center">
              <img
                class="rounded-full mb-4"
                :src="member.image"
                width="120"
                height="120"
                alt="Team member 01"
              />
              <h4 class="text-xl font-medium mb-1">{{ member.name }}</h4>
              <div class="text-gray-500 mb-1">
                {{ member.birthdate | formatDateGetYear }}
              </div>
            </div>
          </div>

          <!-- 2nd member -->
          <!-- <div
            class="sm:w-1/2 md:w-1/3 lg:w-1/4 py-4 sm:py-8 sm:px-3"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-anchor="[data-aos-id-team]"
          >
            <div class="flex flex-col items-center">
              <img
                class="rounded-full mb-4"
                src="../assets/images/team-member-02.jpg"
                width="120"
                height="120"
                alt="Team member 02"
              />
              <h4 class="text-xl font-medium mb-1">Marie Koniuszek</h4>
              <div class="text-gray-500 mb-1">(1990)</div>
            </div>
          </div> -->

          <!-- 3rd member -->
          <!-- <div
            class="sm:w-1/2 md:w-1/3 lg:w-1/4 py-4 sm:py-8 sm:px-3"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-anchor="[data-aos-id-team]"
          >
            <div class="flex flex-col items-center">
              <img
                class="rounded-full mb-4"
                src="../assets/images/team-member-03.jpg"
                width="120"
                height="120"
                alt="Team member 03"
              />
              <h4 class="text-xl font-medium mb-1">Greg Sebastian</h4>
              <div class="text-gray-500 mb-1">(1980)</div>
            </div>
          </div> -->

          <!-- 4th member -->
          <!-- <div
            class="sm:w-1/2 md:w-1/3 lg:w-1/4 py-4 sm:py-8 sm:px-3"
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-anchor="[data-aos-id-team]"
          >
            <div class="flex flex-col items-center">
              <img
                class="rounded-full mb-4"
                src="../assets/images/team-member-04.jpg"
                width="120"
                height="120"
                alt="Team member 04"
              />
              <h4 class="text-xl font-medium mb-1">Timothy Chandran</h4>
              <div class="text-gray-500 mb-1">(1982)</div>
            </div>
          </div> -->

          <!-- 5th member -->
          <!-- <div
            class="sm:w-1/2 md:w-1/3 lg:w-1/4 py-4 sm:py-8 sm:px-3"
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-anchor="[data-aos-id-team]"
          >
            <div class="flex flex-col items-center">
              <img
                class="rounded-full mb-4"
                src="../assets/images/team-member-05.jpg"
                width="120"
                height="120"
                alt="Team member 05"
              />
              <h4 class="text-xl font-medium mb-1">Dominik Prasad</h4>
              <div class="text-gray-500 mb-1">(1985)</div>
            </div>
          </div> -->

          <!-- 6th member -->
          <!-- <div
            class="sm:w-1/2 md:w-1/3 lg:w-1/4 py-4 sm:py-8 sm:px-3"
            data-aos="fade-up"
            data-aos-delay="500"
            data-aos-anchor="[data-aos-id-team]"
          >
            <div class="flex flex-col items-center">
              <img
                class="rounded-full mb-4"
                src="../assets/images/team-member-06.jpg"
                width="120"
                height="120"
                alt="Team member 06"
              />
              <h4 class="text-xl font-medium mb-1">Darya Semenova</h4>
              <div class="text-gray-500 mb-1">(1995)</div>
            </div>
          </div> -->

          <!-- 7th member -->
          <!-- <div
            class="sm:w-1/2 md:w-1/3 lg:w-1/4 py-4 sm:py-8 sm:px-3"
            data-aos="fade-up"
            data-aos-delay="600"
            data-aos-anchor="[data-aos-id-team]"
          >
            <div class="flex flex-col items-center">
              <img
                class="rounded-full mb-4"
                src="../assets/images/team-member-07.jpg"
                width="120"
                height="120"
                alt="Team member 07"
              />
              <h4 class="text-xl font-medium mb-1">Quentin Renvoye</h4>
              <div class="text-gray-500 mb-1">(1987)</div>
            </div>
          </div> -->

          <!-- 8th member -->
          <!-- <div
            class="sm:w-1/2 md:w-1/3 lg:w-1/4 py-4 sm:py-8 sm:px-3"
            data-aos="fade-up"
            data-aos-delay="700"
            data-aos-anchor="[data-aos-id-team]"
          >
            <div class="flex flex-col items-center">
              <img
                class="rounded-full mb-4"
                src="../assets/images/team-member-08.jpg"
                width="120"
                height="120"
                alt="Team member 08"
              />
              <h4 class="text-xl font-medium mb-1">Alyssa Chuzeville</h4>
              <div class="text-gray-500 mb-1">(1993)</div>
            </div>
          </div> -->
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Team",
  data() {
    return {
      members: [],
    };
  },
  async mounted() {
    this.members = await this.fetchMembers();
  },
  methods: {
    async fetchMembers() {
      return this.$content("family-member")
        .limit(8)
        .fetch()
        .catch((err) => console.error(err) || []);
    },
  },
};
</script>