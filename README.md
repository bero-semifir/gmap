# Exercice Google Map

Exercice qui consiste à déployer une carte Google Map basique.

## création d'une page html et css.
1. Creation d'une page html basique.
2. Ajouter une div avec l'id "map".

```html
    <div id="map"></div>
```

3. Ajouter un script css avec le fichier correspondant pour styler la carte.

```css
    #map {
        display: inline-block;
        width: 500px;
        height: 300px;
    }
```

## Récupération de l'api Google Map


1. Aller à l'adresse suivant https://developers.google.com/maps/documentation/javascript/adding-a-google-map?hl=fr#maps_add_map-html.
2. Cliquer sur le lien "Google cloud consol.
3. Connecter vous avec un compte Google.
4. Créer un nouveau projet.
5. Créer et récupérer une key api correspondant au besoin : identifiant
6. Activer l'api correspondant au besoin : ici Maps JavaScript API
7. Ajouter à la fin du body de votre html le script qui suit en remplaçant YOUR_API_KEY par votre clé.

```HTML
    <script async defer src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap" type="text/javascript"></script>
```
[Clé](env.md)

## initialiser votre carte Google Map
1. Créer un fichier JavaScript.
2. Ajouter la fonction pour initailiser votre carte dans votre fichier js.

```JavaScript
   function initMap() {
        // recuperer votre localisation
        const ici = { lat: 50.63, lng: 3.06 };
        // centrer la map sur cette localisation
        const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 10,
        center: ici,
        });
   }
```

## Ajouter un marqueur sur la carte
1. creer un marqueur en précisant ces coordonnées et sur quelle map on l'affiche.
attention à l'ajouter dans la fonction qui initialise la carte.

```js
      // Afficher le marqueur marker
    const marker = new google.maps.Marker({
        position: ici,
        map: map,
    }); 
```