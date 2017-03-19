

var markers=[];


  var Hotels=[
  {
  name: 'The-Oberoi',
    location:{
      lat: 18.9270,
      lng: 72.8205
    },
    id: '4bb245d92397b71337ca36b3',
    show: true,
    selected: false

},
{
  name: 'Botticino-Trident Hotel',
  location:{
    lat: 19.0663,
    lng: 72.8675
  },
  id: '4cc6f35882388cfa4a207f35',
  show: true,
    selected: false
},
{
  name: 'Vivanta Taj',
  location:{
    lat: 17.4432,
    lng: 78.4605
},
  id: '4b0587c9f964a520c5a122e3',
  show: true,
  selected: false
},
{
  name: 'Novotel',
location:{
   lat: 19.1087,
   lng: 72.8244
},
  id: '4b0587caf964a520f2a122e3',
  show: true,
  selected: false
},
{
  name: 'Grand Hyatt ',
location: {
  lat: 19.0774 ,
  lng: 72.8514
},
  id: '4b0587caf964a520dfa122e3',
  show: true,
  selected: false
}];

var viewmodel= function(){
  var largInfowindow=new google.maps.InfoWindow();
          var bounds=new google.maps.LatLngBounds();

          for (var i=0;i<Hotels.length;i++){
            //get the position from the location array
            var position=Hotels[i].location;
            var title=Hotels[i].name;
            //create a marker per location, and put into markers array.
            var marker=new google.maps.Marker({
              map:map,
              position:position,
              title: Hotels[i].name,
              animation: google.maps.Animation.Drop,
              id: Hotels[i].id,
              selected: Hotels[i].selected,
              show: ko.observable(true)
            });

                markers.push(marker);
              bounds.extend(marker.position);

              marker.addListener('click',function(){
                populateInfoWindow(this,largInfowindow);
              });

              //bounce marker when click on it
      var makeBounce =null;
      var clickListener = function() {
      if(makeBounce!=null)
       makeBounce.setAnimation(null);
      if(makeBounce != this) {
      this.setAnimation(google.maps.Animation.BOUNCE);
      setTimeout(function(){makeBounce.setAnimation(null);},500)
      makeBounce = this;
      }
     else
      makeBounce = null;
      }
   google.maps.event.addListener(marker, 'click', clickListener);
      marker.addListener('click', function() {
          populateInfoWindow(this, largInfowindow); //on clicking marker calling function populateInfoWindow()
      });
map.fitBounds(bounds);
            }

            // get rating for each marker
  markers.forEach(function(rate) {
      //passing rat for marker
      $.ajax({ //ajax request for foursquare api
          method: 'GET',
          dataType: "json",
          url: "https://api.foursquare.com/v2/venues/" + rate.id + "?client_id=DTAQ05IKCXEIVRR4OVVNXT0BXRMUNJ1J2EJYLODJQW05XTKS&client_secret=GFIECF04AR0SUXB2FIHK0UAQI0RCEEMAB5O5VXVONA2Z4LYL&v=20170318",
          success: function(data) { //if data is successfully fetch than function will execute
              var venue = data.response.venue;

              if ((venue.hasOwnProperty('rating'))) {
                  rate.rating = venue.rating;

              } else {
                  rate.rating = '';
                            }
          },
          error: function(er) { //if any error occur in fetching data
              alert('There is some error in fetching data');
          }

      });
  });



      function populateInfoWindow(marker,infowindow){
        if(infowindow.marker!=marker){
          infowindow.marker=marker;
          infowindow.setContent('<div>' + '<h3>' + marker.title + '</h3>' + "<h4>Ratings:" + marker.rating  + '</div>');
          if(marker.rating!=null )
            {
            infowindow.open(map, marker);
            }


          infowindow.addListener('closeclick',function(){
            infowindow.marker=null;
          });
        }
      };
        this.markerselect = function(marker) {
    populateInfoWindow(marker,largInfowindow);
      marker.selected = true;
      marker.setAnimation(google.maps.Animation.BOUNCE);
      setTimeout(function(){marker.setAnimation(null);},500)
    };

    //function for search bar
        this.inputText = ko.observable('');
        this.filtersearch = function() {
            largInfowindow.close();//close all the info window that are previously opened window
            var inputSearch = this.inputText();
            if (inputSearch.length === 0) {
                this.viewAll(true);
            } else {
                for (i = 0; i < markers.length; i++) {
                    if (markers[i].title.toLowerCase().indexOf(inputSearch.toLowerCase()) >= 0) {
                        markers[i].show(true);
                        markers[i].setVisible(true);
                    } else {
                        markers[i].show(false);
                        markers[i].setVisible(false);
                    }
                }
            }
          largInfowindow.close();
        };
        this.viewAll = function(vari) {
            for (i = 0; i < markers.length; i++) {
                markers[i].show(vari);
                markers[i].setVisible(vari);
            }
        };


};
