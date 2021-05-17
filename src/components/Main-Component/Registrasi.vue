<template>
  <div class="row justify-content-center mx-3">
    <div class="col-md-8 text-left d-flex flex-row align-items-center mt-2 p-0">
      <img
        class="mr-4"
        src="https://i.imgur.com/myZDp6l.png"
        style="width: 2.5em !important; height: 2.5em !important"
      />
      <div>
        <h2 class="font18 font-weight-bold mb-0">Data Registrasi</h2>
        <p class="font14 mb-0">Mohon Lengkapi Data dibawah ini</p>
      </div>
    </div>
    <div class="col-md-12 col-12 p-0 m-0">
      <div class="theme-color p-2 rounded mt-2 d-block">
        <h3 class="font18 mb-0 pb-0 text-white text-center">
          {{ this.$route.params.outlet_id }}
        </h3>
        <h3 class="font18 mb-0 pb-0 text-white text-center">
          {{ data_outlet.data.outlet_name }}
        </h3>
      </div>

      <div
        class="alert alert-danger font12-mobile font14-desktop mt-2"
        role="alert"
      >
        <b> Catatan:</b> <br />
        Untuk data yang sudah terisi mohon dikonfirmasi ulang, bila tidak maka
        data dianggap valid
      </div>
      <h4 class="mt-4 text-left font16 font-weight-bold mb-0">
        Input Data Salesman
      </h4>
      <p class="p-0 my-0 text-left font12">
        Input Data Penerimaan Insentif Untuk Salesman
      </p>
      <form @submit="formSubmit">
        <!-- Modal -->
        <div
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog mx-4 my-4">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title text-dark" id="exampleModalLabel">
                  Data dibawah ini, belum lengkap. Mohon bantuannya untuk diisi.
                </h5>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true" class="text-dark">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <p class="text-left pb-0 mb-1" style="color: red">
                  {{ error }}
                </p>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
        <input type="hidden" v-model="data_outlet.data.outlet_id" />
        <!-- <input type="hidden" v-model="data_outlet.data.outlet_name" /> -->
        <div class="form-row" style="margin-bottom: 10rem">
          <div class="form-group mb-0 col-md-12 col-12 px-0 mb-0">
            <label
              class="custom-field one col-md-12 col-12 px-0 d-flex justify-content-center pb-0 mb-0"
            >
              <input
                type="text"
                required
                class="col-md-12 col-12"
                v-model="data_outlet.data.nama_konsumen"
              />
              <span class="placeholder">Nama Penerima Hadiah</span>
            </label>
          </div>

          <div class="form-group mb-0 col-md-12 col-12 pl-0 mb-0 px-0">
            <div
              class="form-check form-check-inline col-6 col-md-6 px-0 mx-0 my-3"
            >
              <input
                class="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="EKTP"
                value="EKTP"
                v-model="picked"
                :required="
                  data_outlet.data.no_npwp == '' &&
                  data_outlet.data.no_ektp == ''
                "
              />
              <label class="form-check-label" for="EKTP">EKTP</label>
            </div>
            <div
              class="form-check form-check-inline col-6 col-md-6 px-0 mx-0 my-3"
            >
              <input
                class="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="NPWP"
                value="NPWP"
                v-model="picked"
                :required="
                  data_outlet.data.no_npwp == '' &&
                  data_outlet.data.no_ektp == ''
                "
              />
              <label class="form-check-label" for="NPWP">NPWP PERSONAL</label>
            </div>

            <label
              v-if="picked == 'EKTP'"
              class="custom-field one col-md-12 col-12 px-0 d-flex justify-content-center pb-0 mb-0"
            >
              <input
                v-model="data_outlet.data.no_ektp"
                type="text"
                :required="data_outlet.data.no_npwp == ''"
                class="col-md-12 col-12"
                maxlength="16"
                minlength="16"
              />
              <span class="placeholder">EKTP</span>
            </label>
            <label
              v-if="picked == 'NPWP'"
              class="custom-field one col-md-12 col-12 px-0 d-flex justify-content-center pb-0 mb-0"
            >
              <input
                v-model="data_outlet.data.no_npwp"
                type="text"
                :required="data_outlet.data.no_ektp == ''"
                class="col-md-12 col-12"
                maxlength="15"
                minlength="15"
              />
              <span class="placeholder">NPWP</span>
            </label>
          </div>

          <div class="form-group mb-0 col-md-12 col-12 pr-0 mb-0 px-0">
            <label
              class="custom-field one col-md-12 col-12 px-0 d-flex justify-content-center pb-0 mb-0"
            >
              <input
                type="number"
                required
                class="col-md-12 col-12"
                v-model="data_outlet.data.no_wa"
              />
              <span class="placeholder">No.HP / no. WA harus sama </span>
            </label>
          </div>
        </div>
        <div class="btn_fixed">
          <button
            type="submit"
            v-if="data_outlet.data.valid === 'No'"
            class="btn btn-lg col-md-12 col-12 mt-2 text-white py-2 theme-color font-button px-0"
            style="border-radius: 60px"
          >
            Kirim
          </button>
          <button
            type="submit"
            v-if="data_outlet.data.valid === 'Yes'"
            :disabled="data_outlet.data.valid === 'Yes'"
            class="btn btn-lg col-md-12 col-12 mt-2 text-white py-2 theme-color font-button px-0"
            style="border-radius: 60px"
          >
            Data sudah dikonfirmasi
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
// import ImageUploader from "vue-image-upload-resize";

