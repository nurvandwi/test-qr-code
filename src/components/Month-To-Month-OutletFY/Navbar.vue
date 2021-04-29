<template>
  <div>
    <div class="bg-blue bordered">
      <div class="card-body d-flex">
        <img
          src="../../assets/COG-LOGO-Joss_Retail_salesman.png"
          height="80"
          alt=""
          srcset=""
        />
        <div class="align-self-center mx-3">
          <p class="card-text text-white m-0 font30">{{ outlet_id }}</p>
          <p class="card-text text-white font14">
            {{ distributor_name }}
          </p>
        </div>
      </div>
      <div class="border bg-yellow py-2">
        <div class="d-flex justify-content-center">
          <img src="../../assets/coins3.svg" style="width: 20px" alt="" />
          <p
            class="px-4 m-0 font18 align-self-center font-weight-bold text-dark"
          >
            POIN TERSEDIA
          </p>
          <p class="border-right m-0 align-self-center"></p>
          <div class="d-flex">
            <p
              class="m-0 align-self-center px-2 font-weight-bold text-dark font20"
            >
              {{ poin_tersedia }}
            </p>
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
