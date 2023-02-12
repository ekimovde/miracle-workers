<template>
  <div class="scroll">
    <p class="scroll__label">Скрольте вниз</p>
    <ArrowDownSvg class="scroll__svg" />
  </div>
</template>

<script>
import ArrowDownSvg from '../img/arrow-down-svg/component.vue'

export default {
  name: 'scroll',
  components: {
    ArrowDownSvg
  }
}
</script>

<style lang="scss">
@import 'src/assets/scss/helper.scss';

.scroll {
  display: inline-flex;
  align-items: center;
  flex-direction: column;

  &__label {
    @include fontKinopoisk14Regular;

    writing-mode: sideways-lr;
    margin-bottom: 25px;
  }
}
</style>
