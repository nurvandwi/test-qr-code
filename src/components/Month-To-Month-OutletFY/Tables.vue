<template>
  <div class="container">
    <div id="tablePeriode">
      <div class="row text-center rows-col-3 pb-3" slot="tablePeriode">
        <div
          class="col bg-grey text-white py-2 font16 font-weight-bold font-custom"
        >
          POIN PERIODE BERJALAN
        </div>

        <div
          class="table-bordered col-12 py-2"
          v-for="table in tables.poin_peiode_berjalan"
          :key="table"
        >
          <div class="row text-center">
            <div class="col">
              <h2 class="font12 text-gray font-custom">POIN PEROLEHAN</h2>
            </div>
            <div style="border-right: 1px solid #d3d3d3; height: 22px"></div>
            <div class="col">
              <h2 class="font12 text-gray font-custom">POIN PENUKARAN</h2>
            </div>
          </div>
          <div class="row text-center">
            <div class="col">
              <h2 class="font18 text-black font-weight-bolder">
                {{ table.poin_perolehan }}
              </h2>
            </div>
            <div style="border-right: 1px solid #d3d3d3; height: 18px"></div>
            <div class="col">
              <h2 class="font18 text-black font-weight-bolder">
                {{ table.poin_penukaran }}
              </h2>
            </div>
          </div>
          <hr />
          <div class="row text-center pt-2">
            <div class="col d-flex align-self-center text-center mx-auto justify-content-center" style="border-right: 1px solid #d3d3d3">
              <h2 class="font12 m-0 text-gray font-custom text-center">
              POIN TERSEDIA
              </h2>
            </div>
            <div class="col">
              <h2 class="font18 m-0 text-black font-weight-bolder">
                {{ table.sisa_poin_tersedia }}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="tableJoss">
      <div class="row text-center rows-col-3" slot="tablejoss">
        <div
          class="col bg-red text-white py-2 font16 font-weight-bold font-custom"
        >
          PAKET JOSS
        </div>

        <div
          class="table-bordered col-12 py-2"
          v-for="table in tables.paket_joss"
          :key="table"
        >
          <div class="row text-center">
            <div class="col">
              <h2 class="font12 text-gray font-custom">RATA RATA NASIONAL</h2>
            </div>
            <div style="border-right: 1px solid #d3d3d3; height: 22px"></div>
            <div class="col">
              <h2 class="font12 text-gray font-custom">AKTUAL PENJUALAN</h2>
            </div>
          </div>
          <div class="row text-center">
            <div class="col">
              <h2 class="font18 text-black font-weight-bolder">
                <!-- eslint-disable  -->
                {{ table.rata_rata_nasional }}
              </h2>
            </div>
            <div style="border-right: 1px solid #d3d3d3; height: 18px"></div>
            <div class="col">
              <h2 class="font18 text-black font-weight-bolder">
                {{ table.aktual_penjualan }}
              </h2>
            </div>
          </div>
          <hr />
          <div class="row text-center pt-2">
            <div class="col">
              <h2 class="font12 text-gray font-custom">POIN REWARD</h2>
            </div>
            <div style="border-right: 1px solid #d3d3d3; height: 22px"></div>
            <div class="col">
              <h2 class="font12 text-gray font-custom">% PENCAPAIAN</h2>
            </div>
          </div>
          <div class="row text-center">
            <div class="col">
              <h2 class="font18 text-black font-weight-bolder">
                {{ table.point_reward }}
              </h2>
            </div>
            <div style="border-right: 1px solid #d3d3d3; height: 18px"></div>
            <div class="col">
              <h2 class="font18 text-black font-weight-bolder">
                {{ table.pencapaian }}%
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["tables"],
};
</script>

<style scoped>
.text-ungu {
  color: #41009a;
}

hr {
  margin: 0 0 0.6rem 0;
  border-top: 0.5px solid #d3d3d3;
}

.bg-grey {
  background-color: #717173;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

.bg-red {
  background-color: #e31837;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

.margin-custom {
  margin-top: -2vh;
}

.mt-custom {
  margin-top: -2rem;
}

.table-bordered {
  border: 1px solid #6a813d;
  border-bottom-left-radius: 12px !important;
  border-bottom-right-radius: 12px !important;
}

.text-blue {
  color: #7fceeb;
}

.text-gray {
  color: #6c757d;
}

.text-yellow {
  color: #ffcc00;
}

.font10 {
  font-size: 10px;
}

.font12 {
  font-size: 12px;
}

.font11 {
  font-size: 11px;
}

.font13 {
  font-size: 13px;
}

.font14 {
  font-size: 14px;
}
.font16 {
  font-size: 16px;
}

.mb-quarter {
  margin-bottom: 7rem;
}
.rounded {
  border-top-left-radius: 18px;
  border-top-right-radius: 18px;
}

@media only screen and (min-device-width: 320px) and (max-device-width: 1024px) {
  .margin-custom {
    margin-top: -2vh;
  }

  .font20 {
    font-size: 20px;
  }

  .font17 {
    font-size: 17px;
  }

  .font18 {
    font-size: 18px;
  }
}
</style>
