<template>
  <div class="row btn-quarter mx-0 p-0 d-flex justify-content-between">
    <div class="content mx-0 my-0">
      <table class="table mb-0 mx-0">
        <thead>
          <tr>
            <th v-for="el in bulan" :key="el" class="mx-1">
              <router-link
                v-bind:to="
                  '/MonthToYear/' + el.id + `/${$route.params.outlet_id}`
                "
                type="button"
                :class="
                  el.id === $route.params.bulan
                    ? 'btn font-custom rounded-pill px-0 font-weight-light bg-btn'
                    : 'btn font-custom rounded-pill px-0 font-weight-light btn-hover '
                "
              >
                <button
                  class="btn d-flex rounded-pill"
                  style="white-space: pre"
                >
                  <h3 class="font14 text-dark mb-0 btn font-weight-light p-0">
                    {{ el.nama_bulan }}
                  </h3>
                </button>
              </router-link>
            </th>
          </tr>
        </thead>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "sliderMonth",
  components: {},
  props: ["bulan"],
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped>
.content {
  overflow-x: scroll;
  width: 100%;
}

.content::-webkit-scrollbar {
  display: none;
}

.bg-btn {
  background-color: #ffde00;
  border: 3px solid #d6af04;
}

.width-logo {
  width: 50%;
}

.table th {
  border: none;
}

.rounded {
  border-radius: 0.5rem !important;
}

.mb-custom {
  margin-bottom: 5rem;
}

.bg-section {
  min-height: 10vh;
  height: 15vh;
  background-color: #717073;
  border: 1px solid;
}

.bg-red {
  background: #e31837;
}

.btn-border {
  border: 1px solid #d3d3d3;
  border-radius: 10px;
  background: #fff;
}

/* fonts */

.font11 {
  font-size: 11px;
}
.font10 {
  font-size: 10px;
}

.font13 {
  font-size: 13px;
}

.font14 {
  font-size: 14px;
}

.font12 {
  font-size: 12px;
}

.font22 {
  font-size: 22px;
}

.btn-hover {
  background-color: #fffcc5;
  border: 1px solid #d3d3d3;
  border-radius: 20px;
}
.btn-hover:hover {
  background-color: #ffff00;
  border-color: #fffcc5;
}

/* #f7f79fd8 */

@media only screen and (min-device-width: 320px) and (max-device-width: 1024px) {
  .mb-custom {
    margin-bottom: 13rem;
  }

  .width-max-content {
    width: max-content;
  }

  .width-logo {
    width: 100%;
  }

  .word-break {
    word-break: break-all;
  }

  .widht-custom {
    width: 105%;
  }

  .custom-position {
    min-height: 19vh;
    background-color: #717073;
    border: 1px solid #717073;

    max-width: auto;
  }

  .margin-top-custom {
    margin-top: -160px;
  }

  .box-position {
    position: fixed;
    top: 17vh;
    left: 0;
    right: 0;
    max-width: auto;
    z-index: 1030;
  }

  .font20 {
    font-size: 20px;
  }
  .font16 {
    font-size: 16px;
  }

  .btn {
    line-height: 25px;
    padding: 0px 6px;
  }
}
</style>
