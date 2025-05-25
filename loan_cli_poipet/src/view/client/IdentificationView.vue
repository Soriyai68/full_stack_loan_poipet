<template>
  <div class="hidden lg:block">
    <NavbarComponent />
  </div>
  <div class="lg:hidden">
    <MobileView />
  </div>
  <div class="w-full max-w-4xl px-2 py-2 m-auto mt-1 bg-white" v-motion-fade>
    <h2 class="flex items-center justify-center gap-2 p-3 text-lg font-semibold text-center text-white bg-blue-600 rounded-md">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
        class="lucide lucide-id-card-icon lucide-id-card">
        <path d="M16 10h2" />
        <path d="M16 14h2" />
        <path d="M6.17 15a3 3 0 0 1 5.66 0" />
        <circle cx="9" cy="11" r="2" />
        <rect x="2" y="5" width="20" height="14" rx="2" />
      </svg>
      <span>Identify</span>
    </h2>
    <div class="max-w-md p-4 mx-auto overflow-hidden bg-white rounded-xl">
      <h1 class="mb-4 text-2xl font-bold text-center text-gray-800">KYC Identification</h1>

      <!-- Display loading state -->
      <div v-if="isLoading" class="text-center">
        <p class="text-gray-600">Loading documents...</p>
      </div>

      <!-- Display error message -->
      <div v-if="message" class="mb-4 text-center text-red-600">
        {{ message }}
      </div>

      <div v-for="usDoc in userDoc" :key="usDoc" class="mb-4">
        <!-- Form for uploading if no documents exist -->
        <form v-if="!usDoc.front_image || !usDoc.back_image || !usDoc.selfie_image"
          @submit.prevent="handleSubmit" class="space-y-6">
          <!-- Front ID Card Section -->
          <div>
            <label class="block mb-1 text-sm font-medium text-gray-700">Front ID Card</label>
            <div
              class="flex justify-center px-6 pt-5 pb-6 mt-1 border-2 border-gray-300 border-dashed rounded-md">
              <div class="space-y-1 text-center">
                <div class="flex justify-center">
                  <template v-if="!frontImage">
                    <svg class="w-12 h-12 mx-auto text-gray-400" stroke="currentColor" fill="none"
                      viewBox="0 0 48 48" aria-hidden="true">
                      <path
                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </template>
                  <img v-else :src="frontImage" class="object-contain h-48" alt="Front ID preview">
                </div>
                <div class="flex justify-center text-sm text-gray-600">
                  <label for="front-upload"
                    class="relative font-medium text-indigo-600 bg-white rounded-md cursor-pointer hover:text-indigo-500 focus-within:outline-none">
                    <span v-if="!frontImage">Upload a file</span>
                    <span v-else>Change file</span>
                    <input id="front-upload" name="front-upload" type="file" class="sr-only"
                      @change="handleFrontUpload" accept="image/*">
                  </label>
                </div>
                <p class="text-xs text-gray-500">PNG, JPG, JPEG up to 5MB</p>
              </div>
            </div>
          </div>

          <!-- Back ID Card Section -->
          <div>
            <label class="block mb-1 text-sm font-medium text-gray-700">Back ID Card</label>
            <div
              class="flex justify-center px-6 pt-5 pb-6 mt-1 border-2 border-gray-300 border-dashed rounded-md">
              <div class="space-y-1 text-center">
                <div class="flex justify-center">
                  <template v-if="!backImage">
                    <svg class="w-12 h-12 mx-auto text-gray-400" stroke="currentColor" fill="none"
                      viewBox="0 0 48 48" aria-hidden="true">
                      <path
                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </template>
                  <img v-else :src="backImage" class="object-contain h-48" alt="Back ID preview">
                </div>
                <div class="flex justify-center text-sm text-gray-600">
                  <label for="back-upload"
                    class="relative font-medium text-indigo-600 bg-white rounded-md cursor-pointer hover:text-indigo-500 focus-within:outline-none">
                    <span v-if="!backImage">Upload a file</span>
                    <span v-else>Change file</span>
                    <input id="back-upload" name="back-upload" type="file" class="sr-only"
                      @change="handleBackUpload" accept="image/*">
                  </label>
                </div>
                <p class="text-xs text-gray-500">PNG, JPG, JPEG up to 5MB</p>
              </div>
            </div>
          </div>

          <!-- Selfie Section -->
          <div>
            <label class="block mb-2 text-sm font-medium text-gray-700">Selfie with Photo</label>
            <div
              class="flex justify-center px-6 pt-5 pb-6 mt-1 border-2 border-gray-300 border-dashed rounded-md">
              <div class="space-y-1 text-center">
                <div class="flex justify-center">
                  <template v-if="!selfieImage">
                    <svg class="w-12 h-12 mx-auto text-gray-400" stroke="currentColor" fill="none"
                      viewBox="0 0 48 48" aria-hidden="true">
                      <path
                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </template>
                  <img v-else :src="selfieImage" class="object-contain h-48" alt="Selfie preview">
                </div>
                <div class="flex justify-center text-sm text-gray-600">
                  <button v-if="!isCameraOpen" type="button" @click="openCamera"
                    class="relative font-medium text-indigo-600 bg-white rounded-md hover:text-indigo-500 focus-within:outline-none">
                    Take a photo
                  </button>
                  <button v-else type="button" @click="takePhoto"
                    class="relative font-medium text-indigo-600 bg-white rounded-md hover:text-indigo-500 focus-within:outline-none">
                    Capture
                  </button>
                  <label v-if="!isCameraOpen"
                    class="relative ml-3 font-medium text-indigo-600 bg-white rounded-md cursor-pointer hover:text-indigo-500 focus-within:outline-none">
                    <span v-if="!selfieImage">or upload</span>
                    <span v-else>or change</span>
                    <input type="file" class="sr-only" @change="handleSelfieUpload" accept="image/*">
                  </label>
                </div>
                <p class="text-xs text-gray-500">PNG, JPG, JPEG up to 5MB</p>
              </div>
            </div>
          </div>

          <!-- Camera Modal -->
          <div v-if="isCameraOpen"
            class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
            <div class="w-full max-w-md p-4 bg-white rounded-lg">
              <div class="relative">
                <video ref="video" autoplay class="w-full h-auto rounded-lg"></video>
                <canvas ref="canvas" class="hidden"></canvas>
              </div>
              <div class="flex justify-between mt-4">
                <button type="button" @click="closeCamera"
                  class="px-4 py-2 text-white bg-gray-500 rounded-md hover:bg-gray-600">
                  Cancel
                </button>
                <button type="button" @click="takePhoto"
                  class="px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700">
                  Take Photo
                </button>
              </div>
            </div>
          </div>

          <!-- Submit Button -->
          <div>
            <button v-if="!isLoading" type="submit" :disabled="!isFormComplete"
              :class="{ 'opacity-50 cursor-not-allowed': !isFormComplete, 'hover:bg-indigo-700': isFormComplete }"
              class="flex justify-center w-full p-3 py-2 mb-20 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Continue
            </button>

            <button v-else type="submit" disabled
              class="flex justify-center w-full p-3 py-2 mb-20 text-sm font-medium text-white bg-indigo-400 border border-transparent rounded-md shadow-sm cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Waiting...
            </button>
          </div>
        </form>

        <!-- Display uploaded documents -->
        <div v-else class="space-y-6">
          <!-- Front ID Card Section -->
          <div>
            <label class="block mb-1 text-sm font-medium text-gray-700">Front ID Card</label>
            <div
              class="flex justify-center px-6 pt-5 pb-6 mt-1 border-2 border-gray-300 border-dashed rounded-md">
              <div class="space-y-1 text-center">
                <div class="flex justify-center">
                  <img :src="usDoc.front_image" class="object-contain h-48" alt="Front ID">
                </div>
              </div>
            </div>
          </div>

          <!-- Back ID Card Section -->
          <div>
            <label class="block mb-1 text-sm font-medium text-gray-700">Back ID Card</label>
            <div
              class="flex justify-center px-6 pt-5 pb-6 mt-1 border-2 border-gray-300 border-dashed rounded-md">
              <div class="space-y-1 text-center">
                <div class="flex justify-center">
                  <img :src="usDoc.back_image" class="object-contain h-48" alt="Back ID">
                </div>
              </div>
            </div>
          </div>

          <!-- Selfie Section -->
          <div>
            <label class="block mb-2 text-sm font-medium text-gray-700">Selfie with Photo</label>
            <div
              class="flex justify-center px-6 pt-5 pb-6 mt-1 border-2 border-gray-300 border-dashed rounded-md">
              <div class="space-y-1 text-center">
                <div class="flex justify-center">
                  <img :src="usDoc.selfie_image" class="object-contain h-48" alt="Selfie">
                </div>
              </div>
            </div>
          </div>

          <!-- Next Button -->
          <div>
            <button @click="handleIndentNext"
              class="flex justify-center w-full p-3 mb-40 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed, onBeforeUnmount, nextTick, onMounted } from 'vue';
