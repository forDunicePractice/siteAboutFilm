<script setup lang="ts">
import CompFilms from '/src/components/compFilms.vue'
import GenresFilms from '/src/components/genreFilms.vue'
import { useGenresStore } from '../store';


const genres = useGenresStore();

//console.log(GenresFilms)
</script>
<template>
<div class="filmList"> 
    <h1>список жанров</h1>
    <GenresFilms v-for="genre in genres.GenresList" :key="genre.name" :data="genre" />


    <CompFilms />
</div>



</template>

<style>
* {
    margin: 0;
    padding: 0;
}
body {
    background-color: rgb(201, 201, 201);
}
.filmList {
    width: 50%;
    margin: 3% auto;
    border: 0px solid black;
    height: 700px;
    padding: 50px;;
    background-color: white ;
}
.elem {
    height: 76px;
    width: 100%;
    display: block;
    overflow-y:hidden;
    margin-bottom: 4%;
    margin-top: 4%;
}
.elem img {
    width: 75px;
    height: 75px;
    border: 1px solid black;
    display: inline-block;
    float: left;
}
.elem p {
    display: inline-block;
    font-size: 24px;
    float: left;
    margin-left: 2%;
    line-height: 75px;
}
.compilationFilms {
    width: 60%;
}
</style>