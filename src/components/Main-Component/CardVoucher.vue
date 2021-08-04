<template>
  <div class="mb-5">
    <div
      class="card mt-2 p-2 mx-auto"
      style="max-width: 340px"
      v-for="voucher in dataVouchers"
      :key="voucher"
    >
      <div class="row no-gutters">
        <div class="col-2">
          <img
            height="35"
            src="https://img.icons8.com/dotty/80/000000/starred-ticket.png"
          />
        </div>
        <div class="col-10 align-self-center">
          <div class="card-body p-0">
            <h5
              class="card-title"
              style="white-space: nowrap; font-size: 15px; margin: 0"
            >
              {{ voucher.nama_produk }}
            </h5>
            <p class="card-text">
              <small class="text-muted"> {{ voucher.periode }}</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      dataVouchers: [],
    };
  },
  methods: {
    voucherAvailable() {
      axios
        .get(
          `https://pzc.inosis.id/api_pzc_sales_2021/api.php/list-qr-tersedia`,
          {
            headers: {
              token: localStorage.token,
            },
            params: {
              page: this.$route.params.page,
            },
          }
        )

        .then((res) => (this.dataVouchers = res.data.data))
        .catch((err) => console.log(err));
    },
  },
  mounted() {
    this.voucherAvailable();
  },
};
</script>

<style scoped>
.card {
  border: 1.5px solid #d3d3d3 !important;
}
</style>