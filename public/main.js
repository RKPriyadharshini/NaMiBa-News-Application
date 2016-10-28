 
var datatoshow=[];
var values;
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
            console.log(datatoshow[0]);
            $("#middlepane").html("");
            for(i=0;i<datatoshow.length;i++)
            $("#middlepane").append("<div class= 'fake'>"+"<a href= "+datatoshow[i].link+" >"+"<p><b>"+datatoshow[i].title+"</b></p>"+"</a>"+"<p>"+datatoshow[i].contentSnippet+"</p>"+"<p>"+datatoshow[i].publishedDate+"</p>"+"</div>"+"<hr>" );
        }
    });
    });
