<template>
  <div class="nav-bar">
    <ul class="px-0">
      <li>
        <router-link
            :to="{
            path: '/MonthToYear/1' + `/${$route.params.outlet_id}`
          }"
            style="color: #fff"
            class="mx-auto font18"
        >
          <div>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="24"
                height="24"
                viewBox="0 0 172 172"
                style="fill: #000000"
            >
              <g
                  fill="none"
                  fill-rule="nonzero"
                  stroke="none"
                  stroke-width="1"
                  stroke-linecap="butt"
                  stroke-linejoin="miter"
                  stroke-miterlimit="10"
                  stroke-dasharray
                  stroke-dashoffset="0"
                  font-family="none"
                  font-weight="none"
                  font-size="none"
                  text-anchor="none"
                  style="mix-blend-mode: normal"
              >
                <path d="M0,172v-172h172v172z" fill="none" />
                <g fill="#000000">
                  <path
                      d="M43,14.33333c-7.85076,0 -14.33333,6.48258 -14.33333,14.33333v114.66667c0,7.85076 6.48258,14.33333 14.33333,14.33333h43v-14.33333h-43v-114.66667h50.16667v35.83333h35.83333v21.5h14.33333v-28.66667l-43,-43zM136.16667,100.33333c-19.70532,0 -35.83333,16.12802 -35.83333,35.83333c0,19.70532 16.12802,35.83333 35.83333,35.83333c19.70532,0 35.83333,-16.12802 35.83333,-35.83333c0,-19.70532 -16.12802,-35.83333 -35.83333,-35.83333zM136.16667,114.66667v21.5h21.5c0,11.95901 -9.54099,21.5 -21.5,21.5c-11.95901,0 -21.5,-9.54099 -21.5,-21.5c0,-11.95901 9.54099,-21.5 21.5,-21.5z"
                  />
                </g>
              </g>
            </svg>
            <span class="menu-navigation">Report</span>
          </div>
        </router-link>
      </li>
      <li>
        <button type="button" class="btn p-0" v-on:click="push()">
          <router-link
              v-bind:to="'/Home/' + `${$route.params.outlet_id}`"
              style="color: #fff"
              class="mx-auto font18"
          >
            <div>
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="24"
                  height="24"
                  viewBox="0 0 172 172"
                  style="fill: #000000"
              >
                <g
                    fill="none"
                    fill-rule="nonzero"
                    stroke="none"
                    stroke-width="1"
                    stroke-linecap="butt"
                    stroke-linejoin="miter"
                    stroke-miterlimit="10"
                    stroke-dasharray
                    stroke-dashoffset="0"
                    font-family="none"
                    font-weight="none"
                    font-size="none"
                    text-anchor="none"
                    style="mix-blend-mode: normal"
                >
                  <path d="M0,172v-172h172v172z" fill="none" />
                  <g fill="#000000">
                    <path
                        d="M85.82503,14.33333c-1.14611,0.03914 -2.24966,0.44378 -3.14941,1.15479l-50.92953,40.12353c-6.46397,5.09418 -10.24609,12.87841 -10.24609,21.10807v68.40527c0,4.88621 4.07212,8.95833 8.95833,8.95833h35.83333c4.88621,0 8.95833,-4.07212 8.95833,-8.95833v-35.83333c0,-1.05724 0.73442,-1.79167 1.79167,-1.79167h17.91667c1.05724,0 1.79167,0.73442 1.79167,1.79167v35.83333c0,4.88621 4.07212,8.95833 8.95833,8.95833h35.83333c4.88621,0 8.95833,-4.07212 8.95833,-8.95833v-68.40527c0,-8.22966 -3.78213,-16.01389 -10.24609,-21.10807l-50.92953,-40.12353c-0.99396,-0.7852 -2.23327,-1.19417 -3.49935,-1.15479zM86,26.55306l47.60514,37.50602c3.8847,3.06149 6.14486,7.71798 6.14486,12.66064v66.61361h-32.25v-34.04167c0,-6.86192 -5.67974,-12.54167 -12.54167,-12.54167h-17.91667c-6.86192,0 -12.54167,5.67974 -12.54167,12.54167v34.04167h-32.25v-66.61361c0,-4.94267 2.26016,-9.59916 6.14486,-12.66064z"
                    />
                  </g>
                </g>
              </svg>
              <span class="menu-navigation">Aktivitas</span>
            </div>
          </router-link>
        </button>
      </li>
      <li>
        <a :href="linkWa" target="_blank">
          <div>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 40 40"
                width="22px"
                height="22px"
            >
              <path
                  fill="#f2faff"
                  d="M4.221,29.298l-0.104-0.181c-1.608-2.786-2.459-5.969-2.458-9.205 C1.663,9.76,9.926,1.5,20.078,1.5c4.926,0.002,9.553,1.919,13.03,5.399c3.477,3.48,5.392,8.107,5.392,13.028 c-0.005,10.153-8.268,18.414-18.42,18.414c-3.082-0.002-6.126-0.776-8.811-2.24l-0.174-0.096l-9.385,2.46L4.221,29.298z"
              />
              <path
                  fill="#788b9c"
                  d="M20.078,2L20.078,2c4.791,0.001,9.293,1.867,12.676,5.253C36.137,10.639,38,15.14,38,19.927 c-0.005,9.878-8.043,17.914-17.927,17.914c-2.991-0.001-5.952-0.755-8.564-2.18l-0.349-0.19l-0.384,0.101l-8.354,2.19 l2.226-8.131l0.11-0.403L4.55,28.867c-1.566-2.711-2.393-5.808-2.391-8.955C2.163,10.036,10.202,2,20.078,2 M20.078,1 C9.651,1,1.163,9.485,1.158,19.912c-0.002,3.333,0.869,6.588,2.525,9.455L1,39.169l10.03-2.63c2.763,1.507,5.875,2.3,9.042,2.302 h0.008c10.427,0,18.915-8.485,18.92-18.914c0-5.054-1.966-9.807-5.538-13.382C29.89,2.971,25.14,1.002,20.078,1L20.078,1z"
              />
              <path
                  fill="#79ba7e"
                  d="M19.995,35c-2.504-0.001-4.982-0.632-7.166-1.823l-1.433-0.782l-1.579,0.414l-3.241,0.85l0.83-3.03	l0.453-1.656L7,27.485c-1.309-2.267-2.001-4.858-2-7.492C5.004,11.726,11.732,5.001,19.998,5c4.011,0.001,7.779,1.563,10.61,4.397	C33.441,12.231,35,15.999,35,20.005C34.996,28.273,28.268,35,19.995,35z"
              />
              <path
                  fill="#fff"
                  d="M28.28,23.688c-0.45-0.224-2.66-1.313-3.071-1.462c-0.413-0.151-0.712-0.224-1.012,0.224	c-0.3,0.45-1.161,1.462-1.423,1.761c-0.262,0.3-0.524,0.337-0.974,0.113c-0.45-0.224-1.899-0.7-3.615-2.231	c-1.337-1.191-2.239-2.663-2.501-3.113c-0.262-0.45-0.029-0.693,0.197-0.917c0.202-0.202,0.45-0.525,0.674-0.787	c0.224-0.262,0.3-0.45,0.45-0.75c0.151-0.3,0.075-0.563-0.038-0.787c-0.113-0.224-1.012-2.437-1.387-3.336	c-0.364-0.876-0.736-0.757-1.012-0.771c-0.262-0.014-0.562-0.015-0.861-0.015c-0.3,0-0.787,0.113-1.198,0.563	c-0.411,0.45-1.573,1.537-1.573,3.749s1.611,4.35,1.835,4.649c0.224,0.3,3.169,4.839,7.68,6.786	c1.072,0.462,1.911,0.739,2.562,0.947c1.076,0.342,2.057,0.294,2.832,0.178c0.864-0.129,2.66-1.087,3.034-2.136	c0.375-1.049,0.375-1.95,0.262-2.136C29.03,24.025,28.731,23.912,28.28,23.688z"
              />
            </svg>
            <span class="menu-navigation">Admin</span>
          </div>
        </a>
      </li>

      <li>
        <button type="button" class="btn p-0" v-on:click="logout()">
          <div>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="24"
                height="24"
                viewBox="0 0 172 172"
                style="fill: #000000"
            >
              <g
                  fill="none"
                  fill-rule="nonzero"
                  stroke="none"
                  stroke-width="1"
                  stroke-linecap="butt"
                  stroke-linejoin="miter"
                  stroke-miterlimit="10"
                  stroke-dasharray
                  stroke-dashoffset="0"
                  font-family="none"
                  font-weight="none"
                  font-size="none"
                  text-anchor="none"
                  style="mix-blend-mode: normal"
              >
                <path d="M0,172v-172h172v172z" fill="none" />
                <g fill="#000000">
                  <path
                      d="M85.89502,14.33333c-1.86415,0.02787 -3.64407,0.78102 -4.96207,2.09961l-21.5,21.5c-1.87223,1.79752 -2.62641,4.46675 -1.97168,6.97825c0.65472,2.5115 2.61605,4.47282 5.12755,5.12755c2.5115,0.65472 5.18073,-0.09946 6.97825,-1.97168l9.26628,-9.26627v65.11589c-0.03655,2.58456 1.32136,4.98858 3.55376,6.29153c2.2324,1.30295 4.99342,1.30295 7.22582,0c2.2324,-1.30295 3.59031,-3.70697 3.55376,-6.29153v-65.11589l9.26628,9.26627c1.79752,1.87223 4.46675,2.62641 6.97825,1.97168c2.5115,-0.65472 4.47282,-2.61605 5.12755,-5.12755c0.65472,-2.5115 -0.09946,-5.18073 -1.97168,-6.97825l-21.5,-21.5c-1.36945,-1.37003 -3.23513,-2.12741 -5.17204,-2.09961zM132.63232,33.95768c-2.91608,-0.04768 -5.57025,1.67634 -6.71224,4.35993c-1.14198,2.68359 -0.54402,5.79154 1.51221,7.8598c9.94438,10.2909 15.90104,24.24 15.90104,39.82259c0,31.74865 -25.58468,57.33333 -57.33333,57.33333c-31.74865,0 -57.33333,-25.58468 -57.33333,-57.33333c0,-15.41416 6.08798,-29.54321 15.93604,-39.83659c2.73661,-2.8603 2.63634,-7.3975 -0.22396,-10.13411c-2.8603,-2.73661 -7.3975,-2.63634 -10.13411,0.22396c-12.33995,12.89795 -19.9113,30.56024 -19.9113,49.74674c0,39.49518 32.17149,71.66667 71.66667,71.66667c39.49518,0 71.66667,-32.17149 71.66667,-71.66667c0,-19.26174 -7.45934,-36.87414 -19.93229,-49.78174c-1.32546,-1.41184 -3.16581,-2.22725 -5.10205,-2.26058z"
                  />
                </g>
              </g>
            </svg>

            <span class="menu-navigation">Logout</span>
          </div>
        </button>
      </li>
    </ul>
  </div>
