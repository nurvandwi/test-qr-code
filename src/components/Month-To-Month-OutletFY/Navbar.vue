<template>
  <div>
    <div class="card text-white justify-content-center">
      <img class="img-Hero" src="../../assets/Header.png" alt="Card image" />
      <div class="card-img-overlay d-flex align-items-center">
        <div class="col mb-4">
          <h1
            class="card-title font18 font-weight-bolder mb-0"
            data-aos="fade-down"
          >
            Hai, {{ distributor_name }}
          </h1>
          <p class="mb-0 font12px font-weight-normal" data-aos="fade-down">
            Berikut jumlah poin perolehan anda.
          </p>
          <div class="d-flex mt-4" data-aos="zoom-in">
            <img class="img-logo" src="../../assets/poin-logo2.png" alt="" />
            <h1
              class="card-title align-self-center font18 font-weight-bolder mb-0 px-2"
            >
              {{ poin_tersedia }} Poin
            </h1>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["distributor_name", "outlet_id", "poin_tersedia"],
  components: {},
  computed: {
    cartItemCount() {
      return this.$store.getters.cartItemCount;
    },
  },
};
</script>

<style scoped>
.card {
  background-color: transparent !important;
  border: none !important;
}
.bg-blue {
  background-color: #013072;
}

.bg-yellow {
  background-color: #ffff00;
}

.bg-orange {
  background-color: #ff5d24;
}

.font23 {
  font-size: 23px;
}

.font30 {
  font-size: 30px;
}

.font14 {
  font-size: 14px;
}

.font18 {
  font-size: 18px;
}

.font20 {
  font-size: 20px;
}

.border {
  border: 1px solid transparent !important;
  border-top-right-radius: 30px;
  border-top-left-radius: 30px;
}

@media only screen and (min-device-width: 320px) and (max-device-width: 1024px) {
}
</style>
