<template>
  <section class="home position-relative">
    <div class="cont position-fixed top-0 start-50 translate-middle-x">
      <vue-particles color="#4c4a58" :particleOpacity="0.7" :particlesNumber="120" shapeType="circle"
        linesColor="#dfabdc" :moveSpeed="2" hoverMode="repulse"></vue-particles>
    </div>
    <div class="container">
      <div class="row align-items-center justify-content-center mt-5">
            <div class="zback col-lg-3 col-md-3  col-12 d-none d-md-block d-lg-block d-xl-block d-xxl-block ">
          <Robot />
        </div>
        <div class="zfront col-lg-6 col-md-6 col-12 d-flex flex-column align-items-center justify-content-center mt-5">
          <LeftSide />
        </div>
        <div class="zback col-lg-3 col-md-3 col-12 d-none d-md-block d-lg-block d-xl-block d-xxl-block ">
          <Robot />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Robot from '@/components/Home/Robot.vue'
import LeftSide from '@/components/Home/LeftSide.vue'

export default {
  name: 'Home',
  components: {
    Robot,
    LeftSide,
  },
  data() {
    return {
    }
  },
  methods: {
  },
}
</script>

<style lang="scss" scoped>
@import '../sass/global/variables';
@import '../sass/global/animation';

.none {
  display: none;
  transition: $main-transition;
}

.dis {
  display: block;
}

.cont {
  height: 100%;
  max-height: 90vh;
  width: 100%;
  max-width: 100vw;
  z-index: -1;
}

.home {
  max-height: 95vh;

  .position-icon {
    position: fixed;
    right: 1%;
    bottom: 3%;
    z-index: 1000;

    .chat-icon {
      width: 3rem;
      height: 3rem;
      background: $second-main-color;
      border: 0.1rem dashed $main-color ;
    }

    .zfront {
      z-index: 1000;
    }
    .zback {
      z-index: -1;
    }
  }
}
</style>