<template>
  <div class="flex flex-col min-h-screen overflow-hidden">
    <!-- Site header -->
    <Header />

    <!-- Page content -->
    <main class="flex-grow">
      <!-- Page illustration -->
      <div
        class="relative max-w-6xl mx-auto h-0 pointer-events-none"
        aria-hidden="true"
      >
        <PageIllustration />
      </div>

      <section class="relative">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 relative">
          <div class="pt-32 pb-12 md:pt-40 md:pb-20">
            <!-- Page header -->
            <div class="max-w-3xl mx-auto text-center pb-12 md:pb-16">
              <h1 class="h1 mb-4" data-aos="fade-up">
                How can we connect you?
              </h1>
              <p
                class="text-xl text-gray-400"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                Drop us a line here so we can reconnect where you are, and we’ll
                contact you shortly.
              </p>
            </div>

            <!-- Contact form -->
            <form
              name="contactUs"
              method="post"
              data-netlify="true"
              class="max-w-xl mx-auto"
            >
              <div class="flex flex-wrap -mx-3 mb-4">
                <div class="w-full md:w-1/2 px-3 mb-4 md:mb-0">
                  <label
                    class="block text-state-700 text-sm font-medium mb-1"
                    for="first-name"
                    >First Name <span class="text-red-600">*</span></label
                  >
                  <input type="hidden" name="contactUs" value="contact" />
                  <input
                    id="first-name"
                    name="firstName"
                    type="text"
                    class="
                      form-input
                      w-full
                      text-state-700
                      border-red-500
                      focus:border-red-500
                    "
                    placeholder="Enter your first name"
                    required
                  />
                  <p class="text-red-500 text-sm mt-2">
                    This field is required
                  </p>
                </div>
                <div class="w-full md:w-1/2 px-3">
                  <label
                    class="block text-state-700 text-sm font-medium mb-1"
                    for="last-name"
                    >Last Name <span class="text-red-600">*</span></label
                  >
                  <input
                    id="last-name"
                    name="lastName"
                    type="text"
                    class="form-input w-full text-state-700"
                    placeholder="Enter your last name"
                    required
                  />
                </div>
              </div>
              <div class="flex flex-wrap -mx-3 mb-4">
                <div class="w-full px-3">
                  <label
                    class="block text-state-700 text-sm font-medium mb-1"
                    for="email"
                    >Email <span class="text-red-600">*</span></label
                  >
                  <input
                    id="email"
                    type="email"
                    name="email"
                    class="form-input w-full text-state-700"
                    placeholder="Enter your email address"
                    required
                  />
                </div>
              </div>
              <div class="flex flex-wrap -mx-3 mb-4">
                <div class="w-full px-3">
                  <label
                    class="block text-state-700 text-sm font-medium mb-1"
                    for="subject"
                    >Subject <span class="text-red-600">*</span></label
                  >
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    class="form-input w-full text-state-700"
                    placeholder="How can we connect you?"
                    required
                  />
                </div>
              </div>
              <div class="flex flex-wrap -mx-3 mb-4">
                <div class="w-full px-3">
                  <label
                    class="block text-state-700 text-sm font-medium mb-1"
                    for="country"
                    >Country</label
                  >
                  <select
                    id="country"
                    name="country"
                    class="form-select w-full text-state-700"
                  >
                    <option>Australia</option>
                    <option>Canada</option>
                    <option>Germany</option>
                    <option>India</option>
                    <option>United Kingdom</option>
                    <option>United States</option>
                  </select>
                </div>
              </div>
              <div class="flex flex-wrap -mx-3 mb-4">
                <div class="w-full px-3">
                  <label
                    class="block text-state-700 text-sm font-medium mb-1"
                    for="message"
                    >Message</label
                  >
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    class="form-textarea w-full text-state-700"
                    placeholder="Write your message"
                  ></textarea>
                </div>
              </div>
              <div class="flex flex-wrap -mx-3 mb-4">
                <div class="w-full px-3">
                  <label class="flex items-center">
                    <input
                      type="checkbox"
                      name="agreeToPolicy"
                      class="form-checkbox"
                    />
                    <span class="text-state-700 ml-2"
                      >I agree to the privacy policy</span
                    >
                  </label>
                </div>
              </div>
              <div class="flex flex-wrap -mx-3 mt-6">
                <div class="w-full px-3">
                  <button
                    type="submit"
                    class="
                      btn
                      text-white
                      bg-amber-400
                      hover:bg-amber-400
                      w-full
                    "
                  >
                    Send
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>

      <!-- Bottom CTA -->
      <CtaContact />
    </main>

    <!-- Site footer -->
    <Footer />
  </div>
</template>

<script>
export default {
  name: "Contact",
};
</script>
