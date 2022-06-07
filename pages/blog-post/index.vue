<template>
  <div class="flex flex-col min-h-screen">
    <!-- Site header -->
    <Header :showWhiteText="false" />

    <!-- Page content -->
    <main class="flex-grow">
      <!-- <BlogDetailHeader /> -->
      <BLogDetail />
    </main>

    <!-- Site footer -->
    <Footer />
  </div>
</template>

<script>
export default {
  name: "Members",
};
</script>
