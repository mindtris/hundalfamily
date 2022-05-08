<template>
  <div class="flex flex-col min-h-screen">
    <!-- Site header -->
    <Header showWhiteText="true" />

    <!-- Page content -->
    <main class="flex-grow">
      <!-- Page illustration -->
      <div
        class="relative max-w-6xl mx-auto h-0 pointer-events-none"
        aria-hidden="true"
      >
        <PageIllustration />
      </div>

      <!-- Page sections -->
      <HeroAbout />
      <TeamImages />
      <Timeline />
      <Team />
      <TestimonialsCarousel />
      <Career />
      <Clients />
      <Newsletter />
    </main>

    <!-- Site footer -->
    <Footer />
  </div>
</template>

<script>
export default {
  name: "About",
};
</script>
