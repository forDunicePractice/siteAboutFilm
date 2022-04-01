<script setup lang="ts">
import CompFilms from '/src/components/compFilms.vue'
import CardFilm from '/src/components/cardFilm.vue'
import { ref } from '@vue/reactivity'
import { useFilmsStore, useSlideStore } from '../store';
import { watchEffect } from "@vue/runtime-core";
import { useRemoteFilmsStore } from "../store";
import { Carousel, Pagination, Slide } from 'vue3-carousel';
import { defineComponent } from 'vue'
import 'vue3-carousel/dist/carousel.css';
  const films = useFilmsStore();
  const slideStore = useSlideStore();
  const filmsStore = useRemoteFilmsStore();
  const slideS = ['/src/assets/gen1.png' , '/src/assets/gen2.png' , '/src/assets/gen3.png',]
  filmsStore.loadAll();
  watchEffect(() => {
    //console.log('FILMS', filmsStore.films);
  })
</script>
<template>
<div class="slider">
 <Carousel :autoplay="2000" :wrap-around="true">
    <Slide v-for="slide in 3" :key="slide">
      <div class="carousel__item">{{  }}<img :src="(`/src/assets/slide${slide}.jpeg`)" class="slidePhoto" alt="film photo">  </div>
    </Slide> 
  
    <template #addons>
      <Pagination />
    </template>
  </Carousel>
</div>

<div class="filmCards">
  <!-- <CardFilm v-for="film in films.list" :key="film.name" :data="film" />  -->
  <CardFilm v-for="film in filmsStore.films" :key="film.name" :data="film" />  
</div>
 <CompFilms  />

<a href="#" class="upArrow"><img src="https://cdn-icons-png.flaticon.com/512/25/25223.png" alt="up"></a>
</template>

<style>
.slidePhoto {
  width: 55%;
    height: 100%;
   
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
* {
  margin: 0;
  padding: 0;
}
body {
  overflow-x: hidden;
}
a {
  color: white;
}
.menu {
  height: 61px;
  width: 100%;
  border: 1px solid rgb(255, 255, 255);
  background-color: #000000;
}
.menu-ul {
  height: 100%;
  background-color: #ffffff;
  color: white;
}
.menu-li {
  text-decoration: none;
  display: inline-block;
  color: white;
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
  color: rgb(255, 0, 0);
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
  width: 50%;
  margin: 0 auto;
  border: 0px solid black;
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
  overflow-y: hidden ;
}
.card img {
  float: left;
  border: 1px solid black;
  height: 100%;
  width: 50%;
}
.card h3 {
  text-align: left;
  margin-left: 53%;
  margin-right: 3%;
  margin-top: 0%;
}
.card p {
  font-size: 17px;;
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
