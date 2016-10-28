 
var datatoshow=[];
var values;
var poke='#datapane1';
$(document).ready(function () {

    var menu = $('#mainnav');
    var origOffsetY = menu.offset().top;

    function scroll() {
        if ($(window).scrollTop() >= origOffsetY) {
            $('#mainnav').addClass('navbar-fixed-top');
            
        } else {
            $('#mainnav').removeClass('navbar-fixed-top');
            
        }


    }

    document.onscroll = scroll;

});
 $(function(){
        url = 'http://feeds.bbci.co.uk/news/world/rss.xml';
        $.ajax({
        type: "GET",
        url: document.location.protocol + '//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=1000&callback=?&q=' + encodeURIComponent(url),
        dataType: 'json',
        error: function(){
            alert('Unable to load feed, Incorrect path or invalid feed');
        },
        success: function(xml){
            values = xml.responseData.feed.entries;
            datatoshow=values;
            $("#datapane").html("");
}
})
    });
setTimeout(function(){ 
    a=datatoshow.length;
    b=a/3;c=(a-(2*b));
     for(i=0;i<a;i++){

        if(i<=b)
             poke='#datapane1';
        else if(i<=2*b)
             poke='#datapane2';
        else
             poke='#datapane3';
    
        mehandis(datatoshow[i].link,datatoshow[i].title,datatoshow[i].content,poke);
    }

}, 1000);
function mehandi(umm,pippe){
$.get(umm, function(data) {
    var imgs = $('<div/>').html(data).find('img');
    console.log(imgs.length);
    $("#datapane").append('<div class="data"><p>'+pippe+'</p><img  src='+imgs[1].src+' height="250" width="250"></div>' );

});
}
function mehandis(umm,pippe,halamadrid,dpax){
    console.log(dpax);
$.ajax({
    url: umm,
    type: 'GET',
    success: function(data){ 
        var imgs = $('<div/>').html(data).find('img');
            $(dpax).append('<div class="data"> <div ><a href='+umm+' style="color:black;"> <h4 style="margin-left:4px;margin-top:4px; font-family: "Open Sans", Tahoma, sans-serif;">'+pippe+'</h4></a></div> <div > <img src= '+imgs[1].src+'  width=100% ></div> <div style="margin-left:7px;margin-top:5px" ><p>'+halamadrid+'</p></div></div>');
            console.log();

    },
    error: function(data) {
                    $("#datapane").append('<div class="data"><p>'+pippe+'</p><img  src= "userpic.png"'+' height="250" width="250"></div>' );
 //or whatever
    }
});
}
