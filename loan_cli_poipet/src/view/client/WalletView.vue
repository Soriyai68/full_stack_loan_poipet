<template>
  <div class="hidden lg:block">
    <NavbarComponent />
  </div>
  <div class="lg:hidden">
    <MobileView />
  </div>
  <div class="w-full max-w-4xl px-4 py-2 m-auto mt-2 bg-white" v-motion-fade>
    <h2
      class="p-3 text-lg font-semibold text-center text-white bg-blue-600 rounded-md"
    >
      Wallet
    </h2>

    <div
      class="grid items-center grid-cols-2 grid-rows-2 gap-4 mt-4 bg-gray-200 rounded-md p-7"
    >
      <div class="flex items-center">
        <span class="font-medium">Account balance :</span>
      </div>
      <div class="text-right">
        <div v-if="isLoading" class="font-bold">Loading...</div>
        <div v-else-if="error" class="font-bold text-red-500">Error</div>
        <div v-else-if="userLoanStatus" class="flex items-center justify-end">
          <div v-if="userLoanStatus.totalPrincipalAndInterest" class="font-bold">
            ₱ {{ userLoanStatus?.totalPrincipalAndInterest }}
          </div>
          <div v-else class="font-bold">No account balance</div>
        </div>
        <div v-else class="font-bold">No account balance</div>
        <svg
          class="inline-block h-6 text-gray-500 w-7"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M1 12s4-6 11-6 11 6 11 6-4 6-11 6-11-6z"
          />
          <circle
            cx="12"
            cy="12"
            r="3"
            stroke="currentColor"
            stroke-width="2"
            fill="none"
          />
        </svg>
      </div>
      <div class="flex items-center">
        <span class="font-medium">Another Field :</span>
      </div>
      <div class="text-right">
        <span class="font-semibold text-blue-600">0₱</span>
      </div>
    </div>

    <button
      class="w-full py-2 mt-4 font-semibold text-white bg-blue-700 rounded-md"
    >
      Withdraw money
    </button>

    <div
      class="grid items-center grid-cols-2 grid-rows-2 gap-4 mt-4 bg-blue-700 rounded-md p-7"
    >
      <div class="flex items-center">
        <svg
          class="w-4 h-4 mr-2 text-white"
          fill="currentColor"
          viewBox="0 0 64 64"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            <circle cx="32" cy="14" r="3"></circle>
            <path
              d="M4,25h56c1.794,0,3.368-1.194,3.852-2.922c0.484-1.728-0.242-3.566-1.775-4.497l-28-17C33.438,0.193,32.719,0,32,0
  s-1.438,0.193-2.076,0.581l-28,17c-1.533,0.931-2.26,2.77-1.775,4.497C0.632,23.806,2.206,25,4,25z M32,9c2.762,0,5,2.238,5,5
  s-2.238,5-5,5s-5-2.238-5-5S29.238,9,32,9z"
            ></path>
            <rect x="34" y="27" width="8" height="25"></rect>
            <rect x="46" y="27" width="8" height="25"></rect>
            <rect x="22" y="27" width="8" height="25"></rect>
            <rect x="10" y="27" width="8" height="25"></rect>
            <path
              d="M4,58h56c0-2.209-1.791-4-4-4H8C5.791,54,4,55.791,4,58z"
            ></path>
            <path
              d="M63.445,60H0.555C0.211,60.591,0,61.268,0,62v2h64v-2C64,61.268,63.789,60.591,63.445,60z"
            ></path>
          </g>
        </svg>
        <p class="text-sm text-white">Loan Number:</p>
      </div>
      <div class="text-right text-white">
        <div v-if="isLoading">Loading...</div>
        <div v-else-if="error" class="text-red-500">Error</div>
        <span v-else-if="userLoanStatus && userLoanStatus.accountNumber">{{ userLoanStatus?.accountNumber }}</span>
        <span v-else>No loan number</span>
      </div>

      <div class="flex items-center">
        <svg
          class="w-4 h-4 mr-2 text-white"
          fill="currentColor"
          viewBox="0 0 512 512"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            <path
              d="M341.942,356.432c-20.705-12.637-28.134-11.364-28.134-36.612c0-8.837,0-25.256,0-40.403
  c11.364-12.62,15.497-11.049,25.107-60.597c19.433,0,18.174-25.248,27.34-47.644c7.471-18.238,1.213-25.632-5.08-28.654
  c5.144-66.462,5.144-112.236-70.292-126.436c-27.344-23.437-68.605-15.48-88.158-11.569c-19.536,3.911-37.159,0-37.159,0
  l3.356,31.49c-28.608,34.332-14.302,80.106-18.908,106.916c-6.002,3.27-11.416,10.809-4.269,28.253
  c9.165,22.396,7.906,47.644,27.34,47.644c9.61,49.548,13.742,47.977,25.107,60.597c0,15.147,0,31.566,0,40.403
  c0,25.248-8.581,25.683-28.133,36.612c-47.14,26.349-108.569,41.658-119.575,124.01C48.468,495.504,134.952,511.948,256,512
  c121.048-0.052,207.528-16.496,205.517-31.558C450.511,398.09,388.519,384.847,341.942,356.432z"
            ></path>
          </g>
        </svg>
        <p class="text-sm text-white">Order Status:</p>
      </div>
      <div class="text-right">
        <div v-if="isLoading">Loading order status...</div>
        <div v-else-if="error" class="text-red-500">{{ error.message }}</div>
        <div v-else-if="userLoanStatus">
          <span
            v-if="userLoanStatus.status === '0'"
            class="px-2 py-1 text-xs font-semibold text-white bg-orange-500 rounded-full"
            >Under Review</span
          >
          <span
            v-else-if="userLoanStatus.status === '1'"
            class="px-2 py-1 text-xs font-semibold text-white bg-green-500 rounded-full"
            >Approved</span
          >
          <span
            v-else
            class="px-2 py-1 text-xs font-semibold text-white bg-red-500 rounded-full"
            >Not Complete</span
          >
        </div>
        <div v-else>
          No order status
        </div>
      </div>
    </div>
    <!-- we use class select-none and point-events-none -->
    <div class="w-full max-w-4xl mt-5 select-none">
      <img
        :src="require('@/assets/Bank_image.jpg')"
        alt="BPI"
        class="object-cover w-full max-w-4xl shadow-sm pointer-events-none select-none"
      />
    </div>

    <!-- <div class="grid justify-between grid-cols-4 gap-4 mt-5">
              <img src="bpi.png" alt="BPI" class="h-10 shadow-sm ">
              <img src="bdo.png" alt="BDO" class="h-10 shadow-sm ">
              <img src="metrobank.png" alt="Metrobank" class="h-10 shadow-sm">
              <img src="landbank.png" alt="Landbank" class="h-10 shadow-sm">
              <img src="security.png" alt="Security Bank" class="h-10 shadow-sm">
              <img src="unionbank.png" alt="Union Bank" class="h-10 shadow-sm">
              <img src="pnb.png" alt="PNB" class="h-10 shadow-sm">
              <img src="chinabank.png" alt="Chinabank" class="h-10 shadow-sm">
          </div> -->
  </div>
