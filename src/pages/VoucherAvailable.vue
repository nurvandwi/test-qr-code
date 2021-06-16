<template>
  <div>
    <Header :title="'Voucher Cashback'" />
    <Demo class="mt-custom" />
  </div>
</template>

<script>
import Header from "../components/Catalog/Header.vue";
import Demo from "../components/Main-Component/Demo.vue";
export default {
  components: { Header, Demo },
};
</script>

<style scoped>
.mt-custom {
  margin-top: 5rem;
}
/deep/ .backtheme {
  background-color: #b30000;
}
</style>