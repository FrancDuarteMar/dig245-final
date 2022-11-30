var currPageNum;

var imageZoomBack = "rgba(0,0,0,0.05)"

function ScrollHeight() {
    var vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)
    console.log($(".container"))
    var contObj = $(".container")
    var countedHeight = 0
    for(let i = 0; i<  contObj.length; i++){
        if(i >= 1){
        console.log(contObj[i].clientHeight)
        countedHeight += contObj[i].clientHeight
        }
        countedHeight -= (contObj[1].clientHeight/2)
    }
    // const contH = document.querySelector("body").scrollTop
    const contH = document.documentElement.scrollHeight
    // var contH = document.documentElement.getBoundingClientRect().height
    var actualWidth =$(document).height()
    // const contH = $("html").outerHeight()
    var offSH = $("#header").outerHeight(true)
    
    console.log("Body Height "+contH)
    console.log("View Height "+vh)
    console.log("ACT height: "+ actualWidth)
    var SetHeight = Math.max(countedHeight,contH+offSH)
    
    var content = document.querySelector('#parchment');
    // var container = document.querySelector('#main-content');
    content.style.height = SetHeight + 'px';
    console.log("SET HEIGHT: "+ SetHeight)
  }

function loadMore(jsonData){
    for (let i = currPageNum; i < currPageNum+3 && i <= 82; i++) {
    
        key = String(i)

            $("<div></div>").addClass("row prompt-row").attr("id","prompt-"+key).appendTo("#images")
            $("#prompt-"+key).html(`<h6 class=" prompt"> Prompt: `+jsonData[key]["prompt"]+"</h6>")
            
            $("<div></div>").addClass("row").addClass("imageLine").attr("id","image-"+key).appendTo("#images")


            $('<img/>').attr('src','./assets/img/laion/'+jsonData[key]["image"]).addClass("image-elem").attr("data-lightense-background",imageZoomBack).appendTo($("<div></div>").addClass("col col-md-1").appendTo("#image-"+key));

            $('<img/>').attr('src','./assets/img/stable-5/'+jsonData[key]["image"]).addClass("image-elem").attr("data-lightense-background",imageZoomBack).appendTo($("<div></div>").addClass("col col-md-1").appendTo("#image-"+key));

            $('<img/>').attr('src','./assets/img/stable-25/'+jsonData[key]["image"]).addClass("image-elem").attr("data-lightense-background",imageZoomBack).appendTo($("<div></div>").addClass("col col-md-1").appendTo("#image-"+key));

            $('<img/>').attr('src','./assets/img/stable-50/'+jsonData[key]["image"]).addClass("image-elem").attr("data-lightense-background",imageZoomBack).appendTo($("<div></div>").addClass("col col-md-1").appendTo("#image-"+key));

            $('<img/>').attr('src','./assets/img/stable-100/'+jsonData[key]["image"]).addClass("image-elem").attr("data-lightense-background",imageZoomBack).appendTo($("<div></div>").addClass("col col-md-1").appendTo("#image-"+key));

            $('<img/>').attr('src','./assets/img/stable-500/'+jsonData[key]["image"]).addClass("image-elem").attr("data-lightense-background",imageZoomBack).appendTo($("<div></div>").addClass("col col-md-1").appendTo("#image-"+key));
            
            $('<img/>').attr('src','./assets/img/stable-1000/'+jsonData[key]["image"]).addClass("image-elem").attr("data-lightense-background",imageZoomBack).appendTo($("<div></div>").addClass("col col-md-1").appendTo("#image-"+key));

            $('<hr>').appendTo("#images")
            ScrollHeight()
            
        }    
    
}

function initialize(jsonData){   
    $(document).ready(function () {     
        for (let i = 1; i <= 3 && i <= 82; i++) {

            key = String(i)

            $("<div></div>").addClass("row prompt").attr("id","prompt-"+key).appendTo("#images")
            $("#prompt-"+key).html("<h6> Prompt: "+jsonData[key]["prompt"]+"</h6>")

            $("<div></div>").addClass("row").addClass("imageLine").attr("id","image-"+key).appendTo("#images")


            $('<img/>').attr('src','./assets/img/laion/'+jsonData[key]["image"]).addClass("image-elem").attr("data-lightense-background",imageZoomBack).appendTo($("<div></div>").addClass("col col-md-1").appendTo("#image-"+key));

            $('<img/>').attr('src','./assets/img/stable-5/'+jsonData[key]["image"]).addClass("image-elem").attr("data-lightense-background",imageZoomBack).appendTo($("<div></div>").addClass("col col-md-1").appendTo("#image-"+key));

            $('<img/>').attr('src','./assets/img/stable-25/'+jsonData[key]["image"]).addClass("image-elem").attr("data-lightense-background",imageZoomBack).appendTo($("<div></div>").addClass("col col-md-1").appendTo("#image-"+key));

            $('<img/>').attr('src','./assets/img/stable-50/'+jsonData[key]["image"]).addClass("image-elem").attr("data-lightense-background",imageZoomBack).appendTo($("<div></div>").addClass("col col-md-1").appendTo("#image-"+key));

            $('<img/>').attr('src','./assets/img/stable-100/'+jsonData[key]["image"]).addClass("image-elem").attr("data-lightense-background",imageZoomBack).appendTo($("<div></div>").addClass("col col-md-1").appendTo("#image-"+key));

            $('<img/>').attr('src','./assets/img/stable-500/'+jsonData[key]["image"]).addClass("image-elem").attr("data-lightense-background",imageZoomBack).appendTo($("<div></div>").addClass("col col-md-1").appendTo("#image-"+key));
            
            $('<img/>').attr('src','./assets/img/stable-1000/'+jsonData[key]["image"]).addClass("image-elem").attr("data-lightense-background",imageZoomBack).appendTo($("<div></div>").addClass("col col-md-1").appendTo("#image-"+key));

            $('<hr>').appendTo("#images")
            Lightense('img:not(.no-lightense),.lightense');

            ScrollHeight()

        }
        currPageNum = 4

        $('#load-more-btn').bind("click",function(){
            loadMore(jsonData)
            Lightense('img:not(.no-lightense),.lightense');
            ScrollHeight()
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
    
window.addEventListener('resize', function(event){
    ScrollHeight();
},true);