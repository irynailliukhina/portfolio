<template>
  <div class="wrapper">
    <MenuAside />
    <h3 class="cards__desc">My Development Stack:</h3>
    <div class="tech cards">
      <TechCard v-for="technology in technologies" :key="technology" :card="technology" />
    </div>
    <h3 class="cards__desc">Recent projects:</h3>
    <div class="project cards">
      <ProjectCard v-for="project in projects" :key="project" :project="project" />
    </div>
  </div>
</template>

<script>
import TechCard from '../components/TechCard.vue';
import ProjectCard from '@/components/ProjectCard.vue';
import MenuAside from '@/components/MenuAside.vue';

export default {
  data() {
    return {
      technologies: [
        {
          name: "Vue.js",
          icon: "src/assets/vue.svg"
        },
        {
          name: "JavaScript",
          icon: "src/assets/javascript.svg"
        },
        {
          name: "Magento",
          icon: "src/assets/magento.svg"
        },
        {
          name: "HTML",
          icon: "src/assets/html.svg"
        },
        {
          name: "CSS",
          icon: "src/assets/css.svg"
        },
        {
          name: "Jquery",
          icon: "src/assets/jquery.svg"
        },
        {
          name: "React.js",
          icon: "src/assets/react.svg"
        }
      ],
      projects: [
        {
          picture: "src/assets/1.png",
          name: "Rapala",
          desc: "Worked as a part of the team. Used VSF, less, magento",
          linkLive: "google.com",
          linkSourse: "google.com"
        },
        {
          picture: "src/assets/1.png",
          name: "Rapala",
          desc: "Worked as a part of the team. Used VSF, less, magento,Worked as a part of the team. Used VSF, less, magento",
          linkSourse: "google.com"
        },
        {
          picture: "src/assets/1.png",
          name: "Rapala Rapala Rapala",
          desc: "Worked as a part of the team. Used VSF, less, magento",
          linkLive: "google.com",
        }, {
          picture: "src/assets/1.png",
          name: "Rapala",
          desc: "Worked as a part of the team. Used VSF, less, magento",
          linkLive: "google.com",
          linkSourse: "google.com"
        }, {
          picture: "src/assets/1.png",
          name: "Rapala",
          desc: "Worked as a part of the team. Used VSF, less, magento, Worked as a part of the team. Used VSF, less, magento",
          linkLive: "google.com",
          linkSourse: "google.com"
        }, {
          picture: "src/assets/1.png",
          name: "Rapala",
          desc: "Worked as a part of the team. Used VSF, less, magento",
          linkLive: "google.com",
          linkSourse: "google.com"
        }
      ]
    }
  },
  components: { MenuAside, TechCard, ProjectCard }

}
</script>

<style lang="scss" scoped>
.wrapper {
  padding-bottom: 5rem;
}

.cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  &__desc {
    margin: 3rem 0;
    text-transform: uppercase;
  }
}

// Tablet
@media (max-width: 991px) {
  .tech.cards {
    justify-content: flex-start;
  }
}

// Mobile
@media (max-width: 767px) {
  .wrapper {
    padding: 3rem 2rem;

    .cards {
      margin: 1rem 0;
    }

    .project.cards {
      padding-bottom: 2rem≠;
    }

    h3 {
      margin: 1rem 0;
    }
  }
}
</style>
