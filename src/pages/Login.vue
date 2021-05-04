<template>
  <div class="container">
    <Header :contentFor="'Login'" />
    <Input class="mt-form" @getLogin="getLogin" />
  </div>
</template>

<script>
import axios from "axios";
import Input from "@/components/Main-Component/Input.vue";
import Header from "@/components/Main-Component/Header.vue";

export default {
  components: {
    Header,
    Input,
  },
  methods: {
    getLogin(username, password, check) {
      if (username && password && check) {
        const urlencoded = new URLSearchParams();
        urlencoded.append("username", username);
        urlencoded.append("password", password);
        axios
          .post(`${process.env.VUE_APP_URL}login`, urlencoded)
          .then((response) => {
            let result = response.data;
            if (result.api_status === 1) {
              localStorage.token = result.token;
              localStorage.bulanAktive = result.bulan_active;
              // this.$router.push(`/MonthToYear/${bulan}/${username}`);
              this.$router.push(`/MonthToYear/1/` + `${username}`);
            } else {
              console.log(alert("user Id dan password anda salah"));
              window.location.reload();
            }
          })
          .catch((error) => console.log(error));
      } else {
        alert("Silahkan input isian dibawah dengan benar");
        window.location.reload();
      }
    },
  },
  bulan() {
    return localStorage.bulanAktive;
  },
};
</script>

<style>
.mt-form {
  margin-top: 2rem;
}
</style>
