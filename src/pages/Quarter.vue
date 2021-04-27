<template>
  <div class="container">
    <Quarter
      :contentFor="'Quarter'"
      :sisa_point="points.sisa_point"
      :nama_outlet="points.outlet_name"
      :id_outlet="points.outlet_id"
      :saldo_rebate="points.saldo_rebate"
    />
    <DetailPenjualan
      :contentFor="'Quarter'"
      title="PENJUALAN PER QUARTER"
      class="mt-custom"
      :historikal="points.total_historikal_penjualan"
      :aktual="points.total_aktual_penjualan"
      :selisih_penjualan="points.total_selisih_penjualan"
      :target_penjualan="points.total_target_penjualan"
      :ratio="points.total_ratio_pencapaian"
    />
    <Poin
      :contentFor="'Quarter'"
      :perolehan="points.total_perolehan"
      :poin_carry_over="points.poin_carry_over"
      :poin_tersedia="points.total_poin_tersedia"
      :penukaran_poin="points.total_penukaran_poin"
      :sisa_poin="points.sisa_point"
      title="POIN PER QUARTER"
      class="mt-3"
    />
    <Tarif
      :contentFor="'Quarter'"
      :rebate_medio="points.total_rebate_medio"
      :rebate_bulanan="points.total_rebate_bulanan"
      :tarif_medio="points.tarif_rebate_medio"
      :tarif_bulanan="points.tarif_rebate"
      :total_rebate="points.total_rebate"
      :tarif_quarter="points.tarif_rebate_quarter"
      :rebate_quarter="points.total_rebate_quarter"
      :tarif_rebate_quarter="points.tarif_rebate_quarter"
      :saldo_rebate="points.saldo_rebate"
      :transfer_rebate="points.total_transfer_rebate"
      title
      class="mt-3"
    />
    <BulanTransaksi :contentFor="'Quarter'" />
    <div></div>
  </div>
</template>

<script>
import axios from "axios";
import Quarter from "@/components/Quarter/Quarter.vue";
import DetailPenjualan from "@/components/Quarter/DetailPenjualan.vue";
import Poin from "@/components/Quarter/Poin.vue";
import BulanTransaksi from "@/components/Quarter/BulanTransaksi.vue";
import Tarif from "@/components/Quarter/Tarif.vue";

export default {
  components: {
    Quarter,
    DetailPenjualan,
    Poin,
    BulanTransaksi,
    Tarif,
  },
  data() {
    return {
      points: {
        data: [],
        data_rebate: [],
      },
    };
  },
  methods: {
    normalize(badNumeric) {
      return Number(badNumeric.split(",").join(""));
    },
    allQuarter() {
      axios
        .get(`${process.env.VUE_APP_URL}dashboard-outlet`, {
          headers: {
            version: this.$route.params.version,
            token: localStorage.token,
          },
          params: {
            txtKodeOutlet: this.$route.params.outlet_id,
          },
        })

        .then((res) => (this.points = res.data))
        .catch((err) => console.log(err));
    },
    monthToYear() {
      axios
        .get(`${process.env.VUE_APP_URL}dashboard-outlet-mty`, {
          params: {
            txtKodeOutlet: this.$route.params.outlet_id,
          },
          headers: {
            token: localStorage.token,
          },
        })

        .then((res) => (this.year = res.data))
        .catch((err) => console.log(err));
    },
  },
  mounted() {
    this.allQuarter();
    this.MonthToYear();
  },
};
</script>

<style scoped>
.mb-custom {
  margin-bottom: 4rem;
}

.mt-custom {
  margin-top: 2rem;
}

@media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
  .mt-custom {
    margin-top: 22vh;
  }
}
</style>
