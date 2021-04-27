<template>
  <div class="col-md-12 col-12 p-0 mt-3">
    <div class="d-flex flex-row ml-3 mb-3">
      <img
        class="w-icon"
        src="../../assets/COG-LOGO-Joss_Retail_salesman.png"
        alt
      />
      <div class="d-flex align-items-center">
        <div class="d-flex flex-column">
          <h3 class="font16 ml-1 my-0 font-weight-bold">Promo</h3>
          <p class="font-12 ml-1 my-0">
            Temukan penawaran menarik dibawah ini.
          </p>
        </div>
      </div>
    </div>

    <div
      class="mx-4 rounded-custom"
      v-if="slider.data.length > 0"
      style="background-color: white"
    >
      <VueSlickCarousel :arrows="true" :dots="true" v-bind="settings">
        <div v-for="(list, index) in slider.data" :key="index" class="radius">
          <img
            @click="details(index)"
            v-bind:src="list.img_url"
            class="w-100 radius-img"
            style="min-height: 100%"
            alt=""
          />
          <div class="row justify-content-center d-flex spaceCarousel mt-3">
            <div class="col px-4">
              <h4 class="font-weight-bold font-12 text-left font13 my-0 py-0">
                {{ list.title }}
              </h4>
              <p class="font-12 text-left font10 text-black-50">
                {{ list.deskripsi }}
              </p>
            </div>
          </div>
        </div>
      </VueSlickCarousel>
    </div>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
export default {
  components: {
    VueSlickCarousel,
  },
  name: "PromoBanner",
  props: ["slider", "icon"],
  data() {
    return {
      settings: {
        arrows: false,
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 4000,
        cssEase: "linear",
      },
    };
  },
  methods: {
    details(index) {
      this.$router.push(
        `/PromoDetails/${this.$route.params.outlet_id}/` + index
      );
      console.log(index);
    },
  },
};
</script>

<style scoped>
.rounded-custom {
  border-radius: 30px;
}
.radius {
  border-radius: 24px;
}
.radius-img {
  border-radius: 18px 18px 0px 0px;
}
.table-bordered {
  border: 1px solid #d3d3d3 !important;
}

.carousel-indicators {
  position: relative !important;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 15;
  display: flex;
  justify-content: center;
  padding-left: 0;
  margin-right: 15%;
  margin-left: 15%;
  list-style: none;
}
.carousel-indicators li {
  box-sizing: content-box;
  flex: 0 1 auto;
  width: 30px;
  height: 3px;
  margin-right: 3px;
  margin-left: 3px;
  text-indent: -999px;
  cursor: pointer;
  background-color: #e19e29 !important;
  background-clip: padding-box;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  opacity: 0.5;
  transition: opacity 0.6s ease;
}

.carousel-item {
  position: relative;
  display: none;
  float: left;
  width: 100%;
  margin-right: -100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  transition: transform 0.6s linear !important;
}
.icon {
  width: 50% !important;
  z-index: 10;
  position: relative;
}
.w-icon {
  width: 10%;
}
@media screen and (max-width: 1000px) {
  .w-icon {
    width: 16%;
    height: 16%;
  }
  .font-12 {
    font-size: 12px;
  }
  .font16 {
    font-size: 16px;
  }
  .font14 {
    font-size: 14px;
  }
}
</style>
