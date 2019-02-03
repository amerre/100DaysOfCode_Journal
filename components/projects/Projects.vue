<template>
  <div class="projects">
    <!-- Sort button -->
    <button @click="sortOrder = !sortOrder" class="sortButton">
      <span v-if="sortOrder">From the newest</span>
      <span v-else>From the oldest</span>
      <img :class="{ newest: sortOrder }" src="../../assets/images/arrow.svg">
    </button>
    <!-- Days list -->
    <div class="projectsList" v-for="(day, index) in sortDays" :key="index">
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
</template>

<script>
export default {
  data() {
    return {
      sortOrder: false
    };
  },
  computed: {
    sortDays() {
      let days = this.$store.state.days;
      let sortedDays = {};
      let keys = [];

      for (let key in days) {
        keys.push(key);
      }
      // Choose to sort by the newest or the oldest
      if (this.sortOrder === false) {
        // Old
        for (let i = 0; i < keys.length; i++) {
          let value = days[keys[i]];
          sortedDays[keys[i]] = value;
        }
      } else if (this.sortOrder === true) {
        // New
        for (let i = keys.length - 1; i >= 0; i--) {
          let value = days[keys[i]];
          sortedDays[keys[i]] = value;
        }
      }
      return sortedDays;
    }
  }
};
</script>

