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
    getLogin(username, password) {
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
            this.$router.push(`Home/${username}`);
          } else {
            console.log(alert("user Id dan password anda salah"));
            window.location.reload();
          }
        })
        .catch((error) => console.log(error));
    },
  },
};
</script>

<style>
.mt-form {
  margin-top: 6rem;
}
</style>
