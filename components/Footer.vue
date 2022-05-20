<template>
  <footer>
    <div class="py-12 md:py-16">
      <div class="max-w-6xl mx-auto px-4 sm:px-6">
        <!-- Top area: Blocks -->
        <div class="grid md:grid-cols-12 gap-8 lg:gap-20 mb-8 md:mb-12">
          <!-- 1st block -->
          <div class="md:col-span-4 lg:col-span-5">
            <div class="mb-2">
              <!-- Logo -->
              <nuxt-link to="/" class="inline-block" aria-label="Cruip">
                <!-- <svg class="w-8 h-8 fill-current text-amber-400" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path d="M31.952 14.751a260.51 260.51 0 00-4.359-4.407C23.932 6.734 20.16 3.182 16.171 0c1.634.017 3.21.28 4.692.751 3.487 3.114 6.846 6.398 10.163 9.737.493 1.346.811 2.776.926 4.262zm-1.388 7.883c-2.496-2.597-5.051-5.12-7.737-7.471-3.706-3.246-10.693-9.81-15.736-7.418-4.552 2.158-4.717 10.543-4.96 16.238A15.926 15.926 0 010 16C0 9.799 3.528 4.421 8.686 1.766c1.82.593 3.593 1.675 5.038 2.587 6.569 4.14 12.29 9.71 17.792 15.57-.237.94-.557 1.846-.952 2.711zm-4.505 5.81a56.161 56.161 0 00-1.007-.823c-2.574-2.054-6.087-4.805-9.394-4.044-3.022.695-4.264 4.267-4.97 7.52a15.945 15.945 0 01-3.665-1.85c.366-3.242.89-6.675 2.405-9.364 2.315-4.107 6.287-3.072 9.613-1.132 3.36 1.96 6.417 4.572 9.313 7.417a16.097 16.097 0 01-2.295 2.275z" />
                </svg> -->
                <img src="../assets/images/logo_transparent.png" class="w-40" />
              </nuxt-link>
            </div>
            <div class="text-gray-400">
              100 Year Journey, Honor the Past, Embrace the Present and
              Celebrate the Future.
            </div>
          </div>
        </div>

        <!-- Bottom area -->
        <div class="md:flex md:items-center md:justify-between">
          <!-- Social links -->
          <ul class="flex mb-4 md:order-1 md:ml-4 md:mb-0">
            <li>
              <a
                href="https://twitter.com/hundalfamily"
                class="
                  flex
                  justify-center
                  items-center
                  text-amber-400
                  bg-gray-800
                  hover:text-gray-100 hover:bg-amber-400
                  rounded-full
                  transition
                  duration-150
                  ease-in-out
                "
                aria-label="Twitter"
              >
                <svg
                  class="w-8 h-8 fill-current"
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M24 11.5c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4 0 1.6 1.1 2.9 2.6 3.2-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H8c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4c.7-.5 1.3-1.1 1.7-1.8z"
                  />
                </svg>
              </a>
            </li>
            <li class="ml-4">
              <a
                href="https://www.facebook.com/hundalfamily"
                class="
                  flex
                  justify-center
                  items-center
                  text-amber-400
                  bg-gray-800
                  hover:text-gray-100 hover:bg-amber-400
                  rounded-full
                  transition
                  duration-150
                  ease-in-out
                "
                aria-label="Facebook"
              >
                <svg
                  class="w-8 h-8 fill-current"
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.023 24L14 17h-3v-3h3v-2c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V14H21l-1 3h-2.72v7h-3.257z"
                  />
                </svg>
              </a>
            </li>
            <li class="ml-4">
              <a
                href="https://www.instagram.com/hundalfamily/"
                class="
                  flex
                  justify-center
                  items-center
                  text-amber-400
                  bg-gray-800
                  hover:text-gray-100 hover:bg-amber-400
                  rounded-full
                  transition
                  duration-150
                  ease-in-out
                "
                aria-label="Instagram"
              >
                <svg
                  class="w-8 h-8 fill-current"
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="20.145" cy="11.892" r="1" />
                  <path
                    d="M16 20c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-6c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z"
                  />
                  <path
                    d="M20 24h-8c-2.056 0-4-1.944-4-4v-8c0-2.056 1.944-4 4-4h8c2.056 0 4 1.944 4 4v8c0 2.056-1.944 4-4 4zm-8-14c-.935 0-2 1.065-2 2v8c0 .953 1.047 2 2 2h8c.935 0 2-1.065 2-2v-8c0-.935-1.065-2-2-2h-8z"
                  />
                </svg>
              </a>
            </li>
          </ul>

          <!-- Copyrights note -->
          <div class="text-gray-400 text-sm mr-4">
            &copy; 2022 Hundal Family. All rights reserved.
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>
