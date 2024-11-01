<template>
  <RouterView v-slot="slotProps">
    <Transition name="route" mode="out-in">
      <component :is="slotProps.Component" class="component"></component>
    </Transition>
  </RouterView>
</template>

<style lang="scss">
/* .route-enter-from {
  transform: translateY(-40px)
}

.route-leave-to {
  transform: translateY(-40px)
}

.route-enter-active,
.route-leave-active {
  transition: all .4s ease-out;
}

.route-enter-to,
.route-leave-from {
  transform: translateY(0);
} */

@media (max-width: 767px) {
  .component {
    &::before {
      content: '';
      width: 100%;
      height: 100%;
      position: absolute;
      background-color: var(--c-yellow);
      left: -100%;
      top: 0;
      z-index: 999;
    }

    &::after {
      content: '';
      width: 100%;
      height: 100%;
      position: absolute;
      background-color: var(--c-purple);
      left: -200%;
      top: 0;
      z-index: 1000;
    }
  }

  .route-enter-from {
    transform: translate(300%);
  }

  .route-leave-to {
    transform: translate(300%);
  }

  .route-enter-active,
  .route-leave-active {
    transition: all .5s ease-out;
  }

  .route-enter-to,
  .route-leave-from {
    transform: translateX(0);
  }
}
</style>
