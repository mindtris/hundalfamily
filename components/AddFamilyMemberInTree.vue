<template>
  <div class="flex flex-col min-h-screen overflow-hidden">
    <section class="relative">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 relative">
        <div class="pt-32 pb-12 md:pt-30 md:pb-10">
          <!-- Page header -->
          <div class="max-w-3xl mx-auto text-center pb-8 md:pb-8">
            <h1 class="h1 mb-4" data-aos="fade-up">
              Add a new member in the tree
            </h1>
          </div>

          <form
            name="contactUs"
            method="post"
            class="max-w-xl mx-auto"
            @submit.prevent="submit"
          >
            <div class="flex flex-wrap -mx-3 mb-4">
              <div class="w-full md:w-full px-3 mb-4 md:mb-0">
                <label
                  class="block text-state-700 text-sm font-medium mb-1"
                  for="first-name"
                  >Full Name <span class="text-red-600">*</span></label
                >
                <input
                  id="full-name"
                  name="fullName"
                  type="text"
                  class="
                    form-input
                    w-full
                    text-state-700
                    border-red-500
                    focus:border-red-500
                  "
                  placeholder="Enter full name"
                  v-model="name"
                  required
                />
                <p class="text-red-500 text-sm mt-2">This field is required</p>
              </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-4">
              <div class="w-1/2 px-3">
                <label
                  class="block text-state-700 text-sm font-medium mb-1"
                  for="dateOfBirth"
                  >Date of Birth <span class="text-red-600">*</span></label
                >
                <input
                  id="dateOfBirth"
                  type="date"
                  name="dateOfBirth"
                  class="form-input w-full text-state-700"
                  placeholder="Enter date of birth"
                  v-model="dateOfBirth"
                  required
                />
              </div>
              <div class="w-1/2 px-3">
                <label
                  class="block text-state-700 text-sm font-medium mb-1"
                  for="image"
                  >Image <span class="text-red-600">*</span></label
                >
                <input
                  id="image"
                  name="image"
                  type="file"
                  class="form-input w-full text-state-700"
                  placeholder="Upload an image of the member"
                  v-on:change="onImageChange"
                  required
                />
              </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-4">
              <div class="w-full md:w-1/2 px-3 mb-4 md:mb-0">
                <label
                  class="block text-state-700 text-sm font-medium mb-1"
                  for="father-name"
                  >Father Name <span class="text-red-600">*</span></label
                >
                <input
                  id="father-name"
                  name="fatherName"
                  type="text"
                  class="
                    form-input
                    w-full
                    text-state-700
                    border-red-500
                    focus:border-red-500
                  "
                  placeholder="Select father name"
                  v-on:change="onFatherSelect"
                  required
                />
                <p class="text-red-500 text-sm mt-2">This field is required</p>
              </div>
              <div class="w-full md:w-1/2 px-3">
                <label
                  class="block text-state-700 text-sm font-medium mb-1"
                  for="mother-name"
                  >Mother Name <span class="text-red-600">*</span></label
                >
                <input
                  id="mother-name"
                  name="motherName"
                  type="text"
                  class="form-input w-full text-state-700"
                  placeholder="Select mother name"
                  v-on:change="onMotherSelect"
                  required
                />
              </div>
            </div>
            <div class="flex flex-wrap -mx-3 mt-6">
              <div class="w-full px-3">
                <button
                  type="submit"
                  class="btn text-white bg-amber-400 hover:bg-amber-400 w-full"
                >
                  Add
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "AddMemberInFamilyTree",
  data() {
    return {
      name: "",
      dateOfBirth: "",
      image: "",
      fatherId: "",
      motherId: "",
    };
  },
  methods: {
    submit() {
      console.log(this.name);
      console.log(this.dateOfBirth);
      let member = {
        name: this.name,
        image: "/images/team-member-01.jpg",
        age: this.dateOfBirth,
      };
    },
    onImageChange(e) {
      console.log("Image select", e.target.value);
      this.image = e.target.value;
    },
    onFatherSelect(e) {
      console.log("Father select", e);
      this.fatherId = e.target.value;
    },
    onMotherSelect(e) {
      console.log("Mother select", e);
      this.motherId = e.target.value;
    },
  },
};
</script>