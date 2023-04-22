import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Dashboard from "../views/admin/Dashboard.vue";
import ListAccount from "../views/admin/account/ListAccount.vue";
import CreateAccount from "../views/admin/account/CreateAccount.vue";
import EditAccount from "../views/admin/account/EditAccount.vue";
import Forbbiden from "../views/403.vue";
import ListProvince from "../views/admin/province/ListProvince.vue";
import AddProvince from "../views/admin/province/AddProvince.vue";
const routes = [
  {
    path: "/home",
    name: "home",
    meta: {
      layout: "default",
    },
    component: Home,
  },
  {
    path: "/home#khachsan",
    name: "home-khachsan",
    meta: {
      layout: "default",
    },
    component: Home,
  },
  {
    path: "/",
    name: "home-default",
    meta: {
      layout: "default",
    },
    component: Home,
  },
  {
    path: "/hotel/:id",
    name: "hotel",
    meta: {
      layout: "default",
    },
    component: () => import("@/views/DetailHotel.vue"),
  },
  {
    path: "/admin/dashboard",
    name: "/admin/dashboard",
    meta: {
      layout: "admin",
    },
    component: Dashboard,
  },
  {
    path: "/admin/accounts",
    name: "/admin/accounts",
    meta: {
      layout: "admin",
    },
    component: ListAccount,
  },
  {
    path: "/admin/account/create",
    name: "/account/create",
    meta: {
      layout: "admin",
    },
    component: CreateAccount,
  },
  {
    path: "/admin/account/:id",
    name: "/account/edit",
    meta: {
      layout: "admin",
    },
    component: EditAccount,
  },
  {
    path: "/admin/province",
    name: "/admin/province",
    meta: {
      layout: "admin",
    },
    component: ListProvince,
  },
  {
    path: "/admin/province/create",
    name: "/admin/province/create",
    meta: {
      layout: "admin",
    },
    component: AddProvince,
  },
  {
    path: "/admin/province/:id",
    name: "/province/edit",
    meta: {
      layout: "admin",
    },
    component: () => import("../views/admin/province/EditProvince.vue"),
  },
  {
    path: "/admin/hotel/create",
    name: "/hotel/create",
    meta: {
      layout: "admin",
    },
    component: () => import("../views/admin/hotel/AddHotel.vue"),
  },
  {
    path: "/admin/hotel",
    name: "/admin/hotel",
    meta: {
      layout: "admin",
    },
    component: () => import("../views/admin/hotel/ListHotel.vue"),
  },
  {
    path: "/admin/hotel/:id",
    name: "/hotel/edit",
    meta: {
      layout: "admin",
    },
    component: () => import("../views/admin/hotel/EditHotel.vue"),
  },
  {
    path: "/login",
    name: "login",
    meta: {
      layout: "auth",
    },
    component: Login,
  },
  {
    path: "/403",
    name: "403",
    meta: {
      layout: "default",
    },
    component: Forbbiden,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "notfound",
    component: () => import("../views/NotFound.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
