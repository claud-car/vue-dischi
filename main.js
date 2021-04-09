Vue.config.devtools = true;

var app = new Vue({
  el: '#root',
  data: {
    //Creato oggetto currentFilter impostato su all
    //per poter visualizzare le canzoni filtrate
    currentFilter: "All",
    disks: []
  },
  mounted() {
    axios.get('https://flynn.boolean.careers/exercises/api/array/music')
    .then((response) => {
      this.disks = response.data.response;
    })
  }
});



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
