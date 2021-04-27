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
      <div class="theme-color p-2 rounded mt-2">
        <h3 class="font18 mb-0 pb-0 text-white text-center">
          {{ this.$route.params.outlet_id }}
        </h3>
      </div>
      <h4 class="mt-4 text-left font16 font-weight-bold mb-0">
        Input Data Outlet
      </h4>
      <p class="p-0 my-0 text-left font12">
        Nomor EKTP & Nomor Handphone/WA wajib diisi
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
        <input type="hidden" v-model="data_outlet.data.outlet_name" />
        <div class="form-row">
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
              <span class="placeholder">Nama Sesuai KTP</span>
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
              <label class="form-check-label" for="NPWP">NPWP</label>
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
                v-model="data_outlet.data.telepon2"
              />
              <span class="placeholder">No.HP</span>
            </label>
          </div>

          <div class="form-group mb-0 col-md-12 col-12 px-0">
            <label
              class="custom-field one col-md-12 col-12 px-0 d-flex justify-content-center pb-0 mb-0"
            >
              <input
                type="text"
                required
                class="col-md-12 col-12"
                v-model="data_outlet.data.alamat2"
              />
              <span class="placeholder">Alamat Pengiriman Hadiah</span>
            </label>
          </div>

          <div class="form-group mb-0 col-md-6 col-6 pl-0 mb-4">
            <label
              class="custom-field one col-md-12 col-12 px-0 d-flex justify-content-center pb-0 mb-0"
            >
              <input
                type="text"
                required
                class="col-md-12 col-12"
                v-model="data_outlet.data.rtrw"
              />
              <span class="placeholder">RT/RW</span>
            </label>
          </div>

          <div class="form-group mb-0 col-md-6 col-6 pr-0 mb-4">
            <label
              class="custom-field one col-md-12 col-12 px-0 d-flex justify-content-center pb-0 mb-0"
            >
              <input
                type="text"
                required
                class="col-md-12 col-12"
                v-model="data_outlet.data.kodepos"
              />
              <span class="placeholder">Kode Pos</span>
            </label>
          </div>

          <div class="form-group col-md-12 col-12 text-left p-0 mb-4">
            <select
              @change="getKabupaten()"
              v-model="state.provinsi"
              name="dataProvinsi"
              class="form-control"
              v-bind:class="
                state.provinsi === 0 && data_outlet.data.propinsi == null
                  ? 'border-red'
                  : ''
              "
            >
              <option disabled selected value="0">Pilih Provinsi</option>

              <option
                v-for="(row, i) in dataProvinsis.data"
                :value="row.id"
                :key="i"
              >
                {{ row.name }}
              </option>
            </select>
          </div>
          <div class="form-group col-md-12 col-12 text-left p-0 mb-4">
            <select
              name="dataKabupaten"
              class="form-control"
              @change="getKecamatan()"
              v-model="state.kabupaten"
              v-bind:class="
                state.kabupaten === 0 && data_outlet.data.kabupaten == null
                  ? 'border-red'
                  : ''
              "
            >
              <option disabled selected value="0">Pilih Kabupaten</option>
              <option
                v-for="(row, i) in dataKabupatens.data"
                :value="row.id"
                :key="i"
              >
                {{ row.name }}
              </option>
            </select>
          </div>

          <div class="form-group col-md-12 col-12 text-left p-0 mb-4">
            <select
              v-bind:class="
                state.kecamatan === 0 && data_outlet.data.kecamatan == null
                  ? 'border-red'
                  : ''
              "
              @change="getKelurahan()"
              v-model="state.kecamatan"
              name="dataKecamatan"
              class="form-control"
            >
              <option disabled selected value="0">Pilih Kecamatan</option>

              <option
                v-for="(row, i) in dataKecamatans.data"
                :value="row.id"
                :key="i"
              >
                {{ row.name }}
              </option>
            </select>
          </div>

          <div class="form-group col-md-12 col-12 text-left p-0 mb-4">
            <select
              class="form-control"
              v-model="state.kelurahan"
              v-bind:class="
                state.kelurahan === 0 && data_outlet.data.kelurahan == null
                  ? 'border-red'
                  : ''
              "
            >
              <option disabled selected value="0">Pilih Kelurahan</option>
              <option
                v-for="(row, i) in dataKelurahans.data"
                :value="row.id"
                :key="i"
              >
                {{ row.name }}
              </option>
            </select>
          </div>

          <div
            v-bind:class="[
              'form-group justify-content-center grid-image   mb-3 p-0 col-md-12 col-12',
              { cameraform: data_outlet.data.file == null },
            ]"
          >
            <div class>
              <image-uploader
                v-if="data_outlet.data.file == null"
                v-model="data_outlet.data.file"
                :debug="1"
                :maxWidth="512"
                :quality="0.3"
                :autoRotate="false"
                outputFormat="string"
                :preview="false"
                :className="['fileinput', { 'fileinput--loaded': hasImage }]"
                capture="environment"
                accept="video/*, image/*"
                doNotResize="['gif', 'svg']"
                @input="setImage"
              >
                <label for="fileInput" slot="upload-label" class="mt-3 mb-0">
                  <figure class="m-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="300"
                      height="32"
                      viewBox="0 0 32 32"
                    >
                      <path
                        class="path1"
                        d="M9.5 19c0 3.59 2.91 6.5 6.5 6.5s6.5-2.91 6.5-6.5-2.91-6.5-6.5-6.5-6.5 2.91-6.5 6.5zM30 8h-7c-0.5-2-1-4-3-4h-8c-2 0-2.5 2-3 4h-7c-1.1 0-2 0.9-2 2v18c0 1.1 0.9 2 2 2h28c1.1 0 2-0.9 2-2v-18c0-1.1-0.9-2-2-2zM16 27.875c-4.902 0-8.875-3.973-8.875-8.875s3.973-8.875 8.875-8.875c4.902 0 8.875 3.973 8.875 8.875s-3.973 8.875-8.875 8.875zM30 14h-4v-2h4v2z"
                      />
                    </svg>
                  </figure>
                  <span
                    class="upload-caption text-dark d-flex justify-content-center"
                    >{{ hasImage ? "Replace" : "Upload KTP Anda" }}</span
                  >
                </label>
              </image-uploader>
              <div>
                <img
                  v-bind:src="data_outlet.data.file"
                  class="w-100 h-100 p-0 m-0"
                  alt
                />
              </div>
            </div>
          </div>
          <h4 class="text-dark mt-3 font16 px-0 mb-3">
            <strong>Informasi Rekening Bank</strong>
          </h4>

          <div class="form-group mb-0 col-md-12 col-12 px-0 mb-0 disabled">
            <label
              class="custom-field one col-md-12 col-12 px-0 d-flex justify-content-center pb-0 mb-0"
            >
              <input type="text" required class="col-md-12 col-12" disabled />
              <span class="placeholder">Nama Nasabah</span>
            </label>
          </div>

          <div class="form-group mb-0 col-md-12 col-12 px-0 mb-4 disabled">
            <label
              class="custom-field one col-md-12 col-12 px-0 d-flex justify-content-center pb-0 mb-0"
            >
              <input type="number" required class="col-md-12 col-12" disabled />
              <span class="placeholder">No Rekening</span>
            </label>
          </div>
          <div class="form-group col-md-12 col-12 text-left p-0 mb-1 disabled">
            <select name="dataBank" required class="form-control" disabled>
              <option disabled selected value="0">Pilih Bank</option>
              <option></option>
            </select>
          </div>

          <div class="form-group col-md-6 col-6 text-left pl-0 mb-3 disabled">
            <label
              class="custom-field one col-md-12 col-12 px-0 d-flex justify-content-center pb-0 mb-0"
            >
              <input type="text" required class="col-md-12 col-12" disabled />
              <span class="placeholder">Cabang Bank</span>
            </label>
          </div>
          <div class="form-group col-md-6 col-6 text-left pr-0 mb-3 disabled">
            <label
              class="custom-field one col-md-12 col-12 px-0 d-flex justify-content-center pb-0 mb-0"
            >
              <input type="text" required class="col-md-12 col-12" disabled />
              <span class="placeholder">Kota Bank</span>
            </label>
          </div>
          <!-- <div class="disabled">
            <div class="disabled">
              <image-uploader
                :debug="1"
                :maxWidth="512"
                :quality="0.3"
                :autoRotate="false"
                outputFormat="string"
                :preview="false"
                :className="['fileinput', { 'fileinput--loaded': hasImage2 }]"
                capture="environment"
                accept="video/*, image/*"
                doNotResize="['gif', 'svg']"
                @input="setImage2"
              >
                <label for="fileInput" slot="upload-label" class="mt-3 mb-0">
                  <figure class="m-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="300"
                      height="32"
                      viewBox="0 0 32 32"
                    >
                      <path
                        class="path1"
                        d="M9.5 19c0 3.59 2.91 6.5 6.5 6.5s6.5-2.91 6.5-6.5-2.91-6.5-6.5-6.5-6.5 2.91-6.5 6.5zM30 8h-7c-0.5-2-1-4-3-4h-8c-2 0-2.5 2-3 4h-7c-1.1 0-2 0.9-2 2v18c0 1.1 0.9 2 2 2h28c1.1 0 2-0.9 2-2v-18c0-1.1-0.9-2-2-2zM16 27.875c-4.902 0-8.875-3.973-8.875-8.875s3.973-8.875 8.875-8.875c4.902 0 8.875 3.973 8.875 8.875s-3.973 8.875-8.875 8.875zM30 14h-4v-2h4v2z"
                      />
                    </svg>
                  </figure>
                  <span
                    class="upload-caption d-flex text-dark justify-content-center"
                    >{{ hasImage2 ? "Replace" : "Upload Buku Bank" }}</span
                  >
                </label>
              </image-uploader>
            </div>
          </div> -->
          <div class="d-flex justify-content-center mx-auto disabled">
            <img class="w-100 h-100 p-0 m-0" alt />
          </div>
          <div class="cameraform col-md-12 col-12 py-3 disabled">
            <figure class="m-auto d-flex justify-content-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="300"
                height="32"
                viewBox="0 0 32 32"
                fill="#DDDDDD"
              >
                <path
                  class="path1"
                  d="M9.5 19c0 3.59 2.91 6.5 6.5 6.5s6.5-2.91 6.5-6.5-2.91-6.5-6.5-6.5-6.5 2.91-6.5 6.5zM30 8h-7c-0.5-2-1-4-3-4h-8c-2 0-2.5 2-3 4h-7c-1.1 0-2 0.9-2 2v18c0 1.1 0.9 2 2 2h28c1.1 0 2-0.9 2-2v-18c0-1.1-0.9-2-2-2zM16 27.875c-4.902 0-8.875-3.973-8.875-8.875s3.973-8.875 8.875-8.875c4.902 0 8.875 3.973 8.875 8.875s-3.973 8.875-8.875 8.875zM30 14h-4v-2h4v2z"
                />
              </svg>
            </figure>
            <span
              class="upload-caption d-flex text-dark justify-content-center"
              >{{ hasImage2 ? "Replace" : "Upload Buku Bank" }}</span
            >
          </div>
        </div>
        <button
          type="submit"
          class="btn btn-lg col-md-12 col-12 mt-2 mb-submit py-2 btn-theme font-button px-0"
        >
          Submit
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import ImageUploader from "vue-image-upload-resize";

