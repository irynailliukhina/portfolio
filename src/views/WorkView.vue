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
          icon: "src/assets/icons/vue.svg"
        },
        {
          name: "JavaScript",
          icon: "src/assets/icons/javascript.svg"
        },
        {
          name: "Magento",
          icon: "src/assets/icons/magento.svg"
        },
        {
          name: "HTML",
          icon: "src/assets/icons/html.svg"
        },
        {
          name: "CSS",
          icon: "src/assets/icons/css.svg"
        },
        {
          name: "Jquery",
          icon: "src/assets/icons/jquery.svg"
        },
        {
          name: "React.js",
          icon: "src/assets/icons/react.svg"
        }
      ],
      projects: [
        {
          picture: "src/assets/projects/ttt.png",
          name: "Tic-tac-toe game",
          desc: "This project was part of my React.js studies, where I explored foundational concepts such as components and state management. Through building this project.",
          linkLive: "https://irynailliukhina.github.io/tic-tac-toe/",
          linkSourse: "https://github.com/irynailliukhina/tic-tac-toe"
        },
        {
          picture: "src/assets/projects/excel.png",
          name: "Excel JavaScript Copy",
          desc: "This project is a pure JavaScript implementation that mimics the core functionalities of Microsoft Excel, allowing users to create, edit, and manage spreadsheet-like data.",
          linkSourse: "https://github.com/irynailliukhina/excel/"
        },
        {
          picture: "src/assets/projects/i-calc.png",
          name: "Investment calculator",
          desc: "I developed an investment calculator to solidify my understanding of React fundamentals and create a practical tool for personal use. This project allowed me to apply core React concepts, such as component structure, state management, and props, resulting in a functional, user-friendly application for calculating investment growth over time.",
          linkLive: "https://irynailliukhina.github.io/investment-calculator/",
          linkSourse: "https://github.com/irynailliukhina/investment-calculator"
        }, {
          picture: "src/assets/projects/1.png",
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
