<template>
  <div>
    <Header
      :contentFor="'QuarterDetails'"
      :outlet_name="OutletData.outlet_name"
      :outlet_point="OutletData.Poin"
      :outlet_rebate="OutletData.Rebate"
    />
    <ListPromosi :contentFor="'QuarterDetails'" />
  </div>
</template>

<script>
import axios from "axios";
import Header from "../components/Main-Component/Header.vue";
import ListPromosi from "../components/Main-Component/ListPromosi.vue";

export default {
  components: {
    Header,
    ListPromosi,
  },
  data() {
    return {
      OutletData: {
        data: [],
      },
    };
  },
  mounted() {
    this.getOutlet();
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
};
</script>

<style></style>
