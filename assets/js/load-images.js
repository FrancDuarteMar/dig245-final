function initialize(jsonData){   
    $(document).ready(function () {

        for(var key in jsonData){
            $("<div></div>").addClass("row").addClass("imageLine").attr("id","image-"+key).appendTo("#images")


            $('<img/>').attr('src','./assets/img/laion/'+jsonData[key]["image"]).addClass("image-elem").appendTo($("<div></div>").addClass("col col-md-1").appendTo("#image-"+key));

            $('<img/>').attr('src','./assets/img/stable-5/'+jsonData[key]["image"]).addClass("image-elem").appendTo($("<div></div>").addClass("col col-md-1").appendTo("#image-"+key));

            $('<img/>').attr('src','./assets/img/stable-25/'+jsonData[key]["image"]).addClass("image-elem").appendTo($("<div></div>").addClass("col col-md-1").appendTo("#image-"+key));

            $('<img/>').attr('src','./assets/img/stable-50/'+jsonData[key]["image"]).addClass("image-elem").appendTo($("<div></div>").addClass("col col-md-1").appendTo("#image-"+key));

            $('<img/>').attr('src','./assets/img/stable-100/'+jsonData[key]["image"]).addClass("image-elem").appendTo($("<div></div>").addClass("col col-md-1").appendTo("#image-"+key));

            $('<img/>').attr('src','./assets/img/stable-500/'+jsonData[key]["image"]).addClass("image-elem").appendTo($("<div></div>").addClass("col col-md-1").appendTo("#image-"+key));
            
            $('<img/>').attr('src','./assets/img/stable-1000/'+jsonData[key]["image"]).addClass("image-elem").appendTo($("<div></div>").addClass("col col-md-1").appendTo("#image-"+key));

            $('<hr>').appendTo("#images")
        }

       


    
    });
}





fetch('./assets/js/img-info.json')
    .then(data => data.json())
    .then(jsonFiles => initialize(jsonFiles));
