<template>
  <swiper
    :spaceBetween="30"
    :pagination="{ clickable: true }"
    :loop="true"
    :autoplay="{ delay: 3000, disableOnInteraction: false }"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide>
      <img
        class="object-contain w-full"
        src="@/assets/slider1.jpg"
        alt="Slide 1"
      />
    </swiper-slide>
    <swiper-slide>
      <img
        class="object-contain w-full"
        src="@/assets/slider2.jpg"
        alt="Slide 2"
      />
    </swiper-slide>
    <swiper-slide>
      <img
        class="object-contain w-full"
        src="@/assets/slider3.jpg"
        alt="Slide 3"
      />
    </swiper-slide>
  </swiper>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

// Define Swiper modules
const modules = [Pagination, Autoplay];
</script>

<style scoped>
.swiper-pagination-bullet {
  background-color: #9b9999 !important; /* Change to your preferred color */
  opacity: 1; /* Make dots fully visible */
}

.swiper-pagination-bullet-active {
  background-color: #0c00e9 !important; /* Active dot color */
}
</style>
