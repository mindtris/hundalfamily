<template>
  <section class="relative">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="pt-32 pb-12 md:pt-40 md:pb-20">
        <!-- Page header -->
        <div v-if="postType !== 'projects'" class="pb-12 md:pb-20 text-center md:text-left">
          <h1 class="h1" data-aos="fade-up">Refreshing news for developers and designers</h1>
        </div>

        <div v-if="postType === 'projects'" class="pb-12 md:pb-20 text-center md:text-left">
          <h1 class="h1" data-aos="fade-up">Refreshing news for projects and designers</h1>
        </div>

        <!-- Featured article -->
        <div v-if="postType === 'projects'" class="pb-12 md:pb-20">
          <article
            class="max-w-sm mx-auto md:max-w-none grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 xl:gap-16 items-center"
          >
            <nuxt-link to="/blog-post" class="relative block group" data-aos="fade-right" data-aos-delay="200">
              <div
                class="
                  absolute
                  inset-0
                  bg-gray-800
                  hidden
                  md:block
                  transform
                  md:translate-y-2 md:translate-x-4
                  xl:translate-y-4 xl:translate-x-8
                  group-hover:translate-x-0 group-hover:translate-y-0
                  transition
                  duration-700
                  ease-out
                  pointer-events-none
                "
                aria-hidden="true"
              ></div>
              <figure
                class="
                  relative
                  pb-9/16
                  md:pb-3/4
                  lg:pb-9/16
                  transform
                  md:-translate-y-2
                  xl:-translate-y-4
                  group-hover:translate-x-0 group-hover:translate-y-0
                  transition
                  duration-700
                  ease-out
                "
              >
                <img src="../../assets/images/blog-post-01.jpg" width="540" height="303" alt="Blog post 01" />
              </figure>
            </nuxt-link>
            <div data-aos="fade-left" data-aos-delay="200">
              <header>
                <div class="mb-3">
                  <ul class="flex flex-wrap text-xs font-medium -m-1">
                    <li class="m-1">
                      <a
                        class="
                          inline-flex
                          text-center text-gray-100
                          py-1
                          px-3
                          rounded-full
                          bg-purple-600
                          hover:bg-purple-700
                          transition
                          duration-150
                          ease-in-out
                        "
                        href="#0"
                        >Product</a
                      >
                    </li>
                    <li class="m-1">
                      <a
                        class="
                          inline-flex
                          text-center text-gray-100
                          py-1
                          px-3
                          rounded-full
                          bg-blue-500
                          hover:bg-blue-600
                          transition
                          duration-150
                          ease-in-out
                        "
                        href="#0"
                        >Engineering</a
                      >
                    </li>
                  </ul>
                </div>
                <h3 class="h3 text-2xl lg:text-3xl mb-2">
                  <nuxt-link to="/blog-post" class="hover:text-gray-400 transition duration-150 ease-in-out"
                    >Designing a functional workflow at home.</nuxt-link
                  >
                </h3>
              </header>
              <p class="text-lg text-gray-500 flex-grow">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat.
              </p>
              <footer class="flex items-center mt-4">
                <a href="#0">
                  <img
                    class="rounded-full flex-shrink-0 mr-4"
                    src="../../assets/images/news-author-04.jpg"
                    width="40"
                    height="40"
                    alt="Author 04"
                  />
                </a>
                <div>
                  <a class="font-medium text-gray-500 hover:text-gray-400 transition duration-150 ease-in-out" href="#0"
                    >Chris Solerieu</a
                  >
                  <span class="text-gray-700"> - </span>
                  <span class="text-gray-500">Jan 19, 2020</span>
                </div>
              </footer>
            </div>
          </article>
        </div>

        <!-- Articles list -->
        <div class="max-w-sm mx-auto md:max-w-none">
          <!-- Articles container -->
          <div class="grid gap-12 md:grid-cols-3 md:gap-x-6 md:gap-y-8 items-start">
            <!-- 1st article -->
            <article v-for="(post, index) in posts" :key="index" class="flex flex-col h-full" data-aos="fade-up">
              <header>
                <nuxt-link to="/blog-post" class="block mb-6">
                  <figure class="relative pb-9/16 rounded-sm">
                    <img src="../../assets/images/news-01.jpg" width="352" height="198" alt="News 01" />
                  </figure>
                </nuxt-link>
                <div class="mb-3">
                  <ul class="flex flex-wrap text-xs font-medium -m-1">
                    <li class="m-1">
                      <a
                        class="
                          inline-flex
                          text-center text-gray-100
                          py-1
                          px-3
                          rounded-full
                          bg-purple-600
                          hover:bg-purple-700
                          transition
                          duration-150
                          ease-in-out
                        "
                        href="#0"
                        >Product</a
                      >
                    </li>
                    <li class="m-1">
                      <a
                        class="
                          inline-flex
                          text-center text-gray-100
                          py-1
                          px-3
                          rounded-full
                          bg-blue-500
                          hover:bg-blue-600
                          transition
                          duration-150
                          ease-in-out
                        "
                        href="#0"
                        >Engineering</a
                      >
                    </li>
                  </ul>
                </div>
                <h3 class="h4 mb-2">
                  <nuxt-link to="/blog-post" class="hover:text-gray-400 transition duration-150 ease-in-out"
                    >The quick brown fox jumped over the lazy dog.</nuxt-link
                  >
                </h3>
              </header>
              <p class="text-lg text-gray-500 flex-grow">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </p>
              <footer class="flex items-center mt-4">
                <a href="#0">
                  <img
                    class="rounded-full flex-shrink-0 mr-4"
                    src="../../assets/images/news-author-01.jpg"
                    width="40"
                    height="40"
                    alt="Author 01"
                  />
                </a>
                <div class="font-medium">
                  <a class="text-gray-500 hover:text-gray-400 transition duration-150 ease-in-out" href="#0"
                    >Anastasia Dan</a
                  >
                  <span class="text-gray-700"> - </span>
                  <span class="text-gray-500">Jan 17, 2020</span>
                </div>
              </footer>
            </article>

            <!-- 2nd article -->
            <!-- <article class="flex flex-col h-full" data-aos="fade-up" data-aos-delay="100">
              <header>
                <nuxt-link to="/blog-post" class="block mb-6">
                  <figure class="relative pb-9/16 rounded-sm">
                    <img src="../../assets/images/news-02.jpg" width="352" height="198" alt="News 02" />
                  </figure>
                </nuxt-link>
                <div class="mb-3">
                  <ul class="flex flex-wrap text-xs font-medium -m-1">
                    <li class="m-1">
                      <a
                        class="
                          inline-flex
                          text-center text-gray-100
                          py-1
                          px-3
                          rounded-full
                          bg-pink-500
                          hover:bg-pink-600
                          transition
                          duration-150
                          ease-in-out
                        "
                        href="#0"
                        >Desing</a
                      >
                    </li>
                    <li class="m-1">
                      <a
                        class="
                          inline-flex
                          text-center text-gray-100
                          py-1
                          px-3
                          rounded-full
                          bg-blue-500
                          hover:bg-blue-600
                          transition
                          duration-150
                          ease-in-out
                        "
                        href="#0"
                        >Engineering</a
                      >
                    </li>
                  </ul>
                </div>
                <h3 class="h4 mb-2">
                  <nuxt-link to="/blog-post" class="hover:text-gray-400 transition duration-150 ease-in-out"
                    >The quick brown fox jumped over the lazy dog.</nuxt-link
                  >
                </h3>
              </header>
              <p class="text-lg text-gray-500 flex-grow">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </p>
              <footer class="flex items-center mt-4">
                <a href="#0">
                  <img
                    class="rounded-full flex-shrink-0 mr-4"
                    src="../../assets/images/news-author-02.jpg"
                    width="40"
                    height="40"
                    alt="Author 02"
                  />
                </a>
                <div class="font-medium">
                  <a class="text-gray-500 hover:text-gray-400 transition duration-150 ease-in-out" href="#0"
                    >Markus Barker</a
                  >
                  <span class="text-gray-700"> - </span>
                  <span class="text-gray-500">Jan 12, 2020</span>
                </div>
              </footer>
            </article> -->

            <!-- 3rd article -->
            <!-- <article class="flex flex-col h-full" data-aos="fade-up" data-aos-delay="200">
              <header>
                <nuxt-link to="/blog-post" class="block mb-6">
                  <figure class="relative pb-9/16 rounded-sm">
                    <img src="../../assets/images/news-03.jpg" width="352" height="198" alt="News 03" />
                  </figure>
                </nuxt-link>
                <div class="mb-3">
                  <ul class="flex flex-wrap text-xs font-medium -m-1">
                    <li class="m-1">
                      <a
                        class="
                          inline-flex
                          text-center text-gray-100
                          py-1
                          px-3
                          rounded-full
                          bg-purple-600
                          hover:bg-purple-700
                          transition
                          duration-150
                          ease-in-out
                        "
                        href="#0"
                        >Product</a
                      >
                    </li>
                    <li class="m-1">
                      <a
                        class="
                          inline-flex
                          text-center text-gray-100
                          py-1
                          px-3
                          rounded-full
                          bg-teal-500
                          hover:bg-teal-600
                          transition
                          duration-150
                          ease-in-out
                        "
                        href="#0"
                        >Tutorials and articles</a
                      >
                    </li>
                  </ul>
                </div>
                <h3 class="h4 mb-2">
                  <nuxt-link to="/blog-post" class="hover:text-gray-400 transition duration-150 ease-in-out"
                    >The quick brown fox jumped over the lazy dog.</nuxt-link
                  >
                </h3>
              </header>
              <p class="text-lg text-gray-500 flex-grow">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </p>
              <footer class="flex items-center mt-4">
                <a href="#0">
                  <img
                    class="rounded-full flex-shrink-0 mr-4"
                    src="../../assets/images/news-author-03.jpg"
                    width="40"
                    height="40"
                    alt="Author 03"
                  />
                </a>
                <div class="font-medium">
                  <a class="text-gray-500 hover:text-gray-400 transition duration-150 ease-in-out" href="#0"
                    >Lisa Crockett</a
                  >
                  <span class="text-gray-700"> - </span>
                  <span class="text-gray-500">Jan 9, 2020</span>
                </div>
              </footer>
            </article> -->

            <!-- 4th article -->
            <!-- <article class="flex flex-col h-full" data-aos="fade-up">
              <header>
                <nuxt-link to="/blog-post" class="block mb-6">
                  <figure class="relative pb-9/16 rounded-sm">
                    <img src="../../assets/images/news-04.jpg" width="352" height="198" alt="News 04" />
                  </figure>
                </nuxt-link>
                <div class="mb-3">
                  <ul class="flex flex-wrap text-xs font-medium -m-1">
                    <li class="m-1">
                      <a
                        class="
                          inline-flex
                          text-center text-gray-100
                          py-1
                          px-3
                          rounded-full
                          bg-purple-600
                          hover:bg-purple-700
                          transition
                          duration-150
                          ease-in-out
                        "
                        href="#0"
                        >Product</a
                      >
                    </li>
                    <li class="m-1">
                      <a
                        class="
                          inline-flex
                          text-center text-gray-100
                          py-1
                          px-3
                          rounded-full
                          bg-green-500
                          hover:bg-green-600
                          transition
                          duration-150
                          ease-in-out
                        "
                        href="#0"
                        >Culture</a
                      >
                    </li>
                  </ul>
                </div>
                <h3 class="h4 mb-2">
                  <nuxt-link to="/blog-post" class="hover:text-gray-400 transition duration-150 ease-in-out"
                    >The quick brown fox jumped over the lazy dog.</nuxt-link
                  >
                </h3>
              </header>
              <p class="text-lg text-gray-500 flex-grow">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </p>
              <footer class="flex items-center mt-4">
                <a href="#0">
                  <img
                    class="rounded-full flex-shrink-0 mr-4"
                    src="../../assets/images/news-author-05.jpg"
                    width="40"
                    height="40"
                    alt="Author 05"
                  />
                </a>
                <div class="font-medium">
                  <a class="text-gray-500 hover:text-gray-400 transition duration-150 ease-in-out" href="#0"
                    >Alexandra Smith</a
                  >
                  <span class="text-gray-700"> - </span>
                  <span class="text-gray-500">Jan 7, 2020</span>
                </div>
              </footer>
            </article> -->

            <!-- 5th article -->
            <!-- <article class="flex flex-col h-full" data-aos="fade-up" data-aos-delay="100">
              <header>
                <nuxt-link to="/blog-post" class="block mb-6">
                  <figure class="relative pb-9/16 rounded-sm">
                    <img src="../../assets/images/news-05.jpg" width="352" height="198" alt="News 05" />
                  </figure>
                </nuxt-link>
                <div class="mb-3">
                  <ul class="flex flex-wrap text-xs font-medium -m-1">
                    <li class="m-1">
                      <a
                        class="
                          inline-flex
                          text-center text-gray-100
                          py-1
                          px-3
                          rounded-full
                          bg-blue-500
                          hover:bg-blue-600
                          transition
                          duration-150
                          ease-in-out
                        "
                        href="#0"
                        >Engineering</a
                      >
                    </li>
                  </ul>
                </div>
                <h3 class="h4 mb-2">
                  <nuxt-link to="/blog-post" class="hover:text-gray-400 transition duration-150 ease-in-out"
                    >The quick brown fox jumped over the lazy dog.</nuxt-link
                  >
                </h3>
              </header>
              <p class="text-lg text-gray-500 flex-grow">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </p>
              <footer class="flex items-center mt-4">
                <a href="#0">
                  <img
                    class="rounded-full flex-shrink-0 mr-4"
                    src="../../assets/images/news-author-03.jpg"
                    width="40"
                    height="40"
                    alt="Author 03"
                  />
                </a>
                <div class="font-medium">
                  <a class="text-gray-500 hover:text-gray-400 transition duration-150 ease-in-out" href="#0"
                    >Lisa Crockett</a
                  >
                  <span class="text-gray-700"> - </span>
                  <span class="text-gray-500">Jan 4, 2020</span>
                </div>
              </footer>
            </article> -->

            <!-- 6th article -->
            <!-- <article class="flex flex-col h-full" data-aos="fade-up" data-aos-delay="200">
              <header>
                <nuxt-link to="/blog-post" class="block mb-6">
                  <figure class="relative pb-9/16 rounded-sm">
                    <img src="../../assets/images/news-06.jpg" width="352" height="198" alt="News 06" />
                  </figure>
                </nuxt-link>
                <div class="mb-3">
                  <ul class="flex flex-wrap text-xs font-medium -m-1">
                    <li class="m-1">
                      <a
                        class="
                          inline-flex
                          text-center text-gray-100
                          py-1
                          px-3
                          rounded-full
                          bg-pink-500
                          hover:bg-pink-600
                          transition
                          duration-150
                          ease-in-out
                        "
                        href="#0"
                        >Desing</a
                      >
                    </li>
                    <li class="m-1">
                      <a
                        class="
                          inline-flex
                          text-center text-gray-100
                          py-1
                          px-3
                          rounded-full
                          bg-teal-500
                          hover:bg-teal-600
                          transition
                          duration-150
                          ease-in-out
                        "
                        href="#0"
                        >Tutorials and articles</a
                      >
                    </li>
                  </ul>
                </div>
                <h3 class="h4 mb-2">
                  <nuxt-link to="/blog-post" class="hover:text-gray-400 transition duration-150 ease-in-out"
                    >The quick brown fox jumped over the lazy dog.</nuxt-link
                  >
                </h3>
              </header>
              <p class="text-lg text-gray-500 flex-grow">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </p>
              <footer class="flex items-center mt-4">
                <a href="#0">
                  <img
                    class="rounded-full flex-shrink-0 mr-4"
                    src="../../assets/images/news-author-06.jpg"
                    width="40"
                    height="40"
                    alt="Author 06"
                  />
                </a>
                <div class="font-medium">
                  <a class="text-gray-500 hover:text-gray-400 transition duration-150 ease-in-out" href="#0"
                    >Anton Sebastian</a
                  >
                  <span class="text-gray-700"> - </span>
                  <span class="text-gray-500">Jan 2, 2020</span>
                </div>
              </footer>
            </article> -->

            <!-- 7th article -->
            <!-- <article class="flex flex-col h-full" data-aos="fade-up">
              <header>
                <nuxt-link to="/blog-post" class="block mb-6">
                  <figure class="relative pb-9/16 rounded-sm">
                    <img src="../../assets/images/news-07.jpg" width="352" height="198" alt="News 07" />
                  </figure>
                </nuxt-link>
                <div class="mb-3">
                  <ul class="flex flex-wrap text-xs font-medium -m-1">
                    <li class="m-1">
                      <a
                        class="
                          inline-flex
                          text-center text-gray-100
                          py-1
                          px-3
                          rounded-full
                          bg-purple-600
                          hover:bg-purple-700
                          transition
                          duration-150
                          ease-in-out
                        "
                        href="#0"
                        >Product</a
                      >
                    </li>
                    <li class="m-1">
                      <a
                        class="
                          inline-flex
                          text-center text-gray-100
                          py-1
                          px-3
                          rounded-full
                          bg-blue-500
                          hover:bg-blue-600
                          transition
                          duration-150
                          ease-in-out
                        "
                        href="#0"
                        >Engineering</a
                      >
                    </li>
                  </ul>
                </div>
                <h3 class="h4 mb-2">
                  <nuxt-link to="/blog-post" class="hover:text-gray-400 transition duration-150 ease-in-out"
                    >The quick brown fox jumped over the lazy dog.</nuxt-link
                  >
                </h3>
              </header>
              <p class="text-lg text-gray-500 flex-grow">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </p>
              <footer class="flex items-center mt-4">
                <a href="#0">
                  <img
                    class="rounded-full flex-shrink-0 mr-4"
                    src="../../assets/images/news-author-02.jpg"
                    width="40"
                    height="40"
                    alt="Author 02"
                  />
                </a>
                <div class="font-medium">
                  <a class="text-gray-500 hover:text-gray-400 transition duration-150 ease-in-out" href="#0"
                    >Markus Barker</a
                  >
                  <span class="text-gray-700"> - </span>
                  <span class="text-gray-500">Dec 24, 2019</span>
                </div>
              </footer>
            </article> -->

            <!-- 8th article -->
            <!-- <article class="flex flex-col h-full" data-aos="fade-up" data-aos-delay="100">
              <header>
                <nuxt-link to="/blog-post" class="block mb-6">
                  <figure class="relative pb-9/16 rounded-sm">
                    <img src="../../assets/images/news-08.jpg" width="352" height="198" alt="News 08" />
                  </figure>
                </nuxt-link>
                <div class="mb-3">
                  <ul class="flex flex-wrap text-xs font-medium -m-1">
                    <li class="m-1">
                      <a
                        class="
                          inline-flex
                          text-center text-gray-100
                          py-1
                          px-3
                          rounded-full
                          bg-blue-500
                          hover:bg-blue-600
                          transition
                          duration-150
                          ease-in-out
                        "
                        href="#0"
                        >Engineering</a
                      >
                    </li>
                    <li class="m-1">
                      <a
                        class="
                          inline-flex
                          text-center text-gray-100
                          py-1
                          px-3
                          rounded-full
                          bg-green-500
                          hover:bg-green-600
                          transition
                          duration-150
                          ease-in-out
                        "
                        href="#0"
                        >Culture</a
                      >
                    </li>
                  </ul>
                </div>
                <h3 class="h4 mb-2">
                  <nuxt-link to="/blog-post" class="hover:text-gray-400 transition duration-150 ease-in-out"
                    >The quick brown fox jumped over the lazy dog.</nuxt-link
                  >
                </h3>
              </header>
              <p class="text-lg text-gray-500 flex-grow">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </p>
              <footer class="flex items-center mt-4">
                <a href="#0">
                  <img
                    class="rounded-full flex-shrink-0 mr-4"
                    src="../../assets/images/news-author-01.jpg"
                    width="40"
                    height="40"
                    alt="Author 01"
                  />
                </a>
                <div class="font-medium">
                  <a class="text-gray-500 hover:text-gray-400 transition duration-150 ease-in-out" href="#0"
                    >Anastasia Dan</a
                  >
                  <span class="text-gray-700"> - </span>
                  <span class="text-gray-500">Dec 12, 2019</span>
                </div>
              </footer>
            </article> -->

            <!-- 9th article -->
            <!-- <article class="flex flex-col h-full" data-aos="fade-up" data-aos-delay="200">
              <header>
                <nuxt-link to="/blog-post" class="block mb-6">
                  <figure class="relative pb-9/16 rounded-sm">
                    <img src="../../assets/images/news-09.jpg" width="352" height="198" alt="News 09" />
                  </figure>
                </nuxt-link>
                <div class="mb-3">
                  <ul class="flex flex-wrap text-xs font-medium -m-1">
                    <li class="m-1">
                      <a
                        class="
                          inline-flex
                          text-center text-gray-100
                          py-1
                          px-3
                          rounded-full
                          bg-purple-600
                          hover:bg-purple-700
                          transition
                          duration-150
                          ease-in-out
                        "
                        href="#0"
                        >Product</a
                      >
                    </li>
                  </ul>
                </div>
                <h3 class="h4 mb-2">
                  <nuxt-link to="/blog-post" class="hover:text-gray-400 transition duration-150 ease-in-out"
                    >The quick brown fox jumped over the lazy dog.</nuxt-link
                  >
                </h3>
              </header>
              <p class="text-lg text-gray-500 flex-grow">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </p>
              <footer class="flex items-center mt-4">
                <a href="#0">
                  <img
                    class="rounded-full flex-shrink-0 mr-4"
                    src="../../assets/images/news-author-02.jpg"
                    width="40"
                    height="40"
                    alt="Author 02"
                  />
                </a>
                <div class="font-medium">
                  <a class="text-gray-500 hover:text-gray-400 transition duration-150 ease-in-out" href="#0"
                    >Markus Barker</a
                  >
                  <span class="text-gray-700"> - </span>
                  <span class="text-gray-500">Dec 7, 2019</span>
                </div>
              </footer>
            </article> -->
          </div>
        </div>

        <!-- Pagination -->
        <nav class="flex justify-center pt-16" role="navigation" aria-label="Pagination Navigation">
          <ul class="inline-flex flex-wrap font-medium text-sm -m-1">
            <li class="m-1">
              <span
                class="
                  inline-flex
                  h-10
                  min-w-10
                  justify-center
                  items-center
                  bg-gray-800
                  px-4
                  rounded-full
                  text-gray-300
                "
                >Prev</span
              >
            </li>
            <li class="m-1">
              <a
                href="#0"
                class="
                  inline-flex
                  h-10
                  min-w-10
                  justify-center
                  items-center
                  bg-gray-800
                  px-2
                  rounded-full
                  text-gray-300
                  hover:bg-purple-600
                  transition-colors
                  duration-150
                  ease-in-out
                "
                >1</a
              >
            </li>
            <li class="m-1">
              <a
                href="#0"
                class="
                  inline-flex
                  h-10
                  min-w-10
                  justify-center
                  items-center
                  bg-gray-800
                  px-2
                  rounded-full
                  text-gray-300
                  hover:bg-purple-600
                  transition-colors
                  duration-150
                  ease-in-out
                "
                >2</a
              >
            </li>
            <li class="m-1">
              <a
                href="#0"
                class="
                  inline-flex
                  h-10
                  min-w-10
                  justify-center
                  items-center
                  bg-gray-800
                  px-2
                  rounded-full
                  text-gray-300
                  hover:bg-purple-600
                  transition-colors
                  duration-150
                  ease-in-out
                "
                >3</a
              >
            </li>
            <li class="m-1">
              <span
                class="
                  inline-flex
                  h-10
                  min-w-10
                  justify-center
                  items-center
                  bg-gray-800
                  px-2
                  rounded-full
                  text-gray-500
                "
                >...</span
              >
            </li>
            <li class="m-1">
              <a
                href="#0"
                class="
                  inline-flex
                  h-10
                  min-w-10
                  justify-center
                  items-center
                  bg-gray-800
                  px-2
                  rounded-full
                  text-gray-300
                  hover:bg-purple-600
                  transition-colors
                  duration-150
                  ease-in-out
                "
                >12</a
              >
            </li>
            <li class="m-1">
              <a
                href="#0"
                class="
                  inline-flex
                  h-10
                  min-w-10
                  justify-center
                  items-center
                  bg-gray-800
                  px-4
                  rounded-full
                  text-gray-300
                  hover:bg-purple-600
                  transition-colors
                  duration-150
                  ease-in-out
                "
                >Next</a
              >
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </section>
</template>

