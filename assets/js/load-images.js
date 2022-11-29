function initialize(jsonData){   
    $(document).ready(function () {
        console.log("There are " + Object.keys(jsonData).length + " Elements")
        var currPageVal = 0
            // $('<ul></ul>').addClass("pagination").attr("id","page-"+currPageVal).appendTo($("#images"))
            // for(var key in jsonData){
        // $('<ul></ul>').addClass("pagination").attr("id","page-"+currPageVal).appendTo($("#images"))

        // for (let i = 1; i < Object.keys(jsonData).length+1; i++) {
        for (let i = 1; i <= 3; i++) {

            
            // if((i-1)%3 === 0){
            // currPageVal ++
            
            // $('<hr>').appendTo("#images")

            // }

            key = String(i)
            $("<li></li>").addClass("page-item").attr("id","li-"+key).appendTo($("#page-"+currPageVal))
            
            $("<div></div>").addClass("row").addClass("imageLine").attr("id","image-"+key).appendTo("#images").appendTo($('#page-'+currPageVal)).appendTo($("#li-"+key))

            $('<img/>').attr('src','./assets/img/laion/'+jsonData[key]["image"]).addClass("image-elem").appendTo($("<div></div>").addClass("col col-md-1").appendTo("#image-"+key));

            $('<img/>').attr('src','./assets/img/stable-5/'+jsonData[key]["image"]).addClass("image-elem").appendTo($("<div></div>").addClass("col col-md-1").appendTo("#image-"+key));

            $('<img/>').attr('src','./assets/img/stable-25/'+jsonData[key]["image"]).addClass("image-elem").appendTo($("<div></div>").addClass("col col-md-1").appendTo("#image-"+key));

            $('<img/>').attr('src','./assets/img/stable-50/'+jsonData[key]["image"]).addClass("image-elem").appendTo($("<div></div>").addClass("col col-md-1").appendTo("#image-"+key));

            $('<img/>').attr('src','./assets/img/stable-100/'+jsonData[key]["image"]).addClass("image-elem").appendTo($("<div></div>").addClass("col col-md-1").appendTo("#image-"+key));

            $('<img/>').attr('src','./assets/img/stable-500/'+jsonData[key]["image"]).addClass("image-elem").appendTo($("<div></div>").addClass("col col-md-1").appendTo("#image-"+key));
            
            $('<img/>').attr('src','./assets/img/stable-1000/'+jsonData[key]["image"]).addClass("image-elem").appendTo($("<div></div>").addClass("col col-md-1").appendTo("#image-"+key));
              
        }

        
          
        window.addEventListener('load', function () {
            Lightense('img:not(.no-lightense),.lightense');
          }, false);
       


    
    });
}

fetch('./assets/js/img-info.json')
    .then(data => data.json())
    .then(jsonFiles => initialize(jsonFiles));
