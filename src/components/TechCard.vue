<template>
  <div class="card">
    <img :src="card.icon" alt="Icon" width="40" height="40" />
    <p>{{ card.name }}</p>
  </div>
</template>

<script>
export default {
  props: {
    card: Object
  }
}

</script>

<style lang="scss" scoped>
.card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background: var(--c-black-mute);
  border-radius: 20px;
  margin: 5px;
  width: 130px;
  height: 130px;

  p {
    margin-top: 20px;
  }
}

.card:hover {
  animation: tremble 4s ease-in-out infinite;
}

// Tablet
@media (max-width: 991px) {
  .card {
    width: calc((100% - 60px) / 7);

    &:nth-child(7n + 1) {
      margin-left: 0;
    }

    &:nth-child(7n) {
      margin-right: 0;
    }
  }
}

// Mobile
@media (max-width: 767px) {
  .card {
    width: calc((100% - 30px) / 4);
    margin: 5px;

    &:hover {
      animation: none;
    }

    &:nth-child(4n + 1) {
      margin-left: 0;
    }

    &:nth-child(4n) {
      margin-right: 0;
    }
  }
}

@media (max-width: 480px) {
  .card {
    width: calc((100% - 20px) /3);
    margin: 5px;

    &:nth-child(4n + 1) {
      margin-left: 5px;
    }

    &:nth-child(4n) {
      margin-right: 5px;
    }

    &:nth-child(3n + 1) {
      margin-left: 0;
    }

    &:nth-child(3n) {
      margin-right: 0;
    }
  }
}


@keyframes tremble {
  0% {
    transform: translate(1px, 1px) rotate(0deg);
  }

  10% {
    transform: translate(-1px, -2px) rotate(-1deg);
  }

  20% {
    transform: translate(-3px, 0px) rotate(1deg);
  }

  30% {
    transform: translate(3px, 2px) rotate(0deg);
  }

  40% {
    transform: translate(1px, -1px) rotate(1deg);
  }

  50% {
    transform: translate(-1px, 2px) rotate(-1deg);
  }

  60% {
    transform: translate(-3px, 1px) rotate(0deg);
  }

  70% {
    transform: translate(3px, 1px) rotate(-1deg);
  }

  80% {
    transform: translate(-1px, -1px) rotate(1deg);
  }

  90% {
    transform: translate(1px, 2px) rotate(0deg);
  }

  100% {
    transform: translate(1px, 1px) rotate(0deg);
  }
}
</style>
