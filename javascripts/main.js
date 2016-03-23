// Developed by Shazin Sadakath

$(document).ready(function(){
        var nm;
       $.ajax({
        type: "GET" ,
        url: "http://shazin.github.io/rss.xml" ,
        dataType: "xml" ,
        success: function(xmlDoc) {
            $xml = $( xmlDoc )
            var mainContent = $("#main-content");
            $xml.find("channel item").each(function(index, element) {
                mainContent.append('<div class="post"><h2>'+$(this).find("title").text()+'</h2>'+$(this).find("description").text()+'</div><p>See the original post at <a href="'+$(this).find("link").text()+'">'+$(this).find("link").text()+'</a></p><hr>');
            });
        }
    });
});
