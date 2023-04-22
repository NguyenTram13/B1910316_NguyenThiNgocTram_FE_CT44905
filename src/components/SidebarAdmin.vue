<template>
  <div>
    <aside class="main-sidebar sidebar-dark-primary elevation-4">
      <!-- Brand Logo -->
      <a href="index3.html" class="brand-link">
        <img
          src="../assets/admin/dist/img/AdminLTELogo.png"
          alt="AdminLTE Logo"
          class="brand-image img-circle elevation-3"
          style="opacity: 0.8"
        />
        <span class="brand-text font-weight-light">AdminLTE 3</span>
      </a>

      <!-- Sidebar -->
      <div class="sidebar">
        <!-- Sidebar user panel (optional) -->
        <div class="user-panel mt-3 pb-3 mb-3 d-flex">
          <div class="image">
            <img
              :src="IMAGE_SERVER + user.avatar"
              class="img-circle elevation-2"
              alt="User Image"
            />
          </div>
          <div class="info">
            <a href="#" class="d-block">{{
              user.firstName + " " + user.lastName
            }}</a>
          </div>
        </div>

        <!-- SidebarSearch Form -->
        <div class="form-inline">
          <div class="input-group" data-widget="sidebar-search">
            <input
              class="form-control form-control-sidebar"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <div class="input-group-append">
              <button class="btn btn-sidebar">
                <i class="fas fa-search fa-fw"></i>
              </button>
            </div>
          </div>
        </div>

        <!-- Sidebar Menu -->
        <nav class="mt-2">
          <ul
            class="nav nav-pills nav-sidebar flex-column"
            data-widget="treeview"
            role="menu"
            data-accordion="false"
          >
            <!-- Add icons to the links using the .nav-icon class
               with font-awesome or any other icon font library -->
            <li class="nav-item">
              <router-link
                :to="{
                  name: '/admin/dashboard',
                }"
                class="nav-link"
                :class="{
                  active: '/admin/dashboard' === routeCurrent.fullPath,
                }"
              >
                <i class="nav-icon fas fa-tachometer-alt"></i>
                <p>Dashboard</p>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link
                :to="{
                  name: '/admin/accounts',
                }"
                class="nav-link"
                :class="{
                  active: '/admin/accounts' === routeCurrent.fullPath,
                }"
              >
                <i class="fas nav-icon fa-user-circle"></i>
                <p>
                  Tài khoản
                  <span class="right badge badge-danger">New</span>
                </p>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link
                :to="{
                  name: '/admin/province',
                }"
                class="nav-link"
                :class="{
                  active: '/admin/province' === routeCurrent.fullPath,
                }"
              >
                <i class="fas fa-frog nav-icon"></i>
                <p>Tỉnh thành</p>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link
                :to="{
                  name: '/admin/hotel',
                }"
                class="nav-link"
                :class="{
                  active: '/admin/hotel' === routeCurrent.fullPath,
                }"
              >
                <i class="fas fa-hotel nav-icon"></i>
                <p>Khách sạn</p>
              </router-link>
            </li>
          </ul>
        </nav>
        <!-- /.sidebar-menu -->
      </div>
      <!-- /.sidebar -->
    </aside>
  </div>
</template>

<script>
import { IMAGE_SERVER } from "@/constants/index";

export default {
  data() {
    return {
      routeCurrent: this.$route,
      user: "",
      IMAGE_SERVER,
    };
  },
  created() {
    this.routeCurrent = this.$route.href;
    console.log(this.$store.state.auth);
    this.user = this.$store.state.auth.user;
  },
};
</script>
