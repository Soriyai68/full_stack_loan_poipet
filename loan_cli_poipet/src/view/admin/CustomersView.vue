<template>
  <section class="container px-4 mx-auto">
    <div class="sm:flex sm:items-center sm:justify-between">
      <div>
        <div class="flex items-center gap-x-3">
          <h2 class="text-lg font-medium text-gray-800 dark:text-white">
            Customers
          </h2>
          <span
            class="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full dark:bg-gray-800 dark:text-blue-400"
            >{{ customers?.length }} Request</span
          >
        </div>
      </div>

      <div class="flex items-center mt-4 gap-x-3">
        <button
          class="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 transition-colors duration-200 bg-white border rounded-lg gap-x-2 sm:w-auto dark:hover:bg-gray-800 dark:bg-gray-900 hover:bg-gray-100 dark:text-gray-200 dark:border-gray-700"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_3098_154395)">
              <path
                d="M13.3333 13.3332L9.99997 9.9999M9.99997 9.9999L6.66663 13.3332M9.99997 9.9999V17.4999M16.9916 15.3249C17.8044 14.8818 18.4465 14.1806 18.8165 13.3321C19.1866 12.4835 19.2635 11.5359 19.0351 10.6388C18.8068 9.7417 18.2862 8.94616 17.5555 8.37778C16.8248 7.80939 15.9257 7.50052 15 7.4999H13.95C13.6977 6.52427 13.2276 5.61852 12.5749 4.85073C11.9222 4.08295 11.104 3.47311 10.1817 3.06708C9.25943 2.66104 8.25709 2.46937 7.25006 2.50647C6.24304 2.54358 5.25752 2.80849 4.36761 3.28129C3.47771 3.7541 2.70656 4.42249 2.11215 5.23622C1.51774 6.04996 1.11554 6.98785 0.935783 7.9794C0.756025 8.97095 0.803388 9.99035 1.07431 10.961C1.34523 11.9316 1.83267 12.8281 2.49997 13.5832"
                stroke="currentColor"
                stroke-width="1.67"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_3098_154395">
                <rect width="20" height="20" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <span>Import</span>
        </button>

        <button
          class="flex items-center justify-center w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-blue-500 rounded-lg shrink-0 sm:w-auto gap-x-2 hover:bg-blue-600 dark:hover:bg-blue-500 dark:bg-blue-600"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-5 h-5"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>Add vendor</span>
        </button>
      </div>
    </div>

    <div class="mt-6 md:flex md:items-center md:justify-between">
      <div
        class="inline-flex overflow-hidden bg-white border divide-x rounded-lg dark:bg-gray-900 rtl:flex-row-reverse dark:border-gray-700 dark:divide-gray-700"
      >
        <button
          class="px-5 py-2 text-xs font-medium text-gray-600 transition-colors duration-200 bg-gray-100 sm:text-sm dark:bg-gray-800 dark:text-gray-300"
        >
          View all
        </button>
        <button
          class="px-5 py-2 text-xs font-medium text-gray-600 transition-colors duration-200 sm:text-sm dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100"
        >
          Approved
        </button>
        <button
          class="px-5 py-2 text-xs font-medium text-gray-600 transition-colors duration-200 sm:text-sm dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100"
        >
          Under Review
        </button>
        <button
          class="px-5 py-2 text-xs font-medium text-gray-600 transition-colors duration-200 sm:text-sm dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100"
        >
          Not Completed
        </button>
      </div>

      <div class="relative flex items-center mt-4 md:mt-0">
        <span class="absolute">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-5 h-5 mx-3 text-gray-400 dark:text-gray-600"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </span>
        <input
          type="text"
          v-model="searchText"
          placeholder="Search"
          class="block w-full py-1.5 pr-5 text-gray-700 bg-white border border-gray-200 rounded-lg md:w-80 placeholder-gray-400/70 pl-11 rtl:pr-11 rtl:pl-5 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
        />
      </div>
    </div>

    <div class="flex flex-col mt-6">
      <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
          <div
            class="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg"
          >
            <table
              class="min-w-full divide-y divide-gray-200 dark:divide-gray-700"
            >
              <thead class="font-mono bg-gray-50 dark:bg-gray-800">
                <tr>
                  <th scope="col" class="">Actual Name</th>
                  <th scope="col" class="">Identify No.</th>
                  <th scope="col" class="">Gender</th>
                  <th scope="col" class="">DOB</th>
                  <th scope="col" class="">Front-Photo</th>
                  <th scope="col" class="">Back-Photo</th>
                  <th scope="col" class="">Selfies-Photo</th>
                  <th scope="col" class="">BankName</th>
                  <th scope="col" class="">BankNumber</th>
                  <th scope="col" class="">Status</th>
                  <th scope="col" class="">IP Address</th>
                  <th scope="col" class="p-3">Action</th>
                </tr>
              </thead>
              <tbody
                class="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900"
              >
                <tr v-for="customer in paginatedData" :key="customer.id">
                  <td
                    class="px-4 py-4 text-sm font-medium capitalize whitespace-nowrap"
                  >
                    {{ customer?.name }}
                  </td>
                  <td class="px-4 py-4 text-sm font-medium whitespace-nowrap">
                    {{ customer?.idNumber }}
                  </td>
                  <td class="px-4 py-4 text-sm font-medium whitespace-nowrap">
                    {{ customer?.gender }}
                  </td>
                  <td class="px-4 py-4 text-sm font-medium whitespace-nowrap">
                    {{ customer?.dob }}
                  </td>
                  <td class="px-4 py-4 text-sm font-medium whitespace-nowrap">
                    <div>
                      <img :src="customer?.front_image" class="w-12" alt="" />
                    </div>
                  </td>
                  <td class="px-4 py-4 text-sm font-medium whitespace-nowrap">
                    <img :src="customer?.back_image" class="w-12" alt="" />
                  </td>
                  <td class="px-4 py-4 text-sm font-medium whitespace-nowrap">
                    <img :src="customer?.selfie_image" class="w-12" alt="" />
                  </td>
                  <td class="px-4 py-4 text-sm font-medium whitespace-nowrap">
                    {{ customer?.bankName }}
                  </td>
                  <td class="px-4 py-4 text-sm font-medium whitespace-nowrap">
                    {{ customer?.accountNumber }}
                  </td>
                  <td class="px-4 py-4 text-sm font-medium whitespace-nowrap">
                    <div
                      v-if="customer.status === '0'"
                      class="text-xs text-center text-white bg-orange-500 rounded-full"
                    >
                      Under Review
                    </div>
                    <div
                      v-else-if="customer.status === '1'"
                      class="text-xs text-center text-white bg-green-500 rounded-full"
                    >
                      <p>Approved</p>
                    </div>
                    <div
                      v-else
                      class="text-xs text-center text-white bg-red-500 rounded-full"
                    >
                      <p>Not Completed</p>
                    </div>
                  </td>
                  <td class="px-4 py-4 text-sm font-medium whitespace-nowrap">
                    <div
                      class="text-xs text-center text-white rounded-full bg-black/90"
                    >
                      {{ customer?.ipAddress }}
                    </div>
                  </td>
                  <td
                    class="flex justify-end gap-2 px-4 py-4 text-sm font-medium whitespace-nowrap"
                  >
                    <div
                      v-if="
                        customer?.status === '0' || customer?.status === '1'
                      "
                      @click="handleCurrentUpdate(customer)"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="cursor-pointer lucide lucide-circle-check-big-icon lucide-circle-check-big hover:text-green-500"
                      >
                        <path d="M21.801 10A10 10 0 1 1 17 3.335" />
                        <path d="m9 11 3 3L22 4" />
                      </svg>
                    </div>
                    <div>
                      <RouterLink
                        :to="{
                          name: 'viewCustomer',
                          params: { id: customer.id },
                        }"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="cursor-pointer lucide lucide-scan-search-icon lucide-scan-search hover:text-orange-500"
                        >
                          <path d="M3 7V5a2 2 0 0 1 2-2h2" />
                          <path d="M17 3h2a2 2 0 0 1 2 2v2" />
                          <path d="M21 17v2a2 2 0 0 1-2 2h-2" />
                          <path d="M7 21H5a2 2 0 0 1-2-2v-2" />
                          <circle cx="12" cy="12" r="3" />
                          <path d="m16 16-1.9-1.9" />
                        </svg>
                      </RouterLink>
                    </div>
                    <div @click="handleDelete(customer?.id)">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="cursor-pointer lucide lucide-trash2-icon lucide-trash-2 hover:text-red-500"
                      >
                        <path d="M3 6h18" />
                        <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                        <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                        <line x1="10" x2="10" y1="11" y2="17" />
                        <line x1="14" x2="14" y1="11" y2="17" />
                      </svg>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

    <!-- Pagination -->
    <div class="flex justify-end px-4 py-3">
      <nav class="flex items-center space-x-1">
        <!-- Previous Button -->
        <button
          type="button"
          @click="loadPreviousPage"
          :disabled="currentPage === 1"
          class="p-2.5 inline-flex border bg-white items-center gap-x-2 text-sm rounded-full text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
        >
          <span>«</span>
          <span>Previous</span>
        </button>

        <!-- Page Number Buttons -->
        <button
          v-for="page in pageRange"
          :key="page"
          @click="goToPage(page)"
          :class="[
            'min-w-[40px] flex justify-center items-center text-gray-800 hover:bg-gray-100 py-2.5 text-sm rounded-full disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10',
            { 'bg-blue-500 text-white': currentPage === page },
          ]"
        >
          {{ page }}
        </button>

        <!-- Next Button -->
        <button
          type="button"
          @click="loadNextPage"
          :disabled="currentPage === totalPages"
          class="p-2.5 border bg-white inline-flex items-center gap-x-2 text-sm rounded-full text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
        >
          <span>«</span>
          <span>Next</span>
        </button>
      </nav>
    </div>

    <!-- Modal Update Status (Placeholder) -->
    <component
      :is="currentComponents"
      :statusData="statusData"
      @close="currentComponents = ''"
    />
  </section>
