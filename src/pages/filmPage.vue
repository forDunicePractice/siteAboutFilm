<script setup lang="ts">
import CompFilms from '/src/components/compFilms.vue'
import CardFilm from '/src/components/cardFilm.vue'
import CardActor from '/src/components/cardActor.vue'
import filmList from '/src/pages/mainPage.vue'
import { useFilmsStore } from '../store';
import { computed } from '@vue/runtime-core';
import { useActorStore } from '../store';
import { useRemoteFilmsStore } from "../store";

const filmsStore = useRemoteFilmsStore();
filmsStore.loadAll();

//const films = useFilmsStore();
//const actors = useActorStore();
const props = defineProps(['filmId']);

const film = computed(() => {
  if (props.filmId != '') {
   //return filmsStore.films.find((filmItem) => filmItem.id === Number(props.filmId));
    return filmsStore.films.find((film) => film.imdbID === (props.filmId));
  }
  return null;
})
//console.log(filmsStore, )

/*
const filmActors = computed(() => {
  if (film.value == null) return [];
  console.log(film.value)
  return film.value.actors.map((actorId) => actors.Actorslist.find((actor) => actorId === actor.id)).filter((item) => item != null);
})

film.Actors.split(', ').map((actorName) => {

    });
*/
</script>
<template>

    <CardFilm  v-if="film != null" :data="film" />  

<!-- <div v-if="film != null" class="actorList">
  <CardActor v-for="actor in filmActors" :key="actor?.nameActor" :data="actor" /> 

  <CardActor />
</div> -->
</template>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
.actorList {
    width: 50%;
    margin: 0 auto;
    height: 200px;
    border:0px solid black;
}
.actorCard{
    height: 100px;
    width: 100px;
    border: 0px solid black;
    margin-left: 5%;
    display: inline-block;
    float: left;
}
.actorCard p {
    margin: 0;
    text-align: center;
}
.actorPhoto {
    height: 70px;
    width: 70px;
    border: 1px solid black;
    border-radius: 50%;
}
* {
  margin: 0;
  padding: 0;
}
body {
  overflow-x: hidden;
  
}
.menu {
  height: 61px;
  width: 100%;
  border: 1px solid black;
  background-color: #b1b0b0;
}
.menu-ul {
  height: 100%;
}
.menu-li {
  text-decoration: none;
  display: inline-block;
  width: 15%;
  height: 50%;
  float: left;
  vertical-align: middle;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 24px;
  line-height: 61px;

}
a {
  text-decoration: none;
  color: black;
  transition: color 0.3s ease-out 20ms;
  
}
a:hover {
  color: white;
}
.search {
  float: right;
}
.search input {
  width: 255px;
  height: 35px;
  background-color: #6F6767;
}
::placeholder {
  color: rgb(255, 255, 255);
  font-size: 24px;
  padding: 10px;
}
.slider {
  width: 75%;
  margin: 0 auto;
  border: 1px solid black;
  height: 450px;
  margin-top: 3%;
  
}
.slider h1 {
  line-height: 450px;;
  vertical-align: middle;
 
}
.slider:hover {
  background-color:rgb(83, 83, 83);
  transition: background-color 0.5s ease-out 20ms;
}
.slider h1:hover {
  color: white;
  transition: color 0.5s ease-out 20ms;
  
}
.card {
  margin: 3%;
  width: 600px;
  height: 360px;
  border: 1px solid black;
  display: inline-block;
  font-size: 25px;
}
.card img {
  float:left;
  border: 1px solid black;
  height: 100%;
  width: 50%;
}
.card h3, p {
  text-align: justify;
  margin-left: 53%;
  margin-right: 3%;
  margin-top: 0%;
}
.filmCards {
  width: 75%;
  margin: 0 auto;
}
.compilationFilms {
  width: 47%;
  margin: 0 auto;
  height: 150px;
  border: 1px solid black;
  line-height: 150px;
}
.compilationFilms:hover {
  background-color:rgb(83, 83, 83);
  transition: background-color 0.5s ease-out 20ms;
}
.compilationFilms h1:hover {
  color: white;
  transition: color 0.5s ease-out 20ms;
  
}

</style>
