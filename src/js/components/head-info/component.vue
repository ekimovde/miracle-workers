<template>
  <div class="head-info">
    <LogoSvg />
    <h1 class="head-info__title">ОНИ ДОЛЖНЫ ЧТО-ТО ЗНАТЬ</h1>
  </div>
</template>

<script>
import LogoSvg from '../img/logo-svg/component.vue'

export default {
  name: 'head-info',
  components: {
    LogoSvg
  }
}
</script>

<style lang="scss">
@import 'src/assets/scss/helper.scss';

.head-info {
  display: flex;
  flex-direction: column;
  align-items: center;

  &__title {
    @include fontFutura45BoldUppercase;

    margin-top: 24px;
    color: #ffcc64;
    z-index: 1;

    @media (max-width: 1150px) {
      text-align: center;
    }
  }
}
</style>
