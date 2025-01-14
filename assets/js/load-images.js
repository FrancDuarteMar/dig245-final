var currPageNum;
var imagesToLoad = 3;
var imageZoomBack = "rgba(0,0,0,0.05)";


function loadMore(jsonData) {
    for (let i = currPageNum; i < currPageNum + imagesToLoad && i <= 82; i++) {

        key = String(i);

        $("<div></div>").addClass("col prompt-row col-xl-8 offset-xl-2").attr("id", "prompt-" + key).appendTo("#images");
        $("#prompt-" + key).html(`<h6 class="prompt-text"> Prompt: ` + jsonData[key]["prompt"] + "</h6>");

        $("<div></div>").addClass("row").addClass("imageLine").attr("id", "image-" + key).appendTo("#images");


        $('<img/>').attr('src', './assets/img/laion/' + jsonData[key]["image"]).addClass("image-elem").attr("data-lightense-background", imageZoomBack).appendTo($("<div></div>").addClass("col-12 col-md-1").appendTo("#image-" + key));

        $('<img/>').attr('src', './assets/img/stable-5/' + jsonData[key]["image"]).addClass("image-elem").attr("data-lightense-background", imageZoomBack).appendTo($("<div></div>").addClass("col-12 col-md-1").appendTo("#image-" + key));

        $('<img/>').attr('src', './assets/img/stable-25/' + jsonData[key]["image"]).addClass("image-elem").attr("data-lightense-background", imageZoomBack).appendTo($("<div></div>").addClass("col-12 col-md-1").appendTo("#image-" + key));

        $('<img/>').attr('src', './assets/img/stable-50/' + jsonData[key]["image"]).addClass("image-elem").attr("data-lightense-background", imageZoomBack).appendTo($("<div></div>").addClass("col-12 col-md-1").appendTo("#image-" + key));

        $('<img/>').attr('src', './assets/img/stable-100/' + jsonData[key]["image"]).addClass("image-elem").attr("data-lightense-background", imageZoomBack).appendTo($("<div></div>").addClass("col-12 col-md-1").appendTo("#image-" + key));

        $('<img/>').attr('src', './assets/img/stable-500/' + jsonData[key]["image"]).addClass("image-elem").attr("data-lightense-background", imageZoomBack).appendTo($("<div></div>").addClass("col-12 col-md-1").appendTo("#image-" + key));

        $('<img/>').attr('src', './assets/img/stable-1000/' + jsonData[key]["image"]).addClass("image-elem").attr("data-lightense-background", imageZoomBack).appendTo($("<div></div>").addClass("col-12 col-md-1").appendTo("#image-" + key));

        $('<hr>').appendTo("#images");

    }

}

function initialize(jsonData) {
    $(document).ready(function () {
        $(':button').prop('disabled', false);

        if ($(window).width() < 768) {
            imagesToLoad = 2;
        } else if ($(window).width() >= 768 && $(window).width() <= 992) {
            imagesToLoad = 4;
        } else {
            imagesToLoad = 3;
        }


        for (let i = 1; i <= imagesToLoad && i <= 82; i++) {

            key = String(i);
            $("<div></div>").addClass("col prompt-row col-xl-8 offset-xl-2").attr("id", "prompt-" + key).appendTo("#images");
            $("#prompt-" + key).html(`<h6 class="prompt-text"> Prompt: ` + jsonData[key]["prompt"] + "</h6>");

            $("<div></div>").addClass("row").addClass("imageLine").attr("id", "image-" + key).appendTo("#images");


            $('<img/>').attr('src', './assets/img/laion/' + jsonData[key]["image"]).addClass("image-elem").attr("data-lightense-background", imageZoomBack).appendTo($("<div></div>").addClass("col-12 col-md-1").appendTo("#image-" + key));

            $('<img/>').attr('src', './assets/img/stable-5/' + jsonData[key]["image"]).addClass("image-elem").attr("data-lightense-background", imageZoomBack).appendTo($("<div></div>").addClass("col-12 col-md-1").appendTo("#image-" + key));

            $('<img/>').attr('src', './assets/img/stable-25/' + jsonData[key]["image"]).addClass("image-elem").attr("data-lightense-background", imageZoomBack).appendTo($("<div></div>").addClass("col-12 col-md-1").appendTo("#image-" + key));

            $('<img/>').attr('src', './assets/img/stable-50/' + jsonData[key]["image"]).addClass("image-elem").attr("data-lightense-background", imageZoomBack).appendTo($("<div></div>").addClass("col-12 col-md-1").appendTo("#image-" + key));

            $('<img/>').attr('src', './assets/img/stable-100/' + jsonData[key]["image"]).addClass("image-elem").attr("data-lightense-background", imageZoomBack).appendTo($("<div></div>").addClass("col-12 col-md-1").appendTo("#image-" + key));

            $('<img/>').attr('src', './assets/img/stable-500/' + jsonData[key]["image"]).addClass("image-elem").attr("data-lightense-background", imageZoomBack).appendTo($("<div></div>").addClass("col-12 col-md-1").appendTo("#image-" + key));

            $('<img/>').attr('src', './assets/img/stable-1000/' + jsonData[key]["image"]).addClass("image-elem").attr("data-lightense-background", imageZoomBack).appendTo($("<div></div>").addClass("col-12 col-md-1").appendTo("#image-" + key));

            $('<hr>').appendTo("#images");
            Lightense('img:not(.no-lightense),.lightense');


        }
        currPageNum = imagesToLoad + 1;

        $('#load-more-btn').bind("click", function () {
            loadMore(jsonData);
            Lightense('img:not(.no-lightense),.lightense');

            if (currPageNum + imagesToLoad >= 82) {
                $("#load").html("Reached the End");
                $("#load-more-btn").prop('disabled', true);
            }
            currPageNum += imagesToLoad + 1;
        });


    });
}


$(':button').prop('disabled', false);


fetch('./assets/js/img-info.json')
    .then(data => data.json())
    .then(jsonFiles => initialize(jsonFiles));