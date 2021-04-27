<template>
  <div class="row justify-content-center mx-3">
    <div class="col-md-8 text-left d-flex flex-row align-items-center mt-2 p-0">
      <img
        class="mr-4"
        src="https://i.imgur.com/myZDp6l.png"
        style="width: 3.5em !important; height: 3.5em !important"
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

      <form action class="mb-5 pb-5" @submit="formSubmit">
        <p
          v-if="errors.length"
          style="color: black !important"
          class="text-left"
        >
          <b style="color: red">Tolong Isi Kolom berikut ini :</b>
        </p>
        <ul class="text-left px-3">
          <li
            class="text-left"
            style="color: red"
            v-for="error in errors"
            v-bind:key="error"
          >
            {{ error }}
          </li>
        </ul>
        <div class="mb-5">
          <h4 class="mt-4 text-left font16 font-weight-bold mb-0">
            Input Data POSM
          </h4>
          <p class="p-0 my-0 text-left font12">
            Foto POSM wajib ada untuk syarat penukaran insentif
          </p>
          <div
            v-bind:class="[
              'form-group justify-content-center grid-image   mb-3 p-0 col-md-12 col-12',
              { cameraform: data_outlet.file == null },
            ]"
          >
            <div class>
              <image-uploader
                v-if="data_outlet.file == null"
                v-model="data_outlet.file"
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
                    >{{ hasImage ? "Replace" : "Upload POSM" }}</span
                  >
                </label>
              </image-uploader>
              <div>
                <img
                  v-bind:src="data_outlet.file"
                  class="w-100 h-100 p-0 m-0"
                  alt
                />
              </div>
            </div>
          </div>
        </div>
        <div>
          <h4 class="mt-5 text-left font16 font-weight-bold mb-0">
            Input Data Invoice
          </h4>
          <p class="p-0 my-0 text-left font12">
            Foto Invoice wajib ada untuk syarat penukaran insentif
          </p>
          <div
            v-bind:class="[
              'form-group justify-content-center grid-image   mb-3 p-0 col-md-12 col-12',
              { cameraform: data_outlet.file2 == null },
            ]"
            v-if="data_outlet.file != null"
          >
            <div>
              <image-uploader
                v-if="data_outlet.file2 == null"
                v-model="data_outlet.file2"
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
                    >{{ hasImage2 ? "Replace" : "Upload Invoice" }}</span
                  >
                </label>
              </image-uploader>
            </div>

            <div>
              <img
                v-bind:src="data_outlet.file2"
                class="w-100 h-100 p-0 m-0"
                alt
              />
            </div>
          </div>
          <div
            v-if="data_outlet.file == null"
            class="cameraform col-md-12 col-12 py-3"
          >
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
              >{{ hasImage2 ? "Replace" : "Upload Invoice " }}</span
            >
          </div>
        </div>
        <button
          type="button"
          @click="formSubmit"
          class="btn btn-primary mt-5 col-md-12 col-12 mt-3"
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
      data_outlet: [],
      file2: null,
      file: null,
      errors: [],
    };
  },
  methods: {
    getUser() {
      axios
        .get(`${process.env.VUE_APP_URL}cek-posm`, {
          params: {
            outlet_id: this.$route.params.outlet_id,
          },
          headers: {
            token: localStorage.token,
          },
        })
        .then((res) => {
          this.data_outlet = res.data;
        })
        .catch((err) => console.log(err));
    },
    setImage: function (file) {
      this.hasImage = true;
      this.file = file;
    },
    setImage2: function (file2) {
      this.hasImage2 = true;
      this.file2 = file2;
    },
    formSubmit(e) {
      console.log("file");
      console.log("file2");
      let formData = new FormData();
      if (this.file2 != null || this.file != null) {
        formData.append("file2", this.file2);
        formData.append("file", this.file);
      }
      formData.append("outlet_id", this.$route.params.outlet_id);

      this.errors = [];

      if (!this.data_outlet.file2 && !this.file2) {
        this.errors.push("Foto Invoice");
      }
      if (!this.data_outlet.file && !this.file) {
        this.errors.push("Foto POSM");
      }

      e.preventDefault();

      if (this.file != null || this.data_outlet.file != null)
        if (this.file2 != null || this.data_outlet.file2 != null) {
          axios
            .post(`${process.env.VUE_APP_URL}upload-posm`, formData, {
              params: {
                token: localStorage.token,
              },
            })
            .then((res) => {
              console.log(res.data);
              this.$router.push(`/Home/${this.$route.params.outlet_id}`);
            })
            .catch((err) => console.log(err));
        }
    },
  },
  mounted() {
    this.getUser();
  },
};
</script>

<style scoped>
.icon-user {
  height: 60px;
}
.theme-color {
  background-color: #653366;
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
  color: #d3d3d3;
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
}
</style>
