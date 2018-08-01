
    var loadSlides = function(someList){
    var templateCarousel = document.getElementById('carousel-template').innerHTML;
    Mustache.parse(templateCarousel);
    var carousel = document.querySelector('.main-carousel');
    for (el of someList){
       var generated = Mustache.render(templateCarousel, el);
       carousel.insertAdjacentHTML('beforeend', generated);
    }
};
loadSlides(list);

var map;
var flkty = new Flickity('.main-carousel', {
    pageDots: false,
    hash: true,
 });

var rstBtn = document.getElementById('reset-btn');
rstBtn.addEventListener('click', function (){
   flkty.select(0, false, false);
});
var progressBar = document.querySelector('.progress-bar')
flkty.on( 'scroll', function( progress ) {
    progress = Math.max( 0, Math.min( 1, progress ) );
    progressBar.style.width = progress * 100 + '%';
});

function initMap(){
    // The location of Uluru
    var uluru = {lat: -25.344, lng: 131.036};
    // The map, centered at Uluru
    map = new google.maps.Map(
        document.getElementById('map'), {zoom: 1, center: list[0].coords});
    // The marker, positioned at Uluru
    var marker = new google.maps.Marker({position: list[0].coords, map: map});
    var arrMarkers= [];
    for(var i = 0; i<list.length; i++){
       arrMarkers.push(new google.maps.Marker({position: list[i].coords, map: map}));
    }
    for(var marker in arrMarkers){
        (function (z){
            google.maps.event.addListener(arrMarkers[marker], 'click', function(){
                flkty.select(z);
            });
        })(marker);
    }
}
flkty.on('change', function(index){
    map.panTo(list[index].coords);
    map.setZoom(2);
});