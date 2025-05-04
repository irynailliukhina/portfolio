<template>
  <RouterView v-slot="slotProps">
    <SpinnerCustom :loading="loading" />
    <Transition name="route" mode="out-in">
      <div v-if="!loading">
        <component :is="slotProps.Component" class="component"></component>
      </div>
    </Transition>
  </RouterView>
</template>

<script>
import SpinnerCustom from './components/SpinnerCustom.vue';

export default {
  components: {
    SpinnerCustom,
  },
  data() {
    return {
      loading: true,
    };
  },
  mounted() {
    window.addEventListener('load', this.handlePageLoad);

    fetch('https://portfolio-a40d9-default-rtdb.europe-west1.firebasedatabase.app/visitors.json', {
      method: 'POST',
      body: JSON.stringify({
        page: window.location.pathname,
        referrer: document.referrer,
        userAgent: navigator.userAgent,
        language: navigator.language,
        timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        timestamp: new Date().toISOString()
      }),
    }).then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    }).then(data => {
      console.log('Data sent successfully:', data);
    }).catch(error => {
      console.error('Error sending data:', error);
    });

  },
  methods: {
    handlePageLoad() {
      this.loading = false;
    },
  },
  beforeUnmount() {
    window.removeEventListener('load', this.handlePageLoad);
  },
};
</script>

<style lang="scss">
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
