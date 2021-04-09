Vue.config.devtools = true;

var app = new Vue({
  el: '#root',
  data: {
    //Creato oggetto currentFilter impostato su all
    //per poter visualizzare i brani filtrati
    currentFilter: "All",
    disks: [],
    links:[
      {
        title:"Made in Japan",
        src:  "https://www.youtube.com/watch?v=psFdqiPfhmg",
        position: 1
      },
      {
        title:"Bad",
        src:  "https://www.youtube.com/watch?v=Sd4SJVsTulc",
        position: 2
      },
      {
        title:"New Jersey",
        src:  "https://www.youtube.com/watch?v=uvhq2mRORFw",
        position: 3
      },
      {
        title:"And Justice For All",
        src:  "https://www.youtube.com/watch?v=_fKAsvJrFes",
        position: 4
      },
      {
        title:"Queen",
        src:  "https://www.youtube.com/watch?v=-DAvQcP1dlE",
        position: 5
      },
      {
        title:"Ten's Summoner's Tales",
        src:  "https://www.youtube.com/watch?v=dG_CypsIupo&list=PLVSmE10fWX-CYGwwuZkffgVE-Wfuiq4XF",
        position: 6
      },
      {
        title:"Hard Wired",
        src:  "https://www.youtube.com/watch?v=bL6MhXSUhb4",
        position: 7
      },
      {
        title:"Brave new World",
        src:  "https://www.youtube.com/watch?v=X5P_muGUJR4",
        position: 8
      },
      {
        title:"One more car, one more raider",
        src:  "https://www.youtube.com/watch?v=ZoDrcK1TI68&list=PLQL8vLGlM3ml_q9s-Xny-dr5mzDL5VosQ",
        position: 9
      },
      {
        title:"Steve Gadd Band",
        src:  "https://www.youtube.com/watch?v=_fisshGVQuQ&list=PLULG1QJdgkY7WZFUT2SIJ4sVD_XhZKw-N",
        position: 10
      }
    ]
  },
  mounted() {
    axios.get('https://flynn.boolean.careers/exercises/api/array/music')
    .then((response) => {
      this.disks = response.data.response;
      console.log(this.disks);
    })
  },//fine mounted
  methods: {
  //function per ordinare i brani in base all'anno di uscita
  sortedDisks: function(arr) {
    return arr.slice().sort(function(a, b) {
      return a.year - b.year;
    });
  },
}//fine methods
});//fine vue


// prova: function() {
//   var a = ['zero', 'one', 'two', 'three'];
//   var sliced = a.slice();
//   console.log(a);      // ['zero', 'one', 'two', 'three']
//   console.log(sliced); // ['one', 'two']
// }



// Descrizione
// Attraverso una chiamata ajax all’API di boolean
//  https://flynn.boolean.careers/exercises/api/array/music
// avremo a disposizione una decina di dischi musicali.
// Utilizzando vue, stampiamo a schermo una card per ogni album.
// BONUS
// Creare una select con tutti i generi dei dischi.
// In base a cosa scegliamo nella select,
// vedremo i corrispondenti cd.
// BONUS 2
// Ordinare i dischi per anno di uscita.
