<template>
  <div class="hidden lg:block">
    <NavbarComponent />
  </div>
  <div class="lg:hidden">
    <MobileView />
  </div>
  <div v-for="usDoc in userDoc" :key="usDoc.id">
    <form v-if="usDoc.amount === 0" @submit.prevent="submitLoan" v-motion-fade>
      <div class="w-full px-4 py-2 m-auto mt-2 bg-blue-700">
        <div class="max-w-4xl px-4 py-2 m-auto mt-2">
          <h2
            class="flex items-center p-3 text-lg font-semibold text-white rounded-md"
          >
            <svg
              class="w-5 h-5 mr-2"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 2L16 6L12 10"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M5 12H16"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12 14L16 18L12 22"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            Enter the amount you need to borrow
          </h2>

          <input
            type="number"
            v-model="loanAmount"
            class="w-full p-3 text-gray-700 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-400"
            placeholder="Enter Amount money for borrow"
            min="150000"
            max="60000000"
            step="1000"
          />

          <div class="grid grid-cols-2 gap-2">
            <h2 class="p-3 text-lg font-semibold text-white">From: 150,000₱</h2>
            <h2 class="p-3 font-semibold text-right text-white">
              Arrive: 60,000,000₱
            </h2>
          </div>
        </div>

        <!-- Loan Period Section -->
        <div class="max-w-4xl px-4 py-1 m-auto">
          <h2
            class="flex items-center p-3 m-auto text-lg font-semibold text-white"
          >
            <svg
              class="w-5 h-5 mr-2"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 6V12L15 15"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <circle
                cx="12"
                cy="12"
                r="9"
                stroke="currentColor"
                stroke-width="2"
              />
            </svg>
            Loan Period
          </h2>
        </div>

        <!-- Loan Period Buttons -->
        <div
          class="grid w-full max-w-4xl grid-cols-3 gap-4 p-2 px-4 m-auto mt-1 bg-blue-700 rounded-md"
        >
          <button type="button" @click="setLoanTerm(6)" :class="buttonClass(6)">
            6 months
          </button>
          <button
            type="button"
            @click="setLoanTerm(12)"
            :class="buttonClass(12)"
          >
            12 months
          </button>
          <button
            type="button"
            @click="setLoanTerm(24)"
            :class="buttonClass(24)"
          >
            24 months
          </button>
          <button
            type="button"
            @click="setLoanTerm(36)"
            :class="buttonClass(36)"
          >
            36 months
          </button>
          <button
            type="button"
            @click="setLoanTerm(48)"
            :class="buttonClass(48)"
          >
            48 months
          </button>
          <button
            type="button"
            @click="setLoanTerm(56)"
            :class="buttonClass(56)"
          >
            56 months
          </button>
        </div>
      </div>

      <!-- Loan Information -->
      <div class="w-full max-w-4xl p-4 m-auto mt-4 bg-blue-700 rounded-lg">
        <h2
          class="flex items-center justify-center p-3 text-4xl font-semibold text-white"
        >
          Loan Information
        </h2>
        <div class="grid grid-cols-2 gap-4 p-3 mt-1">
          <span class="text-xl text-gray-300">Amount of money</span>
          <span class="text-right text-white">{{ formattedAmount }}₱</span>

          <span class="text-xl text-gray-300">Monthly interest rate</span>
          <span class="font-semibold text-right text-gray-300"
            >{{ interestRate }}%</span
          >

          <span class="text-xl text-gray-300">Loan term</span>
          <span class="text-right text-gray-300">{{ loanTerm }} months</span>

          <span class="text-xl text-gray-300">Monthly Payments</span>
          <span class="font-semibold text-right text-gray-300"
            >{{ monthlyPayment }}₱</span
          >

          <span class="text-xl text-gray-300">Total Interest</span>
          <span class="text-right text-gray-300">{{ totalInterest }}₱</span>

          <span class="text-xl text-gray-300">Total Principal & Interest</span>
          <span class="font-semibold text-right text-gray-300"
            >{{ totalPrincipalAndInterest }}₱</span
          >

          <span class="text-xl text-gray-300">Disbursement date</span>
          <span class="font-semibold text-right text-gray-300">00/00/0000</span>
        </div>
      </div>

      <!-- Confirm Button -->
      <div class="flex justify-center col-span-2 mt-6">
        <button
          v-if="!isLoanding"
          type="submit"
          :disabled="!isLoanValid || !agreedToTerms"
          @click.prevent="submitLoan"
          class="flex items-center justify-center w-full max-w-sm gap-3 py-3 text-blue-700 transition border border-blue-600 rounded-full shadow-md md:text-xl hover:bg-blue-200 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <span>Loan Confirm</span>
        </button>
        <button
          v-else
          class="flex items-center justify-center w-full max-w-sm gap-3 py-3 text-blue-700 transition border border-blue-600 rounded-full shadow-md md:text-xl hover:bg-blue-200 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <span>Waiting...</span>
        </button>
      </div>

      <!-- Agreement Modal -->
      <div
        v-if="showModal"
        class="fixed inset-0 z-50 flex items-center justify-center bg-gray-600 bg-opacity-50"
      >
        <div class="max-w-sm p-6 bg-white rounded-md shadow-lg">
          <div class="flex justify-center mb-4">
            <svg
              class="w-10 h-10 text-orange-400"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 2L16 6L12 10"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M5 12H16"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12 14L16 18L12 22"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <h2 class="mb-4 text-xl font-semibold text-center">Confirm!</h2>
          <p class="mb-6 text-center">
            Agree to borrow {{ formattedAmount }}₱ term {{ loanTerm }} months?
          </p>
          <div class="flex justify-between">
            <button
              @click="showModal = false"
              class="px-4 py-2 text-white bg-red-500 rounded-md"
            >
              Cancel
            </button>
            <button
              @click="agreeLoan"
              class="px-4 py-2 text-white bg-green-500 rounded-md"
            >
              Agree
            </button>
          </div>
        </div>
      </div>

      <!-- Agreement Checkbox -->
      <div
        class="grid justify-center col-span-2 mt-6 mb-40 text-center lg:mb-8"
      >
        <label class="flex items-center justify-center p-2">
          <input type="checkbox" v-model="agreedToTerms" class="mr-2" />
          Agree (User Service Agreement & Policy conditions)
        </label>
        <span class="p-2"
          >Loans are risky, borrowing needs to be cautious.</span
        >
        <span class="p-2">Consume rationally and avoid overdue payments.</span>
      </div>
    </form>

    <div v-else v-motion-fade>
      <div class="w-full px-4 py-2 m-auto mt-2 bg-blue-700">
        <div class="max-w-4xl px-4 py-2 m-auto mt-2">
          <h2
            class="flex items-center p-3 text-lg font-semibold text-white rounded-md"
          >
            <svg
              class="w-5 h-5 mr-2"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 2L16 6L12 10"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M5 12H16"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12 14L16 18L12 22"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            Enter the amount you need to borrow
          </h2>

          <div
            class="w-full p-3 text-gray-700 bg-gray-200 border border-gray-50 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-400"
          >
            {{ usDoc?.amount }}
          </div>

          <div class="grid grid-cols-2 gap-2">
            <h2 class="p-3 text-lg font-semibold text-white">From: 150,000₱</h2>
            <h2 class="p-3 font-semibold text-right text-white">
              Arrive: 60,000,000₱
            </h2>
          </div>
        </div>

        <!-- Loan Period Section -->
        <div class="max-w-4xl px-4 py-1 m-auto">
          <h2
            class="flex items-center p-3 m-auto text-lg font-semibold text-white"
          >
            <svg
              class="w-5 h-5 mr-2"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 6V12L15 15"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <circle
                cx="12"
                cy="12"
                r="9"
                stroke="currentColor"
                stroke-width="2"
              />
            </svg>
            Loan Period
          </h2>
        </div>

        <!-- Loan Period Buttons -->
        <div
          class="grid w-full max-w-4xl grid-cols-3 gap-4 p-2 px-4 m-auto mt-1 bg-blue-700 rounded-md"
        >
          <button
            v-if="usDoc.term === 6"
            type="button"
            class="flex items-center justify-center p-3 px-4 py-2 font-medium text-white bg-blue-500 rounded-md shadow-md"
          >
            6 months
          </button>
          <button
            v-else
            type="button"
            class="flex items-center justify-center p-3 px-4 py-2 font-medium text-gray-700 bg-white rounded-md shadow-md hover:bg-gray-300"
          >
            6 months
          </button>

          <button
            v-if="usDoc.term === 12"
            type="button"
            class="flex items-center justify-center p-3 px-4 py-2 font-medium text-white bg-blue-500 rounded-md shadow-md"
          >
            12 months
          </button>
          <button
            v-else
            type="button"
            class="flex items-center justify-center p-3 px-4 py-2 font-medium text-gray-700 bg-white rounded-md shadow-md hover:bg-gray-300"
          >
            12 months
          </button>

          <button
            v-if="usDoc.term === 24"
            type="button"
            class="flex items-center justify-center p-3 px-4 py-2 font-medium text-white bg-blue-500 rounded-md shadow-md"
          >
            24 months
          </button>
          <button
            v-else
            type="button"
            class="flex items-center justify-center p-3 px-4 py-2 font-medium text-gray-700 bg-white rounded-md shadow-md hover:bg-gray-300"
          >
            24 months
          </button>

          <button
            v-if="usDoc.term === 36"
            type="button"
            class="flex items-center justify-center p-3 px-4 py-2 font-medium text-white bg-blue-500 rounded-md shadow-md"
          >
            36 months
          </button>
          <button
            v-else
            type="button"
            class="flex items-center justify-center p-3 px-4 py-2 font-medium text-gray-700 bg-white rounded-md shadow-md hover:bg-gray-300"
          >
            36 months
          </button>

          <button
            v-if="usDoc.term === 48"
            type="button"
            class="flex items-center justify-center p-3 px-4 py-2 font-medium text-white bg-blue-500 rounded-md shadow-md"
          >
            48 months
          </button>
          <button
            v-else
            type="button"
            class="flex items-center justify-center p-3 px-4 py-2 font-medium text-gray-700 bg-white rounded-md shadow-md hover:bg-gray-300"
          >
            48 months
          </button>

          <button
            v-if="usDoc.term === 56"
            type="button"
            class="flex items-center justify-center p-3 px-4 py-2 font-medium text-white bg-blue-500 rounded-md shadow-md"
          >
            56 months
          </button>
          <button
            v-else
            type="button"
            class="flex items-center justify-center p-3 px-4 py-2 font-medium text-gray-700 bg-white rounded-md shadow-md hover:bg-gray-300"
          >
            56 months
          </button>
        </div>
      </div>

      <!-- Loan Information -->
      <div class="w-full max-w-4xl p-4 m-auto mt-4 bg-blue-700 rounded-lg">
        <h2
          class="flex items-center justify-center p-3 text-4xl font-semibold text-white"
        >
          Loan Information
        </h2>
        <div class="grid grid-cols-2 gap-4 p-3 mt-1">
          <span class="text-xl text-gray-300">Amount of money</span>
          <span class="text-right text-white"
            ><b>{{ usDoc?.amount }}₱</b></span
          >

          <span class="text-xl text-gray-300">Monthly interest rate</span>
          <span class="font-semibold text-right text-gray-300"
            >{{ interestRate }}%</span
          >

          <span class="text-xl text-gray-300">Loan term</span>
          <span class="text-right text-gray-300">{{ usDoc?.term }} months</span>

          <span class="text-xl text-gray-300">Monthly Payments</span>
          <span class="font-semibold text-right text-gray-300"
            >{{ usDoc?.monthlyPayment }}₱</span
          >

          <span class="text-xl text-gray-300">Total Interest</span>
          <span class="text-right text-gray-300"
            >{{ usDoc?.totalInterest }}₱</span
          >

          <span class="text-xl text-gray-300">Total Principal & Interest</span>
          <span class="font-semibold text-right text-gray-300"
            >{{ usDoc?.totalPrincipalAndInterest }}₱</span
          >

          <span class="text-xl text-gray-300">Disbursement date</span>
          <span class="font-semibold text-right text-gray-300">{{
            formatDate(usDoc?.createdAt)
          }}</span>
        </div>
      </div>

      <!-- Confirm Button -->
      <div class="flex justify-center col-span-2 mt-6 mb-40">
        <button
          v-if="!isLoanding"
          type="submit"
          @click.prevent="handleNextLoan"
          class="flex items-center justify-center w-full max-w-sm gap-3 py-3 text-blue-700 transition border border-blue-600 rounded-full shadow-md md:text-xl hover:bg-blue-200 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <span>Next</span>
        </button>
        <button
          v-else
          class="flex items-center justify-center w-full max-w-sm gap-3 py-3 text-blue-700 transition border border-blue-600 rounded-full shadow-md md:text-xl hover:bg-blue-200 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <span>Waiting...</span>
        </button>
      </div>

      <!-- Agreement Modal -->
      <div
        v-if="showModal"
        class="fixed inset-0 z-50 flex items-center justify-center bg-gray-600 bg-opacity-50"
      >
        <div class="max-w-sm p-6 bg-white rounded-md shadow-lg">
          <div class="flex justify-center mb-4">
            <svg
              class="w-10 h-10 text-orange-400"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 2L16 6L12 10"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M5 12H16"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12 14L16 18L12 22"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <h2 class="mb-4 text-xl font-semibold text-center">Confirm!</h2>
          <p class="mb-6 text-center">
            Agree to borrow {{ formattedAmount }}₱ term {{ loanTerm }} months?
          </p>
          <div class="flex justify-between">
            <button
              @click="showModal = false"
              class="px-4 py-2 text-white bg-red-500 rounded-md"
            >
              Cancel
            </button>
            <button
              @click="handleNextLoan"
              class="px-4 py-2 text-white bg-green-500 rounded-md"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed, onMounted } from "vue";
