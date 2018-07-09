
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
   hash: true
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
