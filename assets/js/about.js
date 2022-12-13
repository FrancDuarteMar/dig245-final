$(document).ready(function () {
    // jQuery(':button').one('click',function(){
    jQuery(':button').click(function () {
        if(this.id == "about-data-btn"){
            if($(this).attr("value") == "ON"){
                $(this).attr("value","OFF")
                $("#about-icon").html("&#9660")
                $("#row-about").hide()
            }
            else{
                $(this).attr("value","ON")
                $("#about-icon").html("&#9650")
                $("#row-about").show()
            }
        }
        else if(this.id == "ai-art-btn"){
            if($(this).attr("value") == "ON"){
                $(this).attr("value","OFF")
                $("#ai-icon").html("&#9660")
                $("#row-ai").hide()
            }
            else{
                $(this).attr("value","ON")
                $("#ai-icon").html("&#9650")
                $("#row-ai").show()
            }
        }
        else if(this.id == "class-btn"){
            if($(this).attr("value") == "ON"){
                $(this).attr("value","OFF")
                $("#class-icon").html("&#9660")
                $("#row-class").hide()
            }
            else{
                $(this).attr("value","ON")
                $("#class-icon").html("&#9650")
                $("#row-class").show()
            }
        }
        
    
    
    });

    
});