import NavbarComponent from "@/components/client/NavbarComponent.vue";
import MobileView from "./MobileView.vue";
import { useRouter } from "vue-router";
import LoanService from "@/services/loan.service"; // Import the loan service
import AuthService from "@/services/auth.service"; // Import AuthService

// Remove fake data storage and fake Firebase functions
// const fakeDatabase = {
//   customers: [
//     {
//       id: "user123",
//       amount: 0,
//       term: 0,
//       interestRate: 0.5,
//       monthlyPayment: "0",
//       totalInterest: "0",
//       totalPrincipalAndInterest: "0",
//       createdAt: new Date().toISOString(),
//     },
//   ],
// };

// const fakeGetUser = () => ({
//   value: { uid: "user123" },
// });

// const fakeUpdateDocs = async (userId, data) => {
//   const customer = fakeDatabase.customers.find((c) => c.id === userId);
//   if (customer) {
//     Object.assign(customer, data);
//   } else {
//     fakeDatabase.customers.push({ id: userId, ...data });
//   }
//   return true;
// };

export default {
  components: {
    NavbarComponent,
    MobileView,
  },
  setup() {
    const loanAmount = ref(0);
    const interestRate = ref(0.5); // Assuming interest rate is fixed or fetched
    const loanTerm = ref(0);
    const showModal = ref(false);
    const agreedToTerms = ref(false);
    const isLoanding = ref(false);
    const userDoc = ref(null); // Initialize userDoc as null or empty object
    const router = useRouter();

    // Fetch user loan data on component mount
    onMounted(async () => {
      // Get the current user's ID from AuthService
      const user = AuthService.getCurrentUser();
      if (!user || !user.id) {
        console.error("User not logged in.");
        // Redirect to login or handle appropriately
        router.push({ name: "login" }); // Example: redirect to login
        return;
      }
      const userId = user.id;

      try {
        // Use the new service method to fetch user's loan data
        const data = await LoanService.getUserLoanStatus(userId);
        if (data) {
          userDoc.value = [data]; // Assuming the service returns a single user object or null
        } else {
          userDoc.value = [{ amount: 0, term: 0 }]; // Initialize if no loan data exists
        }
      } catch (error) {
        console.error("Error fetching user loan status:", error);
        userDoc.value = [{ amount: 0, term: 0 }]; // Initialize on error
        // Handle error appropriately, e.g., show an error message
      }
    });

    const formattedAmount = computed(() => {
      return loanAmount.value.toLocaleString();
    });

    const monthlyPayment = computed(() => {
      if (!loanTerm.value || !loanAmount.value) return "0";
      const principal = loanAmount.value;
      const monthlyRate = interestRate.value / 100 / 12;
      const termMonths = loanTerm.value;

      // Corrected monthly payment calculation
      if (monthlyRate === 0) {
        return (principal / termMonths).toFixed(2);
      } else {
        const payment =
          (principal * (monthlyRate * Math.pow(1 + monthlyRate, termMonths))) /
          (Math.pow(1 + monthlyRate, termMonths) - 1);
        return payment.toFixed(2);
      }
    });

    const totalInterest = computed(() => {
      if (!loanTerm.value || !loanAmount.value) return "0";
      const totalPayment = parseFloat(monthlyPayment.value) * loanTerm.value;
      const interest = totalPayment - loanAmount.value;
      return interest.toFixed(2);
    });

    const totalPrincipalAndInterest = computed(() => {
      if (!loanTerm.value || !loanAmount.value) return "0";
      const total = parseFloat(monthlyPayment.value) * loanTerm.value;
      return total.toFixed(2);
    });

    const isLoanValid = computed(() => {
      return (
        loanAmount.value >= 150000 &&
        loanAmount.value <= 60000000 &&
        loanTerm.value > 0
      );
    });

    const setLoanTerm = (term) => {
      loanTerm.value = term;
    };

    const buttonClass = (term) => {
      return [
        "flex items-center justify-center p-3 px-4 py-2 font-medium rounded-md shadow-md",
        loanTerm.value === term
          ? "bg-blue-500 text-white"
          : "bg-white text-gray-700 hover:bg-gray-300",
      ];
    };

    const submitLoan = () => {
      if (isLoanValid.value && agreedToTerms.value) {
        showModal.value = true;
      }
    };

    const agreeLoan = async () => {
      // Make function async
      showModal.value = false;
      isLoanding.value = true;

      // Get the current user's ID from AuthService
      const user = AuthService.getCurrentUser();
      if (!user || !user.id) {
        console.error("User not logged in.");
        isLoanding.value = false;
        router.push({ name: "login" }); // Example: redirect to login
        return;
      }
      const userId = user.id;

      const loanData = {
        amount: loanAmount.value,
        term: loanTerm.value,
        interestRate: interestRate.value,
        monthlyPayment: monthlyPayment.value,
        totalInterest: totalInterest.value,
        totalPrincipalAndInterest: totalPrincipalAndInterest.value,
        userId: userId, // Use the actual user ID
      };

      try {
        // Use the service method to create the loan
        const response = await LoanService.create(loanData);
        console.log("Loan submitted successfully:", response);

        // Assuming successful submission means the user now has a loan
        // Update userDoc locally or refetch to reflect the new loan status
        // Refetching is safer:
        const updatedUserData = await LoanService.getUserLoanStatus(userId); // Use the correct method name
        if (updatedUserData) {
          userDoc.value = [updatedUserData];
        } else {
          // Handle case where fetching after creation still returns no loan (unexpected)
          console.warn("Loan created but could not fetch updated status.");
          userDoc.value = [{ amount: 0, term: 0 }]; // Reset or show error state
        }

        isLoanding.value = false;
        // Optionally navigate to a success page or update UI
        // router.push({ name: 'loan-success' }); // Example navigation
      } catch (error) {
        console.error("Error submitting loan:", error);
        isLoanding.value = false;
        // Handle error appropriately, e.g., show an error message to the user
        alert("Failed to submit loan. Please try again.");
      }
    };

    const handleNextLoan = () => {
      // Assuming 'next' means navigating to the loan contract view
      // You might need to pass the loan ID or other data if required by LoancontractView
      router.push({ name: "identification" });
    };

    const formatDate = (dateString) => {
      if (!dateString) return "N/A";
      const options = { year: "numeric", month: "2-digit", day: "2-digit" };
      return new Date(dateString).toLocaleDateString(undefined, options);
    };

    return {
      loanAmount,
      interestRate,
      loanTerm,
      showModal,
      agreedToTerms,
      isLoanding,
      userDoc,
      formattedAmount,
      monthlyPayment,
      totalInterest,
      totalPrincipalAndInterest,
      isLoanValid,
      setLoanTerm,
      buttonClass,
      submitLoan,
      agreeLoan,
      handleNextLoan,
      formatDate,
    };
  },
};
</script>

<style scoped>
.text-right {
  text-align: right;
}

.text-white {
  color: white;
}
</style>