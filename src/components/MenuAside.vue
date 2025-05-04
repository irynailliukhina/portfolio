<template>
  <header>
    <button @click="toggleMenu" class="menu-toggle links__button">
      <font-awesome-icon v-if="menuOpen" :icon="['fas', 'xmark']" />
      <font-awesome-icon v-else :icon="['fas', 'bars']" />
    </button>

    <div class="links" :class="{ 'open': menuOpen }">
      <ul class="links__wrapper mobile-menu">
        <MenuLink v-for="link in links" :key="link" :link="link" />
        <MenuLink :link=contact @click.prevent="openPopup" />
        <a :href="pdfUrl" download="cv.pdf">
          <button class="links__button">Download CV</button>
        </a>
      </ul>
    </div>
    <Transition name="modal">
      <ContactPopup v-if="showModal" @close="showModal = false" class="modal" showPopup="false" />
    </Transition>
  </header>
</template>

<script>
import pdfFile from '../assets/cv.pdf';
import MenuLink from './MenuLink.vue';
import ContactPopup from './ContactPopup.vue';

export default {
  data() {
    return {
      showModal: false,
      pdfUrl: pdfFile,
      menuOpen: false,

      links: [
        {
          text: "About",
          route: "/"
        },
        {
          text: "Skills and projects",
          route: "/work"
        }],
      contact: {
        text: "Contact",
        route: "/"
      }
    };
  },
  components: { MenuLink, ContactPopup },
  methods: {
    openPopup() {
      this.showModal = true;
      console.log(this.showModal)
    },
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    }
  },
  watch: {
    showModal(isVisible) {
      document.body.style.overflow = isVisible ? 'hidden' : '';
    },
    menuOpen(isOpen) {
      document.body.style.overflow = isOpen ? 'hidden' : '';
    }
  }
};
</script>

<style scoped lang="scss">
.links {
  padding: 1rem 0;

  &__wrapper {
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0;
  }

  &__button {
    position: relative;
    background: black;
    border-radius: 5px;
    border: none;
    padding: 1rem;
    text-transform: uppercase;
    font-weight: bold;
    color: var(--color-text);
    transition: .5s;

    &:hover {
      background: transparent;
    }

    &::before {
      content: '';
      position: absolute;
      top: -2px;
      left: -2px;
      right: -2px;
      bottom: -2px;
      background: var(--gradient);
      z-index: -1;
      border-radius: 5px;
    }
  }
}

.menu-toggle {
  display: none;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-to,
.modal-leave-from {
  opacity: 1;
}

.modal-enter-active,
.modal-leave-active {
  transition: all .5s ease-out;
}

.modal-leave-from {
  opacity: 0;
}

@media (max-width: 767px) {
  .links {
    position: absolute;
    width: 100vw;
    height: calc(100vh + 5px);
    background-color: black;
    align-items: self-start;
    justify-content: center;
    transform: translate(300%);
    transition: .5s ease-out;
    z-index: 1000;
    overflow-y: clip;
    top: 0;

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

    &.open {
      transform: translate(0);
      z-index: 1000;
      display: flex;
      left: 0;
    }

    &__wrapper {
      display: flex;
      flex-direction: column;
      height: 50%;
      margin: 5rem;
      justify-content: space-around;
      align-items: center;
      padding: 0;
    }
  }

  .menu-toggle {
    display: block;
    position: absolute;
    top: 20px;
    right: 20px;
    z-index: 1001;
    font-size: 2rem;
    padding: 0;
    width: 48px;
    height: 48px;
  }
}
</style>
