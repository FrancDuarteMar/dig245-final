async function getPreData() {

    var tempVar;
    
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      
    //   await fetch("https://datasets-server.huggingface.co/first-rows?dataset=laion%2Flaion2B-en&config=laion--laion2B-en&split=train")
        await fetch("https://datasets-server.huggingface.co/first-rows?dataset=ChristophSchuhmann%2Fimproved_aesthetics_6.5plus&config=ChristophSchuhmann--improved_aesthetics_6.5plus&split=train")
        .then(response => {
            return response.json();
            })
        .then(data => {
            tempVar = data;
        })
        .catch(error => console.log('error', error));
        return tempVar;
}


var correctAnswer;

async function getFile(){
    return `<img src= "${"./assets/img/abst/"+Math.floor(Math.random() * 22)+".jpg"}"width="300" height="300">`
    
}


function findValidImg(dataset){
    var keys = Object.keys(dataset);
    var randomProperty = dataset[keys[ keys.length * Math.random() << 0]]
    // console.log("random")
    // console.log(randomProperty['row']['URL'])
    // if(randomProperty["row"])
    
    // };
    // console.log(randomProperty)
    return randomProperty['row']['URL']

    
}



async function loadNewSet(){
    $(".preMadeImg").ready(async function (){

        let respon = await getPreData();
        console.log("DONE")
        console.log(Object.keys(respon))
        console.log(respon['rows'])
        $(".test").attr("src",findValidImg(respon['rows']))

        // $(".test").attr("src",'./assets/img/abst/'+Math.floor(1+ Math.random() * 22)+'.jpg')
        console.log(location)

        
        console.log(findValidImg(respon['rows']))


        

        }
    )

}

$(document).ready(function () {
    if(Math.floor(Math.random() * 101) > 50) {
        $('#top').hide();
        correctAnswer = "bottom";
    }
    else{
        $('#bottom').hide();
        correctAnswer = "top";
    }  
    loadNewSet();
        // location = "./assets/img/abst/"+Math.floor(Math.random() * 22)+".jpg"

       

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
