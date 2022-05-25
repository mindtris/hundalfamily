<template>
  <section class="relative">
    <!-- Background image -->
    <div class="absolute inset-0 h-96">
      <img
        class="w-full h-full object-cover"
        src="../assets/images/family-member-bg.jpg"
        width="1440"
        height="394"
        alt="About"
      />
      <div
        class="absolute inset-0 bg-gray-900 opacity-50"
        aria-hidden="true"
      ></div>
    </div>

    <!-- Hero content -->
    <div class="max-w-6xl mx-auto px-4 sm:px-6 relative">
      <template v-if="birthdate">
        <div class="pb-12 pt-28 md:pb-20">
          <div class="flex flex-col items-center">
            <img
              class="rounded-full mb-4"
              :src="image"
              width="120"
              height="120"
              alt="Team member"
            />
            <h1 class="h2 text-center text-white sm:h1" data-aos="fade-up">
              {{ title }}
            </h1>
            <div class="text-white mb-2 text-2xl">
              ( {{ birthdate | formatDateGetYear }} )
            </div>
          </div>
        </div>
      </template>
      <template v-else>
        <div class="pt-32 pb-12 md:pt-40 md:pb-20">
          <div class="max-w-3xl mx-auto text-center">
            <h1 class="h1 mb-4 text-white" data-aos="fade-up">{{ title }}</h1>
            <!-- <p
            class="text-xl text-gray-400 mb-8"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Developers are trusted to create an engaging experience for their
            companies, so we build tools to help them.
          </p>  -->
          </div>
        </div>
      </template>

      <!-- <div class="max-w-3xl mx-auto text-center">
          <img
            class="rounded-full mb-4"
            src="../assets/images/team-member-02.jpg"
            width="120"
            height="120"
            alt="Team member 02"
          />
          <h1 class="h1 mb-4 text-white" data-aos="fade-up">{{ title }}</h1>
          <p class="mb-1 text-center">
            {{ birthdate | formatDateGetYear }}
          </p>
           <p
            class="text-xl text-gray-400 mb-8"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Developers are trusted to create an engaging experience for their
            companies, so we build tools to help them.
          </p> 
        </div> -->
    </div>
  </section>
</template>

<script>
export default {
  name: "FamilyMembers",
  props: {
    title: {
      type: String,
      required: false,
    },
    birthdate: {
      type: String,
      required: false,
    },
    image: {
      type: String,
      required: false,
    },
  },
};
</script>