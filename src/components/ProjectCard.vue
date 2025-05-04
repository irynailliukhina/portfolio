<template>
  <div class="card">
    <div class="card__img-wrap">
      <img :src="project.picture" @load="addLoadedClass($event)" />
    </div>
    <h5 class="card__name">{{ project.name }}</h5>
    <p class="card__desc">{{ project.desc }}</p>
    <div class="card__links">
      <a :href="project.linkLive" v-if="project.linkLive" target="_blank">
        <font-awesome-icon :icon="['fas', 'globe']" class="live tooltip" />
        <span class="tooltip-text tooltip-text__live">Live website</span>
      </a>
      <a :href="project.linkSourse" v-if="project.linkSourse" target="_blank">
        <font-awesome-icon :icon="['fas', 'code']" class="source tooltip" />
        <span class="tooltip-text tooltip-text__source">Source code</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    project: Object
  },
  methods: {
    addLoadedClass(event) {
      event.target.classList.add('loaded');
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 30px 30px 80px 30px;
  background: rgb(24, 24, 24);
  border-radius: 20px;
  margin: 5px;
  width: calc((100% - 20px) /3);
  transition: 2s ease;
  position: relative;

  &:nth-child(3n + 1) {
    margin-left: 0;
  }

  &:nth-child(3n) {
    margin-right: 0;
  }

  &::before {
    display: none;
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: var(--gradient);
    z-index: -1;
    border-radius: 20px;
  }

  &:hover {
    background: black;

    &::before {
      display: block;
    }

    .source {
      color: var(--c-yellow);
    }

    .live {
      color: var(--c-purple);
    }
  }

  &__img-wrap {
    height: 200px;
    margin: 0 auto;

    img {
      height: auto;
      width: 100%;
      opacity: 0;
      transition: opacity 1s ease-in;
    }

    img.loaded {
      opacity: 1;
    }
  }

  &__links {
    position: absolute;
    bottom: 15px;
    display: flex;
    justify-content: center;

    a {
      font-size: 30px;
      position: relative;

      svg:hover {
        scale: 1.2;
        transition: .5s;

      }
    }

  }

  .source {
    padding: 0 15px;
  }

  .live {
    padding-right: 15px;
  }

}

h5 {
  margin: 20px 0;
  text-align: left;
}

.tooltip-text {
  visibility: hidden;
  width: 80px;
  background-color: #333;
  color: #fff;
  text-align: left;
  padding: 5px;
  border-radius: 5px;
  position: absolute;
  bottom: 100%;
  left: 80px;
  transform: translateX(-50%);
  opacity: 0;
  transition: opacity 0.3s;
  font-size: 12px;
  z-index: 1;
}

.tooltip:hover+.tooltip-text {
  visibility: visible;
  opacity: 1;
}

// Tablet
@media (max-width: 991px) {
  .card {
    width: calc((100% - 10px) /2);

    &:nth-child(2n + 1) {
      margin-left: 0;
    }

    &:nth-child(2n) {
      margin-right: 0;
    }
  }
}

// Mobile
@media (max-width: 767px) {
  .card {
    width: 100%;
    margin: 5px 0;
  }
}
</style>
