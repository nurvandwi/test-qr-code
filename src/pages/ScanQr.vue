<template>
  <div class="container">
    <div class="border mt-5">
      <p class="decode-result text-center">
        Last result: <b>{{ result }}</b>
      </p>
      <qrcode-stream :camera="camera" @decode="onDecode" @init="onInit">
        <div v-if="validationSuccess" class="validation-success">Success</div>

        <div v-if="validationFailure" class="validation-failure">Ooops!</div>

        <div v-if="validationPending" class="validation-pending">
          validation in progress...
        </div>
      </qrcode-stream>
    </div>
    <button @click="sendBarcode()" type="button" class="btn btn-primary">
      Primary
    </button>
  </div>
</template>

<script>
import { QrcodeStream } from "vue-qrcode-reader";
import axios from "axios";
export default {
  components: { QrcodeStream },

  data() {
    return {
      isValid: undefined,
      camera: "auto",
      result: null,
    };
  },

  computed: {
    validationPending() {
      return this.isValid === undefined && this.camera === "off";
    },

    validationSuccess() {
      return this.isValid === true;
    },

    validationFailure() {
      return this.isValid === false;
    },
  },

  methods: {
    onInit(promise) {
      promise.catch(console.error).then(this.resetValidationState);
    },

    resetValidationState() {
      this.isValid = undefined;
    },

    async onDecode(content) {
      this.result = content;
      this.turnCameraOff();

      await this.timeout(3000);
      this.isValid = content.startsWith("");

      await this.timeout(2000);
      this.turnCameraOn();
    },

    turnCameraOn() {
      this.camera = "auto";
    },

    turnCameraOff() {
      this.camera = "off";
    },

    timeout(ms) {
      return new Promise((resolve) => {
        window.setTimeout(resolve, ms);
      });
    },
    sendBarcode() {
      if (this.result) {
        let newData = {
          result: this.result,
        };
        axios
          .post(
            `https://pzc.inosis.id/api_pzc_sales_2021/api.php/post-qr`,
            newData,
            {
              headers: {
                token: localStorage.token,
              },
            }
          )
          .then(() => {
            // window.location.reload();
            console.log(newData, "-------");
          })
          .catch((err) => console.log(err));
      }
    },
  },
};
</script>

<style scoped>
.validation-success,
.validation-failure,
.validation-pending {
  position: absolute;
  width: 100%;
  height: 100%;

  background-color: rgba(255, 255, 255, 0.8);
  text-align: center;
  font-weight: bold;
  font-size: 1rem;
  padding: 10px;

  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
}
.validation-success {
  color: green;
}
.validation-failure {
  color: red;
}
</style>