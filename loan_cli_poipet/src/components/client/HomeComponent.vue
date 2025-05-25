<template>
  <div class="mx-auto">
    <!-- component -->
    <section>
      <div class="">
        <div class="max-w-4xl px-6 mx-auto text-gray-500">
          <div class="flex justify-center my-10">
            <h2
              class="flex items-center gap-1 text-2xl font-semibold text-gray-950 dark:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-move-right"
              >
                <path d="M18 8L22 12L18 16" />
                <path d="M2 12H22" />
              </svg>
              <span class="font-mono text-lg md:text-2xl">Loan Processing</span>
            </h2>
          </div>
          <div id="link_account" class="">
            <div
              class="relative p-8 overflow-hidden bg-white border-2 border-gray-200 group border-t-blue-500 dark:border-gray-800 dark:bg-gray-900"
            >
              <div
                aria-hidden="true"
                class="absolute inset-0 duration-300 -translate-y-1/2 border rounded-full opacity-25 aspect-video group-hover:-translate-y-1/4 bg-gradient-to-b from-blue-500 to-white dark:from-white dark:to-white blur-2xl dark:opacity-5 dark:group-hover:opacity-10"
              ></div>
              <div
                class="relative grid items-center justify-center grid-cols-1 lg:flex lg:justify-between"
              >
                <div
                  class="mt-6 border-blue-600 rounded-full border-8 flex items-center justify-center w-[180px] h-[180px]"
                >
                  <div class="space-y-2 text-center">
                    <h1 class="font-mono text-3xl text-black">500</h1>
                    <span class="font-mono">Meduim Credit</span>
                  </div>
                </div>

                <div v-if="user">
                  <!-- Display loading state -->
                  <div v-if="isLoading" class="mt-6 pb-6 rounded-b-[--card-border-radius]">
                    <div class="space-y-3 font-mono text-xl text-black">
                      <h1>Loading account information...</h1>
                    </div>
                  </div>

                  <!-- Display error state -->
                  <div v-else-if="error" class="mt-6 pb-6 rounded-b-[--card-border-radius]">
                    <div class="space-y-3 font-mono text-xl text-red-500">
                      <h1>Error loading account information.</h1>
                      <p>{{ error }}</p>
                    </div>
                  </div>

                  <!-- Display account information if userDoc is available -->
                  <div
                    v-else-if="userDoc"
                    class="mt-6 pb-6 rounded-b-[--card-border-radius]"
                  >
                    <div
                      v-if="userDoc.accountNumber"
                      class="space-y-3 font-mono text-xl text-black"
                    >
                      <div v-if="userDoc.status === '0' || userDoc.status === '1'">
                        <h1>Welcome!</h1>
                        <h1>Account Number: {{ userDoc?.accountNumber }}</h1>
                        <div class="space-y-2">
                          <h1>Account balance</h1>
                          <h1 class="text-2xl font-bold">
                            ₱ {{ userDoc?.amount }}
                          </h1>
                        </div>
                      </div>
                      <h1
                        v-else
                        class="font-mono text-xs text-black md:text-xl"
                      >
                        No Account Number
                      </h1>
                    </div>
                    <div v-else>
                      <h1 class="font-mono text-xs text-black md:text-xl">
                        No Account Number
                      </h1>
                    </div>
                  </div>

                  <!-- Display message if no account information is available -->
                  <div v-else class="mt-6 pb-6 rounded-b-[--card-border-radius]">
                    <div class="space-y-3 font-mono text-xl text-black">
                      <h1>No Account Information Available</h1>
                    </div>
                  </div>
                </div>
                <div v-else class="mt-6 pb-6 rounded-b-[--card-border-radius]">
                  <div class="space-y-3 font-mono text-xl text-black">
                    <h1>Please log in to view account information.</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="flex justify-center my-10">
        <button
          @click="handleRequestLoan"
          class="flex items-center gap-1 p-3 font-mono font-bold text-white bg-blue-600 rounded-full shadow-xl hover:bg-blue-700"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-move-down"
          >
            <path d="M8 18L12 22L16 18" />
            <path d="M12 2V22" />
          </svg>

          <div>
            <div class="uppercase">Request loan</div>
          </div>
        </button>
      </div>

      <!-- <div v-for="usDoc in userDoc" :key="usDoc" class="flex justify-center my-10">
              <div v-if="usDoc.amount === 0">
                  <button @click="handleRequestLoan"
                      class="flex items-center gap-1 p-3 font-mono font-bold text-white bg-blue-600 rounded-full shadow-xl hover:bg-blue-700">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                          class="lucide lucide-move-down">
                          <path d="M8 18L12 22L16 18" />
                          <path d="M12 2V22" />
                      </svg>

                      <div>
                          <div class="uppercase">Request loan</div>
                      </div>
                  </button>
              </div>

              <div v-else>
                  <button @click="handleLoanInformationNext"
                      class="flex items-center gap-1 p-3 font-mono font-bold text-white bg-blue-600 rounded-full shadow-xl hover:bg-blue-700">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                          class="lucide lucide-move-down">
                          <path d="M8 18L12 22L16 18" />
                          <path d="M12 2V22" />
                      </svg>
                 

                      <div>
                          <div class="uppercase">Your Loan Information</div>
                      </div>
                  </button>
              </div>
          </div> -->

      <div>
        <div class="flex justify-center my-10">
          <h2
            class="flex items-center gap-1 font-semibold text-gray-950 dark:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-move-right"
            >
              <path d="M18 8L22 12L18 16" />
              <path d="M2 12H22" />
            </svg>
            <span class="font-mono text-lg md:text-2xl"
              >Customer Received Loans
            </span>
          </h2>
        </div>

        <div class="max-w-4xl px-6 mx-auto text-gray-500">
          <div
            class="relative p-2 overflow-hidden bg-white border-2 border-gray-200 md:px-8 group border-t-blue-500 dark:border-gray-800 dark:bg-gray-900"
          >
            <div
              aria-hidden="true"
              class="absolute inset-0 duration-300 -translate-y-1/2 border rounded-full opacity-25 aspect-video group-hover:-translate-y-1/4 bg-gradient-to-b from-blue-500 to-white dark:from-white dark:to-white blur-2xl dark:opacity-5 dark:group-hover:opacity-10"
            ></div>
            <div class="relative flex items-center justify-between gap-2">
              <div
                class="border-blue-600 rounded-full border-2 flex items-center justify-center w-12 h-12 md:w-[80px] md:h-[80px]"
              >
                <div class="space-y-2 text-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-hand-coins size-5 md:size-8"
                  >
                    <path
                      d="M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17"
                    />
                    <path
                      d="m7 21 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9"
                    />
                    <path d="m2 16 6 6" />
                    <circle cx="16" cy="9" r="2.9" />
                    <circle cx="6" cy="5" r="3" />
                  </svg>
                </div>
              </div>

              <div class="mt-6 pb-6 rounded-b-[--card-border-radius]">
                <div class="space-y-3 font-mono text-xs text-black md:text-xl">
                  <h1 v-if="user">
                    {{ user?.email ? user.email.slice(0, 7) + "***" : "" }}
                  </h1>
                  <h1 v-else>No Account!</h1>
                </div>
              </div>

              <div class="mt-6 pb-6 rounded-b-[--card-border-radius]">
                <div class="space-y-3 font-mono text-xs text-black md:text-xl">
                  <h1 class="text-green-500">Received Loans Amount</h1>
                </div>
              </div>
              <div v-if="user">
                <!-- Display loading state -->
                <div v-if="isLoading" class="mt-6 pb-6 rounded-b-[--card-border-radius]">
                  <div class="space-y-3 font-mono text-xs text-black md:text-xl">
                    <h1>Loading received loans...</h1>
                  </div>
                </div>

                <!-- Display error state -->
                <div v-else-if="error" class="mt-6 pb-6 rounded-b-[--card-border-radius]">
                  <div class="space-y-3 font-mono text-xs text-red-500 md:text-xl">
                    <h1>Error loading received loans.</h1>
                    <p>{{ error }}</p>
                  </div>
                </div>

                <!-- Display received loans if userDoc is available -->
                <div
                  v-else-if="userDoc"
                  class="mt-6 pb-6 rounded-b-[--card-border-radius]"
                >
                  <div
                    v-if="userDoc.totalPrincipalAndInterest"
                    class="space-y-3 font-mono text-xs text-black md:text-xl"
                  >
                    <h1>₱ {{ userDoc?.totalPrincipalAndInterest }}</h1>
                  </div>
                  <div v-else>
                    <h1 class="font-mono text-xs text-black md:text-xl">
                      No Received Loans
                    </h1>
                  </div>
                </div>

                <!-- Display message if no received loans are available -->
                <div v-else class="mt-6 pb-6 rounded-b-[--card-border-radius]">
                  <div class="space-y-3 font-mono text-xs text-black md:text-xl">
                    <h1>No Received Loans Available</h1>
                  </div>
                </div>
              </div>
              <div v-else>
                <h1 class="font-mono text-xs text-black md:text-xl">
                  No Received Loan
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import LoanService from "@/services/loan.service"; // Import LoanService
import AuthService from "@/services/auth.service"; // Import AuthService

