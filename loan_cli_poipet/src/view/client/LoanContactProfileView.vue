<template>
  <div>
    <!-- Navbar -->
    <div class="hidden lg:block">
      <NavbarComponent />
    </div>
    <div class="bg-white lg:hidden">
      <MobileView />
    </div>

    <!-- Main Content -->
    <div class="w-full max-w-4xl px-2 py-10 m-auto mt-1 bg-white">
      <!-- Loading State -->
      <div v-if="isLoading" class="text-center">
        <p class="text-gray-600">Loading signature...</p>
      </div>

      <!-- Error Message -->
      <div v-if="message" class="mb-4 text-center text-red-600">
        {{ message }}
      </div>

      <!-- Loan Info -->
      <h2
        class="flex items-center justify-center gap-2 p-3 text-lg font-semibold text-center text-white bg-blue-600 rounded-md"
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
          class="lucide lucide-signature-icon lucide-signature"
        >
          <path
            d="m21 17-2.156-1.868A.5.5 0 0 0 18 15.5v.5a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1c0-2.545-3.991-3.97-8.5-4a1 1 0 0 0 0 5c4.153 0 4.745-11.295 5.708-13.5a2.5 2.5 0 1 1 3.31 3.284"
          />
          <path d="M3 21h18" />
        </svg>
        <span>Signature</span>
      </h2>
      <div
        class="w-full max-w-md p-6 mx-auto mt-8 mb-3 space-y-6 text-white rounded-md bg-gradient-to-r from-blue-500 to-indigo-600"
      >
        <h2 class="mb-3 text-lg font-bold">Loan details</h2>
        <div class="space-y-2">
          <div class="flex justify-between">
            <p class="text-white">Loan amount</p>
            <p class="font-medium">₱ {{ userDoc.amount || $props.data.amount || 0 }}</p>
          </div>
          <div class="flex justify-between">
            <p class="text-white">Loan term</p>
            <p class="font-medium">{{ userDoc.term || $props.data.term || 0 }} months</p>
          </div>
          <div class="flex justify-between">
            <p class="text-white">Contract</p>
            <p class="font-medium text-white">Contract details unavailable</p>
          </div>
        </div>
      </div>

      <!-- Signature Section -->
      <div class="max-w-md p-4 mx-auto mb-40 border rounded">
        <!-- Existing Signature -->
        <div v-if="userDoc.assigned_image">
          <label class="block mb-1 text-sm font-medium text-gray-700">Your Signature</label>
          <div
            class="flex justify-center px-6 pt-5 pb-6 mt-1 border-2 border-gray-300 border-dashed rounded-md"
          >
            <div class="space-y-1 text-center">
              <div class="flex justify-center">
                <img
                  :src="userDoc.assigned_image"
                  alt="User Signature"
                  class="object-contain h-48"
                  @error="handleImageError"
                />
              </div>
            </div>
          </div>
        </div>
        <!-- No Signature -->
        <div v-else>
          <label class="block mb-1 text-sm font-medium text-gray-700">Signature</label>
          <p class="mb-2 text-sm text-gray-600">No signature provided.</p>
        </div>
      </div>

      <!-- Success Message -->
      <div v-if="showSuccess" class="max-w-md mx-auto mt-6 text-center">
        <img
          :src="require('@/assets/success.webp')"
          alt="Success"
          class="mx-auto mb-4"
        />
        <h2 class="mb-2 text-xl font-bold text-green-600">✔ Congratulations</h2>
        <p class="text-gray-700">
          Your loan application was successful, please wait for approval.
        </p>
      </div>

      <!-- Bottom Bar: Contract Terminated -->
      <div
        v-if="signatureConfirmed && !showSuccess"
        class="fixed bottom-0 left-0 right-0 p-2 text-center text-white bg-gradient-to-r from-blue-500 to-indigo-600"
      >
        Contract terminated
      </div>
    </div>
  </div>
</template>

<script>
import NavbarComponent from "@/components/client/NavbarComponent.vue";
import MobileView from "./MobileView.vue";
import LoanService from "@/services/loan.service";
import UploadFilesService from "@/services/UploadFiles.service";

export default {
  components: {
    NavbarComponent,
    MobileView,
  },
  name: "LoanContractView",
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      showSuccess: false,
      isLoading: false,
      message: "",
      signatureConfirmed: false,
      userDoc: {
        id: null,
        amount: this.$props.data.amount || 10000,
        term: this.$props.data.term || 12,
        assigned_image: null,
        status: "pending",
      },
    };
  },

  async mounted() {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user || !user.id) {
      console.error("User not logged in or user ID not available.");
      this.message = "Please log in to view your documents.";
      return;
    }

    this.userDoc.id = user.id;
    await this.fetchUserData(user.id);
  },

  methods: {
    async fetchUserData(userId) {
      this.isLoading = true;
      this.message = "";

      try {
        // Fetch loan data
        const loanData = await LoanService.getUserLoanStatus(userId);
        if (loanData) {
          this.userDoc = {
            ...this.userDoc,
            amount: loanData.amount || this.$props.data.amount || 10000,
            term: loanData.term || this.$props.data.term || 12,
            status: loanData.status || "pending",
          };
        } else {
          console.log("No loan data found for user.");
          this.message = "No loan data found. Using default values.";
        }

        // Fetch signature file
        const filesResponse = await UploadFilesService.getFiles(userId);
        console.log("Fetched files:", filesResponse.data);

        if (filesResponse.data && filesResponse.data.length > 0) {
          const signatureFile = filesResponse.data.find(
            (file) => file.metadata && file.metadata.documentType === "signature"
          );
          if (signatureFile) {
            console.log("Signature file found:", signatureFile);
            this.userDoc = {
              ...this.userDoc,
              assigned_image: signatureFile.url,
            };
            this.signatureConfirmed = true;
            this.showSuccess = this.userDoc.status === "0";
          } else {
            console.log("No signature file found for user.");
          }
        } else {
          console.log("No files found for user.");
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
        // this.message = "Please try to request loan.";
      } finally {
        this.isLoading = false;
      }
    },

    handleImageError() {
      this.message = "Failed to load signature image.";
    },
  },

  computed: {
    baseUrl() {
      return "http://localhost:8080/api/";
    },
  },
};
</script>

<style scoped>
img {
  max-width: 100%;
  max-height: 100%;
}
</style>