<!-- <template>
  <div v-if="posts.length > 0">
    <div class="grid gap-12 md:grid-cols-3 md:gap-x-6 md:gap-y-8 items-start">
      <article v-for="(post, index) in posts" :key="index" class="flex flex-col h-full" data-aos="fade-up">
        <header>
          <!-- <nuxt-link to="/blog-post" class="block mb-6">
                  <figure class="relative  pb-9/16  rounded-sm">
                    <img class="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out" src="../images/news-01.jpg" width="352" height="198" alt="News 01">
                  </figure>
                </nuxt-link> 
          <h3 class="h4 mb-2">
            <nuxt-link to="/blog-post" class="hover:text-gray-400 transition duration-150 ease-in-out">{{
              post.title
            }}</nuxt-link>
          </h3>
        </header>
        <p class="text-lg text-gray-500 flex-grow">{{ post.description }}</p>
        <footer class="flex items-center mt-4">
          <div class="font-medium">
            <span class="text-gray-500">{{ formatDate(post.createdAt) }}</span>
          </div>
        </footer>
      </article>
    </div>
  </div>

  <ul v-if="posts.length > 0" class="cards">
    <li v-for="(post, index) in posts" :key="index">
      <nuxt-link :to="`${postType}/${post.slug}`" class="card card--clickable">
        <template v-if="postType === 'projects'">
          <span class="flex-1">
            <h6 class="inline-block py-1 px-2 mr-1 bg-gray text-white text-sm font-medium rounded-sm">
              {{ post.category }}
            </h6>
            <h3 class="card-title">{{ post.title }}</h3>
            <p class="mt-2">{{ post.description }}</p>
          </span>
          <img v-if="post.cover" class="cover-image" :src="post.cover" />
        </template>

        <template v-else>
         <span class="w-full">
            <span class="flex justify-between align-baseline">
              <h3 class="card-title">{{ post.title }}</h3>
              <h6
                v-if="post.createdAt"
                class="
                  self-start
                  inline-block
                  mt-0
                  py-1
                  px-2
                  bg-gray
                  text-white text-base
                  font-medium
                  rounded-sm
                  whitespace-no-wrap
                "
              >
                {{ formatDate(post.createdAt) }}
              </h6>
            </span>
            <p class="mt-2">{{ post.description }}</p>
          </span> 
        </template>
      </nuxt-link>
    </li>
  </ul>
  <div v-else-if="loading" class="cards">
    <div v-for="placeholder in placeholderClasses" :key="placeholder.id" class="card">
      <content-placeholders :rounded="true" :class="placeholder">
        <content-placeholders-heading />
      </content-placeholders>
    </div>
  </div>
  <p v-else class="max-w-5xl mx-auto">
    {{ amount > 1 ? 'Posts not found' : 'Post not found' }}
  </p> 
