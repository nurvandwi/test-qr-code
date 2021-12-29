<template>
  <div class>
    <div class="login-content col-12 col-md-12">
      <div class="d-flex justify-content-center mb-5">
        <div class="col-md-4 col-5 p-0 m-0 d-flex justify-content-center mb-0">
          <img
            src="../../assets/COG-LOGO-Joss_Retail_salesman.png"
            class="mx-auto text-center w-logo-responsive"
          />
        </div>
      </div>
      <form class>
        <div class="input-div one">
          <div class="i d-flex justify-content-center align-items-center">
            <img class="height-icon" src="../../assets/user-login.png" />
          </div>
          <div class="div">
            <input
              placeholder="Username"
              type="text"
              class="input"
              v-model="username"
              required
            />
          </div>
        </div>
        <div class="input-div pass">
          <div
            class="
              i
              d-flex
              justify-content-center
              height-icon
              align-items-center
            "
          >
            <img class="height-icon" src="../../assets/user-password.png" />
          </div>
          <div class="div">
            <input
              placeholder="Password"
              type="password"
              class="input"
              v-model="password"
              required
            />
          </div>
        </div>
        <div class="mb-3 mt-2 form-check">
          <input
            type="checkbox"
            v-model="check"
            required
            class="form-check-input"
            id="exampleCheck1"
          />
          <p class="form-check-label font10-mobile" for="exampleCheck1">
            Mohon dibaca
            <b data-toggle="modal" data-target="#exampleModal"
              >Syarat dan Ketentuannya</b
            >
            Jika anda setuju, silahkan lanjutkan menekan Tombol Centang untuk
            Login kedalam aplikasi.
          </p>
        </div>
        <div
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-scrollable">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                  Syarat & Ketentuan
                </h5>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body"><div v-html="toc"></div></div>
              <div class="modal-footer">
                <button type="button" class="btn-cancel" data-dismiss="modal">
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
        <button @click="getLogin" type="button" class="btn text-white mt-5">
          login
        </button>
        <button type="button" class="btn-forget text-white mt-2">
          <a
            class="text-white tetx-none"
            :href="'https://api.whatsapp.com/send?phone=' + wa"
            target="_blank"
          >
            Lupa Password
          </a>
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: "",
      check: "",
      wa: "",
      toc: "",
    };
  },
  methods: {
    getLogin() {
      this.$emit("getLogin", this.username, this.password, this.check);
    },
    getInfo() {
      axios
        .get(`https://pzc.inosis.id/api_pzc_sales_2021/initial.php`)
        .then((response) => {
          this.wa = response.data.no_whatapps;
          this.toc = response.data.toc;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {
    this.getInfo();
  },
};
</script>

<style scoped>
.btn-cancel {
  display: inline-block;
  font-weight: 400;
  color: white;
  text-align: center;
  vertical-align: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  background-color: #6c757d;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
.btn-forget {
  display: block;
  width: 100%;
  height: 50px;
  border-radius: 25px;
  outline: none;
  border: none;
  background-color: #ff4814;
  font-size: 1.2rem;
  color: #fff;
  font-family: Poppins, sans-serif;
  text-transform: uppercase;
  margin: 1rem 0;
  cursor: pointer;
}
form {
  width: 100%;
}

.login-content h2 {
  margin: 15px 0;
  color: #333;
  text-transform: uppercase;
  font-size: 2.9rem;
}

.login-content .input-div {
  position: relative;
  display: grid;
  grid-template-columns: 7% 93%;
  margin: 25px 0;
  padding: 5px 0;
  border-bottom: 2px solid #d9d9d9;
}

.login-content .input-div.one {
  margin-top: 0;
}

.input-div > div {
  position: relative;
  height: 45px;
}

.input-div > div > h5 {
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  color: #999;
  font-size: 18px;
  transition: 0.3s;
}

.input-div:before,
.input-div:after {
  content: "";
  position: absolute;
  bottom: -2px;
  width: 0%;
  height: 2px;
  background-color: #38d39f;
  transition: 0.4s;
}

.input-div.focus > div > h5 {
  top: -5px;
  font-size: 15px;
}

.input-div.focus > .i > i {
  color: #38d39f;
}

.input-div > div > input {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  background: none;
  padding: 0.5rem 0.7rem;
  font-size: 1.2rem;
  color: #555;
  font-family: "poppins", sans-serif;
}

.input-div.pass {
  margin-bottom: 4px;
}

.btn {
  display: block;
  width: 100%;
  height: 50px;
  border-radius: 25px;
  outline: none;
  border: none;
  background-image: linear-gradient(to right, #4e37b2, #4e37b2, #4e37b2);
  font-size: 1.2rem;
  color: #fff;
  font-family: "Poppins", sans-serif;
  text-transform: uppercase;
  margin: 1rem 0;
  cursor: pointer;
}
.btn:hover {
  background-position: right;
}

.w-logo-responsive {
  width: 15rem;
}

@media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
  .font10-mobile {
    font-size: 11px;
  }
  .login-content h2 {
    font-size: 2.4rem;
    margin: 8px 0;
  }

  .height-icon {
    height: 22px;
  }

  .w-logo-responsive {
    width: 12rem;
    height: 20vh;
  }

  form {
    max-width: 100%;
  }

  .font10-mobile {
    font-size: 10px;
  }
  .font12-mobile {
    font-size: 12px;
  }
  .font14-mobile {
    font-size: 14px;
  }
  .font15-mobile {
    font-size: 15px;
  }
  .font16-mobile {
    font-size: 16px;
  }
  .font18-mobile {
    font-size: 16px;
  }
  .font10-mobile {
    font-size: 11px;
  }
}
</style>
