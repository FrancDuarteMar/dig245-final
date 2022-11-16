// async function getPreData() {

//     var tempVar;
    
//     var requestOptions = {
//         method: 'GET',
//         redirect: 'follow'
//       };
      
//     //   await fetch("https://datasets-server.huggingface.co/first-rows?dataset=laion%2Flaion2B-en&config=laion--laion2B-en&split=train")
//         await fetch("https://datasets-server.huggingface.co/first-rows?dataset=ChristophSchuhmann%2Fimproved_aesthetics_6.5plus&config=ChristophSchuhmann--improved_aesthetics_6.5plus&split=train")
//         .then(response => {
//             return response.json();
//             })
//         .then(data => {
//             tempVar = data;
//         })
//         .catch(error => console.log('error', error));
//         return tempVar;
// }


var correctAnswer;

// async function getAbstFile(){
//     return `<img src= "${"./assets/img/abst/"+Math.floor(Math.random() * 22)+".jpg"}"width="300" height="300">`
    
// }


// function findValidImg(dataset){
//     var keys = Object.keys(dataset);
//     var randomProperty = dataset[keys[ keys.length * Math.random() << 0]]
//     // console.log("random")
//     // console.log(randomProperty['row']['URL'])
//     // if(randomProperty["row"])
    
//     // };
//     // console.log(randomProperty)
//     return randomProperty['row']['URL']

    
// }



// async function loadNewSet(){
//     $(".preMadeImg").ready(async function (){

//         // let respon = await getPreData();
//         // console.log("DONE")
//         // console.log(Object.keys(respon))
//         // console.log(respon['rows'])
//         // $(".test").attr("src",findValidImg(respon['rows']))
//         $(".test").attr("src",'./assets/img/laion/'+Math.floor(1+ Math.random() * 82)+'.jpg')



//         // $(".test").attr("src",'./assets/img/abst/'+Math.floor(1+ Math.random() * 22)+'.jpg')
//         // console.log(location)

        
//         // console.log(findValidImg(respon['rows']))
//         }
//     )

// }

// $(document).on('click', 'input[type="checkbox"]', function() {      
//     $('input[type="checkbox"]').not(this).prop('checked', false);      
// });

