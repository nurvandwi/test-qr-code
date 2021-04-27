<template>
  <div class="container">
    <Header title="Detail Penukaran" class="pt-3" />
    <TrackRecord :detailTransaksi="detailTransaksi" />
    <DataPengiriman :detailTransaksi="detailTransaksi" />
    <DetailsPenukaran class="mb-5" :detailTransaksi="detailTransaksi" />
  </div>
</template>

<script>
import axios from "axios";
import DataPengiriman from "@/components/Catalog/DataPengiriman.vue";
import DetailsPenukaran from "@/components/Catalog/DetailsPenukaran.vue";
import TrackRecord from "@/components/Catalog/TrackRecord.vue";
import Header from "@/components/Catalog/Header.vue";

export default {
  components: {
    Header,
    TrackRecord,
    DetailsPenukaran,
    DataPengiriman,
  },
  data() {
    return {
      detailTransaksi: [],
    };
  },
  methods: {
    getDetatails() {
      axios
        .get(`${process.env.VUE_APP_URL}detail-transaksi`, {
          params: {
            outlet_id: this.$route.params.outlet_id,
            kode_transaksi: this.$route.params.kode_transaksi,
          },
          headers: {
            token: localStorage.token,
          },
        })
        .then((res) => (this.detailTransaksi = res.data))
        .catch((err) => console.log(err));
    },
  },
  mounted() {
    this.getDetatails();
  },
};
</script>

<style scoped></style>
