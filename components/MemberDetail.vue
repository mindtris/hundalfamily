<template>
  <section class="relative">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="pb-12 md:pb-20">
        <!-- Section header -->
        <div class="max-w-3xl mx-auto text-center pb-12 md:pb-20">
          <div class="prose max-w-full">
            <nuxt-content :document="memberDetail" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "MemberDetail",
  data() {
    return {
      memberDetail: [],
      fileName: "",
    };
  },
  async mounted() {
    this.fileName = this.$route.params.fileName;
    this.memberDetail = await this.fetchMemberDetails();
  },
  methods: {
    async fetchMemberDetails() {
      return this.$content("family-member", this.fileName)
        .fetch()
        .catch((err) => console.error(err) || []);
    },
  },
};
</script>