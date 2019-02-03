<template>
  <div>
    <button @click="sortOrder = !sortOrder">Sort</button>
    <div v-if="!sortOrder">
      <div class="projects" v-for="(day, index) in sortDays_Old" :key="index">
        <button @click="day.active = !day.active" :class="{ active: day.active }">
          <sub>{{ day.date }}</sub>
          <h1>{{ day.title }}</h1>
        </button>
        <transition name="appear" mode="out-in">
          <div class="projectContent" v-if="day.active">
            <strong>What I did :</strong>
            <p>{{ day.whatIDid }}</p>
            <strong>Thoughts :</strong>
            <p>{{ day.thoughts }}</p>
          </div>
        </transition>
      </div>
    </div>
    <div v-if="sortOrder">
      <div class="projects" v-for="(day, index) in sortDays_New" :key="index">
        <button @click="day.active = !day.active" :class="{ active: day.active }">
          <sub>{{ day.date }}</sub>
          <h1>{{ day.title }}</h1>
        </button>
        <transition name="appear" mode="out-in">
          <div class="projectContent" v-if="day.active">
            <strong>What I did :</strong>
            <p>{{ day.whatIDid }}</p>
            <strong>Thoughts :</strong>
            <p>{{ day.thoughts }}</p>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sortOrder: false
    };
  },
  computed: {
    sortDays_Old() {
      let days = this.$store.state;
      let sortedDays = {};
      let keys = [];

      for (let key in days) {
        keys.push(key);
      }

      for (let i = 0; i < keys.length; i++) {
        let value = days[keys[i]];
        sortedDays[keys[i]] = value;
      }

      return sortedDays;
    },
    sortDays_New() {
      let days = this.$store.state;
      let sortedDays = {};
      let keys = [];

      for (let key in days) {
        keys.push(key);
      }

      // New
      for (let i = keys.length - 1; i >= 0; i--) {
        let value = days[keys[i]];
        sortedDays[keys[i]] = value;
      }

      return sortedDays;
    }
  }
};
</script>

