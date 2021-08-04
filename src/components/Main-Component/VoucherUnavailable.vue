<template>
  <div class="mb-5">
    <div
      class="card mt-3 shadow-lg mx-auto"
      style="
        background: linear-gradient(to right, #a2a2a2, #5f5f5f);
        max-width: 342px;
        max-height: 34vh;
      "
      v-for="voucher in dataVouchers"
      :key="voucher"
    >
      <div class="container">
        <div class="row text-white">
          <div class="col-8 p-3">
            <h6 class="m-0">Voucher Cashback</h6>
            <p class="font-weight-bold m-0" style="font-size: 20px">
              {{ voucher.nama_produk }}
            </p>
          </div>
          <div class="col-4 pt-3 pl-4">
            <img height="30" src="../../assets/pz.png" />
          </div>
        </div>
      </div>
      <div class="d-flex">
        <div class="col-6">
          <div class="font-weight-thin text-white" style="font-size: 13px">
            {{ voucher.outlet_id }} - {{ voucher.outlet_name }}
          </div>
          <div
            class="font-weight-bold float-left text-white py-2"
            style="font-size: 12px"
          >
            Periode:
            <span class="font-weight-bold"> {{ voucher.periode }}</span>
          </div>
        </div>
        <div class="col-6 mb-3 ml-0">
          <div
            class="float-left text-center"
            style="
              background: white;
              padding: 5px;
              border-radius: 11px;
              font-size: 12px;
            "
          >
            <span style="font-size: 12px">Kode Voucher </span><br />
            {{ voucher.kode_qr }}
            <span> {{ voucher.tgl_scan }}</span>
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
    getVoucher() {
      axios
        .get(
          `https://pzc.inosis.id/api_pzc_sales_2021/api.php/list-qr-terpakai`,
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
    this.getVoucher();
  },
};
</script>

<style>
</style>