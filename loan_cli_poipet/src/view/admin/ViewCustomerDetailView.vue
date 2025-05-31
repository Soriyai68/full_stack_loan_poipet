<template>
  <div
    v-for="usDoc in userDoc"
    :key="usDoc"
    class="m-auto space-y-8 divide-y divide-gray-200"
  >
    <div class="space-y-8 divide-y divide-gray-200">
      <div class="p-5 bg-white border-t-2 rounded-md border-t-blue-500">
        <div class="flex items-center gap-2">
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
            class="lucide lucide-user-round-search-icon lucide-user-round-search"
          >
            <circle cx="10" cy="8" r="5" />
            <path d="M2 21a8 8 0 0 1 10.434-7.62" />
            <circle cx="18" cy="18" r="3" />
            <path d="m22 22-1.9-1.9" />
          </svg>
          <h3 class="text-2xl font-medium leading-6 text-gray-900">Profile</h3>
        </div>
      </div>

      <div class="p-5 pt-8 border-t-2 rounded-md bg-gray-50">
        <div>
          <h3 class="text-lg font-medium leading-6 text-gray-900">
            Personal Information
          </h3>
          <p class="mt-1 text-sm text-gray-500">
            Use a permanent address where you can receive mail.
          </p>
        </div>
        <div class="grid grid-cols-1 mt-6 gap-y-6 gap-x-4 sm:grid-cols-6">
          <div class="sm:col-span-2">
            <label class="block text-sm font-medium text-gray-700">
              Actual Name
            </label>
            <div class="mt-1">
              <div
                autocomplete="address-level2"
                class="block w-full p-3 bg-white border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              >
                {{ usDoc?.name }}
              </div>
            </div>
          </div>

          <div class="sm:col-span-2">
            <label for="region" class="block text-sm font-medium text-gray-700">
              Indentification Card No
            </label>
            <div class="mt-1">
              <div
                autocomplete="address-level2"
                class="block w-full p-3 bg-white border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              >
                {{ usDoc?.idNumber }}
              </div>
            </div>
          </div>

          <div class="sm:col-span-2">
            <label
              for="postal-code"
              class="block text-sm font-medium text-gray-700"
            >
              Gender
            </label>
            <div class="mt-1">
              <div
                autocomplete="address-level2"
                class="block w-full p-3 bg-white border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              >
                {{ usDoc?.gender }}
              </div>
            </div>
          </div>

          <div class="sm:col-span-2">
            <label for="city" class="block text-sm font-medium text-gray-700">
              Current Job
            </label>
            <div class="mt-1">
              <div
                autocomplete="address-level2"
                class="block w-full p-3 bg-white border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              >
                {{ usDoc?.job }}
              </div>
            </div>
          </div>

          <div class="sm:col-span-2">
            <label for="region" class="block text-sm font-medium text-gray-700">
              Stable Income
            </label>
            <div class="mt-1">
              <div
                autocomplete="address-level2"
                class="block w-full p-3 bg-white border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              >
                {{ usDoc?.income }}
              </div>
            </div>
          </div>

          <div class="sm:col-span-2">
            <label
              for="postal-code"
              class="block text-sm font-medium text-gray-700"
            >
              Loan Purpose
            </label>
            <div class="mt-1">
              <div
                autocomplete="address-level2"
                class="block w-full p-3 bg-white border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              >
                {{ usDoc?.loanPurpose }}
              </div>
            </div>
          </div>

          <div class="sm:col-span-2">
            <label for="region" class="block text-sm font-medium text-gray-700">
              Current Address
            </label>
            <div class="mt-1">
              <div
                autocomplete="address-level2"
                class="block w-full p-3 bg-white border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              >
                {{ usDoc?.address }}
              </div>
            </div>
          </div>

          <div class="sm:col-span-2">
            <label
              for="postal-code"
              class="block text-sm font-medium text-gray-700"
            >
              Name of Relative
            </label>
            <div class="mt-1">
              <div
                autocomplete="address-level2"
                class="block w-full p-3 bg-white border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              >
                {{ usDoc?.relativeName }}
              </div>
            </div>
          </div>

          <div class="sm:col-span-2">
            <label for="region" class="block text-sm font-medium text-gray-700">
              Contact
            </label>
            <div class="mt-1">
              <div
                autocomplete="address-level2"
                class="block w-full p-3 bg-white border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              >
                {{ usDoc?.contact }}
              </div>
            </div>
          </div>

          <div class="sm:col-span-2">
            <label
              for="postal-code"
              class="block text-sm font-medium text-gray-700"
            >
              Relative's Phone Number
            </label>
            <div class="mt-1">
              <div
                autocomplete="address-level2"
                class="block w-full p-3 bg-white border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              >
                {{ usDoc?.relativePhone }}
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Indentification -->
      <div class="p-5 pt-8 border-t-2 rounded-md bg-gray-50">
        <div>
          <h3 class="text-lg font-medium leading-6 text-gray-900">
            KYC Indentification
          </h3>
          <p class="mt-1 text-sm text-gray-500">
            Check about customer's indentification make sure correct.
          </p>
        </div>
        <div class="mt-6">
          <fieldset>
            <legend class="text-base font-medium text-gray-900">
              Front-Image
            </legend>
            <div class="mt-4 space-y-4">
              <div class="relative flex items-start">
                <div class="ml-3 text-sm">
                  <img
                    :src="usDoc?.front_image"
                    class="object-contain w-full p-2 bg-white border h-52"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </fieldset>
          <fieldset class="mt-6">
            <div>
              <legend class="text-base font-medium text-gray-900">
                Back-Image
              </legend>
            </div>
            <div class="mt-4 space-y-4">
              <div class="relative flex items-start">
                <div class="ml-3 text-sm">
                  <img
                    :src="usDoc?.back_image"
                    class="object-contain w-full p-2 bg-white border h-52"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </fieldset>
          <fieldset class="mt-6">
            <div>
              <legend class="text-base font-medium text-gray-900">
                Selfies-Image
              </legend>
            </div>
            <div class="mt-4 space-y-4">
              <div class="relative flex items-start">
                <div class="ml-3 text-sm">
                  <img
                    :src="usDoc?.selfie_image"
                    class="object-contain w-full p-2 bg-white border h-52"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </fieldset>
        </div>
      </div>

      <!-- Baneficicary Bank information -->
      <div class="p-5 pt-8 border-t-2 rounded-md bg-gray-50">
        <div>
          <h3 class="text-lg font-medium leading-6 text-gray-900">
            Baneficicary Bank Information
          </h3>
        </div>
        <div class="mt-6">
          <fieldset class="mt-6">
            <div>
              <legend class="text-base font-medium text-gray-900">
                Bank Name
              </legend>
            </div>
            <div class="mt-4 space-y-4">
              <div class="w-full">
                <div class="mt-1">
                  <div
                    autocomplete="address-level2"
                    class="block w-full p-3 bg-white border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  >
                    {{ usDoc?.bankName }}
                  </div>
                </div>
              </div>
            </div>
          </fieldset>
          <fieldset class="mt-6">
            <div>
              <legend class="text-base font-medium text-gray-900">
                Bank Number
              </legend>
            </div>
            <div class="mt-4 space-y-4">
              <div class="w-full">
                <div class="mt-1">
                  <div
                    autocomplete="address-level2"
                    class="block w-full p-3 bg-white border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  >
                    {{ usDoc?.accountNumber }}
                  </div>
                </div>
              </div>
            </div>
          </fieldset>
        </div>
      </div>

      <!-- Signature -->
      <div class="p-5 pt-8 border-t-2 rounded-md bg-gray-50">
        <div>
          <h3 class="text-lg font-medium leading-6 text-gray-900">Signature</h3>
        </div>
        <div class="mt-6">
          <fieldset class="mt-6">
            <div>
              <legend class="text-base font-medium text-gray-900">
                Customer's Signature
              </legend>
            </div>
            <div class="mt-4 space-y-4">
              <div class="ml-3 text-sm">
                <img
                  :src="usDoc?.assigned_image"
                  class="object-contain p-2 bg-white border rounded-md h-52 w-52"
                  alt=""
                />
              </div>
            </div>
          </fieldset>
        </div>
      </div>

      <!-- Loan Details -->
      <div class="p-5 pt-8 border-t-2 rounded-md bg-gray-50">
        <div>
          <h3 class="text-2xl font-medium leading-6 text-gray-900">
            Loan Details
          </h3>
        </div>
        <div
          v-if="loanDetails"
          class="p-4 mt-6 text-white bg-blue-600 rounded-md shadow-xl"
        >
          <div class="space-y-3">
            <h1 class="flex justify-between font-mono text-xl">
              Loan Amount:
              <span
                ><b>₱ {{ loanDetails?.amount }}</b></span
              >
            </h1>
            <h1 class="flex justify-between font-mono text-xl">
              Loan Tearm:
              <span
                ><b>{{ loanDetails?.term }} Months</b></span
              >
            </h1>
            <h1 class="flex justify-between font-mono text-xl">
              Montly Payments:
              <span
                ><b>₱ {{ loanDetails?.monthlyPayment }}</b></span
              >
            </h1>
            <h1 class="flex justify-between font-mono text-xl">
              Interest:
              <span
                ><b>₱ {{ loanDetails?.totalInterest }}</b></span
              >
            </h1>
            <h1 class="flex justify-between font-mono text-xl">
              Loan Total & Interest:
              <span
                ><b>₱ {{ loanDetails?.totalPrincipalAndInterest }}</b></span
              >
            </h1>
            <h1 class="flex justify-between font-mono text-xl">
              Status:
              <span
                v-if="customerStatus === '0'"
                class="p-2 font-mono text-sm bg-orange-500 rounded-full"
              >
                <p>Under Review</p>
              </span>
              <span
                v-else-if="customerStatus === '1'"
                class="p-2 font-mono text-sm bg-green-500 rounded-full"
              >
                <p>Approved</p>
              </span>
              <span
                v-else
                class="p-2 font-mono text-sm bg-red-500 rounded-full"
              >
                <p>Not Completed</p>
              </span>
            </h1>
          </div>
        </div>
        <div
          v-else
          class="p-4 mt-6 text-gray-700 bg-gray-200 rounded-md shadow-xl"
        >
          <p>No loan details available for this customer.</p>
        </div>
      </div>
    </div>

    <div class="pt-5">
      <div class="flex justify-end mb-20">
        <RouterLink
          :to="{ name: 'customers' }"
          class="inline-flex justify-center px-4 py-2 ml-3 font-mono text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Complete
        </RouterLink>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, watch, onMounted } from "vue";
