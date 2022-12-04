var correctAnswer;
var allFiles;
var running = true;


function getNewData(fileToLookAt){
        $(':button').prop('disabled', false);
        $(".navbar-toggler").prop('disabled',false);
        // $(':button').css("border","3px solid black");   
        $(".right-opt").css("border","10px solid rgba(240, 229, 229, 0.874)")
        $(".left-opt").css("border","10px solid rgba(240, 229, 229, 0.874)")
        
        $("#continue").css("opacity","0")
        $("#continue").css("cursor","default")
        $("#continue").prop("disabled",true)

        if(Math.floor(Math.random() * 101) > 50) {
            $("#continue").css("opacity","0")
            $("#continue").css("cursor","default")
            $("#continue").prop("disabled",true)
            
            $('#top').hide();
            $('#bottom').show();
            $('#promptSection').hide();
            correctAnswer = "bottom";
        }
        else{
            $("#continue").css("opacity","0")
            $("#continue").css("cursor","default")
            $("#continue").prop("disabled",true)
            $('#bottom').hide();
            $('#top').show();
            $('#promptSection').hide();
            correctAnswer = "top";
        }  
        
        let getFile = fileToLookAt["image"]
        let imgPrompt = fileToLookAt['prompt']
        $("#prompt").html(`"${imgPrompt}"`)
        
        let difficulty = Math.floor(1+ Math.random() * 101)
            if(difficulty <= 16){
                $(".humImg").attr("src",'./assets/img/laion/'+getFile)
                $(".genImg").attr("src",'./assets/img/stable-5/'+getFile)
                $("#diffLevel").html("Current difficulty: 1")
            }
            else if(16 < difficulty && difficulty<= 32){
                $(".humImg").attr("src",'./assets/img/laion/'+getFile )
                $(".genImg").attr("src",'./assets/img/stable-25/'+getFile)
                $("#diffLevel").html("Current difficulty: 2")
            }
                        
            else if(32 < difficulty && difficulty <= 48){
                $(".humImg").attr("src",'./assets/img/laion/'+getFile)
                $(".genImg").attr("src",'./assets/img/stable-50/'+getFile)
                $("#diffLevel").html("Current difficulty: 3")

                    }    
            else if(48 < difficulty && difficulty <= 64){
        
                $(".humImg").attr("src",'./assets/img/laion/'+getFile)
                $(".genImg").attr("src",'./assets/img/stable-100/'+getFile)
                $("#diffLevel").html("Current difficulty: 4")

            }
            else if(64 < difficulty && difficulty <= 80){
                $(".humImg").attr("src",'./assets/img/laion/'+getFile)
                $(".genImg").attr("src",'./assets/img/stable-500/'+getFile)
                $("#diffLevel").html("Current difficulty: 5")

                }
            else{
        
                $(".humImg").attr("src",'./assets/img/laion/'+getFile)
                $(".genImg").attr("src",'./assets/img/stable-1000/'+getFile)
                $("#diffLevel").html("Current difficulty: 6")

                }
            
                

    
        // jQuery(':button').click(function () {
        jQuery(':button').one('click',function(){
            $('#promptSection').show();

            $(':button').prop('disabled', true);
            $(".navbar-toggler").prop('disabled',false);
            // $(".right-opt").css("border","none")
            // $(".left-opt").css("border","none")

            if (this.id == 'genOpt1') {
                $("#continue").delay(10).animate({"opacity": "1"}, 700);
                $("#continue").css("cursor","pointer")
                $("#continue").prop("disabled",false)


                if(correctAnswer = "top"){
                    $(this).css("border","10px solid red");      
                }
                else{
                    $(this).css("border","10px solid red");    
                }
            }
            else if (this.id == 'genOpt2') {
                $("#continue").delay(10).animate({"opacity": "1"}, 700);
                $("#continue").css("cursor","pointer")
                $("#continue").prop("disabled",false)

                if(correctAnswer = "bottom"){
                    $(this).css("border","10px solid red");      
                }
                else{
                    $(this).css("border","10px solid red");    
                }
            }

            else if (this.id == 'realOpt1') {
                $("#continue").delay(10).animate({"opacity": "1"}, 700);
                $("#continue").css("cursor","pointer")
                $("#continue").prop("disabled",false)

                if(correctAnswer = "top"){
                    $(this).css("border","10px solid green");      
                }
                else{
                    $(this).css("border","10px solid red");    
                }
            }
            else if (this.id == 'realOpt2') {
                $("#continue").delay(10).animate({"opacity": "1"}, 700);
                $("#continue").css("cursor","pointer")
                $("#continue").prop("disabled",false)

                if(correctAnswer = "bottom"){
                    $(this).css("border","10px solid green");      
                }
                else{
                    $(this).css("border","10px solid red");    
                }
            }
            else if(this.id == "continue"){
                $("#continue").css("opacity","0")
                $("#continue").css("cursor","default")
                $("#continue").prop("disabled",true)
                $("#continue").css("opacity","0")

                // location.reload();
                getRandFile(allFiles)


            }
            $(".navbar-toggler").prop('disabled',false);

        });

        
}

function getRandFile(files){
    console.log(Object.keys(files).length)
    
    $("#continue").css("opacity","0")
    $("#continue").css("cursor","default")
    $("#continue").prop("disabled",true)
    

    var randomFile = function (obj) {
        var keys = Object.keys(obj);
        var pos = keys[keys.length * Math.random() << 0]
        var objToReturn = obj[pos]
        delete obj[pos]
        return objToReturn;
    };
    let currentFile = randomFile(files)
    if(Object.keys(files).length < 1){
        running = false
    }
    console.log(currentFile)
    if(running){
        getNewData(currentFile)
    }
    else{
        alert("Thats all the images!")
    }
}

function initialize(jsonData){   
    $(document).ready(function () {
    $("#continue").css("opacity","0")
    $("#continue").css("cursor","default")
    $("#continue").prop("disabled",true)
    allFiles=jsonData
    getRandFile(allFiles)
});


}

fetch('./assets/js/img-info.json')
    .then(data => data.json())
    .then(jsonFiles => initialize(jsonFiles));









