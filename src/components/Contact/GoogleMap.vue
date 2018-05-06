<template lang="html">
    <div  class="card-form-1" id="map"></div>
</template>

<script>
export default {
  name: 'google-map',
  methods: {
    initMap() {
        const uluru = {lat: 41.8818, lng: -87.62317};
        const map = new google.maps.Map(document.getElementById('map'), {
          zoom: 10,
          center: uluru,
          styles: [
             {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
             {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
             {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
             {
               featureType: 'administrative.locality',
               elementType: 'labels.text.fill',
               stylers: [{color: '#d59563'}]
             },
             {
               featureType: 'poi',
               elementType: 'labels.text.fill',
               stylers: [{color: '#d59563'}]
             },
             {
               featureType: 'poi.park',
               elementType: 'geometry',
               stylers: [{color: '#263c3f'}]
             },
             {
               featureType: 'poi.park',
               elementType: 'labels.text.fill',
               stylers: [{color: '#6b9a76'}]
             },
             {
               featureType: 'road',
               elementType: 'geometry',
               stylers: [{color: '#38414e'}]
             },
             {
               featureType: 'road',
               elementType: 'geometry.stroke',
               stylers: [{color: '#212a37'}]
             },
             {
               featureType: 'road',
               elementType: 'labels.text.fill',
               stylers: [{color: '#9ca5b3'}]
             },
             {
               featureType: 'road.highway',
               elementType: 'geometry',
               stylers: [{color: '#746855'}]
             },
             {
               featureType: 'road.highway',
               elementType: 'geometry.stroke',
               stylers: [{color: '#1f2835'}]
             },
             {
               featureType: 'road.highway',
               elementType: 'labels.text.fill',
               stylers: [{color: '#f3d19c'}]
             },
             {
               featureType: 'transit',
               elementType: 'geometry',
               stylers: [{color: '#2f3948'}]
             },
             {
               featureType: 'transit.station',
               elementType: 'labels.text.fill',
               stylers: [{color: '#d59563'}]
             },
             {
               featureType: 'water',
               elementType: 'geometry',
               stylers: [{color: '#17263c'}]
             },
             {
               featureType: 'water',
               elementType: 'labels.text.fill',
               stylers: [{color: '#515c6d'}]
             },
             {
               featureType: 'water',
               elementType: 'labels.text.stroke',
               stylers: [{color: '#17263c'}]
             }
           ]
        });
        let marker = new google.maps.Marker({
          position: uluru,
          map: map

        });
      }
  },
  mounted(){
    this.initMap()
  }
}

</script>

<style lang="css" scoped>
.card-form-1 {
  width: 35vw;
  height:450px;
  border-radius:10px;
  margin:2em 2vw;
  padding:0 0 2em 0;
  box-shadow:0px 3px 45px 9px rgba(0,0,0,.15)
}

#map {
  height: 450px;
  margin:2em 2em;
      }


      @media(max-width:768px){
       .card-form-1 {
         width: 84vw;
       }
      }

      @media(max-width:414px){
       .card-form-1 {
         width: 80vw;
       }
      }

</style>
