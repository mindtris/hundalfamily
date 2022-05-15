<template>
  <div class="flex flex-col min-h-screen">
    <!-- Site header -->
    <Header :showWhiteText="true" />

    <!-- Page content -->
    <main class="flex-grow">
      <!-- Page illustration -->
      <!-- <div
        class="relative max-w-6xl mx-auto h-0 pointer-events-none"
        aria-hidden="true"
      >
        <PageIllustration />
      </div> -->

      <!-- Page sections -->
      <FamilyMembers
        :title="member.name"
        :birthdate="member.birthdate"
        :image="member.image"
      />
      <MemberDetail />
    </main>

    <!-- Site footer -->
    <Footer />
  </div>
</template>

<script>
export default {
  name: "Members",
  data() {
    return {
      member: {},
      fileName: "",
    };
  },
  async mounted() {
    this.fileName = this.$route.params.fileName;
    this.member = await this.fetchMemberName();
  },
  methods: {
    async fetchMemberName() {
      return this.$content("family-member", this.fileName)
        .only(["name", "birthdate", "image"])
        .fetch()
        .catch((err) => console.error(err) || []);
    },
  },
};
</script>
