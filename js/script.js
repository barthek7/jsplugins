
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


var flkty = new Flickity('.main-carousel', {
   pageDots: false,
   hash: true,
    on: {
       change: function (index) {
           console.log("Selected " +  index);
       }
    }
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
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 1, center: list[0].coords});
    // The marker, positioned at Uluru
    var marker = new google.maps.Marker({position: list[0].coords, map: map});

    for(el of list){
        new google.maps.Marker({position: el.coords, map: map});
    }
}
