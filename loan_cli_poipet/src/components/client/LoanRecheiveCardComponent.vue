<template>
  <div class="max-w-4xl px-6 mx-auto mb-10 lg:mb-0">
    <div>
      <section class="text-gray-700 body-font">
        <div class="container py-24 mx-auto">
          <div class="flex flex-wrap -m-4 text-center">
            <a href="#link_account" class="w-full p-4 md:w-1/4 sm:w-1/2">
              <div
                class="px-4 py-6 overflow-hidden transition duration-500 transform border-2 hover:scale-110"
              >
                <div
                  aria-hidden="true"
                  class="absolute inset-0 duration-300 -translate-y-1/2 border rounded-full opacity-25 aspect-video group-hover:-translate-y-1/4 bg-gradient-to-b from-blue-500 to-white dark:from-white dark:to-white blur-2xl dark:opacity-5 dark:group-hover:opacity-10"
                ></div>
                <div class="space-y-2">
                  <div class="flex justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="w-12 h-12 text-indigo-500 lucide lucide-credit-card"
                    >
                      <rect width="20" height="14" x="2" y="5" rx="2" />
                      <line x1="2" x2="22" y1="10" y2="10" />
                    </svg>
                  </div>
                  <h2
                    class="font-mono font-medium text-gray-900 md:ext-xl title-font"
                  >
                    Account
                  </h2>
                </div>
              </div>
            </a>

            <div
              @click="handleRequestLoan"
              class="w-full p-4 md:w-1/4 sm:w-1/2"
            >
              <div
                class="px-4 py-6 overflow-hidden transition duration-500 transform border-2 hover:scale-110"
              >
                <div
                  aria-hidden="true"
                  class="absolute inset-0 duration-300 -translate-y-1/2 border rounded-full opacity-25 aspect-video group-hover:-translate-y-1/4 bg-gradient-to-b from-blue-500 to-white dark:from-white dark:to-white blur-2xl dark:opacity-5 dark:group-hover:opacity-10"
                ></div>
                <div class="space-y-2 cursor-pointer">
                  <div class="flex justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="w-12 h-12 text-indigo-500 lucide lucide-refresh-cw"
                    >
                      <path
                        d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"
                      />
                      <path d="M21 3v5h-5" />
                      <path
                        d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"
                      />
                      <path d="M8 16H3v5" />
                    </svg>
                  </div>
                  <h2
                    class="font-mono font-medium text-gray-900 md:ext-xl title-font"
                  >
                    Request Loan
                  </h2>
                </div>
              </div>
            </div>

            <RouterLink to="/profile" class="w-full p-4 md:w-1/4 sm:w-1/2">
              <div
                class="px-4 py-6 overflow-hidden transition duration-500 transform border-2 hover:scale-110"
              >
                <div
                  aria-hidden="true"
                  class="absolute inset-0 duration-300 -translate-y-1/2 border rounded-full opacity-25 aspect-video group-hover:-translate-y-1/4 bg-gradient-to-b from-blue-500 to-white dark:from-white dark:to-white blur-2xl dark:opacity-5 dark:group-hover:opacity-10"
                ></div>
                <div class="space-y-2">
                  <div class="flex justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="w-12 h-12 text-indigo-500 lucide lucide-user-round-pen"
                    >
                      <path d="M2 21a8 8 0 0 1 10.821-7.487" />
                      <path
                        d="M21.378 16.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"
                      />
                      <circle cx="10" cy="8" r="5" />
                    </svg>
                  </div>
                  <h2
                    class="font-mono font-medium text-gray-900 md:ext-xl title-font"
                  >
                    Profile
                  </h2>
                </div>
              </div>
            </RouterLink>

            <div class="w-full p-4 md:w-1/4 sm:w-1/2">
              <div
                class="px-4 py-6 overflow-hidden transition duration-500 transform border-2 hover:scale-110"
              >
                <div
                  aria-hidden="true"
                  class="absolute inset-0 duration-300 -translate-y-1/2 border rounded-full opacity-25 aspect-video group-hover:-translate-y-1/4 bg-gradient-to-b from-blue-500 to-white dark:from-white dark:to-white blur-2xl dark:opacity-5 dark:group-hover:opacity-10"
                ></div>
                <div class="space-y-2">
                  <div class="flex justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="w-12 h-12 text-indigo-500 lucide lucide-landmark"
                    >
                      <line x1="3" x2="21" y1="22" y2="22" />
                      <line x1="6" x2="6" y1="18" y2="11" />
                      <line x1="10" x2="10" y1="18" y2="11" />
                      <line x1="14" x2="14" y1="18" y2="11" />
                      <line x1="18" x2="18" y1="18" y2="11" />
                      <polygon points="12 2 20 7 4 7" />
                    </svg>
                  </div>
                  <h2
                    class="font-mono font-medium text-gray-900 md:ext-xl title-font"
                  >
                    Withdraw
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
import { useRouter, RouterLink } from "vue-router";

const store = useStore();
const router = useRouter();

// Access user data from Vuex store
const user = computed(() => store.state.auth.user);

const handleRequestLoan = async () => {
  try {
    if (user.value) {
      await router.push("/loan");
    } else {
      await router.push("/login");
    }
  } catch (err) {
    console.error(err);
  }
};
</script>

<style scoped>
/* Tailwind CSS is used directly in the template; no additional CSS needed */
</style>