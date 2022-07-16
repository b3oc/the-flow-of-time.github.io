$().ready(init);


function init() {
//$('.blocSecondes').append(' <div class="seconde1"></div>');
    for (var i =0; i<60; i++) {
        $('.blocSecondes').append(' <div class="seconde"></div>');
    }
    //$('.scroll').height($('.blocSecondes').height() );
    flowOfTime();
    myTimer = setInterval(flowOfTime, 1000);
    $('.droite').scroll(scrollScroll);
}
function scrollScroll() {
    
    tt = $('.droite').scrollTop()/($('.blocSecondes').outerHeight(true)-$('.scroll').height());
    tt = Math.min(tt,1)
    ttt = tt*$('.scroll').height();
    ttt = Math.max(0,ttt-25);
    //console.log($('.droite').scrollTop(), $('.droite').height(), $('.blocSecondes').height(),$('.blocSecondes').outerHeight(true), $('.scroll').height(), tt, ttt );
  
    if (tt>=1) {
       // $('.blocSecondes').append(' <div class="seconde1"></div>');
        for (var i =0; i<60; i++) {
            $('.blocSecondes').append(' <div class="seconde"></div>');
        }
        tt = $('.droite').scrollTop()/($('.blocSecondes').outerHeight(true)-$('.scroll').height());
        tt = Math.min(tt,1)
        ttt = tt*$('.scroll').height();
        ttt = Math.max(0,ttt-25);
        flowOfTime();
    }

    $('.thumb').css('top', ttt);
  //  console.log(Math.floor($('.droite').scrollTop()/1200 ));

}
function flowOfTime() {
    //console.log('fot');
    offTime = Math.floor($('.droite').scrollTop()/1200 );
    var date =  new Date(Date.now());
    date.setTime(date.getTime() + offTime*60000);

    h = date.getHours();
    n = date.getMonth();
    d = date.getDate();
    m = date.getMinutes();
    s = date.getSeconds();
    y = date.getFullYear();
    a = Math.floor(y/100.0)+1;
    b = y % 100;

   // console.log(h,n,d,m,s,y,a,b);
    $('.lien').css('top', (25*d)+'px');
    $('.lien').css('background-color', 'hsl('+30*n+',100%, '+(100-d)+'%)');
    $('.heure').css('background-color' , "hsl("+15*h+", 100%, 50%");
    $('.gauche').css('background-color' , "hsl("+30*n+", 100%, 50%");
    $('.droite').css('background' , 'linear-gradient(to left, hsl('+a+',100%,50%), hsla('+a+',100%,50%,'+b+'%)');
    $('.seconde').each(function(index) {
        $(this).css('background-color' , "hsl("+6*(s+index)+", 100%, 50%");
    });
    
    $('.scroll').css('background-color', "hsl("+6*m+", 100%, 75%");
    $('.thumb').css('background-color', "hsl("+6*m+", 100%, 50%");
   
}


