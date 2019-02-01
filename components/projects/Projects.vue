<template>
  <div>
    <div class="projects" v-for="days in $store.state" :key="days">
      <button @click="days.active = !days.active" :class="{ active: days.active }">
        <sub>{{ days.date }}</sub>
        <h1>{{ days.title }}</h1>
      </button>
      <transition name="appear" mode="out-in">
        <div class="projectContent" v-if="days.active">
          <strong>What I did :</strong>
          <p>{{ days.whatIDid }}</p>
          <strong>Thoughts :</strong>
          <p>{{ days.thoughts }}</p>
        </div>
      </transition>
    </div>
  </div>
</template>

