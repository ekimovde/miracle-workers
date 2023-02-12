<template>
  <div class="app">
    <div class="app__cloud" v-for="cloud in clouds" :key="cloud"></div>
    <MenuBtn class="app__menu-btn" />
    <Hints class="app__hints" />
    <Scroll class="app__scroll" />
    <div class="app__page">
      <HeadInfo />
      <Slider class="app__slider"></Slider>
      <PromoCode class="app__promo-code" />
    </div>
    <LabelText class="app__label-text" />
  </div>
</template>

<script>
import MenuBtn from './menu-btn/component.vue'
import Hints from './hints/component.vue'
import Scroll from './scroll/component.vue'
import HeadInfo from './head-info/component.vue'
import Slider from './slider/component.vue'
import PromoCode from './promo-code/component.vue'
import LabelText from './label-text/component.vue'

export default {
  name: 'App',
  components: {
    MenuBtn,
    Hints,
    Scroll,
    HeadInfo,
    Slider,
    PromoCode,
    LabelText
  },
  data() {
    return {
      clouds: 19
    }
  }
}
</script>

<style lang="scss">
@mixin absolute-common-left {
  position: absolute;
  left: 36px;
}

@mixin bottom-common-left {
  bottom: 0;
  left: 0;
}

@mixin bottom-common-right {
  bottom: 0;
  right: 0;
}

.app {
  position: relative;
  height: 100%;
  display: flex;
  padding: 21px 0;
  background-image: url('../../assets/img/Sky.png');
  background-size: cover;

  &__menu-btn {
    @include absolute-common-left;

    top: 38px;
  }

  &__hints {
    @include absolute-common-left;

    top: 50%;
    transform: translateY(-50%);
  }

  &__scroll {
    @include absolute-common-left;

    bottom: 28px;
  }

  &__label-text {
    position: absolute;
    right: 36px;
    top: 50%;
    transform: translateY(-50%);
  }

  &__page {
    margin: 0 auto;

    @media (max-width: 1150px) {
      width: 550px;
    }
  }

  &__slider {
    margin: 35px 0 38px 0;
  }

  &__promo-code {
    margin: 0 auto;
    z-index: 2;
    position: relative;
  }

  &__cloud {
    position: absolute;

    &:nth-child(1),
    &:nth-child(3),
    &:nth-child(4),
    &:nth-child(8) {
      @include bottom-common-left;
    }

    &:nth-child(1) {
      background-image: url('../../assets/img/clouds/1.png');
      width: 693px;
      height: 662px;
    }

    &:nth-child(2) {
      width: 325px;
      height: 306px;
      background-image: url('../../assets/img/clouds/2.png');
    }

    &:nth-child(2) {
      bottom: 180px;
      left: 183px;
    }

    &:nth-child(3) {
      width: 929px;
      height: 706px;
      background-image: url('../../assets/img/clouds/3.png');
    }

    &:nth-child(4),
    &:nth-child(5),
    &:nth-child(6),
    &:nth-child(7),
    &:nth-child(13),
    &:nth-child(17) {
      width: 839px;
      height: 400px;
      background-image: url('../../assets/img/clouds/4.png');
    }

    &:nth-child(8),
    &:nth-child(9),
    &:nth-child(12) {
      width: 590px;
      height: 648px;
      background-image: url('../../assets/img/clouds/5.png');
    }

    &:nth-child(5),
    &:nth-child(16) {
      @include bottom-common-right;
    }

    &:nth-child(10),
    &:nth-child(11) {
      width: 533px;
      height: 441px;
      background-image: url('../../assets/img/clouds/6.png');
    }

    &:nth-child(14),
    &:nth-child(16) {
      width: 667px;
      height: 574px;
      background-image: url('../../assets/img/clouds/7.png');
    }

    &:nth-child(6) {
      bottom: 0;
      right: 150px;
    }

    &:nth-child(7) {
      bottom: 80px;
      right: 430px;
    }

    &:nth-child(9) {
      bottom: 0;
      right: 285px;
    }

    &:nth-child(10) {
      bottom: 80px;
      right: 0;
    }

    &:nth-child(11) {
      bottom: 285px;
      right: 225px;
    }

    &:nth-child(12) {
      bottom: 0px;
      left: 500px;
    }

    &:nth-child(13) {
      bottom: 55px;
      right: 0;
    }

    &:nth-child(14) {
      top: 0;
      left: 0;
    }

    &:nth-child(15) {
      width: 523px;
      height: 574px;
      top: 0;
      right: 0;
      background-image: url('../../assets/img/clouds/8.png');
    }

    &:nth-child(17) {
      bottom: 0;
      left: 340px;
    }
  }
}
</style>
