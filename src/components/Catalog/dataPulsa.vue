<template>
  <div class="container mt-4" data-aos="fade-up">
    <h3 class="font16 m-0" style="font-weight: bolder">Input Data Pulsa</h3>
    <p class="font14">Masukkan nomor handphone untuk di Top Up</p>
    <div class="d-flex align-items-center"></div>

    <form>
      <div class="form-row mt-3">
        <div class="col-8 col-md-8">
          <input
            v-model="no_hp"
            type="number"
            class="form-control"
            placeholder="Nomor Pulsa"
            style="background-color: white !important"
          />
        </div>
        <div class="col-md-4 col-4 d-flex align-items-center">
          <div
            v-if="
              no_hp.slice(0, 4) === '0817' ||
              no_hp.slice(0, 4) === '0818' ||
              no_hp.slice(0, 4) === '0819' ||
              no_hp.slice(0, 4) === '0859' ||
              no_hp.slice(0, 4) === '0877' ||
              no_hp.slice(0, 4) === '0878' ||
              no_hp.slice(0, 4) === '0879' ||
              no_hp.slice(0, 4) === '0817'
            "
          >
            <img src="../../assets/xl.png" class="icon-pulsa pl-2" alt="..." />
          </div>
          <div
            v-else-if="
              no_hp.slice(0, 4) === '0814' ||
              no_hp.slice(0, 4) === '0815' ||
              no_hp.slice(0, 4) === '0816' ||
              no_hp.slice(0, 4) === '0855' ||
              no_hp.slice(0, 4) === '0856' ||
              no_hp.slice(0, 4) === '0857' ||
              no_hp.slice(0, 4) === '0858'
            "
          >
            <img
              src="../../assets/indosat.png"
              class="icon-pulsa pl-2"
              alt="..."
            />
          </div>
          <div
            v-else-if="
              no_hp.slice(0, 4) === '0811' ||
              no_hp.slice(0, 4) === '0812' ||
              no_hp.slice(0, 4) === '0813' ||
              no_hp.slice(0, 4) === '0821' ||
              no_hp.slice(0, 4) === '0822' ||
              no_hp.slice(0, 4) === '0823' ||
              no_hp.slice(0, 4) === '0851' ||
              no_hp.slice(0, 4) === '0852' ||
              no_hp.slice(0, 4) === '0853'
            "
          >
            <img
              src="../../assets/icon-simpati.png"
              class="icon-pulsa px-0"
              alt="..."
            />
          </div>
          <div
            v-else-if="
              no_hp.slice(0, 4) === '0831' ||
              no_hp.slice(0, 4) === '0832' ||
              no_hp.slice(0, 4) === '0838'
            "
          >
            <img
              src="../../assets/icon-axis.png"
              class="icon-pulsa px-0"
              alt="..."
            />
          </div>
          <div
            v-else-if="
              no_hp.slice(0, 4) === '0881' ||
              no_hp.slice(0, 4) === '0882' ||
              no_hp.slice(0, 4) === '0883' ||
              no_hp.slice(0, 4) === '0884' ||
              no_hp.slice(0, 4) === '0885' ||
              no_hp.slice(0, 4) === '0886' ||
              no_hp.slice(0, 4) === '0887' ||
              no_hp.slice(0, 4) === '0888' ||
              no_hp.slice(0, 4) === '0889'
            "
          >
            <img
              src="../../assets/icon-smartfren.png"
              class="icon-pulsa px-0"
              alt="..."
            />
          </div>
          <div
            v-else-if="
              no_hp.slice(0, 4) === '0895' ||
              no_hp.slice(0, 4) === '0896' ||
              no_hp.slice(0, 4) === '0897' ||
              no_hp.slice(0, 4) === '0898' ||
              no_hp.slice(0, 4) === '0899'
            "
          >
            <img
              src="../../assets/icon-3.png"
              class="icon-pulsa px-0"
              alt="..."
            />
          </div>
          <div v-else></div>
        </div>
        <div class="col-md-12 mt-3" v-if="no_hp.length >= 10">
          <div class="row px-2 pt-2">
            <div
              class="col-md-6 col-6 px-2 pb-3"
              v-for="(list, i) in nominalPulsa.data"
              :value="list.id"
              :key="i"
            >
              <button
                class="btn py-0 col-12 col-md-12 px-0"
                @click="
                  addToPulsa(
                    list.kd_produk,
                    list.poin,
                    list.poin_text,
                    points.Poin
                  )
                "
              >
                <router-link
                  :class="{ nonActive: list.poin > points.Poin }"
                  v-bind:to="
                    '/pulsadetails/' +
                    `${$route.params.outlet_id}/` +
                    list.nominal
                  "
                  style="color: #fff"
                  class="mx-auto font18 text-dark"
                >
                  <div class="card border w-100">
                    <div class="card-body p-3">
                      <h5
                        class="card-title text-center m-0"
                        :class="{ danger: list.poin > points.Poin }"
                      >
                        {{ list.nominal_text }}
                      </h5>
                    </div>
                  </div>
                </router-link>
              </button>
            </div>
          </div>
        </div>
        <div v-else></div>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  props: ["status"],
  data() {
    return {
      no_hp: [],
      nominal: [],
      selected: "Pulsa",
      options: [
        { text: "Pilih Jenis Provider", value: "Pulsa" },
        { text: "Indosat", value: "Indosat" },
        { text: "Xl", value: "Xl" },
      ],
      nominalPulsa: [],
    };
  },
  methods: {
    addToPulsa(kd_produk, poin, poin_text, points) {
      console.log(poin);
      if (this.status != 0) {
        if (points >= poin) {
          this.$store.dispatch("addPulsaToCart", {
            no_hp: this.no_hp,
            nominal: this.$route.params.nominal,
            kd_produk,
            poin,
            poin_text,
            quantity: 1,
          });
        } else {
          alert("Poin anda tidak cukup");
        }
      } else {
        alert("Data anda belum lengkap");
      }
    },
    getNominalPulsa() {
      axios
        .get(`${process.env.VUE_APP_URL}list-pulsa-hadiah`, {
          params: {
            outlet_id: this.$route.params.outlet_id,
          },
          headers: {
            token: localStorage.token,
          },
        })
        .then((res) => (this.nominalPulsa = res.data))
        .catch((err) => console.log(err));
    },
  },
  mounted() {
    this.getNominalPulsa();
    this.$store.dispatch("getPoin", {
      outlet_id: this.$route.params.outlet_id,
      token: localStorage.token,
    });
  },
  computed: {
    points() {
      return this.$store.state.points;
    },
  },
};
</script>

<style scoped>
.nonActive {
  pointer-events: none;
}
.danger {
  color: red;
}
::-webkit-input-placeholder {
  color: #9e9eff !important;
}

:-moz-placeholder {
  color: #9e9eff !important;
}

::-moz-placeholder {
  color: #9e9eff !important;
}

:-ms-input-placeholder {
  color: #9e9eff !important;
}

.form-control {
  display: block;
  width: 100%;
  height: calc(1.5em + 0.75rem + 2px);
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #4e37b2 !important;
  background-color: rgba(235, 235, 255, 0.15) !important;
  background-clip: padding-box;
  border: 1px solid #ebebff !important;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

.icon-pulsa {
  height: 35px;
}

@media screen and (max-width: 1000px) {
  .icon-provider {
    width: 50px;
  }

  .icon-pulsa {
    height: 35x;
  }

  .font22 {
    font-size: 22px;
  }

  .font18 {
    font-size: 18px;
  }
}
</style>
