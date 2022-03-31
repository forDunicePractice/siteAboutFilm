import { createApp } from 'vue'
import * as VueRouter from 'vue-router'
import App from '/src/pages/App.vue'
import About from '/src/pages/About.vue'
import HelloWorld from '/src/pages/HelloWorld.vue'
import MainPage from '/src/pages/mainPage.vue'
import TopOfViews from '/src/pages/topsOfViews.vue'
import FilmPage from '/src/pages/filmPage.vue'
import Genres from '/src/pages/genres.vue'
import CompFilms from '/src/components/compFilms.vue'
import CardFilm from '/src/components/cardFilm.vue'
import CardActor from '/src/components/cardActor.vue'
import { createPinia } from 'pinia'
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';

const routes: VueRouter.RouteRecordRaw[] = [
    { path: '/', component: MainPage },
    { path: '/about', component: About },
    { path: '/helloWorld', component: HelloWorld },
    { path: '/topsOfViews', component: TopOfViews },
    { path: '/filmPage', component: FilmPage, props: route => ({ filmId: route.query.filmId })},
    { path: '/genres', component: Genres},
    { path: '/compFilms', component: CompFilms}
  ]



const router = VueRouter.createRouter({

    history: VueRouter.createWebHashHistory(),
    routes, 
  })




createApp(App)
.use(router)
.use(createPinia())
.mount('#app')