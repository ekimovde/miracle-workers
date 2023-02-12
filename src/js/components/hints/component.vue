<template>
  <div class="hints">
    <div class="hints__line hints__line--small"></div>
    <div class="hints__line hints__line--middle"></div>
    <div class="hints__group">
      <div class="hints__hint">
        <p class="hints__number">03</p>
        <p class="hints__label">Подсказки</p>
      </div>
      <div class="hints__line"></div>
    </div>
    <div class="hints__line hints__line--middle"></div>
  </div>
</template>

<script>
export default {
  name: 'hints'
}
</script>

<style lang="scss">
@import 'src/assets/scss/helper.scss';

.hints {
  display: flex;
  flex-direction: column;

  &__line {
    width: 116px;
    height: 1px;
    background: #333333;

    &--small {
      width: 4px;
      margin-bottom: 52px;
    }

    &--middle {
      width: 8px;
    }
  }

  &__group {
    margin: 29px 0 49px 0;
    display: flex;
    flex-direction: column;
  }

  &__hint {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 5px;
    color: #333333;
  }

  &__number {
    @include fontKinopoisk16Medium;
  }

  &__label {
    @include fontKinopoisk14Regular;
  }
}
</style>
