<template>
  <div class="m-0 p-0">
    <div
      class="card text-white justify-content-center"
      v-if="contentFor === 'categories'"
    >
      <img
        class="img-Hero"
        src="../../assets/Hero-Banner.png"
        alt="Card image"
      />
      <div class="card-img-overlay d-flex align-items-center">
        <div class="col-md-12">
          <h1 class="card-title font18 font-weight-bolder">Kategori Reward</h1>
          <p class="card-text font14">
            Tukar Poin anda,
            <br />dengan list reward dibawah ini
          </p>
          <h1 style="width: 43px; border: 2px #e8e8e8 solid"></h1>
        </div>
      </div>
    </div>
    <div
      class="card text-white justify-content-center"
      v-if="contentFor === 'home'"
    >
      <img class="img-Hero" src="../../assets/Header.png" alt="Card image" />
      <div class="card-img-overlay d-flex align-items-center">
        <div class="col mb-4">
          <h1
            class="card-title font18 font-weight-bolder mb-0"
            data-aos="fade-down"
          >
            Hai, {{ points.outlet_name }}
          </h1>
          <p class="mb-0 font12px font-weight-normal" data-aos="fade-down">
            Berikut jumlah poin perolehan anda.
          </p>
          <div class="d-flex mt-4" data-aos="zoom-in">
            <img class="img-logo" src="../../assets/poin-logo.png" alt="" />
            <p class="font18 align-self-center mb-0 px-2">
              {{ points.Poin_text }} Poin
            </p>
          </div>
        </div>
      </div>
    </div>
    <div
      class="card text-white justify-content-center"
      v-if="contentFor === 'QuarterDetails'"
    >
      <img
        class="img-Hero"
        src="../../assets/Header-new.png"
        alt="Card image"
      />
      <div class="card-img-overlay d-flex align-items-center">
        <div class="col mb-4">
          <h1
            class="card-title font18 font-weight-bolder mb-0"
            data-aos="fade-down"
          >
            Hai, {{ outlet_name }}
          </h1>
        </div>
      </div>
    </div>
    <div v-if="contentFor === 'Login'">
      <div class="row d-flex mt-2">
        <div class="col-md-8 col-7 align-self-center">
          <h1 class="font-26 font-19 font-weight-bold">Hi, Selamat Datang</h1>
          <p class="font12px">Di Progam Distributor</p>
        </div>
        <div class="col-md-4 col-5 p-0 m-0 d-flex">
          <img
            src="../../assets/pz.png"
            class="img-fluid w-logo-responsive2 ml-auto mr-3 align-self-center"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: ["contentFor", "points"],
};
</script>

<style scoped>
.img-logo {
  width: 5%;
}

.card {
  border: none !important;
}

.img-Hero {
  max-width: 100% !important;
  min-height: auto !important;
}

@media screen and (max-width: 1000px) {
  .img-logo {
    width: 8%;
    height: 10%;
  }

  .img-Hero {
    max-width: 100vw;
    min-height: 10vh !important;
  }

  .font12px {
    font-size: 12px;
  }

  .font18 {
    font-size: 18px;
  }

  .font14 {
    font-size: 14px;
  }

  .font-26 {
    font-size: 26px;
  }

  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    .font-19 {
      font-size: 19px;
    }
  }
}
</style>
