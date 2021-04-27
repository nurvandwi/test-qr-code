<template>
  <div class="container mt-4" data-aos="fade-up">
    <h3 class="font16 m-0" style="font-weight: bolder">Input Data Ewallet</h3>
    <p class="font14">Masukkan nomor handphone untuk di Top Up</p>

    <form>
      <div class="form-row mt-3">
        <div class="col-8 col-md-8">
          <input
            type="number"
            class="form-control"
            placeholder="Nomor Account"
            v-model="no_hp"
            style="background-color: white !important"
          />
        </div>
        <div class="col-md-4 col-4 d-flex align-items-center">
          <div v-if="state.ewallet === 'DANA'">
            <img
              src="../../assets/dana v-1.png"
              class="icon-dana pl-2"
              alt="..."
            />
          </div>
          <div v-else-if="state.ewallet === 'OVO'">
            <img
              src="../../assets/icon-ovo.png"
              class="icon-ovo pl-2"
              alt="..."
            />
          </div>
          <div v-else-if="state.ewallet === 'LINK'">
            <img
              src="../../assets/link-aja v-2.png"
              class="icon-link pl-2"
              alt="..."
            />
          </div>
          <div v-else-if="state.ewallet === 'GOPAY'">
            <img
              src="../../assets/gopay.png"
              class="icon-gopay pl-2"
              alt="..."
            />
          </div>
          <div v-else></div>
        </div>
        <div
          class="col-12 mt-2"
          v-if="no_hp.length >= 10"
          data-aos="fade-up"
          data-aos-duration="500"
        >
          <select
            @change="getList()"
            v-model="state.ewallet"
            class="form-control"
            name="dataEwallet"
            style="background-color: white !important"
          >
            <option disabled selected value="Test">Pilih Jenis Ewallet</option>
            <option
              v-for="(row, i) in list"
              :key="i"
              v-bind:value="row.nama_produk"
            >
              {{ row.nama_produk }}
            </option>
          </select>
        </div>
        <div class="col-md-12">
          <div class="row px-2 pt-4">
            <div
              class="col-md-6 col-6 px-2 pb-3"
              v-for="(row, i) in listContents.data"
              :value="row.id"
              :key="i"
            >
              <button
                class="btn py-0 col-12 col-md-12 px-0"
                @click="addToEwallet(row.kd_produk, row.poin, points.Poin)"
              >
                <router-link
                  :class="{ nonActive: row.poin > points.Poin }"
                  v-bind:to="
                    '/ewalletdetails/' +
                    `${$route.params.outlet_id}/` +
                    row.nominal
                  "
                >
                  <div class="card border w-100">
                    <div class="card-body p-3 d-flex flex-column">
                      <h5
                        class="card-title text-center m-0"
                        :class="{ danger: row.poin > points.Poin }"
                      >
                        {{ row.nominal_text }}
                      </h5>
                      <p
                        class="font12 mb-0"
                        :class="{ danger: row.poin > points.Poin }"
                      ></p>
                    </div>
                  </div>
                </router-link>
              </button>
            </div>
          </div>
        </div>
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
      no: "",
      no_hp: "",
      selected: "Pilih Jenis E-wallet",
      options: [
        { text: "Pilih Jenis E-wallet", value: "Pilih Jenis E-wallet" },
        { text: "Dana", value: "Dana" },
        { text: "Ovo", value: "Ovo" },
      ],
      list: [],
      listContents: [],
      state: {
        ewallet: "Test",
      },
    };
  },
  methods: {
    getEwallet() {
      axios
        .get(`${process.env.VUE_APP_URL}list-ewallet`, {
          params: {
            outlet_id: this.$route.params.outlet_id,
          },
          headers: {
            token: localStorage.token,
          },
        })
        .then((res) => (this.list = res.data.data))
        .catch((err) => console.log(err));
    },
    getList() {
      axios
        .get(
          `${process.env.VUE_APP_URL}list-ewallet-hadiah?nama_ewallet=${this.state.ewallet}`,
          {
            params: {
              outlet_id: this.$route.params.outlet_id,
            },
            headers: {
              token: localStorage.token,
            },
          }
        )
        .then((res) => {
          this.listContents = res.data;
          if (this.ewallet == "Test") {
            this.state.ewallet = "Test";
          }
        })
        .catch((err) => console.log(err));
    },
    addToEwallet(kd_produk, poin, points) {
      // console.log(this.state.ewallet)
      console.log(this.status);
      console.log(points);
      if (this.status != 0) {
        if (points >= poin) {
          this.$store.dispatch("addEwalletToCart", {
            no_hp: this.no_hp,
            ewallet: this.state.ewallet,
            nominal: this.$route.params.nominal,
            kd_produk,
            poin,
            quantity: 1,
          });
        } else {
          alert("Poin anda tidak cukup");
        }
      } else {
        alert("Data anda belum lengkap");
      }
    },
  },
  mounted() {
    this.getEwallet();
    this.getList();
    this.$store.dispatch("getPoin", {
      outlet_id: this.$route.params.outlet_id,
      token: localStorage.token,
    });
  },
  computed: {
    cekPoin() {
      return this.points > this.wltTotalPrice;
    },
    wltTotalPrice() {
      return this.$store.getters.wltTotalPrice;
    },
    cart() {
      return this.$store.state.cart;
    },
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
.icon-link {
  height: 32px;
}

.icon-dana {
  height: 28px;
}

.icon-gopay {
  height: 18px;
}

.icon-ovo {
  height: 20px;
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

.icon-ewallet {
  height: 27px;
}

@media screen and (max-width: 1000px) {
  .font22 {
    font-size: 22px;
  }

  .icon-link {
    height: 50px;
  }

  .icon-dana {
    height: 28px;
  }

  .icon-gopay {
    height: 20px;
  }

  .icon-ovo {
    height: 22px;
  }

  .font18 {
    font-size: 18px;
  }
  .font12 {
    font-size: 12px;
  }
}
</style>
