<template>
  <main class="w-full min-h-screen">
    <h1
      class="flex items-center gap-2 my-5 font-mono text-2xl font-bold"
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
        class="lucide lucide-layout-dashboard-icon lucide-layout-dashboard"
      >
        <rect width="7" height="9" x="3" y="3" rx="1" />
        <rect width="7" height="5" x="14" y="3" rx="1" />
        <rect width="7" height="9" x="14" y="12" rx="1" />
        <rect width="7" height="5" x="3" y="16" rx="1" />
      </svg>
      <span>Dashboard</span>
    </h1>
    <section
      class="grid w-full grid-cols-4 bg-white divide-x rounded-lg"
    >
      <div
        class="flex items-center px-8 py-5 text-gray-900 cursor-pointer hover:bg-gray-100"
      >
        <svg
          class="text-gray-600"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 -960 960 960"
          width="48px"
          fill="#5f6368"
        >
          <path
            d="M212-241v-339h60v339h-60Zm242 0v-339h60v339h-60ZM80-121v-60h800v60H80Zm608-120v-339h60v339h-60ZM80-640v-53l400-228 400 228v53H80Zm134-60h532-532Zm0 0h532L480-852 214-700Z"
          />
        </svg>
        <div class="ml-3">
          <div class="font-medium leading-6 text-gray-600">
            Overview
          </div>
          <div class="mt-0.5 text-sm text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </div>
        </div>
      </div>
      <div
        class="flex items-center px-8 py-5 text-gray-900 cursor-pointer hover:bg-gray-100"
      >
        <svg
          class="text-gray-600"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 -960 960 960"
          width="48px"
          fill="#5f6368"
        >
          <path
            d="M480.09-490q28.91 0 49.41-20.59 20.5-20.59 20.5-49.5t-20.59-49.41q-20.59-20.5-49.5-20.5t-49.41 20.59q-20.5 20.59-20.5 49.5t20.59 49.41q20.59 20.5 49.5 20.5ZM480-159q133-121 196.5-219.5T740-552q0-117.79-75.29-192.9Q589.42-820 480-820t-184.71 75.1Q220-669.79 220-552q0 75 65 173.5T480-159Zm0 79Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z"
          />
        </svg>
        <div class="ml-3">
          <div class="font-medium leading-6 text-gray-600">
            Addresses
          </div>
          <div class="mt-0.5 text-sm text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </div>
        </div>
      </div>
      <div
        class="flex items-center px-8 py-5 text-gray-900 cursor-pointer hover:bg-gray-100"
      >
        <svg
          class="text-gray-600"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 -960 960 960"
          width="48px"
          fill="#5f6368"
        >
          <path
            d="M562-524h268v-186H562v186Zm135-37-105-79v-40l104 79 104-79v40l-103 79ZM60-120q-24 0-42-18T0-180v-600q0-24 18-42t42-18h840q24 0 42 18t18 42v600q0 24-18 42t-42 18H60Zm531-60h309v-600H60v600h7q44-69 112.5-109T329-329q81 0 149.5 40T591-180ZM329-400q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35ZM143-180h372q-35.61-42.27-84.3-65.64Q382-269 329-269t-101.5 23.5Q179-222 143-180Zm186-280q-25.5 0-42.75-17.25T269-520q0-25.5 17.25-42.75T329-580q25.5 0 42.75 17.25T389-520q0 25.5-17.25 42.75T329-460Zm151-20Z"
          />
        </svg>
        <div class="ml-3">
          <div class="font-medium leading-6 text-gray-600">
            Contacts
          </div>
          <div class="mt-0.5 text-sm text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </div>
        </div>
      </div>
      <div
        class="flex items-center px-8 py-5 text-gray-900 border-b-4 cursor-pointer hover:bg-gray-100 bg-blue-50 border-l-gray-100 border-b-blue-500"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 -960 960 960"
          width="48px"
          fill="#4880d7"
        >
          <path
            d="M212-241v-339h60v339h-60Zm242 0v-339h60v339h-60ZM80-121v-60h800v60H80Zm608-120v-339h60v339h-60ZM80-640v-53l400-228 400 228v53H80Zm134-60h532-532Zm0 0h532L480-852 214-700Z"
          />
        </svg>
        <div class="ml-3">
          <div class="font-medium leading-6 text-blue-600">
            Facilities
          </div>
          <div class="mt-0.5 text-sm text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </div>
        </div>
      </div>
    </section>

    <!-- CONTENT GOES HERE -->
    <div
      class="flex flex-col w-full h-full mx-auto space-y-6"
    >
      <section
        class="flex flex-col w-full p-6 mx-auto space-y-6 bg-white rounded-lg shadow-md"
      >
        <div
          class="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4"
        >
          <form class="relative flex flex-col md:col-span-3">
            <div
              class="absolute inset-y-0 flex items-center pointer-events-none start-0 ps-3"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#5f6368"
              >
                <path
                  d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              class="block w-full p-4 text-sm text-gray-900 border border-gray-100 rounded ps-10 bg-gray-50"
              placeholder="Search here..."
              required
            />
            <button
              type="submit"
              class="text-blue-500 absolute end-2.5 top-1.5 border border-blue-500 hover:bg-blue-50 focus:outline-none font-medium rounded text-base px-4 py-2"
            >
              Search
            </button>
          </form>
          <div class="flex items-center col-span-1">
            <button
              class="relative items-center justify-center px-4 py-2 font-medium text-white bg-blue-500 rounded w-80 hover:bg-primary-900"
            >
              New facility
            </button>
          </div>
        </div>

        <div
          class="grid w-full min-w-0 grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4"
        >
          <!-- In use -->
          <div
            class="flex flex-col px-6 py-2 overflow-hidden bg-white rounded-lg shadow"
          >
            <div class="flex flex-col items-center space-y-2">
              <div
                class="text-6xl font-bold leading-none tracking-tight text-blue-500"
              >
                21
              </div>
              <div class="text-lg font-medium text-blue-500">
                Approved
              </div>
            </div>
          </div>
          <!-- renovation -->
          <div
            class="flex flex-col px-6 py-2 overflow-hidden bg-white rounded-lg shadow"
          >
            <div class="flex flex-col items-center space-y-2">
              <div
                class="text-6xl font-bold leading-none tracking-tight text-amber-500"
              >
                17
              </div>
              <div class="text-lg font-medium text-amber-600">
                Under Review
              </div>
            </div>
          </div>
          <!-- Suspended -->
          <div
            class="flex flex-col px-6 py-2 overflow-hidden bg-white rounded-lg shadow"
          >
            <div class="flex flex-col items-center space-y-2">
              <div
                class="text-6xl font-bold leading-none tracking-tight text-red-500"
              >
                24
              </div>
              <div class="text-lg font-medium text-red-600">
                Not Completed
              </div>
            </div>
          </div>
          <!-- Closed -->
          <div
            class="flex flex-col px-6 py-2 overflow-hidden bg-white rounded-lg shadow"
          >
            <div class="flex flex-col items-center space-y-2">
              <div
                class="text-6xl font-bold leading-none tracking-tight text-primary-900"
              >
                {{ customers?.length }}
              </div>
              <div class="text-lg font-medium text-primary-900">
                Customers
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </main>
</template>

<script setup>
import { ref } from "vue";

// Mock customers data (simulating Firebase's getCollection('customers'))
const customers = ref([
  { id: "customer1", name: "Customer One" },
  { id: "customer2", name: "Customer Two" },
  { id: "customer3", name: "Customer Three" },
  // Add more mock customers as needed
]);
</script>

<style scoped>
/* Tailwind CSS is used directly in the template; no additional CSS needed */
</style>