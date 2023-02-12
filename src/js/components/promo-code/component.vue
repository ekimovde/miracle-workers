<template>
  <button class="promo-code">
    <p class="promo-code__label">Искать промокод</p>
    <ArrowRightSvg />
  </button>
</template>

<script>
import ArrowRightSvg from '../img/arrow-right-svg/component.vue'

export default {
  name: 'promo-code',
  components: {
    ArrowRightSvg
  }
}
</script>

<style lang="scss">
@import 'src/assets/scss/helper.scss';

.promo-code {
  display: flex;
  align-items: center;

  &__label {
    @include fontKinopoisk15Regular;

    margin-right: 15px;
  }
}
</style>