export default {
  name: "Registrasi",
  components: {},
  data() {
    return {
      state: {
        provinsi: 0,
        kabupaten: 0,
        kecamatan: 0,
        kelurahan: 0,
      },
      file2: null,
      file: null,
      dataProvinsis: [],
      dataKabupatens: [],
      dataKecamatans: [],
      dataKelurahans: [],
      dataTelephones1: [],
      dataNama_Konsumen: [],
      data_outlet: [],
      errors: [],
      picked: "",
    };
  },
  methods: {
    setImage: function (file) {
      this.hasImage = true;
      this.file = file;
    },
    setImage2: function (file2) {
      this.hasImage2 = true;
      this.file2 = file2;
    },
    getTelephone() {
      axios
        .get(`${process.env.VUE_APP_URL}detail-outlet`, {
          params: {
            txtKodeOutlet: this.$route.params.outlet_id,
          },
          headers: {
            token: localStorage.token,
          },
        })
        .then((res) => {
          console.log(res.data.data, "ini res");
          this.data_outlet = res.data;
          this.state.provinsi = this.data_outlet.data.id_propinsi;
          if (this.state.provinsi == "") {
            this.state.provinsi = 0;
          } else {
            this.getKabupaten();
          }
          this.state.kabupaten = this.data_outlet.data.id_kota;
          if (this.state.kabupaten == "") {
            this.state.kabupaten = 0;
          } else {
            this.getKecamatan();
          }
          this.state.kecamatan = this.data_outlet.data.id_kecamatan;
          if (this.state.kecamatan == "") {
            this.state.kecamatan = 0;
          } else {
            this.getKelurahan();
          }
          this.state.kelurahan = this.data_outlet.data.id_kelurahan;
          if (this.state.kelurahan == "") {
            this.state.kelurahan = 0;
          }
        })
        .catch((err) => console.log(err));
    },
    getProvinsi() {
      axios
        .get(`${process.env.VUE_APP_URL}list-province`)
        .then((res) => (this.dataProvinsis = res.data))
        .catch((err) => console.log(err));
    },
    getKabupaten() {
      axios
        .get(
          `${process.env.VUE_APP_URL}list-cities?id_provinsi=${this.state.provinsi}`
        )
        .then((res) => {
          this.dataKabupatens = res.data;
        })
        .catch((err) => console.log(err));
    },
    getKecamatan() {
      axios
        .get(
          `${process.env.VUE_APP_URL}list-district?id_city=${this.state.kabupaten}`
        )
        .then((res) => (this.dataKecamatans = res.data))
        .catch((err) => console.log(err));
    },
    getKelurahan() {
      axios
        .get(
          `${process.env.VUE_APP_URL}list-subdistricts?id_district=${this.state.kecamatan}`
        )
        .then((res) => (this.dataKelurahans = res.data))
        .catch((err) => console.log(err));
    },

    formSubmit(e) {
      let newData = {
        outlet_id: this.data_outlet.data.outlet_id,
        no_ektp: this.data_outlet.data.no_ektp,
        no_npwp: this.data_outlet.data.no_npwp,
        no_wa: this.data_outlet.data.no_wa,
        nama_konsumen: this.data_outlet.data.nama_konsumen,
      };
      this.errors = [];

      if (!this.data_outlet.data.no_ektp) {
        this.errors.push("no eKTP");
      }
      if (!this.data_outlet.data.no_npwp) {
        this.errors.push("no eKTP");
      }
      if (!this.data_outlet.data.nama_konsumen) {
        this.errors.push("Nama Pemilik");
      }
      if (!this.data_outlet.data.no_wa) {
        this.errors.push("No Hp");
      }

      e.preventDefault();
      if (
        this.data_outlet.data.outlet_id &&
        (this.data_outlet.data.no_ektp || this.data_outlet.data.no_npwp) &&
        this.data_outlet.data.nama_konsumen &&
        this.data_outlet.data.no_wa
      )
        // console.log(newData, "data");
        axios
          .post(`${process.env.VUE_APP_URL}update-outlet-ms`, newData, {
            headers: {
              token: localStorage.token,
            },
          })
          .then(() => {
            // console.log(res.data, "ini itu", newData);
            this.$router.push(`/Home/${this.$route.params.outlet_id}`);
            window.location.reload();
          })
          .catch((err) => console.log(err));
    },
  },
  mounted() {
    this.getKecamatan();
    this.getKabupaten();
    this.getProvinsi();
    this.getTelephone();
    this.getKelurahan();
  },
};
</script>

