<template>
  <div>
    <tabs>
      <tab title="Tersedia">
        <div class="mt-3">
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
      </tab>
      <tab title="Terpakai"> </tab>
    </tabs>
  </div>
</template>

<script>
import Tab from "../Main-Component/Tab.vue";
import Tabs from "../Main-Component/Tabs.vue";
import CardVoucher from "../Main-Component/CardVoucher.vue";
export default {
  components: {
    Tab,
    Tabs,
    CardVoucher,
  },
};
</script>

<style>
</style>