</template>

<script>
import NavbarComponent from "@/components/client/NavbarComponent.vue";
import MobileView from "./MobileView.vue";
import { ref, onMounted, computed } from "vue";
import LoanService from '@/services/loan.service'; // Import LoanService
import { useStore } from 'vuex'; // Import useStore

export default {
  components: {
    NavbarComponent,
    MobileView,
  },

  setup() {
    const store = useStore();
    const user = computed(() => store.state.auth.user);

    // Reactive variables for fetching user loan status
    const userLoanStatus = ref(null);
    const isLoading = ref(true);
    const error = ref(null);

    // Function to fetch user loan status
    const fetchUserLoanStatus = async () => {
      isLoading.value = true;
      error.value = null;
      try {
        if (user.value && user.value.id) {
          const status = await LoanService.getUserLoanStatus(user.value.id);
          userLoanStatus.value = status;
        } else {
          // Handle case where user is not logged in or ID is missing
          userLoanStatus.value = null;
        }
      } catch (err) {
        error.value = err;
        userLoanStatus.value = null;
      } finally {
        isLoading.value = false;
      }
    };

    onMounted(() => {
      fetchUserLoanStatus(); // Fetch loan status when component is mounted
    });

    return {
      userLoanStatus,
      isLoading,
      error,
    };
  },
};
</script>

<style scoped>
/* Add any custom styles here */
</style>