import NavbarComponent from '@/components/client/NavbarComponent.vue';
import MobileView from './MobileView.vue';
import { useRouter } from 'vue-router';
import UploadService from "../../services/UploadFiles.service";

export default {
  components: {
    NavbarComponent,
    MobileView,
  },
  name: 'KYCForm',

  setup() {
    const frontImage = ref(null);
    const backImage = ref(null);
    const selfieImage = ref(null);
    const isCameraOpen = ref(false);
    const stream = ref(null);
    const frontCard = ref(null);
    const backCard = ref(null);
    const selfieCard = ref(null);
    const isLoading = ref(false);
    const userDoc = ref([{
      front_image: null,
      back_image: null,
      selfie_image: null,
    }]);
    const message = ref('');

    const video = ref(null);
    const canvas = ref(null);

    const router = useRouter();

    // Fetch user documents from the backend
    const fetchUserDoc = async () => {
      try {
        isLoading.value = true;
        const user = JSON.parse(localStorage.getItem('user'));
        const userId = user ? user.id : null;

        if (!userId) {
          console.error('userId not found in localStorage');
          message.value = 'Please log in to view your documents.';
          userDoc.value = [{
            front_image: null,
            back_image: null,
            selfie_image: null,
          }];
          return;
        }

        console.log(`Fetching files for userId: ${userId}`); // Debug log
        const response = await UploadService.getFiles(userId);
        console.log('Raw response from getFiles:', response); // Debug raw response

        const files = response.data || [];
        console.log('Files received from backend:', files);

        let front = null;
        let back = null;
        let selfie = null;

        files.forEach(file => {
          console.log('Processing file:', file); // Debug each file
          if (file.metadata && file.metadata.documentType === 'front_image') {
            front = file.url;
          } else if (file.metadata && file.metadata.documentType === 'back_image') {
            back = file.url;
          } else if (file.metadata && file.metadata.documentType === 'selfie_image') {
            selfie = file.url;
          }
        });

        console.log('Extracted image URLs:', { front, back, selfie });

        userDoc.value = [{
          front_image: front,
          back_image: back,
          selfie_image: selfie,
        }];

      } catch (error) {
        console.error('Error fetching user documents:', error);
        message.value = 'Failed to load documents. Please try again.';
        userDoc.value = [{
          front_image: null,
          back_image: null,
          selfie_image: null,
        }];
      } finally {
        isLoading.value = false;
      }
    };

    onMounted(fetchUserDoc);

    const handleFrontUpload = (event) => {
      const file = event.target.files[0];
      if (file && file.size > 5 * 1024 * 1024) {
        message.value = 'Front ID file size exceeds 5MB.';
        return;
      }
      if (file) {
        frontCard.value = file;
        const reader = new FileReader();
        reader.onload = (e) => {
          frontImage.value = e.target.result;
        };
        reader.readAsDataURL(file);
      }
    };

    const handleBackUpload = (event) => {
      const file = event.target.files[0];
      if (file && file.size > 5 * 1024 * 1024) {
        message.value = 'Back ID file size exceeds 5MB.';
        return;
      }
      if (file) {
        backCard.value = file;
        const reader = new FileReader();
        reader.onload = (e) => {
          backImage.value = e.target.result;
        };
        reader.readAsDataURL(file);
      }
    };

    const handleSelfieUpload = (event) => {
      const file = event.target.files[0];
      if (file && file.size > 5 * 1024 * 1024) {
        message.value = 'Selfie file size exceeds 5MB.';
        return;
      }
      if (file) {
        selfieCard.value = file;
        const reader = new FileReader();
        reader.onload = (e) => {
          selfieImage.value = e.target.result;
        };
        reader.readAsDataURL(file);
      } else {
        selfieCard.value = null;
        selfieImage.value = null;
      }
    };

    const openCamera = async () => {
      if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        try {
          stream.value = await navigator.mediaDevices.getUserMedia({ video: true });
          isCameraOpen.value = true;
          await nextTick();
          if (video.value) {
            video.value.srcObject = stream.value;
          }
        } catch (error) {
          console.error('Error accessing camera:', error);
          message.value = 'Failed to access camera. Please upload a selfie instead.';
          isCameraOpen.value = false;
        }
      }
    };

    const closeCamera = () => {
      if (stream.value) {
        stream.value.getTracks().forEach(track => track.stop());
      }
      isCameraOpen.value = false;
      stream.value = null;
    };

    const takePhoto = () => {
      if (video.value && canvas.value) {
        const context = canvas.value.getContext('2d');
        canvas.value.width = video.value.videoWidth;
        canvas.value.height = video.value.videoHeight;
        context.drawImage(video.value, 0, 0, canvas.value.width, canvas.value.height);

        canvas.value.toBlob((blob) => {
          if (blob.size > 5 * 1024 * 1024) {
            message.value = 'Selfie image size exceeds 5MB.';
            closeCamera();
            return;
          }
          selfieCard.value = blob;
          const reader = new FileReader();
          reader.onload = (e) => {
            selfieImage.value = e.target.result;
          };
          reader.readAsDataURL(blob);
        }, 'image/jpeg');

        closeCamera();
      }
    };

    const isFormComplete = computed(() => {
      return frontCard.value !== null && backCard.value !== null && selfieCard.value !== null;
    });

    const handleSubmit = async () => {
      if (!isFormComplete.value) return;

      isLoading.value = true;
      message.value = '';

      const user = JSON.parse(localStorage.getItem('user'));
      const userId = user ? user.id : null;

      if (!userId) {
        console.error("User ID not found in localStorage.");
        message.value = 'User not logged in or ID missing.';
        isLoading.value = false;
        return;
      }

      try {
        console.log('Uploading files for userId:', userId); // Debug log
        // Upload Front ID
        const frontResponse = await UploadService.upload(frontCard.value, userId, 'front_image', (event) => {
          console.log(`Front ID Upload Progress: ${Math.round((100 * event.loaded) / event.total)}%`);
        });
        console.log('Front ID upload response:', frontResponse); // Debug response

        // Upload Back ID
        const backResponse = await UploadService.upload(backCard.value, userId, 'back_image', (event) => {
          console.log(`Back ID Upload Progress: ${Math.round((100 * event.loaded) / event.total)}%`);
        });
        console.log('Back ID upload response:', backResponse); // Debug response

        // Upload Selfie
        const selfieResponse = await UploadService.upload(selfieCard.value, userId, 'selfie_image', (event) => {
          console.log(`Selfie Upload Progress: ${Math.round((100 * event.loaded) / event.total)}%`);
        });
        console.log('Selfie upload response:', selfieResponse); // Debug response

        message.value = 'Files uploaded successfully!';
        console.log('Files uploaded successfully!');

        // Refetch user documents to update the view
        await fetchUserDoc();

      } catch (error) {
        console.error('Error uploading files:', error);
        message.value = 'Could not upload the files! ' + (error.message || '');
        isLoading.value = false;
      }
    };

    const handleIndentNext = () => {
      router.push('/personal');
    };

    onBeforeUnmount(() => {
      closeCamera();
    });

    return {
      frontImage,
      backImage,
      selfieImage,
      isCameraOpen,
      handleFrontUpload,
      handleBackUpload,
      handleSelfieUpload,
      openCamera,
      closeCamera,
      takePhoto,
      video,
      canvas,
      isFormComplete,
      handleSubmit,
      isLoading,
      userDoc,
      message,
      handleIndentNext,
    };
  },
};
</script>

<style scoped>
/* Add your styles here */
</style>