export default {
  name: "Registrasi",
  components: {
    ImageUploader,
  },
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
      let formData = new FormData();
      if (this.file != null) {
        formData.append("file", this.file);
      }
      formData.append("outlet_id", this.data_outlet.data.outlet_id);
      formData.append("no_ektp", this.data_outlet.data.no_ektp);
      formData.append("no_npwp", this.data_outlet.data.no_npwp);
      formData.append("nama_konsumen", this.data_outlet.data.nama_konsumen);
      formData.append("alamat2", this.data_outlet.data.alamat2);
      formData.append("telepon2", this.data_outlet.data.telepon2);
      formData.append("rtrw", this.data_outlet.data.rtrw);
      formData.append("kelurahan", this.state.kelurahan);
      formData.append("kecamatan", this.state.kecamatan);
      formData.append("kabupaten", this.state.kabupaten);
      formData.append("propinsi", this.state.provinsi);
      formData.append("kodepos", this.data_outlet.data.kodepos);
      formData.append("nama_rekening", this.data_outlet.data.nama_rekening);
      formData.append("nomor_rekening", this.data_outlet.data.nomor_rekening);

      this.errors = [];

      if (!this.data_outlet.data.no_ektp) {
        this.errors.push("no eKTP");
      }
      if (!this.data_outlet.data.nama_konsumen) {
        this.errors.push("Nama Pemilik");
      }
      if (!this.data_outlet.data.telepon2) {
        this.errors.push("No Hp");
      }
      if (!this.data_outlet.data.alamat2) {
        this.errors.push("Alamat");
      }
      if (!this.data_outlet.data.rtrw) {
        this.errors.push("RT/RW");
      }
      if (!this.state.kelurahan) {
        this.errors.push("Kelurahan");
      }
      if (!this.state.kecamatan) {
        this.errors.push("Kecamatan");
      }
      if (!this.state.kabupaten) {
        this.errors.push("Kabupaten");
      }
      if (!this.state.provinsi) {
        this.errors.push("Propinsi");
      }
      if (!this.data_outlet.data.kodepos) {
        this.errors.push("Kodepos");
      }

      if (this.file != null && this.data_outlet.data.file != null) {
        this.errors.push("Foto Ktp");
      }

      e.preventDefault();
      if (
        this.data_outlet.data.outlet_id &&
        (this.data_outlet.data.no_ektp || this.data_outlet.data.no_npwp) &&
        this.data_outlet.data.nama_konsumen &&
        this.data_outlet.data.telepon2 &&
        this.data_outlet.data.alamat2 &&
        this.data_outlet.data.rtrw &&
        this.state.kelurahan &&
        this.state.kecamatan &&
        this.state.kabupaten &&
        this.state.provinsi &&
        this.data_outlet.data.kodepos
      )
        if (this.file != null || this.data_outlet.data.file != null) {
          axios
            .post(`${process.env.VUE_APP_URL}update-outlet-ms`, formData, {
              headers: {
                token: localStorage.token,
              },
            })
            .then((res) => {
              console.log(res.data);
              this.$router.push(`/Home/${this.$route.params.outlet_id}`);
              window.location.reload();
            })
            .catch((err) => console.log(err));
        }
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

<style>
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
  background-color: #4e37b2;
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
  font-size: 14px;
}

.custom-field .placeholder {
  position: absolute;
  left: 12px;
  top: calc(50% + 10px);
  transform: translateY(-50%);
  color: #d3d3d3;
  transition: top 0.3s ease, color 0.3s ease, font-size 0.3s ease;
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

@media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
  .font10 {
    font-size: 10px;
  }

  .icon-user {
    height: 50px;
  }

  .font12 {
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