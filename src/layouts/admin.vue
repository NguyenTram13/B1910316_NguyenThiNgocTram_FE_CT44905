<template>
  <div class="">
    <!-- <body class="hold-transition dark-mode sidebar-mini layout-fixed layout-navbar-fixed layout-footer-fixed"> -->
    <div class="wrapper">
      <!-- Preloader -->
      <!-- <div
        class="preloader flex-column justify-content-center align-items-center"
      >
        <img
          class="animation__wobble"
          src="dist/img/AdminLTELogo.png"
          alt="AdminLTELogo"
          height="60"
          width="60"
        />
      </div> -->

      <NavAdmin />
      <!-- /.navbar -->

      <!-- Main Sidebar Container -->
      <SidebarAdmin />

      <!-- Content Wrapper. Contains page content -->
      <div class="content-wrapper">
        <!-- Content Header (Page header) -->
        <div class="content-header">
          <div class="container-fluid">
            <div class="mb-2 row">
              <div class="col-sm-6">
                <h1 class="m-0 text-start">Dashboard v2</h1>
              </div>
              <!-- /.col -->
              <div class="col-sm-6">
                <ol class="breadcrumb float-sm-right">
                  <li class="breadcrumb-item"><a href="#">Home</a></li>
                  <li class="breadcrumb-item active">Dashboard v2</li>
                </ol>
              </div>
              <!-- /.col -->
            </div>
            <!-- /.row -->
          </div>
          <!-- /.container-fluid -->
        </div>
        <!-- /.content-header -->

        <!-- Main content -->
        <section class="content">
          <div class="container-fluid">
            <!-- Info boxes -->
            <slot />

            <!-- /.row -->
          </div>
          <!--/. container-fluid -->
        </section>
        <!-- /.content -->
      </div>
      <!-- /.content-wrapper -->

      <!-- Control Sidebar -->
      <aside class="control-sidebar control-sidebar-dark">
        <!-- Control sidebar content goes here -->
      </aside>
      <!-- /.control-sidebar -->

      <!-- Main Footer -->
      <FooterAdmin />
    </div>
  </div>
</template>

<script>
import "../assets/admin/plugins/jquery/jquery.min.js";
import "../assets/admin/plugins/bootstrap/js/bootstrap.bundle.min.js";
import "../assets/admin/plugins/overlayScrollbars/js/jquery.overlayScrollbars.min.js";
import "../assets/admin/dist/js/adminlte.js";
import "../assets/admin/plugins/jquery-mousewheel/jquery.mousewheel.js";
import "../assets/admin/plugins/raphael/raphael.min.js";
import "../assets/admin/plugins/jquery-mapael/jquery.mapael.min.js";
import "../assets/admin/plugins/jquery-mapael/maps/usa_states.min.js";
import "../assets/admin/plugins/chart.js/Chart.min.js";
import "../assets/admin/dist/js/demo.js";
import "../assets/admin/dist/js/pages/dashboard2.js";

import NavAdmin from "@/components/NavAdmin.vue";
import SidebarAdmin from "@/components/SidebarAdmin.vue";
import FooterAdmin from "@/components/FooterAdmin.vue";
import Swal from "sweetalert2";

export default {
  components: {
    NavAdmin: NavAdmin,
    SidebarAdmin: SidebarAdmin,
    FooterAdmin: FooterAdmin,
  },
  created() {
    if (this.$store.state.auth.user.role != "admin") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Bạn không có quyền truy cập!",
        footer: '<a href="">Why do I have this issue?</a>',
      });
      this.$router.push({ name: "login" });
    }
  },
};
</script>

<style scrop>
@import "../assets/admin/plugins/fontawesome-free/css/all.min.css";
@import "../assets/admin/plugins/overlayScrollbars/css/OverlayScrollbars.min.css";
@import "../assets/admin/dist/css/adminlte.min.css";
</style>
