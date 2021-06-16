<template>
  <div>
    <div class="row no-gutters">
      <div class="col-12 d-flex" style="justify-content: space-evenly">
        <button
          v-for="(tab, index) in tabs"
          :key="tab.title"
          @click="selectTab(index)"
          type="button"
          class="btn btn-outline-danger"
          style="width: 40%"
        >
          <p class="font-weight-bold m-0">
            {{ tab.title }}
          </p>
        </button>
      </div>
    </div>

    <slot></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedIndex: 0,
      tabs: [],
    };
  },
  created() {
    this.tabs = this.$children;
  },
  mounted() {
    this.selectTab(0);
  },
  methods: {
    selectTab(i) {
      this.selectedIndex = i;
      this.tabs.forEach((tab, index) => {
        tab.isActive = index === i;
      });
    },
  },
};
</script>

<style scoped>
.btn {
  border-radius: 20px !important;
}

.btn-outline-danger:not(:disabled):not(.disabled).active,
.btn-outline-danger:not(:disabled):not(.disabled):active,
.show > .btn-outline-danger.dropdown-toggle {
  color: #fff;
  background-color: #f9a3ab !important;
}

.btn-outline-danger:hover {
  color: #fff;
  background-color: #f9a3ab !important;
  border-color: transparent;
}
</style>