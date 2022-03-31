<template>
    <p>
        нигде
    </p>
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