$(document).ready(function () {
    let getFile = Math.floor(1+ Math.random() * 82)

    let difficulty = Math.floor(1+ Math.random() * 101)
        console.log("Difficulty: "+difficulty)
        if(difficulty <= 16){
            $(".humImg").attr("src",'./assets/img/laion/'+getFile +'.jpg')
            $(".genImg").attr("src",'./assets/img/stable-5/'+getFile +'.jpg')
            $("#diffLevel").html("Current difficulty: 1")
        }
        else if(16 < difficulty && difficulty<= 32){
            $(".humImg").attr("src",'./assets/img/laion/'+getFile +'.jpg')
            $(".genImg").attr("src",'./assets/img/stable-25/'+getFile +'.jpg')
            $("#diffLevel").html("Current difficulty: 2")
        }
                    
        else if(32 < difficulty && difficulty <= 48){
            $(".humImg").attr("src",'./assets/img/laion/'+getFile +'.jpg')
            $(".genImg").attr("src",'./assets/img/stable-50/'+getFile +'.jpg')
            $("#diffLevel").html("Current difficulty: 3")

                }    
        else if(48 < difficulty && difficulty <= 64){
     
            $(".humImg").attr("src",'./assets/img/laion/'+getFile +'.jpg')
            $(".genImg").attr("src",'./assets/img/stable-100/'+getFile +'.jpg')
            $("#diffLevel").html("Current difficulty: 4")

        }
        else if(64 < difficulty && difficulty <= 80){
            $(".humImg").attr("src",'./assets/img/laion/'+getFile +'.jpg')
            $(".genImg").attr("src",'./assets/img/stable-500/'+getFile +'.jpg')
            $("#diffLevel").html("Current difficulty: 5")

            }
        else{
     
            $(".humImg").attr("src",'./assets/img/laion/'+getFile +'.jpg')
            $(".genImg").attr("src",'./assets/img/stable-1000/'+getFile +'.jpg')
            $("#diffLevel").html("Current difficulty: 6")

            }
        
            
    if(Math.floor(Math.random() * 101) > 50) {
        $('#top').hide();
        correctAnswer = "bottom";
    }
    else{
        $('#bottom').hide();
        correctAnswer = "top";
    }  

    // $('#isAgeSelected').click(function() {
    //     $(".test").attr("src",'./assets/img/abst/'+Math.floor(Math.random() * 22)+'.jpg')
    // });
    
    



    // if(document.getElementById(abstImg).checked){
    //     // getAbstFile
        // ${"./assets/img/abst/"+Math.floor(Math.random() * 22)
        // $(".test").attr("src",'./assets/img/abst/'+Math.floor(Math.random() * 22)+'.jpg')
    // }
    // else{
        // let getFile = Math.floor(1+ Math.random() * 82)
        // $(".test").attr("src",'./assets/img/laion/'+getFile +'.jpg')

    // }

    
    // loadNewSet();

    // $('#difficulty').on('change', function () {
    //     let getFile = Math.floor(1+ Math.random() * 82)
    //     switch ($('#difficulty :selected').val()) {
    //         case "1":
    //             $(".humImg").attr("src",'./assets/img/laion/'+getFile +'.jpg')
    //             $(".genImg").attr("src",'./assets/img/stable-5/'+getFile +'.jpg')
    //             break;
    //         case "2": 
    //             $(".humImg").attr("src",'./assets/img/laion/'+getFile +'.jpg')
    //             $(".genImg").attr("src",'./assets/img/stable-25/'+getFile +'.jpg')
    //             break
    //         case "3": 
    //             $(".humImg").attr("src",'./assets/img/laion/'+getFile +'.jpg')
    //             $(".genImg").attr("src",'./assets/img/stable-50/'+getFile +'.jpg')
    //             break
    //         case "4": 
    //             $(".humImg").attr("src",'./assets/img/laion/'+getFile +'.jpg')
    //             $(".genImg").attr("src",'./assets/img/stable-100/'+getFile +'.jpg')
    //             break
    //         case "5": 
    //             $(".humImg").attr("src",'./assets/img/laion/'+getFile +'.jpg')
    //             $(".genImg").attr("src",'./assets/img/stable-500/'+getFile +'.jpg')
    //             break
    //         case "6": 
    //             $(".humImg").attr("src",'./assets/img/laion/'+getFile +'.jpg')
    //             $(".genImg").attr("src",'./assets/img/stable-1000/'+getFile +'.jpg')
    //             break
    //     }

        
    // });

    
    // $('#submit').click(function(){ 
    //     let getFile = Math.floor(1+ Math.random() * 82)

    //     switch ($('#difficulty :selected').val()) {
    //         case "1":
    //             $(".humImg").attr("src",'./assets/img/laion/'+getFile +'.jpg')
    //             $(".genImg").attr("src",'./assets/img/stable-5/'+getFile +'.jpg')
    //             break;
    //         case "2": 
    //             $(".humImg").attr("src",'./assets/img/laion/'+getFile +'.jpg')
    //             $(".genImg").attr("src",'./assets/img/stable-25/'+getFile +'.jpg')
    //             break
    //         case "3": 
    //             $(".humImg").attr("src",'./assets/img/laion/'+getFile +'.jpg')
    //             $(".genImg").attr("src",'./assets/img/stable-50/'+getFile +'.jpg')
    //             break
    //         case "4": 
    //             $(".humImg").attr("src",'./assets/img/laion/'+getFile +'.jpg')
    //             $(".genImg").attr("src",'./assets/img/stable-100/'+getFile +'.jpg')
    //             break
    //         case "5": 
    //             $(".humImg").attr("src",'./assets/img/laion/'+getFile +'.jpg')
    //             $(".genImg").attr("src",'./assets/img/stable-500/'+getFile +'.jpg')
    //             break
    //         case "6": 
    //             $(".humImg").attr("src",'./assets/img/laion/'+getFile +'.jpg')
    //             $(".genImg").attr("src",'./assets/img/stable-100/'+getFile +'.jpg')
    //             break
    //         // default:
    //         //     $(".humImg").attr("src",'./assets/img/laion/'+getFile +'.jpg')
    //         //     $(".genImg").attr("src",'./assets/img/stable-25/'+getFile +'.jpg')
    //         //     break;
    //     }
        

    // });

       

    jQuery(':button').click(function () {
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
            location.reload();


        }

        $('#continue').prop('disabled', false);

        

    });


    
    // $('#genOpt1, #genOpt2', '#realOpt1','#realOpt2').click(function () {
    //     if (this.id == 'submit1') {
    //        alert('Submit 1 clicked');
    //     }
    //     else if (this.id == 'submit2') {
    //        alert('Submit 2 clicked');
    //     }
    //  });

    
});







// 	$("button").click(async function () {
// 		// await response
// 		let user = await getData();

// 		// because we use "await" ^ we know that data was returned successfully
// 		console.log(user);
// 		$(".randomUser").html(`
// 		<img src="${user.picture.large}"><br>
// 		Name: ${user.name.first} ${user.name.last}<br>
// 		Country: ${user.location.country}<br>
// 		Age: ${user.dob.age}<br>
// 		Password: <code>${user.login.password}</code>
// 	`);
// 	});
// 	$("button").trigger("click");
// });
