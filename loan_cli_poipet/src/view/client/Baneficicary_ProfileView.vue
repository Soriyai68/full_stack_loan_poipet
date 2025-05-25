<template>
  <div class="hidden lg:block">
    <NavbarComponent />
  </div>
  <div class="lg:hidden">
    <MobileView />
  </div>
  <div
    class="w-full max-w-4xl px-1 py-10 m-auto mt-1 bg-white mb-9"
    v-motion-fade
  >
    <h2
      class="flex items-center justify-center gap-2 p-3 text-lg font-semibold text-center text-white bg-blue-800 rounded-md"
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
        class="lucide lucide-credit-card-icon lucide-credit-card"
      >
        <rect width="20" height="14" x="2" y="5" rx="2" />
        <line x1="2" x2="22" y1="10" y2="10" />
      </svg>
      <span>Bank Account</span>
    </h2>
    <div
      v-if="userDoc"
      class="flex items-center justify-between p-4 mt-4 rounded-lg shadow"
    >
      <!-- Form for entering bank details (shown only if no bank data exists) -->
      <form
        v-if="!userDoc.bankName || !userDoc.accountNumber"
        @submit.prevent="handleSubmitBeneficiary"
        class="w-full p-8 space-y-6 bg-white rounded-xl"
      >
        <h2 class="mb-6 text-2xl font-bold text-center">
          Beneficiary Bank Information
        </h2>
        <div class="relative">
          <label class="flex items-center gap-2 mb-1 font-medium">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-4 h-4 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 10l9-6 9 6v2H3v-2zM4 12h16v8H4v-8z"
              />
            </svg>
            Please enter your bank name
          </label>
          <input
            type="text"
            required
            v-model="bankName"
            placeholder="Please fill in the information"
            class="w-full p-2 pl-10 border rounded-lg"
            disabled
          />
        </div>
        <div class="relative">
          <label class="flex items-center gap-2 mb-1 font-medium">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-4 h-4 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 10h16M4 14h6"
              />
            </svg>
            Please enter your bank number
          </label>
          <input
            type="text"
            required
            v-model="accountNumber"
            placeholder="Please fill in the information"
            class="w-full p-2 pl-10 border rounded-lg"
            disabled
          />
        </div>
      </form>

      <!-- Display existing bank details (shown if bank data exists) -->
      <div v-else class="w-full p-8 space-y-6 bg-white rounded-xl">
        <h2 class="mb-6 text-2xl font-bold text-center">
          Beneficiary Bank Information
        </h2>
        <div class="grid grid-cols-1 gap-4">
          <div class="relative">
            <label class="flex items-center gap-2 mb-1 font-medium">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-4 h-4 text-gray-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 10l9-6 9 6v2H3v-2zM4 12h16v8H4v-8z"
                />
              </svg>
              Bank Name
            </label>
            <div class="w-full p-2 pl-10 border rounded-lg bg-gray-50">
              {{ userDoc.bankName }}
            </div>
          </div>
          <div class="relative">
            <label class="flex items-center gap-2 mb-1 font-medium">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-4 h-4 text-gray-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 10h16M4 14h6"
                />
              </svg>
              Bank Account Number
            </label>
            <div class="w-full p-2 pl-10 border rounded-lg bg-gray-50">
              {{ userDoc.accountNumber }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavbarComponent from "@/components/client/NavbarComponent.vue";
import MobileView from "./MobileView.vue";
import { useRouter } from "vue-router";
import { ref, onMounted } from "vue"; // Removed 'watch'
import AuthService from "@/services/auth.service"; // Import AuthService
import BeneficiaryService from "@/services/beneficiary.service"; // Import BeneficiaryService

// Removed fake data store and fake Firebase functions
// const fakeDataStore = {
//   customers: {},
// };

// const fakeGetUser = () => ({
//   user: ref({ uid: "mock-user-id-123" }), // Mock user with a fixed ID
// });

// const fakeGetCollectionQueryTerm = async (collection, query) => {
//   const userId = query[1]; // Extract userId from query (mock where clause)
//   const userData = fakeDataStore[collection][userId] || {};
//   return {
//     documents: ref([userData]), // Return as a ref to mimic Vue reactivity
//   };
// };

// const fakeUpdateDocs = async (collection, userId, data) => {
//   if (!fakeDataStore[collection]) {
//     fakeDataStore[collection] = {};
//   }
//   fakeDataStore[collection][userId] = { ...fakeDataStore[collection][userId], ...data };
//   return Promise.resolve(); // Simulate successful update
// };

export default {
  components: {
    NavbarComponent,
    MobileView,
  },
  name: "BeneficiaryView",
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const userDoc = ref(null); // Initialize as null
    const bankName = ref("");
    const accountNumber = ref("");

    const router = useRouter();
    console.log("Loan Information Data V2", props.data);

    // Fetch user beneficiary data on component mount
    onMounted(async () => {
      const user = AuthService.getCurrentUser();
      if (user && user.id) {
        try {
          const beneficiary = await BeneficiaryService.getUserBeneficiary(
            user.id
          );
          userDoc.value = beneficiary; // Assign the fetched beneficiary data
        } catch (error) {
          console.error("Error fetching user beneficiary:", error);
          // Handle error, maybe set userDoc to an empty object or show a message
          userDoc.value = {};
        }
      } else {
        console.log("User not logged in or user ID not available.");
        userDoc.value = {}; // Set to empty object if user is not logged in
      }
    });

    const handleSubmitBeneficiary = async () => {
      const user = AuthService.getCurrentUser();
      if (!user || !user.id) {
        console.error("User not logged in or user ID not available.");
        return; // Exit if user is not logged in
      }

      const data = {
        bankName: bankName.value,
        accountNumber: accountNumber.value,
        assigned_image: "", // Assuming this field is still needed
        userId: user.id, // Include userId in the data
      };

      try {
        // Check if userDoc exists and has an id to determine if it's an update or create
        if (userDoc.value && userDoc.value.id) {
          await BeneficiaryService.update(userDoc.value.id, data);
          console.log("Beneficiary updated successfully!");
        } else {
          await BeneficiaryService.create(data);
          console.log("Beneficiary created successfully!");
        }

        // After successful submission, navigate to the next page
        router.push({
          path: "/loancontect",
          query: {
            data: JSON.stringify(props.data),
          },
        });
      } catch (error) {
        console.error("Error submitting beneficiary data:", error);
        // Handle error, maybe show an alert to the user
      }
    };

    const handleNextToAssign = () => {
      router.push({
        path: "/loancontect",
        query: {
          data: JSON.stringify(props.data),
        },
      });
    };

    return {
      handleSubmitBeneficiary,
      userDoc,
      bankName,
      accountNumber,
      handleNextToAssign,
    };
  },
};
</script>

<style></style>