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
