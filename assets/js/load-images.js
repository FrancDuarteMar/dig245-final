var currPageNum;

function loadMore(jsonData){
    for (let i = currPageNum; i < currPageNum+3 && i <= 82; i++) {
    
        key = String(i)

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
    
}

function initialize(jsonData){   
    $(document).ready(function () {

        
     
        for (let i = 1; i <= 3 && i <= 82; i++) {

            key = String(i)

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
        currPageNum = 4

        $('#load-more-btn').bind("click",function(){
            loadMore(jsonData)
            Lightense('img:not(.no-lightense),.lightense');

            if(currPageNum + 4 >=82){
                $("#load-more-btn").html("Reached the end.")
                $("#load-more-btn").prop('disabled', true);
            } 
            console.log("currently on page load num: "+     currPageNum)
            currPageNum += 4 
        });

    
    });
}

fetch('./assets/js/img-info.json')
    .then(data => data.json())
    .then(jsonFiles => initialize(jsonFiles));
