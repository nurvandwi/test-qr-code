<template>
  <div>
    <tabs>
      <tab title="Tersedia">
        <div class="mt-3">
          <CardVoucher />
        </div>
      </tab>
      <tab title="Terpakai">
        <VoucherUnavailable />
      </tab>
    </tabs>
  </div>
</template>

<script>
import Tab from "../Main-Component/Tab.vue";
import Tabs from "../Main-Component/Tabs.vue";
import CardVoucher from "../Main-Component/CardVoucher.vue";
import VoucherUnavailable from "../Main-Component/VoucherUnavailable.vue";

export default {
  components: {
    Tab,
    Tabs,
    CardVoucher,
    VoucherUnavailable,
  },
};
</script>

<style scoped>
</style>