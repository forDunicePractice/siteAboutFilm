import { defineStore } from 'pinia'
import CompFilms from '/src/components/compFilms.vue'



export const useFilmsStore = defineStore('films', {
  state: () => {
    return { 
      list: [
        {
          id: 1,
          name: 'film1',
          year: '2000',
          description: 'text1',
          url: '/src/assets/film11.jpeg',
          actors: [1, 3],
        },
        {
          id: 2,
          name: 'film2',
          year: '2001',
          description: 'text2',
          url: '/src/assets/film22.jpeg',
          actors: [ 3]
        },
        {
          id: 3,
          name: 'film3',
          year: '2002',
          description: 'text3',
          url: '/src/assets/film3.jpeg',
          actors: [],
        },
        {
          id: 4,
          name: 'film4',
          year: '2003',
          description: 'text4',
          url: '/src/assets/film4.jpeg',
          actors: [1, 2, 3],
        },
      ],
    };
  },
});
export const useSlideStore = defineStore('slides', {
  state: () => {
    return { 
      list: [
          '/src/assets/gen2.png',
          '/src/assets/gen3.png',
       
      ],
    };
  },
});
export const useActorStore = defineStore('actors', {
  state: () => {
    return { 
      Actorslist: [
        {
          id: 1,
          nameActor: 'Славик',
          urlA: '#',
        },
        {
          id: 2,
          nameActor: 'Игорь',
          urlA: '#',
        },
        {
          id: 3,
          nameActor: 'Василий',
          urlA: '#',
        },
        {
          id: 4,
          nameActor: 'Александр',
          urlA: '#',
        },
        {
          id: 5,
          nameActor: 'Владимир',
          urlA: '#',
        },
      ],
    };
  },
});

export const useGenresStore = defineStore('genres', {
  state: () => {
    return { 
      GenresList: [
        {
          id: 1,
          name: 'комеедии',
          url: '/src/assets/gen1.png',
        },
        {
          id: 2,
          name: 'ужасы',
          url: '/src/assets/gen2.png',
        },
        {
          id: 3,
          name: 'триллеры',
          url: '/src/assets/gen3.png',
        },
        {
          id: 4,
          name: 'драммы',
          url: '/src/assets/gen4.png',
        },
      ],
    };
  },
});

const apiKey = '71382e8f';

export const useRemoteFilmsStore = defineStore('remoteFilms', {
  state: (): { ids: string[], films: any[] } => {
    return { 
      ids: [
        'tt1630029',
        'tt1464335',
        'tt3554046', 
        'tt7657566',
      ],
      films: [],
    };
  },
  actions: {
    async loadAll() {
      const films = await Promise.all(this.ids.map(async (id) => {
        const responce = await fetch(`http://www.omdbapi.com/?i=${id}&plot=full&apikey=${apiKey}`);
        return await responce.json();
      }));
      this.films = films;
    }
  }
});