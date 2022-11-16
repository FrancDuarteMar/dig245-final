async function getData() {

    var tempVar;
    
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      
      await fetch("https://datasets-server.huggingface.co/first-rows?dataset=laion%2Flaion2B-en&config=laion--laion2B-en&split=train")
        .then(response => {
            return response.json();
            })
        .then(data => {
            tempVar = data;
        })
        .catch(error => console.log('error', error));
        return tempVar;
}


// $(document).ready(function () {
// resp = await getData()

// console.log(resp)

// }



function findValidImg(dataset){
    var keys = Object.keys(dataset);
    var randomProperty = dataset[keys[ keys.length * Math.random() << 0]]
    console.log("random")
    console.log(randomProperty['row']['URL'])
    // if(randomProperty["row"])
    
    // };
    console.log(randomProperty)
    return randomProperty['row']['URL']

    
}

$(document).ready(function () {
    $(".genImg").ready(async function (){
        let respon = await getData();
        console.log("DONE")
        console.log(Object.keys(respon))
        console.log(respon['rows'])
        respon['rows'].forEach(element => {
            // console.log(element['row']["URL"])
            $(".genImg").html(`
            <img src="${findValidImg(respon['rows'])}"><br>`
            )
        });
        
        
        console.log(findValidImg(respon['rows']))

    }
    )
});

    
// $(document).ready(function () {

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
