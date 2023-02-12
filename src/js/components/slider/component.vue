<template>
  <div class="slider">
    <div class="slider__counter">{{ getCurrentSlide }}/{{ getAllSlides }}</div>
    <div class="slider__offer">
      <div class="slider__slides">
        <button
          class="slider__btn slider__btn--left"
          v-if="buttonLeftIsShow"
          @click="handlePrevSlide"
        >
          <ArrowSvg class="slider__arrow slider__arrow--left" />
        </button>
        <div
          class="slider__slide"
          :style="handleSlidePosition(index)"
          v-for="(slide, index) in slides"
          :key="slide.id"
        >
          <div class="slider__block">
            <img class="slider__img" :src="slide.img" />
          </div>
          <p class="slider__label">
            {{ slide.label }}
          </p>
        </div>
        <button
          class="slider__btn slider__btn--right"
          v-if="buttonRightIsShow"
          @click="handleNextSlide"
        >
          <ArrowSvg />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import ArrowSvg from '../img/arrow-svg/component.vue'

export default {
  name: 'slider',
  components: {
    ArrowSvg
  },
  data() {
    return {
      counter: 0,
      minCounter: 0,
      slides: [
        {
          id: 0,
          img: 'assets/img/racer.png',
          label: `Для примера мы показали вам его лицо. В первой серии он прячется в
            подвале за мониторами, и пусть борода не собьёт вас с толку. Найдите
            героя и нажмите на паузу — ему не терпится отдать вам промокод.`
        },
        {
          id: 1,
          img: 'assets/img/racer.png',
          label: `Для примера мы показали вам его лицо. В первой серии он прячется в
            подвале за мониторами, и пусть борода не собьёт вас с толку. Найдите
            героя и нажмите на паузу — ему не терпится отдать вам промокод.`
        },
        {
          id: 2,
          img: 'assets/img/racer.png',
          label: `Для примера мы показали вам его лицо. В первой серии он прячется в
            подвале за мониторами, и пусть борода не собьёт вас с толку. Найдите
            героя и нажмите на паузу — ему не терпится отдать вам промокод.`
        }
      ]
    }
  },
  computed: {
    getCurrentSlide() {
      return this.counter + 1
    },

    getAllSlides() {
      return this.slides.length
    },

    buttonLeftIsShow() {
      return this.counter !== this.minCounter
    },

    buttonRightIsShow() {
      return this.counter < this.slides.length - 1
    }
  },
  methods: {
    handleSlidePosition(index) {
      return {
        left: `${index * 100}%`,
        transform: `translateX(-${this.counter * 100}%)`
      }
    },

    handlePrevSlide() {
      this.counter -= 1
    },

    handleNextSlide() {
      this.counter += 1
    }
  }
}
</script>

<style lang="scss">
@import 'src/assets/scss/helper.scss';

.slider {
  &__counter {
    @include fontKinopoisk15SemiBold;

    width: 55px;
    height: 55px;
    background: #ffffff;
    box-shadow: 0px 5px 26px rgba(0, 0, 0, 0.1);
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    color: #000000;
    margin-bottom: 15px;
    z-index: 2;
    position: relative;
  }

  &__offer {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__btn {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100%;
    border: 1px solid #333333;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 100;

    &--left {
      left: 0;
    }

    &--right {
      right: 0;
    }
  }

  &__arrow {
    &--left {
      transform: rotate(-180deg);
    }
  }

  &__slides {
    position: relative;
    width: 800px;
    height: 320px;
    overflow: hidden;
  }

  &__slide {
    position: absolute;
    width: 100%;
    height: 100%;
    transition: 1s;
  }

  &__block {
    width: 100%;
    height: 220px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
  }

  &__img {
    position: absolute;
    top: 0;
  }

  &__label {
    @include fontKinopoisk20Light;

    text-align: center;
    color: #000000;
    z-index: 2;
  }
}
</style>
