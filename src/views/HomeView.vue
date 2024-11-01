<template>
  <div class="wrapper">
    <MenuAside />
    <div class="main">
      <div class="greetings">
        <div class="greetings__wrapper">
          <h5>Welcome!</h5>
          <h3>I am Iryna Illiukhina</h3>
          <h1 class="text-gradient">Frontend developer</h1>
          <p>
            with 4 years of experience in building dynamic web applications using
            Magento, Vue, and React. Skilled in working with international teams and in Agile environments.</p>
        </div>
      </div>
      <section class="picture">
        <div class="picture__wrapper">
          <div class="social-icons">
            <a class="li" href="https://www.linkedin.com/in/iryna-illiukhina/" target="_blank">
              <font-awesome-icon :icon="['fab', 'linkedin']" />
            </a>
            <a class="git" href="https://github.com/irynailliukhina" target="_blank">
              <font-awesome-icon :icon="['fab', 'github']" />
            </a>
            <a class="email" href="mailto:irynailliukhina@gmail.com">
              <font-awesome-icon :icon="['fas', 'envelope']" />
            </a>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import MenuAside from '../components/MenuAside.vue'

export default {
  components: { MenuAside }
};
</script>

<style scoped lang="scss">
.wrapper {
  overflow-y: clip;


  .main {
    height: calc(100vh - 80px);
    display: flex;
  }
}

.greetings {
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  &__wrapper {
    background: rgb(100, 100, 100, 10%);
    padding: 30px;
    border-radius: 30px;
    position: relative;

    &:hover::before {
      top: 20%;
      opacity: 1;
    }

    &::before {
      content: '';
      position: absolute;
      width: 1px;
      height: 86px;
      left: 0;
      top: 80%;
      z-index: 1;
      opacity: 0;
      background: linear-gradient(0deg, rgba(59, 56, 65, 0) 22.4%, #a594fd 60.94%, rgba(59, 56, 65, 0));
      transition: top 5s cubic-bezier(0.215, 0.610, 0.355, 1.000), opacity 2s linear;
      will-change: transform, opacity;
    }
  }

  h1 {
    font-weight: bold;
  }
}

.picture {
  width: 50%;
  display: flex;
  justify-content: right;
  align-items: center;

  &__wrapper {
    position: relative;
    width: 300px;
    height: 300px;
    background-image: url(../assets/photo.jpeg);
    background-size: contain;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    -ms-border-radius: 50%;
    -o-border-radius: 50%;
    border-radius: 50%;

    .social-icons {
      a {
        background: linear-gradient(90deg, #4a61d4 0, #ae67aa, #b1b115);
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;

        &:hover {
          scale: 1.3;
          z-index: 10;
        }

        &.li {
          width: 80px;
          height: 80px;
          top: 60%;
          left: 0;
          font-size: 40px;
          animation: moveAround 30s ease-in-out infinite;
        }

        &.git {
          width: 60px;
          height: 60px;
          top: 90%;
          left: 45%;
          font-size: 30px;
          animation: moveAround 40s ease-in-out infinite;
        }

        &.email {
          width: 45px;
          height: 45px;
          top: 0;
          left: 75%;
          font-size: 25px;
          animation: moveAround 50s ease-in-out infinite;
        }
      }
    }
  }
}

@media (max-width: 991px) {
  .picture__wrapper {
    width: 200px;
    height: 200px;
  }

  .social-icons a {
    scale: .8;
  }
}

// Mobile
@media (max-width: 767px) {
  .wrapper .main {
    flex-direction: column-reverse;
    height: 100%;
    position: relative;
    justify-content: flex-end;

    .greetings {
      height: auto;
      justify-content: flex-start;
      text-align: center;
      margin-top: 7rem;
      width: auto;

      h1 {
        width: auto;
      }

      &__wrapper::before {
        opacity: 1;
        top: 20%;
      }
    }

    .picture {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;

      .social-icons {
        position: absolute;
        display: flex;
        bottom: -25px;
        width: 200px;
        align-items: center;
        justify-content: space-between;

        a {
          position: relative;
          animation: none;
          width: 60px;
          height: 60px;
          top: auto;
          left: auto;
        }
      }
    }
  }
}

@keyframes moveAround {
  0% {
    opacity: 1;
    transform: translate(0, 0);
  }

  25% {
    opacity: .8;
    transform: translate(15px, 15px);
  }

  50% {
    opacity: .9;
    transform: translate(-15px, -15px);
  }

  75% {
    opacity: .8;
    transform: translate(15px, -15px);
  }

  100% {
    opacity: 1;
    transform: translate(0, 0);
  }
}
</style>
