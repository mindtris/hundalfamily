<template>
  <div class="flex flex-col min-h-screen">
    <!-- Site header -->
    <Header :showWhiteText="true" />

    <!-- Page content -->
    <main class="flex-grow">
      <BlogDetailHeader />
      <BLogDetail />
    </main>

    <!-- Site footer -->
    <Footer />
  </div>
</template>

<script>
export default {
  name: "Members",
  //   data() {
  //     return {
  //       member: {},
  //       fileName: "",
  //     };
  //   },
  //   async mounted() {
  //     this.fileName = this.$route.params.fileName;
  //     this.member = await this.fetchMemberName();
  //     console.log("member", this.member);
  //   },
  //   methods: {
  //     async fetchMemberName() {
  //       return this.$content("family-member", this.fileName)
  //         .only(["name", "birthdate", "image"])
  //         .fetch()
  //         .catch((err) => console.error(err) || []);
  //     },
  //   },
};
</script>