const store = useStore();
const router = useRouter();

// Access user data from Vuex store
const user = computed(() => store.state.auth.user);
const userDoc = ref(null); // Initialize as null to hold a single object
const isLoading = ref(true); // Add loading state
const error = ref(null); // Add error state

// Fetch user loan data on component mount
onMounted(async () => {
  // Get the current user's ID from AuthService
  const currentUser = AuthService.getCurrentUser();
  if (!currentUser || !currentUser.id) {
    console.error("User not logged in.");
    isLoading.value = false; // Stop loading if user is not logged in
    // Optionally redirect to login or handle appropriately
    // router.push({ name: 'login' }); // Example: redirect to login
    return;
  }
  const userId = currentUser.id;

  try {
    isLoading.value = true; // Start loading
    error.value = null; // Clear previous errors
    // Use the service method to fetch user's loan data
    const data = await LoanService.getUserLoanStatus(userId);
    userDoc.value = data; // Assign the fetched data directly
  } catch (err) {
    console.error("Error fetching user loan status:", err);
    error.value = err.message || "An error occurred while fetching data."; // Set error message
    userDoc.value = null; // Clear userDoc on error
  } finally {
    isLoading.value = false; // Stop loading
  }
});

const handleRequestLoan = async () => {
  try {
    if (user.value) {
      router.push("/loan");
    } else {
      router.push("/login");
    }
  } catch (err) {
    console.error(err);
  }
};
</script>
<style scoped>
/* Tailwind CSS is used directly in the template; no additional CSS needed */
</style>