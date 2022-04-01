<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import { ref } from 'vue'
import { watchEffect } from "@vue/runtime-core";
import { useRemoteFilmsStore } from "../store";


  const filmsStore = useRemoteFilmsStore();
  filmsStore.loadAll();

  watchEffect(() => {
    console.log('FILMS', filmsStore.films);
  })
  const FindFilm = true
  const text = ref('')
function Search(e) {
 // text.value = e.target.value
 filmsStore.films.includes(e.target.value) 
 
  
  
}
</script>

<template>
<div class="menu">
<ul class="menu-ul">
  <li class="menu-li"><router-link to="/">главная</router-link></li>
  <li class="menu-li"><router-link to="/genres">жанры фильмов</router-link></li>
  <li class="menu-li"><router-link to="/about">где посмотреть</router-link></li>
 <!-- <li class="menu-li"><router-link to='/helloWorld'>топ по жанрам</router-link></li> -->
 <!-- <li class="menu-li"><router-link to='/topsOfViews'>топ по просмотрам</router-link></li> -->
  <li class="menu-li search"> <input :value="text" @input="Search" placeholder="поиск"></li>
</ul>
<div class="resultSearch">
  <li class="menu-li search result" v-if="Search"> 
    {{text}}
  </li>
</div>
 <router-view></router-view>

</div>

</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
  margin-top: 0px;
}
.result {
  background-color: black;
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
  border: 1px solid rgb(255, 255, 255);
  background-color: #ffffff;
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
  color: rgb(255, 255, 255);
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
  margin: 3% 3%;
  width: 400px;
  height: 260px;
  border: 1px solid black;
  display: inline-block;
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
.upArrow img {
  width: 50px;
  position:fixed;
  bottom:50px;
  right:50px;
}
</style>