</template>-->

<script>
export default {
  name: 'Posts',
  props: {
    postType: {
      type: String,
      default: 'blog',
      validator: (val) => ['blog', 'projects'].includes(val),
    },
    amount: {
      // ? https://content.nuxtjs.org/fetching#limitn
      type: Number,
      default: 10,
      validator: (val) => val >= 0 && val < 100,
    },
    sortBy: {
      // ? https://content.nuxtjs.org/fetching#sortbykey-direction
      type: Object,
      default: () => ({
        key: 'slug',
        direction: 'desc', // you probably want 'asc' here
      }),
      validator: (obj) => typeof obj.key === 'string' && typeof obj.direction === 'string',
    },
  },
  data() {
    return {
      posts: [],
      loading: true,
    }
  },
  computed: {
    placeholderClasses() {
      const classes = ['w-full', 'w-2/3', 'w-5/6']
      return [...Array.from({ length: this.amount }, (v, i) => classes[i % classes.length])] // repeats classes after one another
    },
  },
  async mounted() {
    this.loading = true
    this.posts = await this.fetchPosts()
    this.loading = false
  },
  methods: {
    formatDate(dateString) {
      const date = new Date(dateString)
      return date.toLocaleDateString(process.env.lang) || ''
    },
    async fetchPosts(postType = this.postType, amount = this.amount, sortBy = this.sortBy) {
      return this.$content(postType)
        .sortBy(sortBy.key, sortBy.direction)
        .limit(amount)
        .fetch()
        .catch((err) => console.error(err) || [])
    },
  },
}
</script>
