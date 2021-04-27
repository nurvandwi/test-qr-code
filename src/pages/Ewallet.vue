<template>
  <div class="mx-0">
    <Header title="E-Wallet & Pulsa" />
    <CategoriesEwallet />
    <dataEwallet :status="OutletData.status_registrasi" />
  </div>
</template>

<script>
import axios from "axios";
import Header from "../components/Catalog/Header";
import CategoriesEwallet from "../components/Catalog/CategoriesEwallet";
import dataEwallet from "../components/Catalog/dataEwallet";
export default {
  components: {
    Header,
    CategoriesEwallet,
    dataEwallet,
  },
  data() {
    return {
      OutletData: {
        data: [],
      },
    };
  },
  methods: {
    getOutlet() {
      axios
        .get(`${process.env.VUE_APP_URL}status-poin-rebate`, {
          params: {
            outlet_id: this.$route.params.outlet_id,
          },
          headers: {
            token: localStorage.token,
          },
        })
        .then((res) => (this.OutletData = res.data.data))
        .catch((err) => console.log(err));
    },
  },
  mounted() {
    this.getOutlet();
  },
};
</script>

<style scoped></style>
