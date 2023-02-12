<template>
  <div class="label-text">hd.kinopoisk.ru</div>
</template>

<script>
export default {
  name: 'label-text'
}
</script>

<style lang="scss">
@import 'src/assets/scss/helper.scss';

.label-text {
  @include fontKinopoisk14Regular;

  writing-mode: vertical-lr;
}
</style>