</template>

<script setup>
import { ref, computed, watch, onMounted } from "vue";
import { RouterLink } from "vue-router";
import CustomerService from "@/services/customer.service";
import UploadService from "@/services/UploadFiles.service"; // Import UploadService
import BeneficiaryService from "@/services/beneficiary.service"; // Import BeneficiaryService

// Mock customers data (simulating Firebase's getCollection('customers'))
const customers = ref([]);
const isLoading = ref(true);

// Fetch customers from the backend
const fetchCustomers = async () => {
  isLoading.value = true;
  try {
    const response = await CustomerService.getAll();
    const fetchedCustomers = response.data; // Store fetched customers temporarily

    // Fetch images and beneficiary info for each customer
    const customersWithDetails = await Promise.all(
      fetchedCustomers.map(async (customer) => {
        let front_image = null;
        let back_image = null;
        let selfie_image = null;
        let bankName = null;
        let accountNumber = null;

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

        return {
          ...customer,
          front_image,
          back_image,
          selfie_image,
          bankName,
          accountNumber,
        };
      })
    );

    customers.value = customersWithDetails;
    updatePagination();
  } catch (error) {
    console.error("Error fetching customers:", error);
  } finally {
    isLoading.value = false;
  }
};

// Initial fetch on component mount
onMounted(() => {
  fetchCustomers();
});

