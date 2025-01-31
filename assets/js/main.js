var correctAnswer;
var allFiles;
var running = true;


function getNewData(fileToLookAt) {
    $(':button').prop('disabled', false);
    $(".navbar-toggler").prop('disabled', false);
    $(".right-opt").css("border", "10px solid rgba(240, 229, 229, 0.874)");
    $(".left-opt").css("border", "10px solid rgba(240, 229, 229, 0.874)");

    $("#continue").prop("disabled", false);


    if (Math.floor(Math.random() * 101) > 50) {

        $('#top').hide();
        $('#bottom').show();
        $('#promptSection').hide();
        correctAnswer = "bottom";
    } else {

        $('#bottom').hide();
        $('#top').show();
        $('#promptSection').hide();
        correctAnswer = "top";
    }

    let getFile = fileToLookAt["image"];
    let imgPrompt = fileToLookAt['prompt'];
    $("#prompt").html(`"${imgPrompt}"`);

    let difficulty = Math.floor(1 + Math.random() * 101);
    if (difficulty <= 16) {
        $(".humImg").attr("src", './assets/img/laion/' + getFile);
        $(".genImg").attr("src", './assets/img/stable-5/' + getFile);
        $("#diffLevel").html("Current difficulty: 1");
    } else if (16 < difficulty && difficulty <= 32) {
        $(".humImg").attr("src", './assets/img/laion/' + getFile);
        $(".genImg").attr("src", './assets/img/stable-25/' + getFile);
        $("#diffLevel").html("Current difficulty: 2");
    } else if (32 < difficulty && difficulty <= 48) {
        $(".humImg").attr("src", './assets/img/laion/' + getFile);
        $(".genImg").attr("src", './assets/img/stable-50/' + getFile);
        $("#diffLevel").html("Current difficulty: 3");

    } else if (48 < difficulty && difficulty <= 64) {

        $(".humImg").attr("src", './assets/img/laion/' + getFile);
        $(".genImg").attr("src", './assets/img/stable-100/' + getFile);
        $("#diffLevel").html("Current difficulty: 4");

    } else if (64 < difficulty && difficulty <= 80) {
        $(".humImg").attr("src", './assets/img/laion/' + getFile);
        $(".genImg").attr("src", './assets/img/stable-500/' + getFile);
        $("#diffLevel").html("Current difficulty: 5");

    } else {

        $(".humImg").attr("src", './assets/img/laion/' + getFile);
        $(".genImg").attr("src", './assets/img/stable-1000/' + getFile);
        $("#diffLevel").html("Current difficulty: 6");

    }




    jQuery(':button').one('click', function () {
        $("#continue").prop("disabled", false);
        if (this.id != "navbar-toggler") {
            if (this.id == 'genOpt1') {
                $('#promptSection').show();
                $(':button').prop('disabled', true);
                $(".navbar-toggler").prop('disabled', false);


                $("#continue").prop("disabled", false);


                if (correctAnswer == "top") {
                    $(this).css("border", "10px solid red");
                } else {
                    $(this).css("border", "10px solid red");
                }
            } else if (this.id == 'genOpt2') {
                $('#promptSection').show();
                $(':button').prop('disabled', true);
                $(".navbar-toggler").prop('disabled', false);



                if (correctAnswer == "bottom") {
                    $(this).css("border", "10px solid red");
                } else {
                    $(this).css("border", "10px solid red");
                }
            } else if (this.id == 'realOpt1') {
                $('#promptSection').show();
                $(':button').prop('disabled', true);
                $(".navbar-toggler").prop('disabled', false);


                if (correctAnswer == "top") {
                    $(this).css("border", "10px solid green");
                } else {
                    $(this).css("border", "10px solid red");
                }
            } else if (this.id == 'realOpt2') {
                $('#promptSection').show();
                $(':button').prop('disabled', true);
                $(".navbar-toggler").prop('disabled', false);


                if (correctAnswer == "bottom") {
                    $(this).css("border", "10px solid green");
                } else {
                    $(this).css("border", "10px solid red");
                }
            } else if (this.id == "continue") {
                $('#promptSection').show();
                $(':button').prop('disabled', true);
                $(".navbar-toggler").prop('disabled', false);

                $("#continue").prop("disabled", false);

                $(".navbar-toggler").prop('disabled', false);

                getRandFile(allFiles);


            }
            $(".navbar-toggler").prop('disabled', false);
            $("#continue").prop("disabled", false);
        }

    });


}

function getRandFile(files) {


    var randomFile = function (obj) {
        var keys = Object.keys(obj);
        var pos = keys[keys.length * Math.random() << 0];
        var objToReturn = obj[pos];
        delete obj[pos];
        return objToReturn;
    };
    let currentFile = randomFile(files);
    if (Object.keys(files).length < 1) {
        running = false;
    }
    if (running) {
        getNewData(currentFile);
    } else {
        alert("Thats all the images!");
    }
}

function initialize(jsonData) {
    $(document).ready(function () {

        allFiles = jsonData;
        getRandFile(allFiles);
    });


}

fetch('./assets/js/img-info.json')
    .then(data => data.json())
    .then(jsonFiles => initialize(jsonFiles));