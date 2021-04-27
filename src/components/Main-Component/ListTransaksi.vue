<template>
  <div class="mt-5 pt-0">
    <div
      class="col-12 align-self-center font14 bg-blue d-flex justify-content-between font-weight-bold"
    >
      <h3 class="font14 m-0 align-self-center font-weight-bold py-0 px-2">
        List Transaksi
      </h3>
      <router-link
        class="text-white"
        :to="'/TransactionProduct/' + `${$route.params.outlet_id}`"
      >
        <h3
          class="rounded-pill m-0 font14 py-2 px-3 font-weight-bold bg-purple"
        >
          Lihat Semua
        </h3>
      </router-link>
    </div>
    <listItem :contentFor="'ListTransaksi'" :alltransaction="myLastArray" />
  </div>
</template>
<script>
import axios from "axios";
import listItem from "@/components/Catalog/ListItem.vue";
export default {
  data() {
    return {
      alltransaction: {
        data: [],
      },
    };
  },
  components: {
    listItem,
  },
  methods: {
    allItem() {
      axios
        .get(`${process.env.VUE_APP_URL}view_transaksi`, {
          params: {
            outlet_id: this.$route.params.outlet_id,
          },
          headers: {
            token: localStorage.token,
          },
        })
        .then((res) => {
          this.alltransaction = res.data;
        })
        .catch((err) => console.log(err));
    },
  },
  computed: {
    filterArray() {
      let arrData = this.alltransaction.data.length;
      let filterData = this.alltransaction.data.slice(arrData - 3, arrData);
      return filterData;
    },
    myLastArray() {
      if (!Array.isArray(this.alltransaction.data)) {
        return [];
      }
      // let length = this.alltransaction.data.length
      // return this.alltransaction.data.slice(length - 5, length)
      return this.alltransaction.data.slice(0, 5);
    },
  },
  mounted() {
    this.allItem();
  },
};
</script>
<style scoped>
.bg-purple {
  background-color: #e3eeff;
  color: #4e37b2;
}

.font14 {
  font-size: 14px;
}
.font12 {
  font-size: 12px;
}
@media screen and (max-width: 1000px) {
  .font16 {
    font-size: 16px;
  }
}
</style>
