<script setup lang="ts">

const props = defineProps(['data']);



</script>
<template>
  <div class="card" >
    <img :src="props.data.Poster" alt="film photo">
    <h3><router-link :to="{ path: '/filmPage', query: { filmId: props.data.imdbID }}"> {{props.data.Title}}</router-link></h3>
    <p>режиссер: {{ props.data?.Director}}</p>
    <p>год выпуска: {{props.data?.Year}}</p>
    <p>продолжительность: {{props.data?.Runtime}}</p>
  </div>
</template>