// Pagination and search state
const searchText = ref("");
const itemsPerPage = ref(10);
const currentPage = ref(1);
const totalPages = ref(1);
const pageRange = ref([]);

// Filtered data based on search
const filteredData = computed(() => {
  if (!searchText.value.trim()) return customers.value;
  const query = searchText.value.trim().toLowerCase();
  return customers.value.filter(
    (customer) =>
      customer.name.toLowerCase().includes(query) ||
      customer.idNumber.toLowerCase().includes(query) ||
      customer.ipAddress.toLowerCase().includes(query)
  );
});

// Paginated data
const paginatedData = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage.value;
  const end = start + itemsPerPage.value;
  return filteredData.value.slice(start, end);
});

// Update pagination
const updatePagination = () => {
  totalPages.value = Math.ceil(filteredData.value.length / itemsPerPage.value);
  pageRange.value = Array.from({ length: totalPages.value }, (_, i) => i + 1);
};

// Initial pagination setup
updatePagination();

// Watch search text to reset pagination
watch(searchText, () => {
  currentPage.value = 1;
  updatePagination();
});

// Pagination controls
const loadPreviousPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
  }
};

const loadNextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++;
  }
};

const goToPage = (page) => {
  currentPage.value = page;
};

// Modal state (placeholder for UpdateCustomerModal)
const currentComponents = ref("");
const statusData = ref(null);

const handleCurrentUpdate = async (item) => {
  console.log("Update customer status:", item);
  const newStatus = item.status === "0" ? "1" : "0"; // Toggle status for example
  try {
    await CustomerService.updateStatus(item.id, { status: newStatus });
    // Update the local customer list after successful update
    const index = customers.value.findIndex((c) => c.id === item.id);
    if (index !== -1) {
      customers.value[index].status = newStatus;
    }
    alert("Customer status updated successfully!");
  } catch (error) {
    console.error("Error updating customer status:", error);
    alert("Failed to update customer status.");
  }
};

const handleDelete = async (id) => {
  if (confirm("Are you sure you want to delete this customer?")) {
    try {
      await CustomerService.delete(id);
      // Optionally, delete associated images from storage if needed
      // await UploadService.deleteFile(fimage);
      // await UploadService.deleteFile(bimage);
      // await UploadService.deleteFile(simage);
      fetchCustomers(); // Refresh the list after deletion
      alert("Customer deleted successfully!");
    } catch (error) {
      console.error("Error deleting customer:", error);
      alert("Failed to delete customer.");
    }
  }
};
</script>

<style scoped>
/* Tailwind CSS is used directly in the template; no additional CSS needed */
</style>