</template>
<script>
let menuItems = document.querySelectorAll(".nav-bar ul li svg");

// eslint-disable-next-line no-unused-vars
const navItemClick = function(el) {
  let element = this;

  menuItems.forEach(item => {
    item.classList.remove("active");
  });

  element.classList.add("active");
};

menuItems.forEach(item => {
  item.addEventListener("click", navItemClick);
});
export default {
  methods: {
    logout: function() {
      localStorage.removeItem("token");
      this.$router.push("/");
    }
    // linkwa() {
    //     window.location.reload();
    // }
  },
  computed: {
    // linkWa() {
    //   return `https://api.whatsapp.com/send?phone=${this.points.whatapps}`;
    // },
    points() {
      return this.$store.state.points;
    },
    bulan() {
      return localStorage.bulanAktive;
    }
  },
  mounted() {
    this.$store.dispatch("getPoin", {
      outlet_id: this.$route.params.outlet_id,
      token: localStorage.token
    });
  }
};
</script>
<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.disabled {
  pointer-events: none;
  opacity: 0.6;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.menu-navigation {
  color: #a59e9e;
}

.whatsapp-icon {
  position: relative;
  top: -4.5vh;
}

.size-wa {
  width: 55% !important;
}

.nav-bar {
  border-top: 1px solid transparent;
  background: #ffffff;
  width: 100%;
  height: 4rem;
  position: fixed;
  bottom: 0;
  -webkit-box-shadow: 0px 3px 8px -3px rgba(186, 186, 186, 0.8);
  box-shadow: 0px 3px 8px -3px rgba(186, 186, 186, 0.8);
  display: block;
  /* padding: 0 34.5rem 0 34.5rem !important;*/

  min-width: 360px !important;
  max-width: 750px;
  margin: 0 auto !important;
  padding: auto !important;
}

.nav-bar svg {
  height: 1.2rem !important;
  position: relative;
  z-index: 10;
  transition: all 0.4s;
  display: inline-block;
}

.nav-bar ul {
  display: flex;
  height: 100%;
}

.nav-bar ul li {
  height: 100%;
  text-align: center;
  list-style: none;
  align-items: center;
  display: flex;
  cursor: pointer;
  justify-content: center;
  flex-wrap: wrap;
  position: relative;
  flex: 1;
  color: #a59e9e;
}

.nav-bar ul li span {
  font-weight: 600;
  width: 100%;
  display: block;
  text-align: center;
  transition: all 0.22s;
}

.nav-bar ul li:after {
  width: 50%;
  border-radius: 100%;
  content: "";
  left: 0;
  right: 0;
  margin: 0 auto;
  top: 0;
  z-index: 0;
  position: absolute;
  background: rgb(255, 255, 255);
  transition: all 0.4s;
}

.nav-bar ul li:hover:after {
  transform: translate3d(0, -15%, 0);
}

.nav-bar ul li.active:after {
  transform: translate3d(0, -40%, 0);
}

.nav-bar ul li.active span,
.nav-bar ul li:hover span {
  color: #604bb9;
  font-weight: bolder;
}

.nav-bar ul li svg path {
  transition: all 0.4s;
}

.nav-bar ul li:hover svg g,
.nav-bar ul li.active svg {
  fill: #604bb9;
}

@media screen and (max-width: 400px) {
  .nav-bar {
    border-top: 1px solid transparent;
    background: #ffffff;
    width: 100%;
    height: 3rem;
    position: fixed;
    left: 0;
    bottom: 0;
    -webkit-box-shadow: 0px 3px 8px 0px #bababa;
    box-shadow: 0px 3px 8px 0px #bababa;
    display: block;
  }

  .size-wa {
    width: 85% !important;
  }

  .whatsapp-icon {
    position: relative;
    top: -4.5vh;
    left: 10%;
  }

  .nav-bar svg {
    height: 1.5rem;
  }

  .nav-bar ul li span {
    font-size: 0.75rem;
    font-weight: 500;
  }

  .nav-bar ul li.active:after {
    transform: translate3d(0, -25%, 0);
  }

  .nav-bar ul li:hover svg g,
  .nav-bar ul li.active svg {
    fill: #604bb9;
  }
}
</style>
