var correctAnswer;
var allFiles;
var running = true;


function getNewData(fileToLookAt){
        $(':button').prop('disabled', false);
        $(':button').css("border","3px solid black");   
        if(Math.floor(Math.random() * 101) > 50) {
            $('#top').hide();
            $('#bottom').show();
            correctAnswer = "bottom";
        }
        else{
            $('#bottom').hide();
            $('#top').show();
            correctAnswer = "top";
        }  
        
        let getFile = fileToLookAt["image"]
        let imgPrompt = fileToLookAt['prompt']
        
        let difficulty = Math.floor(1+ Math.random() * 64)
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
            $(':button').prop('disabled', true);
            if (this.id == 'genOpt1') {
                if(correctAnswer = "top"){
                    $(this).css("border","10px solid red");      
                }
                else{
                    $(this).css("border","10px solid red");    
                }
            }
            else if (this.id == 'genOpt2') {
                if(correctAnswer = "bottom"){
                    $(this).css("border","10px solid red");      
                }
                else{
                    $(this).css("border","10px solid red");    
                }
            }

            else if (this.id == 'realOpt1') {
                if(correctAnswer = "top"){
                    $(this).css("border","10px solid green");      
                }
                else{
                    $(this).css("border","10px solid red");    
                }
            }
            else if (this.id == 'realOpt2') {
                if(correctAnswer = "bottom"){
                    $(this).css("border","10px solid green");      
                }
                else{
                    $(this).css("border","10px solid red");    
                }
            }
            else if(this.id == "continue"){
                // location.reload();
                getRandFile(allFiles)


            }

            $('#continue').prop('disabled', false);

            

        });

        
}

function getRandFile(files){
    console.log(Object.keys(files).length)
    
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

    allFiles=jsonData
    getRandFile(allFiles)
});


}

fetch('./assets/js/img-info.json')
    .then(data => data.json())
    .then(jsonFiles => initialize(jsonFiles));