import { useRoute, RouterLink } from "vue-router";
import CustomerService from "@/services/customer.service";
import UploadService from "@/services/UploadFiles.service";
import BeneficiaryService from "@/services/beneficiary.service";
import LoanService from "@/services/loan.service";

// Reactive userDoc to hold the current customer
const userDoc = ref([]);
const loanDetails = ref(null);
const customerStatus = ref(null); // Added customerStatus ref

// Route handling
const route = useRoute();

// Fetch customer details
const fetchCustomerDetails = async (customerId) => {
  try {
    const customerResponse = await CustomerService.get(customerId);
    const customer = customerResponse.data;

    if (!customer) {
      console.error("Customer not found");
      userDoc.value = [];
      customerStatus.value = null; // Reset customerStatus
      return;
    }

    customerStatus.value = customer.status; // Set customerStatus from fetched customer data

    let front_image = null;
    let back_image = null;
    let selfie_image = null;
    let bankName = null;
    let accountNumber = null;
    let assigned_image = null;

    try {
      const filesResponse = await UploadService.getFiles(customer.userId);
      const files = filesResponse.data || [];

      files.forEach((file) => {
        if (file.metadata && file.metadata.documentType === "front_image") {
          front_image = file.url;
        } else if (
          file.metadata &&
          file.metadata.documentType === "back_image"
        ) {
          back_image = file.url;
        } else if (
          file.metadata &&
          file.metadata.documentType === "selfie_image"
        ) {
          selfie_image = file.url;
        } else if (
          file.metadata &&
          file.metadata.documentType === "signature" // Changed from "assigned_image" to "signature"
        ) {
          assigned_image = file.url;
        }
      });
    } catch (imageError) {
      console.error(
        `Error fetching images for customer ${customer.userId}:`,
        imageError
      );
    }

    try {
      const beneficiary = await BeneficiaryService.getUserBeneficiary(
        customer.userId
      );
      if (beneficiary) {
        bankName = beneficiary.bankName;
        accountNumber = beneficiary.accountNumber;
      }
    } catch (beneficiaryError) {
      console.error(
        `Error fetching beneficiary for customer ${customer.userId}:`,
        beneficiaryError
      );
    }

    try {
      const loan = await LoanService.getUserLoanStatus(customer.userId);
      if (loan) {
        loanDetails.value = loan;
      } else {
        loanDetails.value = null;
      }
    } catch (loanError) {
      console.error(
        `Error fetching loan details for customer ${customer.userId}:`,
        loanError
      );
      loanDetails.value = null;
    }

    userDoc.value = [
      {
        ...customer,
        front_image,
        back_image,
        selfie_image,
        bankName,
        accountNumber,
        assigned_image,
      },
    ];
  } catch (error) {
    console.error("Error fetching customer details:", error);
    userDoc.value = [];
    customerStatus.value = null; // Reset customerStatus on error
  }
};

// Watch for route params.id changes and fetch data
watch(
  () => route.params.id,
  (newId) => {
    if (newId) {
      fetchCustomerDetails(newId);
    }
  },
  { immediate: true }
);

// Initial fetch on component mount if id is already present
onMounted(() => {
  if (route.params.id) {
    fetchCustomerDetails(route.params.id);
  }
});

// Remove this method:
// const handleUpdateStatus = async () => {
//   if (!userDoc.value || userDoc.value.length === 0 || !userDoc.value[0].id) {
//     alert("Customer data not available.");
//     return;
//   }
//
//   const customerId = userDoc.value[0].id; // Get the customer ID from the first element of userDoc
//   const currentStatus = customerStatus.value;
//   const newStatus = currentStatus === '0' ? '1' : '0';
//
//   try {
//     await CustomerService.updateStatus(customerId, { status: newStatus });
//     customerStatus.value = newStatus; // Update local state
//     alert(`Customer status updated to ${newStatus === '0' ? 'Under Review' : 'Approved'}`);
//   } catch (error) {
//     console.error("Error updating customer status:", error);
//     alert("Failed to update customer status.");
//   }
// };
</script>
<style scoped>
/* Tailwind CSS is used directly in the template; no additional CSS needed */
</style>
