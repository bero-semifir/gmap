//recuperation de l'element dom pour la carte
let carte = document.querySelector('#map');
//creation d'un point
const ici = { lat: 50.63, lng: 2.06 };

/**
* fonction pour initialiser la carte googlemap
* attention !! la fonction initMap est appelé dans le HTML
* Il ne faut donc pas se tromper dans le nom
*/
function initMap() {
  map = new google.maps.Map(carte, {
    center: ici,
    zoom: 15,
  });

  // Afficher le marqueur marker
  const marker = new google.maps.Marker({
    position: ici,
    map: map,
  }); 
};