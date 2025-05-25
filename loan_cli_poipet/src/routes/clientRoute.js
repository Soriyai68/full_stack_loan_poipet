import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/view/client/HomeView.vue";
import AboutView from "@/view/client/AboutView.vue";
import ProfileView from "@/view/client/ProfileView.vue";
import WalletView from "@/view/client/WalletView.vue";
import LoanView from "@/view/client/LoanView.vue";
import RegisterAuth from "@/view/authentication/RegisterAuth.vue";
import LoginAuth from "@/view/authentication/LoginAuth.vue";
import Personal_InforView from "@/view/client/Personal_InforView.vue";
import BaneficicaryView from "@/view/client/BaneficicaryView.vue";
import LoancontractView from "@/view/client/LoancontractView.vue";
import IdentificationView from "@/view/client/IdentificationView.vue";
import CompleteLoanView from "@/view/client/CompleteLoanView.vue";
import PersionalProfileView from "@/view/client/Personal_InformationProfileView.vue";
import BaneficicaryProfileView from "@/view/client/Baneficicary_ProfileView.vue";
import LoanContactProfileView from "@/view/client/LoanContactProfileView.vue";

const routes = [
  { path: "/", name: "home", component: HomeView },
  { path: "/about", component: AboutView },
  { path: "/profile", name: "profile", component: ProfileView },
  { path: "/wallet", name: "wallet", component: WalletView },
  { path: "/loan", name: "loan", component: LoanView },
  { path: "/register", name: "register", component: RegisterAuth },
  { path: "/login", name: "login", component: LoginAuth },
  { path: "/complete", name: "complete", component: CompleteLoanView },
  {
    path: "/personal",
    name: "personal",
    component: Personal_InforView,

    props: (route) => ({
      data: route.query.data ? JSON.parse(route.query.data) : {}, // Check if data exists before parsing
    }),
  },
  {
    path: "/baneficicary",
    name: "baneficicary",
    component: BaneficicaryView,

    props: (route) => ({
      data: route.query.data ? JSON.parse(route.query.data) : {}, // Check if data exists before parsing
    }),
  },
  {
    path: "/loancontect",
    name: "loancontect",
    component: LoancontractView,

    props: (route) => ({
      data: route.query.data ? JSON.parse(route.query.data) : {}, // Check if data exists before parsing
    }),
  },
  {
    path: "/identification",
    name: "identification",
    component: IdentificationView,

    props: (route) => ({
      data: route.query.data ? JSON.parse(route.query.data) : {}, // Check if data exists before parsing
    }),
  },
  {
    path: "/persionalProfile",
    name: "persionalProfile",
    component: PersionalProfileView,
    
  },

  {
    path: "/baneficicaryProfile",
    name: "baneficicaryProfile",
    component: BaneficicaryProfileView,
  },
  {
    path: "/loancontactProfile",
    name: "loancontactProfile",
    component: LoanContactProfileView,
    props: (route) => ({
      data: route.query.data ? JSON.parse(route.query.data) : {}, // Check if data exists before parsing
    }),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkExactActiveClass:
    "bg-blue-500 px-4 py-1 lg:bg-gray-100  hover:text-white  lg:p-2 text-white rounded-full",

  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth", // Optional for smooth scrolling
      };
    } else {
      return {
        top: 0,
      };
    }
  },
});

export default router;