<style scoped>
input:valid + .placeholder {
  top: 20px;
  font-size: 10px;
  color: #000;
  background: #faf9ff !important;
}
.border-black {
  border: 1px solid black !important;
}

.border-red {
  border: 1px solid red !important;
}

.mb-submit {
  margin-bottom: 6rem;
}

.disabled {
  pointer-events: none;
  opacity: 0.6;
}

.icon-user {
  height: 60px;
}

.grid-image {
  display: grid;
}

.theme-color {
  background-color: #ed1c24;
}

.fileinput {
  display: none;
}

.cameraform {
  border: 1px solid red !important;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

.custom-field {
  position: relative;
  font-size: 14px;
  padding-top: 20px;
  margin-bottom: 5px;
}

.custom-field input {
  border: none;
  -webkit-appearance: none;
  -ms-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background: #f2f2f2;
  padding: 12px;
  border-radius: 3px;

  outline: none;
  font-size: 20px;
  font-weight: bold;
}

.custom-field .placeholder {
  position: absolute;
  left: 12px;
  top: calc(50% + 10px);
  transform: translateY(-50%);
  color: #d3d3d3;
  transition: top 0.3s ease, color 0.3s ease, font-size 0.3s ease;
  font-size: 13px;
}

.custom-field input:valid + .placeholder,
.custom-field input:focus + .placeholder {
  top: 10px;
  font-size: 10px;
  color: #222;
}

/* ONE */
.custom-field.one input {
  background: none;
  border: 2px solid #ddd;
  transition: border-color 0.3s ease;
}

.custom-field.one input + .placeholder {
  left: 8px;
  padding: 0 5px;
}

.custom-field.one input:valid,
.custom-field.one input:focus {
  border-color: #d3d3d3;
  transition-delay: 0.1s;
}

.custom-field.one input:valid + .placeholder,
.custom-field.one input:focus + .placeholder {
  top: 20px;
  font-size: 10px;
  color: black;
  background: #fff;
}

.grid-image {
  display: grid;
}

.fileinput {
  display: none;
}

input:invalid {
  border: 1px solid red !important;
}

select:invalid {
  border: 1px solid red !important;
}

span .placeholder:invalid {
  color: red !important;
}

.btn-theme {
  background-color: #000099 !important;
  color: white !important;
}

.form-control {
  height: calc(2.1em + 0.75rem + 2px) !important;
}
.font14-desktop {
  font-size: 16px;
}

@media only screen and (min-device-width: 300px) and (max-device-width: 1080px) {
  .font10 {
    font-size: 10px;
  }

  .mb-custom {
    margin-bottom: 9rem;
  }

  .btn_fixed {
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 1030;
    padding: 20px;
    width: calc(100% - -15px);
    transform: translate(-2%);
    margin-bottom: 8.5vh;
  }

  .icon-user {
    height: 50px;
  }

  .font12 {
    font-size: 12px;
  }
  .font12-mobile {
    font-size: 12px;
  }

  .font14 {
    font-size: 14px;
  }

  .font16 {
    font-size: 16px;
  }

  .font18 {
    font-size: 18px;
  }

  .form-control {
    height: calc(2.5em + 0.75rem + 2px) !important;
  }

  select:invalid {
    border: 1px solid red !important;
  }

  input:invalid {
    border: 1px solid red !important;
  }

  span .placeholder:invalid {
    color: red !important;
  }

  .font16 {
    font-size: 16px;
  }
}
</style>
