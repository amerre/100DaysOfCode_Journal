<template>
  <div>
    <div class="projects" v-for="day in $store.state" :key="day">
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