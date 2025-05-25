<template>
  <div class="hidden lg:block">
    <NavbarComponent />
  </div>
  <div class="lg:hidden">
    <MobileView />
  </div>
  <div class="w-full max-w-4xl px-5 py-10 m-auto mt-1 bg-white" v-motion-fade>
    <div class="mb-6 text-2xl text-center">
      <div
        class="w-[180px] h-[180px] mx-auto rounded-full border-blue-600 border-8 flex items-center justify-center text-white"
      >
        <div class="space-y-2 text-center">
          <h1 class="font-mono text-3xl text-black">500</h1>
          <span class="font-mono text-black">Meduim Credit</span>
        </div>
      </div>
      <h2 class="mt-4 text-lg font-semibold">Name</h2>
      <div>
        <div v-if="user" class="text-sm text-gray-500">
          Phone : {{ user?.email?.slice(0, 10).replace('@', '') }}
        </div>
        <div v-else class="text-sm text-gray-500">
          No Account?
          <RouterLink :to="{ name: 'login' }" class="text-blue-400"
            >Login</RouterLink
          >
        </div>
      </div>
    </div>

    <div class="space-gap-2">
      <div class="col-span-2 lg:col-span-1">
        <router-link
          to="/persionalProfile"
          class="flex items-center w-full p-3 text-left text-white bg-blue-600 border border-gray-300 rounded-full shadow-xl hover:bg-blue-700"
        >
          <svg
            class="h-6 ml-3 text-white w-7"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M5.121 17.804A11.953 11.953 0 0112 15c2.5 0 4.847.776 6.879 2.098M15 10a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          <span class="ml-3 md:text-xl">Personal Information</span>
        </router-link>
      </div>

      <div class="col-span-2 mt-2 lg:col-span-1">
        <router-link
          to="/baneficicaryProfile"
          class="flex items-center w-full p-3 text-left text-white bg-blue-600 border border-gray-300 rounded-full shadow-xl hover:bg-blue-700"
        >
          <svg
            class="h-6 ml-3 text-white w-7"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 14l9-5-9-5-9 5 9 5z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 14l6.16-3.422A12.083 12.083 0 0112 21a12.083 12.083 0 01-6.16-10.422L12 14z"
            />
          </svg>
          <span class="ml-3 md:text-xl">Beneficiary Information</span>
        </router-link>
      </div>

      <div class="col-span-2 mt-2 lg:col-span-1">
        <router-link
          to="/loancontactProfile"
          class="flex items-center w-full p-3 text-left text-white bg-blue-600 border border-gray-300 rounded-full shadow-xl hover:bg-blue-700"
        >
          <svg
            class="h-6 ml-3 text-white w-7"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M8 7h8M8 11h8M8 15h4"
            />
          </svg>
          <span class="ml-3 md:text-xl">Loan Contract</span>
        </router-link>
      </div>

      <div class="col-span-2 mt-2 lg:col-span-1">
        <button
          class="flex items-center w-full p-3 text-left text-white bg-blue-600 border border-gray-300 rounded-full shadow-xl hover:bg-blue-700"
        >
          <svg
            class="h-6 ml-3 text-white w-7"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M8 7h8M8 11h8M8 15h8M12 3v1m-4-1v1m8-1v1m-9 16h10a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2z"
            />
          </svg>
          <span class="ml-3 md:text-xl">Payment Schedule</span>
        </button>
      </div>

      <div class="col-span-2 mt-2 lg:col-span-1">
        <button
          class="flex items-center w-full p-3 text-left text-white bg-blue-600 border border-gray-300 rounded-full shadow-xl hover:bg-blue-700"
        >
          <svg
            class="h-6 ml-3 text-white w-7"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 8c-4.418 0-8 2.239-8 5s3.582 5 8 5 8-2.239 8-5-3.582-5-8-5z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 8V4m0 16v-4"
            />
          </svg>
          <span class="ml-3 md:text-xl">Transactions</span>
        </button>
      </div>

      <div class="mb-20">
        <div class="w-full mt-2">
          <router-link
            to="/#"
            class="flex items-center w-full p-3 text-left text-white bg-blue-600 border border-gray-300 rounded-full shadow-xl lg:mb-0 hover:bg-blue-700"
          >
            <svg
              class="h-6 ml-3 text-white w-7"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 8c-4.418 0-8 2.239-8 5s3.582 5 8 5 8-2.239 8-5-3.582-5-8-5z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 8V4m0 16v-4"
              />
            </svg>
            <span class="ml-3 md:text-xl">About Us</span>
          </router-link>
        </div>

        <div v-if="user" class="flex justify-center col-span-2 mt-6">
          <div class="">
            <button
              @click="logOut"
              class="flex items-center justify-center gap-3 py-3 mb-40 text-red-600 transition border border-red-600 rounded-full w-52 px md:text-xl hover:bg-red-100"
            >
              <svg
                class="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16 17L21 12L16 7"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M21 12H9"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12 22H5C3.89543 22 3 21.1046 3 20V4C3 2.89543 3.89543 2 5 2H12"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <span>Logout</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { useRouter } from "vue-router";
import { onMounted, computed } from "vue";
import { useStore } from "vuex";
import NavbarComponent from "@/components/client/NavbarComponent.vue";
import MobileView from "./MobileView.vue";

export default {
  components: {
    NavbarComponent,
    MobileView,
  },
  setup() {
    const router = useRouter();
    const store = useStore();
    const user = computed(() => store.state.auth.user);

    onMounted(() => {
      if (!user.value) {
        router.push("/login");
      }
    });

    const handleLogout = async () => {
      try {
        if (window.confirm("Are you sure you want to logout?")) {
          await store.dispatch("auth/logout");
          router.push("/login");
        }
      } catch (err) {
        console.log("Logout error", err);
      }
    };

    return {
      handleLogout,
      user,
    };
  },
  methods: {
    logOut() {
      if (confirm("Are you sure you want to logout?")) {
        this.$store.dispatch("auth/logout");
        this.$router.push("/login");
      }
    },
  },
};
</script>

