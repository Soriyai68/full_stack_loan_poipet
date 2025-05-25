<template>
  <div class="flex items-center justify-center min-h-screen hero-image" v-motion-fade>
    <div class="w-full max-w-md px-8 py-12">
      <form @submit.prevent="handleLogin" class="p-8 bg-white shadow-lg bg-opacity-90 backdrop-blur-sm rounded-xl">
        <!-- Logo Section -->
        <div class="flex justify-center my-6">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
            class="w-24 h-24 lucide lucide-circle-user">
            <circle cx="12" cy="12" r="10" />
            <circle cx="12" cy="10" r="3" />
            <path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662" />
          </svg>
        </div>

        <!-- Phone Input -->
        <div class="flex items-center mx-4 my-6 transition-colors duration-300 border-b-2 border-gray-700 hover:border-green-800">
          <label class="self-center text-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
              class="lucide lucide-phone">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
          </label>
          <input v-model="loginForm.phone" class="w-full py-3 pl-4 bg-transparent border-0 focus:outline-none"
            type="tel" placeholder="Phone number" required>
          <div v-if="errors.phone" class="error-feedback">{{ errors.phone }}</div>
        </div>

        <!-- Password Input -->
        <div class="flex items-center mx-4 my-6 transition-colors duration-300 border-b-2 border-gray-700 hover:border-green-800">
          <label class="self-center text-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
              class="lucide lucide-lock-keyhole">
              <circle cx="12" cy="16" r="1" />
              <rect x="3" y="10" width="18" height="12" rx="2" />
              <path d="M7 10V7a5 5 0 0 1 10 0v3" />
            </svg>
          </label>
          <input v-model="loginForm.password" class="w-full py-3 pl-4 bg-transparent border-0 focus:outline-none"
            type="password" placeholder="Password" required>
          <div v-if="errors.password" class="error-feedback">{{ errors.password }}</div>
        </div>

        <!-- Error Message -->
        <div v-if="message" class="mx-4 my-2 text-red-500">
          {{ message }}
        </div>

        <!-- Login Button -->
        <div class="mx-4 mt-8 mb-4">
          <button type="submit"
            class="w-full py-3 font-medium text-white transition-colors duration-300 bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <span v-if="loading" class="mr-2 loader"></span>
            <span>{{ loading ? 'Logging in...' : 'LOGIN' }}</span>
          </button>
        </div>
        
        <div class="mt-8">
          <div class="relative">
            <div class="absolute inset-0 flex items-center">
              <div class="w-full border-t border-gray-300"></div>
            </div>
            <div class="relative flex justify-center text-sm">
              <span class="px-2 text-gray-500 bg-white bg-opacity-90">
                Don't have an account?
              </span>
            </div>
          </div>
        </div>

        <div class="mx-4 mt-8 mb-4">
          <RouterLink :to="{name: 'register'}" 
            class="flex justify-center w-full py-3 font-medium text-black transition-colors duration-300 bg-white border-2 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500">
            Register
          </RouterLink>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';

export default {
  name: "LoginAuth",
  setup() {
    const loginForm = ref({
      phone: '',
      password: ''
    });
    const loading = ref(false);
    const message = ref('');
    const errors = ref({});
    const router = useRouter();
    const store = useStore();

    const loggedIn = computed(() => {
      return store.state.auth.status.loggedIn;
    });

    const validateForm = () => {
      errors.value = {};
      if (!loginForm.value.phone) {
        errors.value.phone = 'Phone number is required!';
      }
      if (!loginForm.value.password) {
        errors.value.password = 'Password is required!';
      }
      return Object.keys(errors.value).length === 0;
    };

    const handleLogin = async () => {
      if (!validateForm()) return;

      loading.value = true;
      try {
        await store.dispatch("auth/login", {
          username: loginForm.value.phone,
          password: loginForm.value.password
        });
        router.push("/");
      } catch (error) {
        loading.value = false;
        message.value = error.response?.data?.message || error.message || error.toString();
      }
    };

    // Redirect if already logged in
    if (loggedIn.value) {
      router.push("/");
    }

    return {
      loginForm,
      loading,
      message,
      errors,
      handleLogin
    };
  }
};
</script>

<style scoped>
.hero-image {
  background-image: url("/src/assets/loan_chart.jpg");
  background-color: #cccccc;
  min-height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

/* Simple loader spinner */
.loader {
  border: 2px solid #f3f3f3;
  border-top: 2px solid #3498db;
  border-radius: 50%;
  width: 18px;
  height: 18px;
  animation: spin 1s linear infinite;
  display: inline-block;
  vertical-align: middle;
}

@keyframes spin {
  0% { transform: rotate(0deg);}
  100% { transform: rotate(360deg);}
}

.error-feedback {
  color: red;
  font-size: 0.8rem;
  margin-top: 0.25rem;
}
</style>