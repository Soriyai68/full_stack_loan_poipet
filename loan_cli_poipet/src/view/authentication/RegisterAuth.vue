<template>
  <div
    class="flex items-center justify-center min-h-screen hero-image"
    v-motion-fade
  >
    <div class="w-full max-w-md px-8 py-12">
      <Form
        @submit="handleSubmit"
        :validation-schema="schema"
        class="p-8 bg-white shadow-lg bg-opacity-90 backdrop-blur-sm rounded-xl"
      >
        <!-- Logo Section with Profile Image -->
        <div class="flex justify-center my-6">
          <img
            id="profile-img"
            src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
            class="w-24 h-24 rounded-full"
          />
        </div>

        <!-- Phone Input -->
        <div
          class="flex items-center mx-4 my-6 transition-colors duration-300 border-b-2 border-gray-700 hover:border-green-800"
        >
          <label class="self-center text-gray-700">
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
              class="lucide lucide-phone"
            >
              <path
                d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
              />
            </svg>
          </label>
          <Field
            name="phone"
            type="tel"
            class="w-full py-3 pl-4 bg-transparent border-0 focus:outline-none"
            placeholder="Phone Number"
            maxlength="10"
          />
        </div>
        <ErrorMessage name="phone" class="mx-4 text-red-500 text-sm" />

        <!-- Password Input -->
        <div
          class="flex items-center mx-4 my-6 transition-colors duration-300 border-b-2 border-gray-700 hover:border-green-800"
        >
          <label class="self-center text-gray-700">
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
              class="lucide lucide-lock-keyhole"
            >
              <circle cx="12" cy="16" r="1" />
              <rect x="3" y="10" width="18" height="12" rx="2" />
              <path d="M7 10V7a5 5 0 0 1 10 0v3" />
            </svg>
          </label>
          <Field
            name="password"
            type="password"
            class="w-full py-3 pl-4 bg-transparent border-0 focus:outline-none"
            placeholder="Password"
          />
        </div>
        <ErrorMessage name="password" class="mx-4 text-red-500 text-sm" />

        <!-- Confirm Password Input -->
        <div
          class="flex items-center mx-4 my-6 transition-colors duration-300 border-b-2 border-gray-700 hover:border-green-800"
        >
          <label class="self-center text-gray-700">
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
              class="lucide lucide-lock-keyhole"
            >
              <circle cx="12" cy="16" r="1" />
              <rect x="3" y="10" width="18" height="12" rx="2" />
              <path d="M7 10V7a5 5 0 0 1 10 0v3" />
            </svg>
          </label>
          <Field
            name="confirm_password"
            type="password"
            class="w-full py-3 pl-4 bg-transparent border-0 focus:outline-none"
            placeholder="Confirm Password"
          />
        </div>
        <ErrorMessage
          name="confirm_password"
          class="mx-4 text-red-500 text-sm"
        />

        <!-- Server-side Error Message -->
        <div v-if="message" class="mx-4 mb-4 text-red-500 text-sm">
          {{ message }}
        </div>

        <!-- Register Button -->
        <div class="mx-4 mt-8 mb-4">
          <button
            type="submit"
            :disabled="loading"
            class="flex items-center justify-center w-full py-3 font-medium text-white transition-colors duration-300 bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <span v-if="loading" class="mr-2 loader"></span>
            <span>{{ loading ? "Registering..." : "Register Account" }}</span>
          </button>
        </div>

        <!-- Login Link -->
        <div class="mt-8">
          <div class="relative">
            <div class="absolute inset-0 flex items-center">
              <div class="w-full border-t border-gray-300"></div>
            </div>
            <div class="relative flex justify-center text-sm">
              <span class="px-2 text-gray-500 bg-white bg-opacity-90"
                >Already have an account?</span
              >
            </div>
          </div>
        </div>
        <div class="mx-4 mt-8 mb-4">
          <RouterLink
            :to="{ name: 'login' }"
            class="flex justify-center w-full py-3 font-medium text-black transition-colors duration-300 bg-white border-2 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Sign In
          </RouterLink>
        </div>
      </Form>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";

const store = useStore();
const router = useRouter();

// Validation states
const successful = ref(false);
const loading = ref(false);
const message = ref("");

// Validation schema using yup
const schema = yup.object().shape({
  phone: yup
    .string()
    .required("Phone number is required!")
    .matches(/^\d{9}$/, "Phone number must be 9 digits!"),
  password: yup
    .string()
    .required("Password is required!")
    .min(6, "Must be at least 6 characters!")
    .max(40, "Must be maximum 40 characters!"),
  confirm_password: yup
    .string()
    .required("Confirm password is required!")
    .oneOf([yup.ref("password")], "Passwords must match!"),
});

// Check if user is already logged in
const loggedIn = computed(() => store.state.auth.status.loggedIn);

if (loggedIn.value) {
  router.push("/profile");
}

// Form submission handler
const handleSubmit = async (values, { resetForm }) => {
  try {
    message.value = "";
    successful.value = false;
    loading.value = true;

    // Generate email using phone number
    const email = `${values.phone}@gmail.com`;

    // Prepare user data for registration
    const user = {
      phone: values.phone,
      email: email,
      username: values.phone, // Set username to phone number
      password: values.password,
    };

    // Dispatch register action
    await store.dispatch("auth/register", user).then(
      (data) => {
        message.value = data.message || "Registration successful!";
        successful.value = true;
        loading.value = false;
        resetForm(); // Reset form fields
        router.push("/login"); // Redirect to login after successful registration
      },
      (error) => {
        message.value =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        successful.value = false;
        loading.value = false;
      }
    );
  } catch (error) {
    message.value = error.message || "An unexpected error occurred!";
    successful.value = false;
    loading.value = false;
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
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>