<template>
  <div>
    <div class="mt-5" v-if="contentFor === 'home'">
      <h3 class="font14 font-weight-bold mb-0 ml-4">Data Kegiatan</h3>
      <p class="font-12 ml-4">Lengkapi data dibawah ini.</p>
      <div class="col-12">
        <router-link v-bind:to="'/registrasi/' + `${$route.params.outlet_id}`">
          <div
            style="background-color: white"
            class="col shadow1 br text-left d-flex flex-row align-items-center my-3 py-2 px-3"
          >
            <img class="imagecustom pr-3" src="../../assets/icon-ktp.png" alt />

            <div class="align-items-center">
              <h5
                class="font14 formh2 caption4 p-0 m-0 font-weight-bold"
                v-bind:class="status == 0 ? 'text-danger' : 'text-dark'"
              >
                Data E-KTP & Data Bank
              </h5>
              <p
                v-if="status == 0"
                class="font-10 mb-0"
                v-bind:class="status == 0 ? 'text-danger' : 'text-dark'"
              >
                Mohon lengkapi data anda.
              </p>
            </div>
            <img
              class="iconcustom ml-auto"
              src="https://i.imgur.com/5qg2kk5.png"
              alt
            />
          </div>
        </router-link>
      </div>
      <div class="col-12" v-if="outletData.program_promo_sell_out !== 0">
        <a href="https://mvpromosi2021.inosis.biz/" target="_blank">
          <div
            style="background-color: white"
            class="col shadow1 text-left br d-flex flex-row align-items-center mt-3 mb-0 py-2 px-3"
          >
            <img class="imagecustom pr-3" src="../../assets/Promosi.png" alt />

            <div class="align-items-center">
              <h5 class="font14 caption4 p-0 m-0 text-dark font-weight-bold">
                Promosi Sell Out
              </h5>
            </div>
            <img
              class="iconcustom ml-auto"
              src="https://i.imgur.com/5qg2kk5.png"
              alt
            />
          </div>
        </a>
      </div>

      <div class="col-12" v-if="outletData.program_mbd !== 0">
        <a href="http://mbdoutlet2021.inosis.biz/">
          <div
            style="background-color: white"
            class="col shadow1 text-left br d-flex flex-row align-items-center mt-3 mb-0 py-2 px-3"
          >
            <img
              class="imagecustom pr-3"
              src="../../assets/camera-outlet.png"
              alt
            />

            <div class="align-items-center">
              <h5 class="font14 caption4 p-0 m-0 text-dark font-weight-bold">
                Mondelez Blocking Display
              </h5>
            </div>
            <img
              class="iconcustom ml-auto"
              src="https://i.imgur.com/5qg2kk5.png"
              alt
            />
          </div>
        </a>
      </div>
    </div>
    <div class="mb-3" v-if="contentFor === 'QuarterDetails'">
      <h3 class="font16 font-weight-bold mt-2 mb-0 ml-4">Data Penjualan</h3>
      <p class="font-12 ml-4">Pilih Data Penjualan Anda :</p>
      <div class="col-12">
        <router-link v-bind:to="'/MonthToYear/' + `${$route.params.outlet_id}`">
          <div
            style="background-color: white"
            class="col shadow1 br text-left d-flex flex-row align-items-center my-3 py-2 px-3"
          >
            <img class="imagecustom pr-3" src="../../assets/icon-ktp.png" alt />

            <div class="align-items-center line-height">
              <h5
                class="font14 py-1 formh2 caption4 p-0 m-0 text-dark font-weight-bold"
              >
                Outlet Retail
              </h5>
              <p class="text-dark m-auto">
                <small
                  >Akumulasi aktual penjualan bulan berjalan vs Target penjualan
                  per tahun
                </small>
              </p>
            </div>
            <img
              class="iconcustom ml-auto"
              src="https://i.imgur.com/5qg2kk5.png"
              alt
            />
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
/* eslint-disable */

export default {
  props: ["contentFor", "outletData"],
  data() {
    return {
      currenttime: "",
    };
  },
  created() {
    setInterval(this.getNow);
  },
  methods: {
    getNow: function () {
      const today = new Date();

      const date = today.getMonth() + 1;

      const dateTime = date;

      this.currenttime = dateTime;
    },
  },
};
</script>
<style scoped>
.imagecustom {
  width: 15%;
}

.danger {
  color: red;
}

.shadow1 {
  box-shadow: 0 0.1rem 0.3rem rgba(182, 189, 255, 0.308) !important;
  border: 0.7px solid #dedede;
}

.br {
  border-radius: 15px;
}

.iconcustom {
  background-size: cover;
  height: 15px;
}

@media screen and (max-width: 1000px) {
  .imagecustom {
    width: 20%;
  }

  .font16 {
    font-size: 16px;
  }

  .font14 {
    font-size: 14px;
  }

  .font-10 {
    font-size: 10px;
  }

  .font-12 {
    font-size: 12px;
  }
}
</style>
