<template>
    <div class="flex flex-col h-screen bg-gray-100">
        <!-- Navbar (always visible on all screen sizes) -->
        <nav class="flex items-center justify-between p-4 text-black border-b border-gray-200 bg-white shadow-sm print:hidden ">
            <div class="text-xl font-medium text-blue-600 flex items-center gap-2">
              
                <p class="flex items-center gap-2 space-x-1 font-semibold uppercase">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="size-7 text-blue-500">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
                    </svg>

                    <span> Loan Online System</span>
                </p>
            </div>
            <div class="hidden space-x-6 lg:flex">
                <CurrentDate />

            </div>
            <div class="flex items-center gap-3">
                <div class="flex gap-1">
                    <p class="font-medium uppercase text-gray-700">Profile: <span class="font-bold text-blue-600">Admin</span></p>
                </div>
                <div class="p-3 bg-blue-100 rounded-full">

                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        class="lucide lucide-user text-blue-600">
                        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                        <circle cx="12" cy="7" r="4" />
                    </svg>
                </div>
            </div>
        </nav>

        <!-- Main content area -->
        <div class="flex flex-1 ">
            <!-- Sidebar (hidden on small screens) -->
            <div
                class="w-16 p-4 text-black transition-all duration-300 ease-in-out bg-white border-r border-gray-200 shadow-md lg:w-64 print:hidden">
                <ul class="space-y-2">


                    <li class="block">
                        <RouterLink :to="{ name: 'dashboard' }"
                            class="flex items-center gap-3 px-4 py-2 font-medium text-gray-700 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="size-5">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
                            </svg>
                            <span class="font-semibold uppercase">Dashboard</span>
                        </RouterLink>
                    </li>


                    <li class="block">
                        <RouterLink :to="{ name: 'customers' }"
                            class="flex items-center gap-3 px-4 py-2 font-medium text-gray-700 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="size-5">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
                            </svg>
                            <span class="font-semibold uppercase">Customers</span>
                        </RouterLink>
                    </li>

                    <li class="block">
                        <RouterLink to="#"
                            class="flex items-center gap-3 px-4 py-2 font-medium text-gray-700 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="size-5">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
                            </svg>
                            <span class="font-semibold uppercase">Report Today</span>
                        </RouterLink>
                    </li>

                    <li class="block">
                        <RouterLink to="#"
                            class="flex items-center gap-3 px-4 py-2 font-medium text-gray-700 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="size-5">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
                            </svg>
                            <span class="font-semibold uppercase">Reports</span>
                        </RouterLink>
                    </li>


                </ul>
            </div>

            <!-- Content -->
            <div class="flex-1 p-6 bg-gray-100">
                <router-view />
            </div>
        </div>


        <div class="fixed bottom-6 right-6 z-10">
            <button class="flex items-center gap-2 px-5 py-3 font-bold text-white bg-red-600 rounded-full shadow-lg hover:bg-red-700 transition-colors duration-200">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="lucide lucide-circle-arrow-out-up-left-icon lucide-circle-arrow-out-up-left">
                    <path d="M2 8V2h6" />
                    <path d="m2 2 10 10" />
                    <path d="M12 2A10 10 0 1 1 2 12" />
                </svg>
                
                <span class="font-semibold">Logout</span>
            </button>
        </div>

        

    </div>

</template>


<style scoped>
/* Optional: Add custom styling for the sidebar and navbar */
</style>