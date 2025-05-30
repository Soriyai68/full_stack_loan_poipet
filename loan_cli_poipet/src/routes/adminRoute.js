import { createRouter, createWebHistory } from 'vue-router';
import AdminHome from '@/view/admin/AdminHome.vue';
import DashBoard from '@/view/admin/DashBoard.vue';
import TestAdmin from '@/view/admin/TestAdmin.vue';
import CustomerView from '@/view/admin//CustomersView.vue';
import ViewCustomerDetail from '@/view/admin/ViewCustomerDetailView.vue'

const routes = [
  {
    path: '/admin',
    name: 'admin',
    component: AdminHome,
    children: [
      { path: '/admin', name: "dashboard", component: DashBoard },
      { path: '/admin', name: "test", component: TestAdmin },
      { path: '/admin', name: "customers", component: CustomerView },
      { path: '/admin/:id', name: "viewCustomer", component: ViewCustomerDetail },

    ]
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkExactActiveClass: 'bg-gray-100 h-10 hover:text-black',
});

router.beforeEach((to, from, next) => {
  const publicPages = ['/login', '/register', '/home']; // Add any other public routes here
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem('user');

  // trying to access a restricted page + not logged in
  if (authRequired && !loggedIn) {
    return next('/login');
  }

  // If logged in, check for admin role for admin routes
  if (loggedIn && to.path.startsWith('/admin')) {
    const user = JSON.parse(loggedIn);
    if (user && user.roles && user.roles.includes('ROLE_ADMIN')) {
      next();
    } else {
      // Not an admin, redirect to home or a 403 page
      next('/'); 
    }
  } else {
    next();
  }
});

export default router;
