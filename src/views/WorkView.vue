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

import excel from '@/assets/projects/excel.png';
import ttt from '@/assets/projects/ttt.png';
import coaches from '@/assets/projects/coaches.png';
import icalc from '@/assets/projects/i-calc.png';

import vue from '@/assets/icons/vue.svg';
import js from '@/assets/icons/javascript.svg';
import magento from '@/assets/icons/magento.svg';
import html from '@/assets/icons/html.svg';
import css from '@/assets/icons/css.svg';
import jquery from '@/assets/icons/jquery.svg';
import nuxt from '@/assets/icons/nuxt.svg';

export default {
  data() {
    return {
      technologies: [
        {
          name: "JavaScript",
          icon: js
        },
        {
          name: "Vue.js",
          icon: vue
        },

        {
          name: "Nuxt.js",
          icon: nuxt
        },
        {
          name: "Magento",
          icon: magento
        },
        {
          name: "HTML",
          icon: html
        },
        {
          name: "CSS",
          icon: css
        },
        {
          name: "Jquery",
          icon: jquery
        }
      ],
      projects: [
        {
          picture: ttt,
          name: "Tic-tac-toe game",
          desc: "This project was part of my React.js studies, where I explored foundational concepts such as components and state management. Through building this project.",
          linkLive: "https://irynailliukhina.github.io/tic-tac-toe/",
          linkSourse: "https://github.com/irynailliukhina/tic-tac-toe"
        },
        {
          picture: coaches,
          name: "Coaches portal",
          desc: "This project was part of my Vue.js studies, where I explored routing, VUEX, authentication concepts.",
          linkLive: "https://coaches-8a223.web.app/",
          linkSourse: "https://github.com/irynailliukhina/coaches"
        },
        {
          picture: excel,
          name: "Excel JavaScript Copy",
          desc: "This project is a pure JavaScript implementation that mimics the core functionalities of Microsoft Excel, allowing users to create, edit, and manage spreadsheet-like data.",
          linkSourse: "https://github.com/irynailliukhina/excel/"
        },
        {
          picture: icalc,
          name: "Investment calculator",
          desc: "I developed an investment calculator to solidify my understanding of React fundamentals and create a practical tool for personal use. This project allowed me to apply core React concepts, such as component structure, state management, and props, resulting in a functional, user-friendly application for calculating investment growth over time.",
          linkLive: "https://irynailliukhina.github.io/investment-calculator/",
          linkSourse: "https://github.com/irynailliukhina/investment-calculator"
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
