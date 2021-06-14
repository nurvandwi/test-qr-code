<template>
  <div class="container">
    <Header :title="'Voucher Cashback'" />
    <div class="mb-custom">
      <CardVoucher
        :title="'Voucher Cashback @Rp.100.000'"
        :subtitle="'Periode: Januari 2021'"
      />
      <CardVoucher
        :title="'Voucher Cashback @Rp.50.000'"
        :subtitle="'Periode: Januari 2021'"
      />
      <CardVoucher
        :title="'Voucher Cashback @Rp.25.000'"
        :subtitle="'Periode: Januari 2021'"
      />
      <CardVoucher
        :title="'Voucher Cashback @Rp.100.000'"
        :subtitle="'Periode: Januari 2021'"
      />
    </div>
  </div>
</template>

<script>
import Header from "../components/Catalog/Header.vue";
import CardVoucher from "../components/Main-Component/CardVoucher.vue";
export default {
  components: { CardVoucher, Header },
};
</script>

<style scoped>
.mb-custom {
  margin-top: 5rem;
}
/deep/ .backtheme {
  background-color: #b30000;
}
</style>