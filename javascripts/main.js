$(document).ready(function(){
        var nm;
       $.ajax({
        type: "GET" ,
        url: "rss.xml" ,
        dataType: "xml" ,
        success: function(xml) {
            alert(xml);
        }
    });
});
